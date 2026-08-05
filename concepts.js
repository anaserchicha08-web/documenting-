export const CONCEPTS = [
  {
    id: 1,
    slug: "01-computer-basics",
    title: "Computer Basics",
    category: "Hardware & Operating System Fundamentals",
    keyTopics: [
      "Von Neumann Architecture & System Components (CPU, RAM, Storage, Bus)",
      "Central Processing Unit (ALU, Control Unit, Registers, Clock Cycle)",
      "Memory Hierarchy (L1/L2/L3 Cache, RAM, Virtual Memory, NVMe/SSD/HDD)",
      "Operating System Core Responsibilities (Kernel, Process Control Block, Memory Management, File System)",
      "Data Representation (Binary, Hexadecimal, ASCII, UTF-8, Endianness)",
      "Input/Output (I/O) Architecture (Interrupts, DMA, Memory-Mapped I/O)"
    ],
    prompt: "Provide a comprehensive, production-grade technical breakdown of Computer Basics covering CPU execution cycles, memory hierarchies, OS kernel processes, and hardware I/O management with clear markdown formatting, architecture diagrams (ASCII/Mermaid), and practical troubleshooting commands."
  },
  {
    id: 2,
    slug: "02-networking-fundamentals",
    title: "Networking Fundamentals",
    category: "Core Networking Concepts",
    keyTopics: [
      "Network Topologies (Star, Mesh, Bus, Hybrid) & Real-World Implementations",
      "Network Types (PAN, LAN, MAN, WAN, WLAN, SAN)",
      "Transmission Media (Twisted Pair Cat6/6a/7, Fiber Optic Single/Multi-mode, Wireless RF)",
      "Bandwidth vs Latency vs Throughput vs Jitter",
      "Data Link Framing & Bit Synchronization",
      "Duplexing Modes (Half-Duplex vs Full-Duplex, CSMA/CD & CSMA/CA)"
    ],
    prompt: "Write a detailed resume of Networking Fundamentals, explaining physical topologies, media characteristics, metrics (latency, throughput, jitter), framing, and CSMA protocols with diagrams and CLI verification examples."
  },
  {
    id: 3,
    slug: "03-osi-model",
    title: "OSI Model",
    category: "Network Protocol Models",
    keyTopics: [
      "7-Layer OSI Reference Architecture (Physical to Application)",
      "Encapsulation & Decapsulation Process (PDU Types: Bit, Frame, Packet, Segment, Data)",
      "Layer 1-3 Infrastructure vs Layer 4-7 Software Interfaces",
      "Comparison: OSI Model vs TCP/IP Protocol Stack (4/5 Layer Models)",
      "Layer-by-Layer Protocol Mapping (IEEE 802.3, IP, TCP/UDP, HTTP/TLS)",
      "Real-World Packet Flow & Header Inspection (Wireshark Perspective)"
    ],
    prompt: "Write a deep dive technical summary on the OSI Model detailing all 7 layers, PDUs, headers, encapsulation flow, mapping to TCP/IP, and real-world packet flow analysis."
  },
  {
    id: 4,
    slug: "04-ethernet",
    title: "Ethernet",
    category: "Data Link Layer Technology",
    keyTopics: [
      "IEEE 802.3 Ethernet Frame Structure (Preamble, SFD, Destination/Source MAC, EtherType, Payload, FCS/CRC)",
      "Media Access Control (MAC) Addressing & OUI Organization",
      "Auto-Negotiation (Speed, Duplex, Flow Control IEEE 802.3x)",
      "MDI vs MDI-X & Auto-MDIX Operation",
      "High-Speed Ethernet Standards (10GBASE-T, 40G, 100G, 400G Transceivers)",
      "Ethernet Error Detection (FCS calculation, Frame Alignment Errors, Runt & Giant Frames)"
    ],
    prompt: "Write an in-depth document on Ethernet technologies covering frame headers, MAC layer operation, auto-negotiation, high-speed optics, and physical layer frame verification."
  },
  {
    id: 5,
    slug: "05-ipv4-and-ipv6",
    title: "IPv4 and IPv6",
    category: "Network Layer Protocols",
    keyTopics: [
      "IPv4 Header Format (IHL, ToS/DSCP, TTL, Identification, Flags, Fragment Offset, Header Checksum)",
      "IPv6 Header Format (Fixed 40-byte header, Traffic Class, Flow Label, Extension Headers)",
      "Addressing Models: Unicast, Broadcast (IPv4), Multicast, Anycast",
      "IPv6 Address Architecture (Global Unicast, Link-Local, Unique Local, Solicited-Node Multicast)",
      "IPv6 SLAAC (Stateless Address Autoconfiguration) & DHCPv6",
      "IPv4 to IPv6 Transition Mechanisms (Dual Stack, 6to4, NAT64/DNS64)"
    ],
    prompt: "Create an exhaustive guide on IPv4 and IPv6 protocols including side-by-side header analysis, addressing classes, IPv6 SLAAC, and dual-stack migration strategies."
  },
  {
    id: 6,
    slug: "06-subnetting",
    title: "Subnetting",
    category: "IP Address Management & Routing Optimization",
    keyTopics: [
      "Classless Inter-Domain Routing (CIDR) vs Classful Addressing (Class A, B, C, D, E)",
      "Subnet Masking & Bitwise AND Operations",
      "Variable Length Subnet Masking (VLSM) Design & Calculation Methodology",
      "Summarization & Route Aggregation",
      "IPv6 Subnetting Architecture (/64 Prefix Standard, Subnetting /48 Allocations)",
      "Practical Subnet Calculations for Enterprise Networks"
    ],
    prompt: "Write a comprehensive tutorial and reference document on IPv4 and IPv6 Subnetting, VLSM design, route summarization, bitwise calculations, and practical IP allocation tables."
  },
  {
    id: 7,
    slug: "07-arp-and-icmp",
    title: "ARP and ICMP",
    category: "Network Layer Auxiliary Protocols",
    keyTopics: [
      "Address Resolution Protocol (ARP) Request/Reply Mechanics & Table Caching",
      "Gratuitous ARP (GARP) & Proxy ARP",
      "ARP Poisoning / Spoofing Attacks & DAI (Dynamic ARP Inspection)",
      "ICMPv4 (Type 8 Echo Request, Type 0 Echo Reply, Type 3 Destination Unreachable, Type 11 Time Exceeded)",
      "ICMPv6 & Neighbor Discovery Protocol (NDP: Router Solicitation/Advertisement, Neighbor Solicitation/Advertisement)",
      "Diagnostic Tools: Ping, Traceroute / MTR Mechanics (TTL Expired Analysis)"
    ],
    prompt: "Create a detailed technical manual on ARP and ICMP covering message structures, NDP in IPv6, security risks like ARP spoofing, and diagnostic tool mechanics."
  },
  {
    id: 8,
    slug: "08-tcp-udp-and-ports",
    title: "TCP, UDP, and Ports",
    category: "Transport Layer Protocols",
    keyTopics: [
      "Transmission Control Protocol (TCP) Header & State Machine (LISTEN, SYN_SENT, ESTABLISHED, FIN_WAIT)",
      "TCP 3-Way Handshake & 4-Way Teardown Mechanics",
      "TCP Flow Control (Sliding Window, Receive Window, Zero Window Probing)",
      "TCP Congestion Control (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery - Tahoe, Reno, BBR)",
      "User Datagram Protocol (UDP) Header & Stateless Characteristics",
      "Port Allocation (Well-Known 0-1023, Registered 1024-49151, Ephemeral 49152-65535)"
    ],
    prompt: "Write an in-depth reference on TCP, UDP, and Transport Layer Ports detailing packet structures, connection state transitions, windowing, congestion algorithms, and security inspection."
  },
  {
    id: 9,
    slug: "09-dns-and-dhcp",
    title: "DNS and DHCP",
    category: "Core Network Infrastructure Services",
    keyTopics: [
      "Domain Name System (DNS) Hierarchy (Root Servers, TLDs, Authoritative Nameservers)",
      "DNS Record Types (A, AAAA, CNAME, MX, TXT, NS, PTR, SRV, SOA)",
      "DNS Resolution Types (Iterative vs Recursive), Caching, & DNSSEC",
      "Dynamic Host Configuration Protocol (DHCP) DORA Process (Discover, Offer, Request, Acknowledge)",
      "DHCP Options (Option 3 Gateway, Option 6 DNS, Option 43/60 Vendor Specific, Option 82 Relay Agent)",
      "DHCP Snooping & Rogue DHCP Server Mitigation"
    ],
    prompt: "Write a comprehensive technical guide on DNS and DHCP detailing protocol workflows, packet exchanges, DNSSEC security, DHCP Relay / Option 82, and enterprise deployment scenarios."
  },
  {
    id: 10,
    slug: "10-nat",
    title: "NAT (Network Address Translation)",
    category: "Address Abstraction & IPv4 Conservation",
    keyTopics: [
      "Static NAT (1:1 Mapping) & Dynamic NAT (Pool Allocation)",
      "Port Address Translation (PAT / NAT Overload) Connection Tracking",
      "Destination NAT & Port Forwarding",
      "Carrier-Grade NAT (CGNAT / NAT444) Architectures",
      "NAT Traversal Challenges (STUN, TURN, ICE, SIP/H.323 ALG)",
      "Stateful NAT Translation Tables & Firewall Integration"
    ],
    prompt: "Develop an exhaustive guide on NAT and PAT covering translation table states, static vs overload modes, CGNAT, ALG considerations, and router configuration examples."
  },
  {
    id: 11,
    slug: "11-switching-vlans-stp-etherchannel",
    title: "Switching (VLANs, STP, EtherChannel)",
    category: "Layer 2 Enterprise Infrastructure",
    keyTopics: [
      "Virtual LANs (VLANs) & IEEE 802.1Q Frame Tagging (VLAN ID, Priority Bits)",
      "Trunking Protocols (802.1Q vs ISL) & Native VLAN Security Considerations",
      "Spanning Tree Protocol (STP IEEE 802.1D, RSTP 802.1w, MSTP 802.1s)",
      "STP Root Bridge Election, Port Roles (Root, Designated, Alternate, Backup) & States",
      "STP Security Features (BPDU Guard, BPDU Filter, Root Guard, Loop Guard)",
      "EtherChannel / Link Aggregation (LACP IEEE 802.3ad / 802.1AX vs PAgP, Load Balancing Hashing Algorithms)"
    ],
    prompt: "Write a complete technical manual on Layer 2 Switching covering 802.1Q tagging, Spanning Tree Protocol variants and safeguards, and EtherChannel link aggregation setups."
  },
  {
    id: 12,
    slug: "12-routing-static-ospf-bgp",
    title: "Routing (Static, OSPF, BGP)",
    category: "Layer 3 Routing Architecture",
    keyTopics: [
      "Routing Table Lookup (Longest Prefix Match, Administrative Distance, Metric)",
      "Static Routing, Default Routes & Floating Static Routes",
      "Open Shortest Path First (OSPF v2/v3): Link-State Algorithm (Dijkstra), Areas (Backbone 0, Stub, NSSA), LSA Types 1-7, Neighbor States",
      "Border Gateway Protocol (BGP v4): Path Vector Protocol, Autonomous Systems (eBGP vs iBGP), Path Attributes (Weight, Local Preference, AS-Path, MED)",
      "BGP Route Reflection & Confederation Architecture",
      "Route Redistribution & Filter Mechanics (Prefix-lists, Route-maps)"
    ],
    prompt: "Create an advanced enterprise routing document covering static routing, OSPF link-state neighbor adjacencies/LSAs, and BGP path selection attributes with CLI configuration examples."
  },
  {
    id: 13,
    slug: "13-wireless-networking",
    title: "Wireless Networking",
    category: "IEEE 802.11 Wi-Fi Standards & RF Design",
    keyTopics: [
      "IEEE 802.11 Standards Evolution (802.11a/b/g/n/ac/ax Wi-Fi 6/6E/7)",
      "Radio Frequency (RF) Spectrum (2.4 GHz, 5 GHz, 6 GHz Band Channels & Channel Bonding)",
      "Wireless Architectures (Autonomous APs, Controller-based / CAPWAP, Cloud Managed)",
      "Wireless Security Protocols (WEP, WPA, WPA2, WPA3 Enterprise / Personal, SAE, 802.1X EAP)",
      "Roaming Mechanics (802.11r Fast Transition, 802.11k Neighbor Reports, 802.11v BSS Transition)",
      "RF Concepts: RSSI, SNR, SINR, Fresnel Zone, Free Space Path Loss"
    ],
    prompt: "Write a detailed document on Wireless Networking covering RF physics, 802.11 Wi-Fi evolution, WPA3 security, CAPWAP controller topologies, and client roaming optimization."
  },
  {
    id: 14,
    slug: "14-vpns",
    title: "Virtual Private Networks (VPNs)",
    category: "Secure WAN & Remote Connectivity",
    keyTopics: [
      "IPsec Architecture: Encapsulating Security Payload (ESP) vs Authentication Header (AH)",
      "IPsec Modes: Tunnel Mode vs Transport Mode",
      "IKE Key Exchange (IKEv1 vs IKEv2): Phase 1 (ISAKMP SA) & Phase 2 (IPsec SA)",
      "SSL/TLS VPNs (OpenVPN, WireGuard, AnyConnect) vs IPsec VPNs",
      "GRE (Generic Routing Encapsulation) & DMVPN (Dynamic Multipoint VPN - NHRP, mGRE)",
      "Site-to-Site vs Remote Access VPN Topology Design"
    ],
    prompt: "Write an in-depth reference on Virtual Private Networks detailing IPsec tunnel/transport modes, IKEv2 negotiations, WireGuard cryptography, DMVPN enterprise overlay, and SSL VPNs."
  },
  {
    id: 15,
    slug: "15-firewalls-and-network-security",
    title: "Firewalls and Network Security",
    category: "Perimeter Security & Defense-in-Depth",
    keyTopics: [
      "Firewall Architecture Evolution: Packet Filtering -> Stateful Inspection -> Next-Generation Firewalls (NGFW)",
      "NGFW Features: Deep Packet Inspection (DPI), Application Control, TLS Inspection, IPS/IDS Integration",
      "Security Zones & Access Control Lists (ACLs - Standard, Extended, Named)",
      "Intrusion Detection/Prevention Systems (IDS/IPS - Signature vs Anomaly Based)",
      "Zero Trust Network Access (ZTNA) & Microsegmentation Principles",
      "Network Attack Vectors & Mitigation (SYN Floods, Amplification DDoS, Man-in-the-Middle)"
    ],
    prompt: "Write an enterprise security document covering Stateful vs Next-Gen Firewalls, Deep Packet Inspection, IPS engines, ACL construction, ZTNA, and DDoS defense mechanisms."
  },
  {
    id: 16,
    slug: "16-monitoring-and-troubleshooting",
    title: "Monitoring and Troubleshooting (Wireshark, SNMP, Syslog)",
    category: "Network Telemetry & Diagnostic Engineering",
    keyTopics: [
      "Wireshark / tcpdump Packet Analysis (Display Filters, Capture Filters, Stream Reassembly)",
      "Simple Network Management Protocol (SNMP v1, v2c, v3 with USM/VACM Security, MIBs, OIDs, Traps, Polls)",
      "Syslog Protocol (RFC 5424 Facility Codes, Severity Levels 0-7, Centralized Log Management)",
      "Flow Telemetry: NetFlow v5/v9, IPFIX, sFlow Architecture",
      "Active Network Probing (ICMP, TWAMP, Synthetic Monitoring)",
      "Structured Network Troubleshooting Methodologies (Top-Down, Bottom-Up, Divide-and-Conquer)"
    ],
    prompt: "Create an expert manual on Network Monitoring and Troubleshooting covering Wireshark filter syntax, SNMPv3 configuration, Syslog levels, NetFlow analysis, and structured fault-isolation steps."
  },
  {
    id: 17,
    slug: "17-high-availability-and-load-balancing",
    title: "High Availability and Load Balancing",
    category: "Resilient Network & Application Architecture",
    keyTopics: [
      "First Hop Redundancy Protocols (FHRP: HSRP, VRRP, GLBP Virtual IP/MAC Mechanics)",
      "Server Load Balancing Concepts (Layer 4 TCP/UDP vs Layer 7 HTTP/HTTPS Reverse Proxies)",
      "Load Balancing Algorithms (Round Robin, Least Connections, IP Hash, Weighted)",
      "Health Checking & Passive/Active Probe Strategies",
      "Global Server Load Balancing (GSLB) & DNS-based Routing",
      "Active/Passive vs Active/Active Cluster Topologies & Stateful Session Sync"
    ],
    prompt: "Write a complete engineering guide on High Availability and Load Balancing covering VRRP/HSRP operation, Layer 4/7 reverse proxies, health probes, GSLB, and active/active clustering."
  },
  {
    id: 18,
    slug: "18-cloud-networking",
    title: "Cloud Networking",
    category: "Multi-Cloud Infrastructure & Overlay Networks",
    keyTopics: [
      "Virtual Private Cloud (VPC) / Virtual Network (VNet) Architecture",
      "Cloud Gateways: Internet Gateways, NAT Gateways, Transit Gateways / WAN Hubs",
      "Hybrid Cloud Connectivity: AWS DirectConnect / Azure ExpressRoute / IPsec Cloud Tunnels",
      "Overlay Virtualization Protocols (VXLAN - VNI, VTEP, EVPN-BGP Integration)",
      "Cloud Security Groups vs Network ACLs (Stateless vs Stateful Rule Evaluation)",
      "Service Mesh & Cloud Native Networking (CNI Plugins in Kubernetes: Calico, Cilium)"
    ],
    prompt: "Write an in-depth reference on Cloud Networking covering VPC abstractions, DirectConnect/ExpressRoute, VXLAN/EVPN overlays, Security Groups vs NACLs, and K8s CNI architectures."
  },
  {
    id: 19,
    slug: "19-network-automation",
    title: "Network Automation (Python, Ansible, APIs)",
    category: "Programmable Infrastructure & DevOps",
    keyTopics: [
      "Network Programmability Paradigms (CLI Scraping vs Structured APIs)",
      "RESTful APIs, HTTP Verbs, JSON/YAML Payloads, Authentication (Bearer Token, OAuth2)",
      "Data Models: YANG (RFC 6020) & Protocols: NETCONF (SSH) / RESTCONF (HTTP/TLS)",
      "Python Network Libraries: Netmiko, NAPALM, Paramiko, PyEZ, requests",
      "Ansible Network Automation: Inventory, Playbooks, Modules, Roles, Idempotency",
      "CI/CD Pipelines for Network Configuration Validation & Infrastructure as Code (Terraform)"
    ],
    prompt: "Create a guide on Network Automation detailing REST APIs, YANG data modeling, NETCONF/RESTCONF, Python scripts (Netmiko/NAPALM), Ansible playbooks, and GitOps workflows."
  },
  {
    id: 20,
    slug: "20-advanced-enterprise-networking",
    title: "Advanced Enterprise and Data Center Networking",
    category: "High-Performance Architecture & Software-Defined Infrastructure",
    keyTopics: [
      "Data Center Topologies: Spine-and-Leaf (Clos Architecture) vs Traditional 3-Tier (Core, Distribution, Access)",
      "Multiprotocol Label Switching (MPLS): Label Distribution Protocol (LDP), Push/Pop/Swap, MPLS L3VPNs",
      "Software-Defined Networking (SDN) & SD-WAN Architectures (Control Plane Separation)",
      "EVPN-VXLAN Data Center Fabrics",
      "Quality of Service (QoS): Classification, Marking (DSCP/CoS), Queuing (LLQ, CBWFQ), Policing vs Shaping",
      "Zero Trust Enterprise Security & Microsegmentation Frameworks"
    ],
    prompt: "Write a comprehensive enterprise summary on Advanced Enterprise and Data Center Networking covering Spine-Leaf Clos fabrics, MPLS L3VPNs, SD-WAN, EVPN-VXLAN, and QoS traffic management."
  }
];
