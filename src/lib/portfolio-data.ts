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
  meta: string;
  projects: ProjectBlock[];
};

export const ROLES: Role[] = [
  {
    title: "Software Engineer",
    company: "Greenbotz Platform Private Limited",
    meta: "Coimbatore · May 2024 – Present",
    projects: [
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
      {
        name: "Building Management System (NYP)",
        tags: ["Node.js", "Python", "RabbitMQ", "Socket.IO", "PostgreSQL", "React.js", "React Context"],
        bullets: [
          "Built a facial-recognition-based Building Management System backend in Node.js and TypeScript enabling real-time person tracking, surveillance, security patrol monitoring, and multi-system integration (SPLUS, KABAM, RabbitMQ) for enterprise security operations.",
          "Engineered a high-frequency producer-consumer pipeline where camera detection events are queued asynchronously (1000-message capacity, 5-min TTL, manual acknowledgement) and streamed live to clients over WebSocket — decoupling detection throughput from delivery and ensuring zero message loss under load.",
        ],
      },
    ],
  },
  {
    title: "Software Engineer",
    company: "Demiurge Design",
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
  { title: "Languages", items: ["JavaScript", "TypeScript", "Go", "Python"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Microservices", "Event-driven architecture"], span: "md:col-span-2" },
  { title: "Frontend", items: ["React.js", "Redux", "React Context", "Tailwind CSS", "Material UI", "Bootstrap", "Ant Design", "Zustand", ""], span: "md:col-span-2" },
  { title: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Oracle", "Redis"] },
  { title: "Messaging & Realtime", items: ["MQTT", "RabbitMQ", "Kafka", "Socket.IO", "WebSockets", "BullMQ"], span: "md:col-span-2" },
  { title: "Testing", items: ["Jest"] },
  { title: "DevOps & Tooling", items: ["Docker", "GitLab CI/CD", "Bash", "Sentry", "Graylog (GELF)", "Node-cron", "FRP/FRPC", "noVNC", "GoTTY"], span: "md:col-span-2" },
  { title: "Integration & Hardware", items: ["ADB", "RFID", "Oracle Opera Cloud PMS"] },
];
