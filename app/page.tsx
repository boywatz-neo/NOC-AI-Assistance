const painPoints = [
  {
    label: "เอกสาร Vendor PDF ใหญ่",
    detail: "Operator ต้องค้นหลายไฟล์และหลายหน้าเพื่อหา configuration ที่ถูกต้อง"
  },
  {
    label: "Release version สับสน",
    detail: "ไม่ชัดเจนว่า manual เวอร์ชันไหนเป็น active release สำหรับงานปัจจุบัน"
  },
  {
    label: "Config error จากความไม่มั่นใจ",
    detail: "ขั้นตอนและ parameter ที่ต้องตรวจสอบไม่ได้ถูกรวมเป็น checklist เดียว"
  }
];

const capabilities = [
  "RAG Chatbot ภาษาไทย/อังกฤษ",
  "Citation จากเอกสาร หน้า และ version",
  "Active release awareness",
  "Checklist generator สำหรับ config task",
  "Feedback loop สำหรับ human review"
];

const outcomes = [
  { metric: "ลดเวลา", value: "ค้นหาคู่มือเร็วขึ้น", tone: "teal" },
  { metric: "ลดพลาด", value: "ลด mis-configuration", tone: "rose" },
  { metric: "ตรวจสอบได้", value: "ทุกคำตอบมี citation", tone: "blue" }
];

const roadmap = [
  { phase: "Phase 0", name: "Pitch landing", status: "Now" },
  { phase: "Phase 1", name: "Scaffold + data foundation", status: "Next" },
  { phase: "Phase 2", name: "Seeded RAG chat", status: "Planned" },
  { phase: "Phase 3", name: "PDF ingestion", status: "Planned" },
  { phase: "Phase 4", name: "Checklist + feedback", status: "Planned" }
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <div className="badgeRow">
              <span className="badge tealBadge">Phase 0</span>
              <span className="badge blueBadge">Vercel-ready pitch</span>
            </div>
            <h1>NOC AI Assistant</h1>
            <p className="lead">
              ผู้ช่วย AI สำหรับทีม NOC ที่ช่วยค้นหาคำตอบจากคู่มือ Vendor PDF
              พร้อม citation, active release version และ checklist สำหรับงาน configuration
              ที่ต้องการความแม่นยำ
            </p>
            <div className="outcomeGrid">
              {outcomes.map((item) => (
                <div className="metricCard" key={item.metric}>
                  <div className={`metricLabel ${item.tone}`}>{item.metric}</div>
                  <div className="metricValue">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <ChatMockup />
        </div>
      </section>

      <section className="shell section">
        <div className="overviewGrid">
          <div>
            <p className="eyebrow teal">Project Overview</p>
            <h2>จากคู่มือขนาดใหญ่ สู่คำตอบที่ตรวจสอบแหล่งที่มาได้</h2>
            <p className="sectionText">
              MVP นี้มุ่งพิสูจน์ workflow หลัก: upload เอกสาร, index ด้วย RAG,
              ถามตอบพร้อม citation และสร้าง checklist สำหรับงาน configuration
              โดยยังคง deployment ให้เรียบง่ายผ่าน Next.js บน Vercel
            </p>
          </div>
          <div className="painGrid">
            {painPoints.map((item) => (
              <article className="plainCard" key={item.label}>
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="shell capabilityGrid">
          <div>
            <p className="eyebrow blue">MVP Capabilities</p>
            <h2>ความสามารถหลักที่จะถูกพิสูจน์ใน MVP</h2>
            <div className="capabilityList">
              {capabilities.map((item) => (
                <div className="capabilityItem" key={item}>
                  <span className="statusDot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <ArchitectureStrip />
        </div>
      </section>

      <section className="shell section">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow amber">Product Mockups</p>
            <h2>หน้าจอคร่าว ๆ สำหรับ pitch session</h2>
          </div>
          <p>
            Mockup ชุดนี้เป็น static preview เพื่อสื่อสาร workflow เท่านั้น
            ยังไม่ใช่ feature จริง และไม่มีการเชื่อมต่อ API ใน Phase 0
          </p>
        </div>

        <div className="mockupGrid">
          <AdminMockup />
          <ChecklistMockup />
          <FeedbackMockup />
          <RoadmapPanel />
        </div>
      </section>
    </main>
  );
}

function ChatMockup() {
  return (
    <div className="chatMockup">
      <div className="mockupTopbar">
        <div>
          <div className="mockupTitle">Chat Workspace</div>
          <div className="mockupSubtext">Active release: v2025.1</div>
        </div>
        <span className="pill success">High confidence</span>
      </div>
      <div className="chatBody">
        <aside className="chatSidebar">
          <div className="sidebarTitle">Conversations</div>
          {["Live setup", "Profile check", "Release note"].map((item, index) => (
            <div className={index === 0 ? "sideItem active" : "sideItem"} key={item}>
              {item}
            </div>
          ))}
        </aside>
        <div className="chatPanel">
          <div className="userBubble">
            เพิ่มลูกค้า Live Streaming ใหม่ ต้องตรวจ parameter อะไรบ้าง?
          </div>
          <div className="answerBubble">
            <div className="answerTitle">AI Answer</div>
            <p>
              ตรวจสอบ service profile, bandwidth policy, origin endpoint และ customer route
              ก่อน activate configuration ตาม release ปัจจุบัน
            </p>
            <div className="chipRow">
              {["config_manual.pdf", "page 12-13", "v2025.1"].map((item) => (
                <span className="chip blueChip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="inputGhost">Ask follow-up question...</div>
        </div>
      </div>
    </div>
  );
}

function ArchitectureStrip() {
  const steps = [
    "Browser",
    "Next.js App Router",
    "Route Handlers",
    "Azure OpenAI",
    "PostgreSQL Vector",
    "Blob Storage"
  ];

  return (
    <div className="architectureCard">
      <div className="mockupTitle">Target Architecture</div>
      <div className="architectureSteps">
        {steps.map((step, index) => (
          <div className="architectureStep" key={step}>
            <div className="stepNumber">{index + 1}</div>
            <div className="stepText">{step}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminMockup() {
  return (
    <article className="mockupCard">
      <div className="cardTop">
        <div>
          <h3>Admin Document Portal</h3>
          <p>Upload, index status, release control</p>
        </div>
        <span className="pill warning">Admin</span>
      </div>
      <div className="uploadBox">
        <div>Drop PDF manual here</div>
        <span>version, effective date, category, language</span>
      </div>
      <div className="documentList">
        {[
          ["config_manual.pdf", "Indexed", "successText"],
          ["release_notes.pdf", "Processing", "warningText"],
          ["training_guide.pdf", "Archived", "mutedText"]
        ].map(([name, status, className]) => (
          <div className="documentRow" key={name}>
            <span>{name}</span>
            <strong className={className}>{status}</strong>
          </div>
        ))}
      </div>
    </article>
  );
}

function ChecklistMockup() {
  return (
    <article className="mockupCard">
      <h3>Checklist Generator</h3>
      <p>Service type + action + customer context</p>
      <div className="formPreview">
        {["Live Streaming", "Add customer", "Premium route"].map((item) => (
          <div className="fieldPreview" key={item}>
            {item}
          </div>
        ))}
      </div>
      <div className="checklistSteps">
        {["Verify service profile", "Confirm bandwidth policy", "Validate origin endpoint"].map(
          (item, index) => (
            <div className="checklistStep" key={item}>
              <div className="checkNumber">{index + 1}</div>
              <div>
                <div className="stepTitle">{item}</div>
                <div className="chipRow">
                  {["required", "citation"].map((chip) => (
                    <span className="chip neutralChip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </article>
  );
}

function FeedbackMockup() {
  return (
    <article className="mockupCard">
      <h3>Feedback & Quality Loop</h3>
      <p>Human review สำหรับคำตอบที่เสี่ยงหรือ confidence ต่ำ</p>
      <div className="feedbackButtons">
        <span className="feedbackButton good">Helpful</span>
        <span className="feedbackButton review">Needs review</span>
      </div>
      <div className="reviewBox">
        <div className="reviewHeader">
          <strong>Review queue</strong>
          <span className="pill danger">Low confidence</span>
        </div>
        <p>
          คำถามเกี่ยวกับ parameter ที่ไม่พบใน active release จะถูก flag ให้ supervisor
          ตรวจสอบ
        </p>
      </div>
    </article>
  );
}

function RoadmapPanel() {
  return (
    <article className="mockupCard">
      <h3>Roadmap</h3>
      <div className="roadmapList">
        {roadmap.map((item) => (
          <div className="roadmapItem" key={item.phase}>
            <div>
              <strong>{item.phase}</strong>
              <span>{item.name}</span>
            </div>
            <em>{item.status}</em>
          </div>
        ))}
      </div>
    </article>
  );
}
