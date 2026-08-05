import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import dotenv from "dotenv";
import { CONCEPTS } from "./concepts.js";

dotenv.config();

const PROGRESS_FILE = path.resolve("./progress.json");
const DOCS_DIR = path.resolve("./docs");

function getProgress() {
  if (!fs.existsSync(PROGRESS_FILE)) {
    const initial = {
      currentIndex: 0,
      lastUpdated: null,
      completedConcepts: []
    };
    fs.writeFileSync(PROGRESS_FILE, JSON.stringify(initial, null, 2));
    return initial;
  }
  try {
    return JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf-8"));
  } catch (err) {
    console.error("Error reading progress.json, resetting state:", err.message);
    return { currentIndex: 0, lastUpdated: null, completedConcepts: [] };
  }
}

function saveProgress(progress) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

async function generateWithGemini(concept) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;

  try {
    console.log(`📡 Requesting detailed AI notes from Gemini for "${concept.title}"...`);
    const promptText = `
You are a Principal Network Architect and Senior Systems Engineer.
Write an exhaustive, high-quality, production-grade educational reference document (resume) on the topic: "${concept.title}".
Category: ${concept.category}
Key Topics to Cover in Depth:
${concept.keyTopics.map(t => `- ${t}`).join("\n")}

Requirements for the document:
1. Title header with clear subtitle and Metadata block (Date, Category, Skill Level: Intermediate to Advanced).
2. Executive Summary / Core Definition.
3. In-Depth Technical Breakdown for each Key Topic with exact standards (IEEE, IETF RFCs), packet structures, and headers where applicable.
4. Visual Architecture Diagrams (using Markdown tables or ASCII/Mermaid flowcharts).
5. Practical Real-World Configuration / Diagnostic Commands (Cisco IOS, Linux iproute2, Wireshark filters, Python snippets).
6. Common Pitfalls, Security Risks, and Industry Best Practices.
7. Key Takeaways & Revision Summary.

Formatting: Return pure clean GitHub Flavored Markdown without system preamble.
`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: promptText }] }]
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.warn(`⚠️ Gemini API returned status ${response.status}: ${errText}. Falling back to template compiler.`);
      return null;
    }

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (generatedText) {
      return generatedText;
    }
  } catch (err) {
    console.warn(`⚠️ Could not generate content via Gemini API: ${err.message}. Using built-in generator.`);
  }
  return null;
}

function generateBuiltInMarkdown(concept) {
  const dateStr = new Date().toISOString().split("T")[0];
  
  return `# Technical Reference & Deep Dive: ${concept.title}

> **Document Metadata**
> - **Category**: ${concept.category}
> - **Concept Slug**: \`${concept.slug}\`
> - **Generated Date**: ${dateStr}
> - **Target Repository**: [anaserchicha08-web/documenting-](https://github.com/anaserchicha08-web/documenting-)

---

## Executive Summary

The concept of **${concept.title}** forms a foundational pillar in enterprise network engineering, system design, and IT infrastructure management. Understanding this topic is critical for designing scalable, resilient, and secure network architectures.

---

## Key Technical Modules

${concept.keyTopics.map((topic, idx) => `
### Module ${idx + 1}: ${topic}

#### 1. Core Principles & Architecture
- **Theoretical Basis**: Detailed examination of ${topic.toLowerCase()}.
- **Standards & Specifications**: Adheres to RFC standards and IEEE specification frameworks.
- **Operational Mechanism**: Processes data through structured control plane and data plane workflows.

#### 2. Key Technical Specifications
| Parameter / Component | Functional Description | Implementation Impact |
| :--- | :--- | :--- |
| **Data Plane Overhead** | Processing requirements and header encapsulation | Low latency optimization |
| **Protocol State** | Stateful or stateless behavior tracking | High Availability requirement |
| **Security Layer** | Encryption, authorization, and message verification | Perimeter & Zero Trust defense |

#### 3. Diagnostic & Inspection Commands
\`\`\`bash
# Diagnostic command for inspecting ${topic.split(" ")[0]}
$ ip -s link show
$ tcpdump -nn -i any -c 50
$ sysctl -a | grep -i net
\`\`\`
`).join("\n")}

---

## Architectural Visualization

\`\`\`
+-----------------------------------------------------------------------+
|                       APPLICATION / SERVICE LAYER                     |
+-----------------------------------------------------------------------+
                                   |
                                   v
+-----------------------------------------------------------------------+
|                    ${concept.title.toUpperCase()} IMPLEMENTATION                     |
|                                                                       |
|  +--------------------------+        +-----------------------------+  |
|  |     Control Plane        |<------>|         Data Plane          |  |
|  |  (Routing/Config State)  |        |    (Packet Forwarding)      |  |
|  +--------------------------+        +-----------------------------+  |
+-----------------------------------------------------------------------+
                                   |
                                   v
+-----------------------------------------------------------------------+
|                       PHYSICAL / CLOUD INFRASTRUCTURE                 |
+-----------------------------------------------------------------------+
\`\`\`

---

## Best Practices & Security Guidelines

> [!IMPORTANT]
> **Production Engineering Best Practices**:
> 1. **Redundancy & Failover**: Ensure secondary backup paths or stateful synchronization for high availability.
> 2. **Monitoring & Telemetry**: Implement proactive logging and SNMP/Syslog monitoring to capture anomalies.
> 3. **Hardening**: Disable unneeded legacy features, enforce encryption (TLS 1.3 / IPsec), and restrict management planes.

---

## Summary & Next Steps

This document completes the technical resume for **${concept.title}**. 

- **Previous Concept**: ${concept.id > 1 ? CONCEPTS[concept.id - 2].title : "Beginning of Series"}
- **Next Concept**: ${concept.id < CONCEPTS.length ? CONCEPTS[concept.id].title : "Series Completed"}
`;
}

async function run() {
  const args = process.argv.slice(2);
  const isDryRun = args.includes("--dry-run");
  const isReset = args.includes("--reset");

  if (isReset) {
    saveProgress({ currentIndex: 0, lastUpdated: null, completedConcepts: [] });
    console.log("🔄 Reset progress to Concept #1.");
    return;
  }

  const progress = getProgress();

  if (progress.currentIndex >= CONCEPTS.length) {
    console.log("🎉 All 20 concepts have been processed and documented!");
    console.log("To restart the cycle, run: npm run reset");
    return;
  }

  const concept = CONCEPTS[progress.currentIndex];
  console.log(`\n🚀 Processing Day ${concept.id} of ${CONCEPTS.length}: [${concept.title}]`);

  // Ensure docs directory exists
  if (!fs.existsSync(DOCS_DIR)) {
    fs.mkdirSync(DOCS_DIR, { recursive: true });
  }

  // Generate Markdown Content
  let markdownContent = await generateWithGemini(concept);
  if (!markdownContent) {
    markdownContent = generateBuiltInMarkdown(concept);
  }

  const filePath = path.join(DOCS_DIR, `${concept.slug}.md`);

  if (isDryRun) {
    console.log(`[DRY RUN] Would write content to: ${filePath}`);
    console.log(`[DRY RUN] Content Preview (First 300 chars):\n${markdownContent.substring(0, 300)}...`);
    return;
  }

  // Write File
  fs.writeFileSync(filePath, markdownContent, "utf-8");
  console.log(`✅ Saved concept resume: ${filePath}`);

  // Update Progress
  progress.completedConcepts.push({
    id: concept.id,
    title: concept.title,
    slug: concept.slug,
    date: new Date().toISOString()
  });
  progress.currentIndex += 1;
  progress.lastUpdated = new Date().toISOString();
  saveProgress(progress);

  // Commit & Push to Git if repository is initialized
  try {
    const isGitRepo = fs.existsSync(".git");
    if (isGitRepo) {
      console.log("📦 Committing and pushing to GitHub repository...");
      execSync("git add .", { stdio: "inherit" });
      execSync(`git commit -m "docs: add technical resume for ${concept.title}"`, { stdio: "inherit" });
      execSync("git push origin main || git push", { stdio: "inherit" });
      console.log(`🌐 Successfully pushed ${concept.slug}.md to GitHub!`);
    } else {
      console.log("ℹ️ Local directory is not yet a git repository. Skipping git push.");
      console.log("Run 'git init' and 'git remote add origin https://github.com/anaserchicha08-web/documenting-' to connect GitHub.");
    }
  } catch (err) {
    console.warn(`⚠️ Git operations encountered an issue: ${err.message}`);
    console.warn("The file was generated locally in ./docs. Please check git remote/branch setup.");
  }
}

run();
