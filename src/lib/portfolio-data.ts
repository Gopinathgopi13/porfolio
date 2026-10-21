export const HERO_TAGS = [
  "React", "TypeScript", "Node.js", "Go", "MQTT", "WebSockets",
  "RabbitMQ", "Redis", "PostgreSQL", "Docker",
];

export type ProjectBlock = {
  name: string;
  tags: string[];
  bullets: string[];
};

export type Role = {
  title: string;
  company: string;
  startDate: string;
  meta: string;
  projects: ProjectBlock[];
};

export const ROLES: Role[] = [
  {
    title: "Software Engineer",
    company: "Greenbotz Platform Private Limited",
    startDate: "2024-05-01",
    meta: "Coimbatore · May 2024 – Present",
    projects: [
      {
        name: "Greengate Smart Building Management System (Access Management)",
        tags: ["React.js", "Go", "Express.js", "Node.js", "Microservices", "Multi-Tenant Architecture", "RBAC", "Twilio"],
        bullets: [
          "Designed the layered architecture for a 10+ service, multi-tenant access-management platform serving 40+ clients in Singapore, each managing an average of 2,000+ residents. Led a two-developer team, making design decisions, reviewing work, and driving feature delivery.",
          "Built tenant resource management that allocates dedicated databases to high-traffic clients and shared databases where capacity allows, plus scope-level RBAC for blocks, floors, and other areas with instant access grants and revocations.",
          "Implemented real-time alerts for unauthorized people and vehicles, and a visitor workflow that grants entry after resident approval through an integrated Twilio video-call module.",
          "Planned zero-touch intercom provisioning and device pinning, with QR-based unpinning gated by security verification through a site engineer's face capture.",
        ],
      },
      {
        name: "Smart Hotel Management System",
        tags: ["Node.js", "PostgreSQL", "BullMQ", "Redis", "MQTT", "React.js", "React Context", "Go"],
        bullets: [
          "Architected a distributed hotel management system across 4 decoupled services (cloud-backend, local-backend, sync-service, rfid-service) communicating via REST, Socket.IO, and MQTT pub/sub, with Oracle Opera Cloud PMS integration and a dual-source data strategy for high availability.",
          "Engineered a cron-based synchronisation engine with scheduled jobs propagating real-time room availability, reservation, and QR lock data between local PostgreSQL and Opera Cloud, using a singleton job registry pattern with smart retry and error recovery logic.",
          "Built a Go-based RFID service interfacing with contactless smart cards via native C bindings, exposing bidirectional WebSocket communication to the Node.js backend for guest access provisioning — with auto-reconnect (exponential backoff), thread-safe concurrent operations, and graceful shutdown.",
        ],
      },
      {
        name: "Mobile Device Management (MDM)",
        tags: ["Node.js", "PostgreSQL", "MQTT", "FRP", "VNC", "Node-cron", "React.js", "Redux"],
        bullets: [
          "Built an MDM platform for centralized monitoring, control, and automation of Android devices at scale — featuring a Redux-managed React dashboard with real-time device status tracking, an APK distribution pipeline, role-based access control (RBAC), configurable alert rules with multichannel notifications (Email/WhatsApp), and timezone-aware recurring device scheduling.",
          "Implemented remote access infrastructure using noVNC for browser-based screen sharing, GoTTY for web terminal access, ADB for low-level device control, and FRP/FRPC reverse-proxy tunneling for secure port forwarding to devices behind NAT.",
          "Architected a distributed job queue with BullMQ + Redis (background worker pattern, exponential backoff retry) and MQTT pub/sub for real-time device communication — backed by a GitLab CI/CD pipeline with Sentry error tracking and Graylog (GELF) centralized logging.",
        ],
      },
    ],
  },
  {
    title: "Software Engineer",
    company: "Demiurge Design",
    startDate: "2024-01-01",
    meta: "Chennai · Jan 2024 – May 2024",
    projects: [
      {
        name: "E-Commerce Store",
        tags: ["React.js", "Node.js", "Tailwind CSS", "MongoDB"],
        bullets: [
          "Designed and developed a scalable e-commerce system supporting product catalog management, cart operations, and the end-to-end order lifecycle with well-structured APIs and modular components.",
          "Implemented secure authentication and role-based authorization, along with an admin dashboard for product management, inventory tracking, order processing, and refund handling.",
          "Integrated a payment workflow with transaction verification and order confirmation, ensuring data consistency, error handling, and reliable order state management.",
        ],
      },
    ],
  },
];

export const SKILL_GROUPS: { title: string; items: string[]; span?: string }[] = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "Go", "Python", "HTML5", "CSS3"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "HTTP Gateways", "Microservices", "Event-driven architecture"], span: "md:col-span-2" },
  { title: "Frontend", items: ["React.js", "Next.js", "Redux", "React Context", "Tailwind CSS", "Material UI", "Bootstrap", "Ant Design", "Zustand"], span: "md:col-span-2" },
  { title: "Databases", items: ["SQL", "PostgreSQL", "MongoDB", "MySQL", "Oracle", "Redis"] },
  { title: "Messaging & Realtime", items: ["Twilio", "MQTT", "RabbitMQ", "Kafka", "Socket.IO", "WebSockets", "BullMQ"], span: "md:col-span-2" },
  { title: "Testing & Quality", items: ["Jest", "Test plan execution", "Error tracking and monitoring", "Defect resolution"] },
  { title: "DevOps & Tooling", items: ["Git", "Docker", "GitLab CI/CD", "Bash scripting", "Sentry", "Graylog (GELF)", "Node-cron", "FRP/FRPC", "noVNC", "GoTTY", "Troubleshooting", "Root cause analysis", "Application performance"], span: "md:col-span-2" },
  { title: "AI Tools", items: ["Claude", "Codex"] },
  { title: "Integration & Security", items: ["ADB", "RFID", "Oracle Opera Cloud PMS", "Twilio", "Vonage", "Secure authentication", "Role-Based Access Control (RBAC)"] },
  { title: "Ways of Working", items: ["Agile", "Software Development Life Cycle (SDLC)", "Cross-functional collaboration"] },
];
