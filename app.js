/* ============================================================
   AnujOS - OS-style portfolio
   Edit the DATA object below to personalize the portfolio.
   ============================================================ */

const DATA = {
  name: "Anuj Tripathi",
  shortName: "Anuj",
  title: "Software Engineer",
  tagline: "CS Student at IIIT Jabalpur",
  bio: [
    "I'm a Software Engineer interested in building scalable distributed systems, developer platforms, and AI-powered engineering tools.",
    "Currently, I'm a Software Engineering Intern at Harness, working on cloud infrastructure, Kubernetes-based developer platforms, service mesh, and observability.",
    "Outside of work, I enjoy building systems from scratch - from distributed workflow engines and real-time microservices to AI-powered developer tools. I also enjoy competitive programming and have solved 1500+ problems across major platforms.",
  ],
  location: "Jabalpur, India",
  phone: "+91 62666 42998",
  phoneHref: "tel:+916266642998",
  education: {
    school: "Indian Institute of Information Technology (IIIT) Jabalpur",
    degree: "B.Tech. in Computer Science & Engineering",
    when: "2023 - 2027",
    note: "CGPA 8.2 / 10.0",
  },
  focus: ["Harness Intern", "Kubernetes", "Distributed Systems", "Observability", "AI Engineering"],
  links: {
    github: "https://github.com/anuj452005",
    linkedin: "https://www.linkedin.com/in/anuj-tripathi-1aa371294/",
    email: "anujtr455@gmail.com",
    portfolio: "https://anuj-tripathi.vercel.app/",
    resume: "anuj_resume.pdf",
    leetcode: "https://leetcode.com/u/triapthi_anuj_/",
    codeforces: "https://codeforces.com/profile/anujtr_455",
    codechef: "https://www.codechef.com/users/anuj455",
    gfg: "https://www.geeksforgeeks.org/user/anujt3dw6/",
  },
  skills: [
    { group: "Languages", items: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript", "SQL"] },
    { group: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Material UI", "HTML5", "CSS3"] },
    { group: "Backend", items: ["Node.js", "Express.js", "Go", "Django REST Framework", "REST APIs", "Microservices"] },
    { group: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma ORM"] },
    { group: "DevOps & Cloud", items: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Git", "Linux", "Vite", "Webpack"] },
    { group: "Testing & concepts", items: ["Cypress", "Jest", "RabbitMQ", "Socket.IO", "OAuth 2.0", "System Design", "Agile/Scrum"] },
  ],
  projects: [
    {
      name: "FlowForge",
      kind: "Orchestration",
      accent: "#32d74b",
      blurb: "A distributed workflow engine that schedules work without trampling itself.",
      desc: "Workers scale out on PostgreSQL SKIP LOCKED. Lease heartbeats and fencing tokens recover failed nodes, while Redis Pub/Sub and SSE keep a live view of every run.",
      highlights: ["Concurrency-safe SKIP LOCKED", "Fencing-token recovery", "Live SSE monitoring"],
      stack: "Node.js - TypeScript - PostgreSQL - Redis - Docker - React.js - Fastify",
      github: "https://github.com/anuj452005/distributed-job-scheduler",
      live: "https://flowforge.anujtr.me/",
    },
    {
      name: "Realtime Chat",
      kind: "Messaging",
      accent: "#0a84ff",
      blurb: "Three microservices that talk over sockets, Redis, and queues.",
      desc: "Independent deploy and scale for each service. Socket.IO for bidirectional traffic, Redis for cache, RabbitMQ for async work. Message-delivery latency dropped by 60%.",
      highlights: ["3 decoupled services", "60% lower latency", "Socket.IO + RabbitMQ"],
      stack: "Node.js - TypeScript - Express.js - Socket.IO - Redis - RabbitMQ - React.js - Docker",
      github: "https://github.com/anuj452005/Real-time-chat-application",
      live: "https://frontend-chat-application.onrender.com/",
    },
    {
      name: "Apex CLI",
      kind: "AI agents",
      accent: "#bf5af2",
      blurb: "A LangGraph agent in the terminal, with tools and a real login flow.",
      desc: "Plan-Execute-Reflect loop with file I/O, sandboxed code, and live web search. OAuth 2.0 device flow plus Prisma and PostgreSQL keep sessions without exposing credentials.",
      highlights: ["Plan-Execute-Reflect", "Sandboxed tools", "OAuth device flow"],
      stack: "LangGraph.js - Node.js - TypeScript - PostgreSQL - Prisma ORM - OAuth 2.0",
      github: "https://github.com/anuj452005/Apex-cli",
    },
  ],
  experience: [
    {
      when: "May 2026 - Present",
      role: "Software Engineering Intern",
      where: "Harness.io - Cloud Team, Remote",
      bullets: [
        "Built DevSpace, an internal developer platform that provisions isolated, production-like Kubernetes environments on demand, cutting microservice test-environment setup from hours to seconds.",
        "Shipped full-stack features across a React/TypeScript UI and Go backend APIs: pipeline lifecycle controls, service management, and health dashboards used by internal engineering teams.",
        "Engineered platform infrastructure and observability with Kubernetes, Istio, and Prometheus/Grafana, improving deployment reliability and end-to-end visibility.",
      ],
    },
    {
      when: "Apr 2025 - Aug 2025",
      role: "Software Engineering Contributor - Open Source",
      where: "openIMIS - C4GT Digital Managed Projects (DMP) 2025, Remote",
      bullets: [
        "Migrated the openIMIS frontend from Create React App to Vite, reducing build time by 85% and accelerating CI/CD for a health-insurance platform deployed across 6+ countries.",
        "Engineered modular routing and environment-configuration systems aligned with enterprise SDLC standards, reducing cross-team integration errors by 40%.",
        "Established an end-to-end Cypress test framework with a data-testid strategy, reaching 90%+ UI test stability across agile sprint releases.",
      ],
    },
    {
      when: "2023 - Present",
      role: "Programming Mentor",
      where: "The Programming Club, IIIT Jabalpur",
      bullets: [
        "Mentored 20+ junior engineers in DSA and competitive programming, driving measurable ranking gains.",
      ],
    },
  ],
  achievements: [
    "LeetCode Guardian, rating 2149, top 1.5% globally. 900+ problems solved across algorithms, DP, graphs, and data structures.",
    "CodeChef 4-Star (1900). Global rank 134 in Starters 170 among 10,000+ participants. Codeforces Specialist (1530). 1500+ problems across major judges.",
  ],
};

const skillCount = DATA.skills.reduce((n, g) => n + g.items.length, 0);

const isMac = /Mac|iPhone|iPad/.test(navigator.userAgent);
const MOD = isMac ? "⌘" : "Ctrl+";
const THEMES = [
  { id: "aurora", label: "Aurora" },
  { id: "dusk", label: "Dusk" },
  { id: "ocean", label: "Ocean" },
];

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

function ico(inner) {
  return `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
}

function link(href, label) {
  const ext = /^https?:/i.test(href);
  const attrs = ext ? ' target="_blank" rel="noopener noreferrer"' : "";
  return `<a href="${esc(href)}"${attrs}>${esc(label)}</a>`;
}

function pctNum(p) {
  const n = parseFloat(p);
  return Number.isNaN(n) ? 0 : Math.max(0, Math.min(100, n));
}

const I = {
  user: ico(`<circle cx="12" cy="8" r="3.2"/><path d="M5 19.2c1.4-3 3.8-4.5 7-4.5s5.6 1.5 7 4.5"/>`),
  folder: ico(`<path d="M3 7.5h6l2 2H21V19H3z"/>`),
  spark: ico(`<path d="M12 3.5 13.6 8.6 19 10l-5.4 1.6L12 16.8l-1.6-5.2L5 10l5.4-1.4z"/>`),
  brief: ico(`<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5.8A1.8 1.8 0 0 1 9.8 4h4.4A1.8 1.8 0 0 1 16 5.8V7M3 12h18"/>`),
  term: ico(`<rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7 9.5 10 12l-3 2.5M12 14.5h5"/>`),
  mail: ico(`<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>`),
  trash: ico(`<path d="M4 7h16M9 7V5h6v2M7 7l1 13h8l1-13"/>`),
  mac: ico(`<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 8.2 15.2 16h-1.6l-.6-1.6h-2L10.4 16H8.8z"/>`),
  moon: ico(`<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>`),
  restart: ico(`<path d="M20 12a8 8 0 1 1-2.3-5.6"/><path d="M20 4.5V9h-4.5"/>`),
  help: ico(`<circle cx="12" cy="12" r="9"/><path d="M9.5 9.2a2.5 2.5 0 1 1 3.3 2.4c-.8.4-1.3.9-1.3 1.8V14.5"/><path d="M12 17.2h.01"/>`),
};

const MARK = `<svg class="mark" viewBox="0 0 32 32" aria-hidden="true"><rect x="2" y="2" width="28" height="28" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><path fill="currentColor" d="M16 7.2 23.2 24h-3.1l-1.3-3.1h-5.6L12 24H8.8L16 7.2zm0 6.1-1.7 4.4h3.4L16 13.3z"/></svg>`;

const APPS = {
  about: {
    name: "About Me", icon: I.user, tone: "about", dock: true, desktop: true,
    render: () => `
      <div class="about-hero">
        <div class="avatar">${esc(DATA.name.slice(0, 1))}</div>
        <div>
          <h1>${esc(DATA.name)}</h1>
          <div class="sub">${esc(DATA.title)} · ${esc(DATA.tagline)}</div>
          <div class="sub">${esc(DATA.location)}</div>
        </div>
      </div>
      ${DATA.bio.map((p) => `<p>${esc(p)}</p>`).join("")}
      <div class="stats">
        <button type="button" class="stat" data-open="projects"><b>${DATA.projects.length}</b><span>Projects</span></button>
        <button type="button" class="stat" data-open="skills"><b>${skillCount}</b><span>Skills</span></button>
        <button type="button" class="stat" data-open="experience"><b>${DATA.experience.length}</b><span>Roles</span></button>
      </div>
      <h2>Currently</h2>
      <div class="pills">${DATA.focus.map((f) => `<span class="pill">${esc(f)}</span>`).join("")}</div>
      <h2>Education</h2>
      <p><b>${esc(DATA.education.degree)}</b><br>${esc(DATA.education.school)}<br>${esc(DATA.education.when)} · ${esc(DATA.education.note)}</p>
      <h2>Elsewhere</h2>
      <div class="pills">
        <a class="pill" href="${esc(DATA.links.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a class="pill" href="${esc(DATA.links.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a class="pill" href="${esc(DATA.links.portfolio)}" target="_blank" rel="noopener noreferrer">Portfolio</a>
        <a class="pill" href="mailto:${esc(DATA.links.email)}">${esc(DATA.links.email)}</a>
      </div>`
  },
  projects: {
    name: "Projects", icon: I.folder, tone: "projects", dock: true, desktop: true,
    cls: "projects-body",
    width: 760, height: 540,
    render: () => `
      <header class="proj-head">
        <div>
          <h1>Projects</h1>
          <p class="lede">Three systems I actually shipped: orchestration, realtime messaging, and an agent CLI.</p>
        </div>
        <div class="proj-count">${DATA.projects.length}<span>built</span></div>
      </header>
      <div class="proj-grid">
        ${DATA.projects.map((p, i) => `
          <article class="proj-card" id="proj-${i}" style="--p:${esc(p.accent)}">
            <div class="proj-art">
              <span class="proj-kind">${esc(p.kind)}</span>
              <div class="proj-mono">${esc(p.name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2))}</div>
              ${p.live ? `<span class="proj-live">Live</span>` : `<span class="proj-live src">Source</span>`}
            </div>
            <div class="proj-copy">
              <h3>${esc(p.name)}</h3>
              <p class="proj-blurb">${esc(p.blurb)}</p>
              <p>${esc(p.desc)}</p>
              <ul class="proj-hits">${p.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
              <div class="chips">${p.stack.split(" - ").map((t) => `<span class="chip">${esc(t.trim())}</span>`).join("")}</div>
              <div class="proj-actions">
                ${p.live ? `<a class="btn btn-fill" href="${esc(p.live)}" target="_blank" rel="noopener noreferrer">Open live</a>` : ""}
                ${p.github ? `<a class="btn" href="${esc(p.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ""}
              </div>
            </div>
          </article>`).join("")}
      </div>`
  },
  skills: {
    name: "Skills", icon: I.spark, tone: "skills", dock: true, desktop: true,
    render: () => `
      <h1>Skills</h1>
      <p class="lede">The stack I put on the resume, grouped the same way.</p>
      ${DATA.skills.map((g) => `
        <h2>${esc(g.group)}</h2>
        <div class="pills">${g.items.map((s) => `<span class="pill">${esc(s)}</span>`).join("")}</div>`).join("")}`
  },
  experience: {
    name: "Experience", icon: I.brief, tone: "experience", dock: true, desktop: true,
    render: () => `
      <h1>Experience</h1>
      <div class="timeline">
        ${DATA.experience.map((x) => `
          <div class="xp-item">
            <div class="xp-dot"></div>
            <div class="when">${esc(x.when)}</div>
            <h3>${esc(x.role)}</h3>
            <div class="when">${esc(x.where)}</div>
            <ul>${x.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
          </div>`).join("")}
        <div class="xp-item">
          <div class="xp-dot"></div>
          <div class="when">${esc(DATA.education.when)}</div>
          <h3>${esc(DATA.education.degree)}</h3>
          <div class="when">${esc(DATA.education.school)}</div>
          <p>${esc(DATA.education.note)}</p>
        </div>
      </div>
      <h2>Achievements</h2>
      <ul class="plain">${DATA.achievements.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>
      <p>${link(DATA.links.resume, "Download resume")}</p>`
  },
  terminal: {
    name: "Terminal", icon: I.term, tone: "terminal", dock: true, desktop: true,
    render: () => `<div class="term-out"></div>
      <div class="term-line"><span class="term-ps1"><b>anuj</b>@anujos <span class="p">~</span> %</span>
      <input class="term-in" spellcheck="false" autocomplete="off" aria-label="Terminal input"></div>`,
    onMount(body) { initTerminal(body); },
    cls: "term-body",
  },
  contact: {
    name: "Contact", icon: I.mail, tone: "contact", dock: true, desktop: true,
    render: () => `
      <h1>Say hello</h1>
      <p class="lede">Email or LinkedIn is the fastest way to reach me.</p>
      <a class="contact-row" href="mailto:${esc(DATA.links.email)}"><span class="ci">${I.mail}</span><div><div>Email</div><div class="cl">${esc(DATA.links.email)}</div></div></a>
      <a class="contact-row" href="${esc(DATA.phoneHref)}"><span class="ci">${I.spark}</span><div><div>Phone</div><div class="cl">${esc(DATA.phone)}</div></div></a>
      <a class="contact-row" href="${esc(DATA.links.github)}" target="_blank" rel="noopener noreferrer"><span class="ci">${I.folder}</span><div><div>GitHub</div><div class="cl">${esc(DATA.links.github)}</div></div></a>
      <a class="contact-row" href="${esc(DATA.links.linkedin)}" target="_blank" rel="noopener noreferrer"><span class="ci">${I.brief}</span><div><div>LinkedIn</div><div class="cl">${esc(DATA.links.linkedin)}</div></div></a>
      <a class="contact-row" href="${esc(DATA.links.portfolio)}" target="_blank" rel="noopener noreferrer"><span class="ci">${I.mac}</span><div><div>Portfolio</div><div class="cl">${esc(DATA.links.portfolio)}</div></div></a>
      <a class="contact-row" href="${esc(DATA.links.leetcode)}" target="_blank" rel="noopener noreferrer"><span class="ci">${I.help}</span><div><div>LeetCode</div><div class="cl">Guardian · 2149</div></div></a>
      <h2>Judges</h2>
      <div class="pills">
        <a class="pill" href="${esc(DATA.links.codeforces)}" target="_blank" rel="noopener noreferrer">Codeforces</a>
        <a class="pill" href="${esc(DATA.links.codechef)}" target="_blank" rel="noopener noreferrer">CodeChef</a>
        <a class="pill" href="${esc(DATA.links.gfg)}" target="_blank" rel="noopener noreferrer">GeeksforGeeks</a>
      </div>`
  },
  trash: {
    name: "Trash", icon: I.trash, tone: "trash", dock: true, desktop: false,
    render: () => `
      <h1>Trash</h1>
      <p class="lede">1 item</p>
      <article class="project-card">
        <h3>social_life.exe</h3>
        <p>Last opened a while ago. Status: permanently deleted.</p>
      </article>`,
  },
  aboutmac: {
    name: "About This Mac", icon: I.mac, tone: "mac", search: true,
    render: () => `
      <div class="mac-about">
        ${MARK}
        <h1>AnujOS</h1>
        <p class="sub">Version 1.1</p>
        <div class="spec">
          <div><span>Name</span><b>${esc(DATA.name)}'s Desktop</b></div>
          <div><span>Chip</span><b>Curiosity</b></div>
          <div><span>Memory</span><b>One browser tab</b></div>
          <div><span>Display</span><b id="mac-res"></b></div>
        </div>
        <p>The dock apps are the portfolio. Everything else is the desk they sit on.</p>
      </div>`,
    onMount(body) {
      const el = body.querySelector("#mac-res");
      if (el) el.textContent = `${window.innerWidth} x ${window.innerHeight}`;
    },
  },
  help: {
    name: "Help", icon: I.help, tone: "help", search: true,
    render: () => `
      <h1>Shortcuts</h1>
      <ul class="help-list">
        <li><span>Spotlight</span><kbd>${MOD}K</kbd></li>
        <li><span>Close Spotlight, menus, or wake</span><kbd>Esc</kbd></li>
        <li><span>Minimize the front window</span><kbd>${MOD}M</kbd></li>
        <li><span>Open an icon</span><span>Double-click</span></li>
        <li><span>Move a window</span><span>Drag the title bar</span></li>
        <li><span>Fill the screen</span><span>Double-click the title bar</span></li>
        <li><span>Resize</span><span>Drag the corner</span></li>
      </ul>
      <h2>Terminal</h2>
      <p>Open Terminal and type <b>help</b>. The up and down arrows walk through command history.</p>`,
  },
};

/* ============ WINDOW MANAGER ============ */

const winLayer = document.getElementById("windows");
const winTpl = document.getElementById("window-template");
const openWins = new Map();
const focusStack = [];
let zTop = 100;
let cascade = 0;

function setMenuApp(id) {
  document.getElementById("mb-app-name").textContent = id ? APPS[id].name : "Finder";
}

function openApp(id, { toggle = false } = {}) {
  const app = APPS[id];
  if (!app) return;
  const existing = openWins.get(id);
  if (existing) {
    const hidden = existing.classList.contains("minimized") || existing.style.display === "none";
    if (toggle && !hidden && existing.classList.contains("focused")) {
      minimizeWin(id);
      return;
    }
    if (hidden) {
      existing.classList.remove("minimized");
      existing.style.display = "";
      existing.classList.add("restoring");
      existing.addEventListener("animationend", () => existing.classList.remove("restoring"), { once: true });
    }
    focusWin(existing, id);
    return;
  }

  const win = winTpl.content.firstElementChild.cloneNode(true);
  win.dataset.app = id;
  const desk = document.getElementById("desktop").getBoundingClientRect();
  if (desk.width < 760) {
    win.style.left = "8px";
    win.style.top = "168px";
    win.style.width = `${Math.max(280, desk.width - 16)}px`;
    win.style.height = `${Math.max(260, desk.height - 168 - 84)}px`;
  } else {
    win.style.top = `${64 + cascade * 26}px`;
    win.style.left = `${Math.max(300, desk.width * 0.26) + cascade * 28}px`;
    if (app.width) win.style.width = `${Math.min(app.width, desk.width - 24)}px`;
    if (app.height) win.style.height = `${Math.min(app.height, desk.height - 24)}px`;
    cascade = (cascade + 1) % 6;
  }

  win.querySelector(".window-title").textContent = app.name;
  const body = win.querySelector(".window-body");
  if (app.cls) body.classList.add(app.cls);
  body.innerHTML = app.render();

  win.querySelector(".close").onclick = () => closeWin(id);
  win.querySelector(".minimize").onclick = () => minimizeWin(id);
  win.querySelector(".maximize").onclick = () => toggleMax(win);
  win.querySelector(".titlebar").ondblclick = (e) => {
    if (e.target.closest(".tl")) return;
    toggleMax(win);
  };
  win.addEventListener("mousedown", () => focusWin(win, id));

  makeDraggable(win);
  makeResizable(win);
  winLayer.appendChild(win);
  openWins.set(id, win);
  focusWin(win, id);
  updateDock();
  bounceDock(id);
  app.onMount?.(body);
}

function focusWin(win, id) {
  winLayer.querySelectorAll(".window").forEach((w) => w.classList.remove("focused"));
  win.classList.add("focused");
  win.style.zIndex = ++zTop;
  const at = focusStack.indexOf(id);
  if (at >= 0) focusStack.splice(at, 1);
  focusStack.push(id);
  setMenuApp(id);
  if (id === "terminal") win.querySelector(".term-in")?.focus();
}

function closeWin(id) {
  openWins.get(id)?.remove();
  openWins.delete(id);
  const at = focusStack.indexOf(id);
  if (at >= 0) focusStack.splice(at, 1);
  const last = [...focusStack].reverse().find((k) => openWins.has(k));
  if (last) focusWin(openWins.get(last), last);
  else setMenuApp(null);
  updateDock();
}

function minimizeWin(id) {
  const win = openWins.get(id);
  if (!win || win.classList.contains("minimized")) return;
  win.classList.add("minimized");
  const at = focusStack.indexOf(id);
  if (at >= 0) focusStack.splice(at, 1);
  setTimeout(() => { if (win.classList.contains("minimized")) win.style.display = "none"; }, 220);
  const last = [...focusStack].reverse().find((k) => {
    const w = openWins.get(k);
    return w && !w.classList.contains("minimized");
  });
  if (last) focusWin(openWins.get(last), last);
  else setMenuApp(null);
}

function remember(win) {
  win.dataset.geom = JSON.stringify({
    top: win.style.top, left: win.style.left,
    width: win.style.width, height: win.style.height,
  });
}

function toggleMax(win) {
  if (!win) return;
  if (win.classList.contains("maximized")) {
    win.classList.remove("maximized");
    const g = JSON.parse(win.dataset.geom || "{}");
    if (g.top) win.style.top = g.top;
    if (g.left) win.style.left = g.left;
    win.style.width = g.width || "";
    win.style.height = g.height || "";
    return;
  }
  remember(win);
  win.classList.add("maximized");
}

function makeDraggable(win) {
  const bar = win.querySelector(".titlebar");
  bar.addEventListener("mousedown", (e) => {
    if (e.button !== 0 || e.target.closest(".tl") || win.classList.contains("maximized")) return;
    e.preventDefault();
    const desk = document.getElementById("desktop").getBoundingClientRect();
    const rect = win.getBoundingClientRect();
    const dx = e.clientX - rect.left;
    const dy = e.clientY - rect.top;
    const startGeom = {
      top: win.style.top, left: win.style.left,
      width: win.style.width, height: win.style.height,
    };
    let lastY = e.clientY;
    let moved = false;
    const move = (e2) => {
      lastY = e2.clientY;
      if (Math.abs(e2.clientX - e.clientX) + Math.abs(e2.clientY - e.clientY) > 3) moved = true;
      let x = e2.clientX - dx - desk.left;
      let y = e2.clientY - dy - desk.top;
      x = Math.max(-rect.width + 160, Math.min(x, desk.width - 120));
      y = Math.max(0, Math.min(y, desk.height - 48));
      win.style.left = `${x}px`;
      win.style.top = `${y}px`;
    };
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      if (moved && lastY < desk.top + 14) {
        win.dataset.geom = JSON.stringify(startGeom);
        win.classList.add("maximized");
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  });
}

function makeResizable(win) {
  const grip = win.querySelector(".resize-handle");
    grip.addEventListener("mousedown", (e) => {
    if (e.button !== 0 || win.classList.contains("maximized")) return;
    e.preventDefault();
    focusWin(win, win.dataset.app);
    const rect = win.getBoundingClientRect();
    const move = (e2) => {
      win.style.width = `${Math.max(340, rect.width + e2.clientX - e.clientX)}px`;
      win.style.height = `${Math.max(240, rect.height + e2.clientY - e.clientY)}px`;
    };
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  });
}

function focusedWin() {
  return winLayer.querySelector(".window.focused");
}

function closeFocused() {
  const id = focusedWin()?.dataset.app;
  if (id) closeWin(id);
}
function minimizeFocused() {
  const id = focusedWin()?.dataset.app;
  if (id) minimizeWin(id);
}
function zoomFocused() {
  const win = focusedWin();
  if (win) toggleMax(win);
}

/* ============ DESKTOP + DOCK ============ */

function buildIcons() {
  const desk = document.getElementById("desktop-icons");
  const dock = document.getElementById("dock-apps");
  for (const [id, app] of Object.entries(APPS)) {
    if (!app.desktop) continue;
    const el = document.createElement("div");
    el.className = "d-icon";
    el.dataset.app = id;
    el.innerHTML = `<div class="glyph tone-${app.tone}">${app.icon}</div><div class="label">${esc(app.name)}</div>`;
    el.ondblclick = () => openApp(id);
    el.onclick = () => {
      desk.querySelectorAll(".d-icon").forEach((i) => i.classList.remove("selected"));
      el.classList.add("selected");
    };
    desk.appendChild(el);
  }
  for (const [id, app] of Object.entries(APPS)) {
    if (!app.dock) continue;
    if (id === "trash") {
      const sep = document.createElement("div");
      sep.className = "dock-sep";
      dock.appendChild(sep);
    }
    const b = document.createElement("button");
    b.type = "button";
    b.className = "dock-item";
    b.dataset.app = id;
    b.setAttribute("aria-label", app.name);
    b.innerHTML = `<span class="glyph tone-${app.tone}">${app.icon}</span><i class="dot"></i><span class="tooltip">${esc(app.name)}</span>`;
    b.onclick = () => openApp(id, { toggle: true });
    dock.appendChild(b);
  }
}

function updateDock() {
  document.querySelectorAll(".dock-item").forEach((b) => {
    b.classList.toggle("running", openWins.has(b.dataset.app));
  });
}

function bounceDock(id) {
  const glyph = document.querySelector(`.dock-item[data-app="${id}"] .glyph`);
  if (!glyph) return;
  glyph.classList.remove("bounce");
  void glyph.offsetWidth;
  glyph.classList.add("bounce");
  glyph.addEventListener("animationend", () => glyph.classList.remove("bounce"), { once: true });
}

function wireDockMagnify() {
  const dock = document.getElementById("dock-apps");
  const apply = (clientX) => {
    if (window.innerWidth < 760) return;
    dock.querySelectorAll(".dock-item").forEach((btn) => {
      const g = btn.querySelector(".glyph");
      const r = btn.getBoundingClientRect();
      const dist = Math.abs(clientX - (r.left + r.width / 2));
      const t = Math.max(0, 1 - dist / 140);
      const scale = 1 + t * t * 0.62;
      g.style.transform = `translateY(${-t * 14}px) scale(${scale})`;
    });
  };
  dock.addEventListener("mousemove", (e) => apply(e.clientX));
  dock.addEventListener("mouseleave", () => {
    dock.querySelectorAll(".dock-item .glyph").forEach((g) => { g.style.transform = ""; });
  });
}

/* ============ MENUS, SPOTLIGHT, CONTROL CENTER ============ */

const flyout = document.getElementById("flyout");
const cc = document.getElementById("cc");
const spotBack = document.getElementById("spot-back");
const spotIn = document.getElementById("spot-in");
const wallpaper = document.getElementById("wallpaper");
let spotItems = [];
let spotIndex = 0;
let wifiOn = true;
let focusOn = false;
let bright = 1;

function toast(msg) {
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;
  document.getElementById("toasts").appendChild(el);
  setTimeout(() => el.remove(), 2200);
}

function hideFlyout() {
  flyout.classList.add("hidden");
  delete flyout.dataset.key;
  document.querySelectorAll(".mb-item.open, .mb-apple.open").forEach((b) => b.classList.remove("open"));
}

function openFlyout(items, x, y, key) {
  hideCC();
  flyout.replaceChildren();
  items.forEach((item) => {
    if (item.sep) {
      const s = document.createElement("div");
      s.className = "menu-sep";
      flyout.appendChild(s);
      return;
    }
    const b = document.createElement("button");
    b.type = "button";
    b.disabled = !!item.disabled;
    const label = document.createElement("span");
    label.textContent = item.label;
    b.appendChild(label);
    if (item.kbd) {
      const k = document.createElement("kbd");
      k.textContent = item.kbd;
      b.appendChild(k);
    }
    b.onclick = () => { hideFlyout(); item.action?.(); };
    flyout.appendChild(b);
  });
  flyout.classList.remove("hidden");
  flyout.dataset.key = key || "ctx";
  const w = flyout.offsetWidth;
  const h = flyout.offsetHeight;
  flyout.style.left = `${Math.max(8, Math.min(x, window.innerWidth - w - 8))}px`;
  flyout.style.top = `${Math.max(32, Math.min(y, window.innerHeight - h - 8))}px`;
}

function menuFor(key) {
  if (key === "apple") return [
    { label: "About This Mac", action: () => openApp("aboutmac") },
    { sep: true },
    { label: "Sleep", action: sleep },
    { label: "Restart", action: restart },
  ];
  if (key === "file") return [
    { label: "Open Terminal", action: () => openApp("terminal") },
    { label: "Close Window", action: closeFocused },
  ];
  if (key === "edit") return [
    { label: "Copy", action: copySelection },
  ];
  if (key === "view") return [
    { label: "Fill Screen", action: zoomFocused },
    { label: "Next Wallpaper", action: cycleTheme },
  ];
  if (key === "window") {
    const open = [...openWins.keys()].map((id) => ({
      label: APPS[id].name,
      action: () => openApp(id),
    }));
    return [
      { label: "Minimize", kbd: `${MOD}M`, action: minimizeFocused },
      { label: "Zoom", action: zoomFocused },
      { sep: true },
      ...(open.length ? open : [{ label: "No open windows", disabled: true }]),
    ];
  }
  return [
    { label: "AnujOS Help", action: () => openApp("help") },
    { label: "Spotlight", kbd: `${MOD}K`, action: showSpot },
  ];
}

function contextItems() {
  return [
    { label: "Open Terminal", action: () => openApp("terminal") },
    { label: "Change Wallpaper", action: cycleTheme },
    { sep: true },
    { label: "Sleep", action: sleep },
    { label: "About This Mac", action: () => openApp("aboutmac") },
  ];
}

function hideCC() {
  cc.classList.add("hidden");
  document.getElementById("mb-cc").classList.remove("open");
}

function toggleCC() {
  if (cc.classList.contains("hidden")) {
    hideFlyout();
    hideSpot();
    cc.classList.remove("hidden");
    document.getElementById("mb-cc").classList.add("open");
  } else hideCC();
}

function applyLook() {
  const dim = focusOn ? 0.82 : 1;
  wallpaper.style.filter = `brightness(${(bright * dim).toFixed(3)}) saturate(${focusOn ? 0.75 : 1})`;
  document.getElementById("mb-focus").hidden = !focusOn;
}

function setTheme(id) {
  wallpaper.className = `theme-${id}`;
  document.querySelectorAll(".swatch").forEach((s) => {
    s.classList.toggle("on", s.dataset.theme === id);
    s.setAttribute("aria-pressed", s.dataset.theme === id ? "true" : "false");
  });
  try { localStorage.setItem("anujos-theme", id); } catch { /* private mode */ }
  applyLook();
}

function cycleTheme() {
  const i = THEMES.findIndex((t) => wallpaper.classList.contains(`theme-${t.id}`));
  const next = THEMES[(i + 1) % THEMES.length];
  setTheme(next.id);
  toast(`${next.label} wallpaper`);
}

function allSpotItems() {
  const items = [];
  for (const [id, app] of Object.entries(APPS)) {
    if (!(app.dock || app.desktop || app.search)) continue;
    items.push({ id, name: app.name, kind: "Application", icon: app.icon, tone: app.tone });
  }
  DATA.projects.forEach((p, i) => {
    items.push({ id: `project:${i}`, name: p.name, kind: "Project", icon: I.folder, tone: "projects" });
  });
  items.push(
    { id: "action:sleep", name: "Sleep", kind: "Action", icon: I.moon, tone: "slate" },
    { id: "action:restart", name: "Restart", kind: "Action", icon: I.restart, tone: "slate" },
    { id: "action:help", name: "Keyboard Shortcuts", kind: "Help", icon: I.help, tone: "help" },
  );
  return items;
}

function renderSpot() {
  const q = spotIn.value.trim().toLowerCase();
  spotItems = allSpotItems().filter((it) => !q || it.name.toLowerCase().includes(q)).slice(0, 8);
  spotIndex = Math.min(spotIndex, Math.max(0, spotItems.length - 1));
  const box = document.getElementById("spot-results");
  if (!spotItems.length) {
    box.innerHTML = `<div class="spot-empty">No results</div>`;
    return;
  }
  box.innerHTML = spotItems.map((it, i) => `
    <button type="button" class="spot-row${i === spotIndex ? " active" : ""}" data-i="${i}">
      <span class="mini tone-${it.tone}">${it.icon}</span>
      <span>${esc(it.name)}</span>
      <span class="spot-kind">${esc(it.kind)}</span>
    </button>`).join("");
  box.querySelectorAll(".spot-row").forEach((row) => {
    row.onmouseenter = () => {
      spotIndex = Number(row.dataset.i);
      box.querySelectorAll(".spot-row").forEach((r, n) => r.classList.toggle("active", n === spotIndex));
    };
    row.onclick = () => activate(spotItems[Number(row.dataset.i)].id);
  });
}

function hideSpot() {
  spotBack.classList.add("hidden");
}

function showSpot() {
  hideCC();
  hideFlyout();
  spotBack.classList.remove("hidden");
  spotIn.value = "";
  spotIndex = 0;
  renderSpot();
  spotIn.focus();
}

function toggleSpot() {
  if (spotBack.classList.contains("hidden")) showSpot();
  else hideSpot();
}

function activate(id) {
  hideSpot();
  if (id === "action:sleep") return sleep();
  if (id === "action:restart") return restart();
  if (id === "action:help") return openApp("help");
  if (id.startsWith("project:")) {
    const n = id.split(":")[1];
    openApp("projects");
    const card = openWins.get("projects")?.querySelector(`#proj-${n}`);
    card?.scrollIntoView({ block: "nearest" });
    card?.classList.add("flash");
    return;
  }
  if (APPS[id]) openApp(id);
}

async function copySelection() {
  const text = String(getSelection() || "").trim();
  if (!text) { toast("Select some text first"); return; }
  try {
    await navigator.clipboard.writeText(text);
    toast("Copied");
  } catch {
    toast("Couldn't copy from this page");
  }
}

function hideOverlays() {
  hideSpot();
  hideCC();
  hideFlyout();
}

/* ============ SLEEP + BOOT ============ */

let booted = false;

function tick() {
  const d = new Date();
  let h = d.getHours();
  const m = String(d.getMinutes()).padStart(2, "0");
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const clock = `${shortDays[d.getDay()]} ${shortMonths[d.getMonth()]} ${d.getDate()}  ${h12}:${m} ${ampm}`;
  document.getElementById("mb-clock").textContent = clock;
  document.getElementById("mb-clock").dateTime = d.toISOString();
  document.getElementById("w-time").textContent = `${h12}:${m}`;
  document.getElementById("w-date").textContent = `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}`;
  const greet = h < 5 ? "Good night" : h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : h < 21 ? "Good evening" : "Good night";
  document.getElementById("w-greet").textContent = `${greet}, ${DATA.shortName}`;
  document.getElementById("sleep-time").textContent = `${h12}:${m}`;
  document.getElementById("sleep-date").textContent = `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}`;
}

function sleep() {
  hideOverlays();
  tick();
  document.getElementById("sleep").classList.remove("hidden");
}

function wake() {
  document.getElementById("sleep").classList.add("hidden");
}

function finishBoot() {
  if (booted) return;
  booted = true;
  const boot = document.getElementById("boot");
  boot.classList.add("done");
  boot.setAttribute("aria-hidden", "true");
  ["menubar", "desktop", "dock"].forEach((id) => document.getElementById(id).classList.remove("hidden"));
  setTimeout(() => { if (!openWins.size) openApp("about"); }, 280);
}

function restart() {
  wake();
  hideOverlays();
  ["menubar", "desktop", "dock"].forEach((id) => document.getElementById(id).classList.add("hidden"));
  [...openWins.keys()].forEach(closeWin);
  cascade = 0;
  booted = false;
  const boot = document.getElementById("boot");
  boot.classList.remove("done");
  boot.setAttribute("aria-hidden", "false");
  const fill = boot.querySelector(".boot-fill");
  fill.style.animation = "none";
  void fill.offsetWidth;
  fill.style.animation = "";
  setTimeout(finishBoot, 1700);
}

/* ============ TERMINAL ============ */

function initTerminal(body) {
  const out = body.querySelector(".term-out");
  const input = body.querySelector(".term-in");
  const hist = [];
  let hi = 0;
  const print = (s) => {
    out.insertAdjacentHTML("beforeend", `${s}\n`);
    out.scrollTop = out.scrollHeight;
  };
  const cmds = {
    help: () => print(`<span class="blue">Available commands</span>
  about       who am I
  projects    list projects
  skills      tech stack
  experience  work history
  contact     how to reach me
  open &lt;app&gt;  open an app
  theme       next wallpaper
  neofetch    system info
  date        current date
  clear       clear the screen
  sudo        try it`),
    about: () => print(`${esc(DATA.name)} - ${esc(DATA.title)}\n${esc(DATA.tagline)}\n\n${DATA.bio.map(esc).join("\n\n")}`),
    projects: () => print(DATA.projects.map((p, i) => `${i + 1}. ${esc(p.name)} - ${esc(p.desc)}`).join("\n")),
    skills: () => print(DATA.skills.map((g) => `${esc(g.group)}\n  ${esc(g.items.join(", "))}`).join("\n")),
    experience: () => print(DATA.experience.map((x) => `${esc(x.when)}  ${esc(x.role)}\n  ${esc(x.where)}`).join("\n")),
    contact: () => print(`email     ${esc(DATA.links.email)}\nphone     ${esc(DATA.phone)}\ngithub    ${esc(DATA.links.github)}\nlinkedin  ${esc(DATA.links.linkedin)}\nportfolio ${esc(DATA.links.portfolio)}`),
    date: () => print(esc(new Date().toString())),
    clear: () => { out.innerHTML = ""; },
    theme: () => { cycleTheme(); print("wallpaper changed"); },
    sudo: () => print(`<span class="dim">Nice try. ${esc(DATA.name)} has been notified.</span>`),
    whoami: () => print("visitor - you could be a collaborator. say hi."),
    ls: () => print(Object.keys(APPS).filter((id) => APPS[id].dock || APPS[id].desktop).join("  ")),
    pwd: () => print("~"),
    exit: () => closeWin("terminal"),
    neofetch: () => print(`<div class="nf"><div class="nf-mark">${MARK}</div><div>
<div><b>anuj</b>@anujos</div>
<div class="dim">----------------</div>
<div>OS       AnujOS 1.1</div>
<div>Host     Browser</div>
<div>Shell    portfolio.sh</div>
<div>Theme    ${esc(THEMES.find((t) => wallpaper.classList.contains("theme-" + t.id))?.label || "Aurora")}</div>
<div>Uptime   since the first hello world</div>
</div></div>`),
  };

  print(`<span class="dim">AnujOS Terminal. Type</span> <span class="blue">help</span> <span class="dim">to start.</span>`);
  input.focus();
  body.addEventListener("click", () => input.focus());

  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      if (!hist.length) return;
      if (e.key === "ArrowUp") hi = Math.max(0, hi - 1);
      else hi = Math.min(hist.length, hi + 1);
      input.value = hist[hi] || "";
      return;
    }
    if (e.key === "Tab") {
      e.preventDefault();
      const cur = input.value;
      if (cur.includes(" ")) {
        const [c, a = ""] = cur.split(/\s+/);
        if (c === "open") {
          const hits = Object.keys(APPS).filter((n) => n.startsWith(a) && (APPS[n].dock || APPS[n].desktop || APPS[n].search));
          if (hits.length === 1) input.value = `open ${hits[0]}`;
          else if (hits.length) print(hits.join("  "));
        }
        return;
      }
      const names = [...Object.keys(cmds), "open"];
      const hits = names.filter((n) => n.startsWith(cur));
      if (hits.length === 1) input.value = `${hits[0]} `;
      else if (hits.length > 1) print(hits.join("  "));
      return;
    }
    if (e.key !== "Enter") return;
    const raw = input.value.trim();
    input.value = "";
    print(`<span class="dim">anuj@anujos ~ % ${esc(raw)}</span>`);
    if (!raw) return;
    hist.push(raw);
    hi = hist.length;
    const [cmd, ...args] = raw.split(/\s+/);
    if (cmd === "open") {
      const name = args[0];
      if (APPS[name]) { openApp(name); print(`opening ${esc(name)}`); }
      else print(`no such app: ${esc(name || "")}`);
      return;
    }
    if (cmd === "echo") { print(esc(args.join(" "))); return; }
    if (cmds[cmd]) cmds[cmd]();
    else print(`zsh: command not found: ${esc(cmd)}`);
  });
}

/* ============ WIRE UP ============ */

function wireChrome() {
  document.getElementById("mb-apple").onclick = (e) => {
    const btn = e.currentTarget;
    if (flyout.dataset.key === "apple" && !flyout.classList.contains("hidden")) { hideFlyout(); return; }
    btn.classList.add("open");
    const r = btn.getBoundingClientRect();
    openFlyout(menuFor("apple"), r.left, r.bottom + 6, "apple");
  };
  document.querySelectorAll(".mb-item[data-menu]").forEach((btn) => {
    btn.onclick = () => {
      const key = btn.dataset.menu;
      if (flyout.dataset.key === key && !flyout.classList.contains("hidden")) { hideFlyout(); return; }
      document.querySelectorAll(".mb-item.open, .mb-apple.open").forEach((b) => b.classList.remove("open"));
      btn.classList.add("open");
      const r = btn.getBoundingClientRect();
      openFlyout(menuFor(key), r.left, r.bottom + 6, key);
    };
  });

  document.getElementById("mb-search").onclick = () => toggleSpot();
  document.getElementById("mb-cc").onclick = () => toggleCC();
  document.getElementById("cc-wifi").onclick = () => {
    wifiOn = !wifiOn;
    document.getElementById("cc-wifi").classList.toggle("on", wifiOn);
    document.getElementById("cc-wifi-label").textContent = wifiOn ? "On" : "Off";
  };
  document.getElementById("cc-focus").onclick = () => {
    focusOn = !focusOn;
    document.getElementById("cc-focus").classList.toggle("on", focusOn);
    document.getElementById("cc-focus-label").textContent = focusOn ? "On" : "Off";
    applyLook();
  };
  document.getElementById("cc-bright").addEventListener("input", (e) => {
    bright = Number(e.target.value);
    applyLook();
  });
  document.querySelectorAll(".swatch").forEach((btn) => {
    btn.onclick = () => {
      setTheme(btn.dataset.theme);
      const label = THEMES.find((t) => t.id === btn.dataset.theme)?.label || "Wallpaper";
      toast(`${label} wallpaper`);
    };
  });

  spotBack.addEventListener("mousedown", (e) => { if (e.target === spotBack) hideSpot(); });
  document.getElementById("spotlight").addEventListener("mousedown", (e) => e.stopPropagation());
  document.getElementById("spotlight").addEventListener("submit", (e) => {
    e.preventDefault();
    if (spotItems[spotIndex]) activate(spotItems[spotIndex].id);
  });
  spotIn.addEventListener("input", () => { spotIndex = 0; renderSpot(); });
  spotIn.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      spotIndex = Math.min(spotItems.length - 1, spotIndex + 1);
      renderSpot();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      spotIndex = Math.max(0, spotIndex - 1);
      renderSpot();
    } else if (e.key === "Escape") {
      e.stopPropagation();
      hideSpot();
    }
  });

  document.getElementById("sleep").onclick = wake;
  document.getElementById("desktop").addEventListener("mousedown", (e) => {
    if (e.target.closest(".window") || e.target.closest(".d-icon")) return;
    winLayer.querySelectorAll(".window").forEach((w) => w.classList.remove("focused"));
    document.querySelectorAll(".d-icon").forEach((i) => i.classList.remove("selected"));
    setMenuApp(null);
  });
  document.getElementById("desktop").addEventListener("contextmenu", (e) => {
    if (e.target.closest(".window")) return;
    e.preventDefault();
    const icon = e.target.closest(".d-icon");
    if (icon) {
      openFlyout([{ label: `Open ${APPS[icon.dataset.app].name}`, action: () => openApp(icon.dataset.app) }], e.clientX, e.clientY, "ctx");
      return;
    }
    openFlyout(contextItems(), e.clientX, e.clientY, "ctx");
  });

  winLayer.addEventListener("click", (e) => {
    const t = e.target.closest("[data-open]");
    if (t) openApp(t.dataset.open);
  });

  document.addEventListener("mousedown", (e) => {
    if (!e.target.closest("#flyout") && !e.target.closest(".mb-item") && !e.target.closest("#mb-apple")) hideFlyout();
    if (!e.target.closest("#cc") && !e.target.closest("#mb-cc")) hideCC();
  });

  window.addEventListener("keydown", (e) => {
    const sleepEl = document.getElementById("sleep");
    if (!sleepEl.classList.contains("hidden")) { wake(); return; }
    if (e.key === "Escape") {
      if (!spotBack.classList.contains("hidden")) { hideSpot(); return; }
      if (!cc.classList.contains("hidden")) { hideCC(); return; }
      if (!flyout.classList.contains("hidden")) hideFlyout();
      return;
    }
    const meta = e.metaKey || e.ctrlKey;
    if (meta && e.key.toLowerCase() === "k") { e.preventDefault(); toggleSpot(); }
    if (meta && e.key.toLowerCase() === "m") { e.preventDefault(); minimizeFocused(); }
  });

  document.getElementById("boot").addEventListener("click", finishBoot);

  window.addEventListener("resize", () => {
    const desk = document.getElementById("desktop").getBoundingClientRect();
    if (desk.width >= 760) return;
    openWins.forEach((win) => {
      if (win.classList.contains("maximized")) return;
      win.style.left = "8px";
      win.style.top = "168px";
      win.style.width = `${Math.max(280, desk.width - 16)}px`;
      win.style.height = `${Math.max(260, desk.height - 168 - 84)}px`;
    });
  });
}

function restoreTheme() {
  try {
    const saved = localStorage.getItem("anujos-theme");
    if (THEMES.some((t) => t.id === saved)) setTheme(saved);
  } catch { /* ignore */ }
}

buildIcons();
wireDockMagnify();
wireChrome();
restoreTheme();
tick();
setInterval(tick, 1000);
setTimeout(finishBoot, 1700);
