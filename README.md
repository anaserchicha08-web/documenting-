# Daily Concept Documenter & GitHub Auto-Uploader

An automated Node.js system designed to study, structure, and document **20 core networking and computer science concepts**—processing **1 concept per day**, creating a detailed Markdown resume, and uploading it directly to your GitHub repository: [https://github.com/anaserchicha08-web/documenting-](https://github.com/anaserchicha08-web/documenting-).

---

## 🎯 Included Concepts (20 Days)

1. **Computer basics**
2. **Networking fundamentals**
3. **OSI model**
4. **Ethernet**
5. **IPv4 and IPv6**
6. **Subnetting**
7. **ARP and ICMP**
8. **TCP, UDP, and ports**
9. **DNS and DHCP**
10. **NAT (Network Address Translation)**
11. **Switching (VLANs, STP, EtherChannel)**
12. **Routing (static, then OSPF, then BGP)**
13. **Wireless networking**
14. **VPNs (Virtual Private Networks)**
15. **Firewalls and network security**
16. **Monitoring and troubleshooting (Wireshark, SNMP, Syslog)**
17. **High availability and load balancing**
18. **Cloud networking**
19. **Network automation (Python, Ansible, APIs)**
20. **Advanced enterprise and data center networking**

---

## 🚀 Quick Start (Local Run)

### 1. Install Dependencies
```bash
npm install
```

### 2. Test Run (Dry Run Mode)
Test concept generation without writing files or git commit:
```bash
npm run dry-run
```

### 3. Generate Day 1 Resume
Run the main script to process the next concept in the sequence:
```bash
npm start
```
This generates the Markdown file in `./docs/<slug>.md`, updates `progress.json`, and attempts to `git commit` & `git push`.

### 4. Optional: Enable Google Gemini AI
Copy `.env.example` to `.env` and add your Gemini API key:
```env
GEMINI_API_KEY=your_key_here
```

---

## 🐙 Connecting to GitHub Repository

If this directory isn't connected to your repository yet, run:

```bash
git init
git remote add origin https://github.com/anaserchicha08-web/documenting-.git
git branch -M main
git add .
git commit -m "initial commit: daily concept documenter setup"
git push -u origin main
```

---

## ⏰ Automated Daily Execution via GitHub Actions

A pre-configured GitHub Actions workflow is included at `.github/workflows/daily-doc.yml`. 

Once you push this project to `https://github.com/anaserchicha08-web/documenting-`:
1. GitHub will **automatically execute `node index.js` every day at midnight (00:00 UTC)**.
2. It generates the day's concept resume and pushes it back to your `main` branch automatically—even when your PC is turned off!
3. (Optional) You can add `GEMINI_API_KEY` under **Repository Settings -> Secrets and variables -> Actions** on GitHub for AI-powered note generation.
