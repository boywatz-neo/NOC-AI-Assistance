# Product Requirements Document (PRD)

## NOC AI Assistant — RAG-based Chatbot Web Application
 
| Field | Detail |

|---|---|

| **Document Version** | v1.0 |

| **Status** | Draft |

| **Last Updated** | June 2025 |

| **Document Owner** | Solution Architect / PMO |

| **Target Audience** | IT Committee, Development Team, PMO |
 
---
 
## 1. Product Overview
 
### 1.1 Background
 
องค์กรได้ Deploy ระบบ Network Monitoring ใหม่สำหรับรองรับ Streaming Service ของลูกค้า โดยทีม NOC (Network Operations Center) เป็นผู้ดูแลระบบและรับผิดชอบการปรับ Configuration เมื่อมีลูกค้าใหม่หรือมีการปรับเปลี่ยนบริการ
 
ปัญหาหลักที่พบ:

- User ขาดความเชี่ยวชาญในระบบใหม่ ทำให้เกิด Configuration Error บ่อยครั้ง

- เอกสารคู่มือจาก Vendor อยู่ในรูปแบบ PDF ขนาดใหญ่ ค้นหาข้อมูลยาก

- เอกสารมีการ Update ตาม Release Cycle (MA — Maintenance Agreement) ทุกปี

- ไม่มี Standard Operating Procedure (SOP) ที่ปรับตาม Context ของลูกค้าแต่ละราย
 
### 1.2 Product Vision
 
> สร้าง AI Chatbot สำหรับทีม NOC ที่สามารถตอบคำถามด้าน System Configuration และสร้าง Step-by-Step Checklist ได้ทันที โดยดึงข้อมูลจาก Knowledge Base ที่อัปเดตตาม Release ล่าสุดเสมอ
 
### 1.3 Goals & Success Metrics
 
| Goal | Metric | Target |

|---|---|---|

| ลดเวลาค้นหาข้อมูล | เวลาเฉลี่ยต่อ Task | ลดลง ≥ 60% |

| ลด Configuration Error | จำนวน Incident จาก Mis-config | ลดลง ≥ 50% |

| ความพึงพอใจ User | CSAT Score | ≥ 4.0/5.0 |

| ความถูกต้องของคำตอบ | Answer Accuracy (Human Eval) | ≥ 85% |

| Document Freshness | เวลา Update หลัง Release ใหม่ | ≤ 3 วันทำการ |
 
---
 
## 2. Users & Personas
 
### 2.1 Primary User — NOC Operator
 
- **ระดับ:** ปฏิบัติการหน้างาน (Non-Technical ต่อระบบใหม่)

- **งานหลัก:** Monitor ระบบ, Config เมื่อรับลูกค้าใหม่หรือปรับบริการ

- **Pain Point:** ต้องเปิด PDF ขนาดใหญ่ค้นเอง, ไม่แน่ใจว่าเอกสารเวอร์ชันไหน Active

- **ต้องการ:** คำตอบที่ทันที ถูกต้อง พร้อม Checklist ขั้นตอน
 
### 2.2 Secondary User — NOC Supervisor / Team Lead
 
- **งานหลัก:** ตรวจสอบคุณภาพงาน, อนุมัติ Config สำคัญ

- **ต้องการ:** ดู Audit Log, ประเมินความถูกต้องของ AI
 
### 2.3 Admin User — IT / Document Manager
 
- **งานหลัก:** Upload เอกสารใหม่, จัดการ Version, Monitor ระบบ

- **ต้องการ:** หน้า Admin สำหรับ Document Management
 
---
 
## 3. Functional Requirements
 
### 3.1 Core Features
 
#### F-01: AI Chat Interface

- User พิมพ์คำถามเป็นภาษาไทยหรืออังกฤษ (Mixed Language รองรับ)

- AI ตอบกลับพร้อม:

  - คำตอบที่อ่านเข้าใจง่าย

  - **Citation** อ้างอิงชื่อเอกสาร, หน้า, และ Version ที่ใช้

  - **Confidence Level** (High / Medium / Low)

- รองรับ Follow-up Question ใน Conversation เดียวกัน (Multi-turn)

- ปุ่ม Copy, Thumbs Up/Down Feedback
 
#### F-02: Configuration Checklist Generator

- User ระบุ Service Type และ Action (เช่น "เพิ่มลูกค้าใหม่ประเภท Live Streaming")

- AI สร้าง Step-by-Step Checklist พร้อม Parameter ที่ต้องกรอก

- Export Checklist เป็น PDF หรือ Copy to Clipboard
 
#### F-03: Document Version Management

- ระบบแสดง Active Release Version ที่กำลังใช้งานอยู่

- User สามารถเลือกดู Release ก่อนหน้าได้ (Read-only)

- Admin Upload PDF ใหม่ → ระบบ Re-index อัตโนมัติ → Mark Previous Version เป็น Archived
 
#### F-04: Admin Document Portal

- Upload PDF (Single / Batch)

- กำหนด Document Metadata: ชื่อ, Version, Effective Date, Category

- ดู Indexing Status (Pending / Processing / Active / Failed)

- ลบหรือ Deprecate เอกสารเก่า
 
#### F-05: Feedback & Quality Loop

- User กด Thumbs Up/Down ต่อแต่ละคำตอบ

- Admin ดู Feedback Dashboard

- Flag คำตอบที่ Confidence ต่ำ เพื่อ Human Review
 
### 3.2 Non-Functional Requirements
 
| หมวด | ข้อกำหนด |

|---|---|

| **Performance** | Response Time ≤ 5 วินาที สำหรับ 95% ของ Query |

| **Availability** | 99.5% Uptime ในชั่วโมงทำการ |

| **Concurrency** | รองรับ User พร้อมกัน ≥ 50 คน |

| **Security** | Access ได้เฉพาะ Intranet เท่านั้น |

| **Language** | รองรับภาษาไทยและอังกฤษทั้ง Input/Output |

| **Browser** | Chrome, Edge (ไม่ต้อง Install App) |
 
---
 
## 4. Recommended Tech Stack
 
### 4.1 Architecture Overview
 
```

[NOC User Browser]

       │ HTTPS (Intranet Only)

       ▼

[Frontend — Next.js / React]

       │ REST API / WebSocket

       ▼

[Backend API — FastAPI (Python)]

       ├──► [RAG Engine]

       │         ├── LLM: Azure OpenAI (GPT-4o)

       │         └── Vector Search: Azure AI Search

       │

       ├──► [Document Processor]

       │         ├── PDF Parser: PyMuPDF / Unstructured.io

       │         └── Chunking + Embedding Pipeline

       │

       └──► [Database]

                 ├── PostgreSQL (Metadata, Logs, Feedback)

                 └── Azure Blob Storage (PDF Files)

```
 
### 4.2 Stack Breakdown
 
| Layer | Technology | เหตุผล |

|---|---|---|

| **Frontend** | Next.js 14 + TypeScript + Tailwind CSS | SSR รองรับดี, UI Component ครบ, Deploy ง่าย |

| **Backend API** | FastAPI (Python 3.11+) | เร็ว, async รองรับ, Ecosystem AI/ML ดีที่สุด |

| **LLM** | Azure OpenAI (GPT-4o) | Enterprise-grade, Data ไม่ออกนอก Azure Region, SLA รับประกัน |

| **Embedding Model** | Azure OpenAI text-embedding-3-large | Multilingual รองรับไทย-อังกฤษได้ดี |

| **Vector Store** | Azure AI Search (Semantic Search) | Managed Service, รองรับ Hybrid Search (Keyword + Vector) |

| **PDF Processing** | PyMuPDF + Unstructured.io | OCR รองรับ, Extract ตาราง/รูปได้ |

| **Database** | PostgreSQL (Azure Database) | Metadata, User Feedback, Audit Log |

| **File Storage** | Azure Blob Storage | เก็บ PDF ต้นฉบับ, Version แยกชัดเจน |

| **Deployment** | Docker + Nginx (On-Premise / Azure VM) | Deploy บน Intranet ได้ ไม่ต้องพึ่ง Public Cloud 100% |

| **Monitoring** | Azure Monitor + Application Insights | Log, Alert, Performance Dashboard |
 
### 4.3 RAG Pipeline Detail
 
```

PDF Upload

   │

   ▼

[Pre-processing]

  ├── OCR (ถ้าเป็น Scanned PDF)

  ├── Extract Text + Tables

  └── Tag: {doc_name, version, release_date, category}

   │

   ▼

[Chunking Strategy]

  ├── Chunk Size: ~512 tokens, Overlap: 50 tokens

  └── Preserve Section Headers เป็น Metadata

   │

   ▼

[Embedding]

  └── text-embedding-3-large → Vector

   │

   ▼

[Azure AI Search Index]

  ├── Vector Field (Semantic)

  └── Keyword Field (BM25 Hybrid)

   │

   ▼

[Query Time]

  ├── User Query → Embed → Hybrid Search

  ├── Filter: release_version = ACTIVE

  ├── Retrieve Top-K Chunks

  └── GPT-4o Generate Answer + Citation

```
 
---
 
## 5. User Interface Requirements
 
### 5.1 หน้า Chat (Main)

- Chat Bubble แยก User / AI ชัดเจน

- แสดง Source Citation ใต้คำตอบ (ชื่อไฟล์ + หน้า + Version)

- Sidebar: ประวัติ Conversation (ภายใน Session)

- Badge แสดง Active Release Version มุมบนขวา

- ปุ่ม "สร้าง Checklist" สำหรับ Config Task โดยเฉพาะ
 
### 5.2 หน้า Admin

- Dashboard: จำนวน Document, Status, Last Update

- Upload Zone: Drag & Drop PDF พร้อมกรอก Metadata

- Document List: แสดง Version, Status (Active/Archived), Indexing Progress

- Feedback Log: คำถาม, คำตอบ, Rating ของ User
 
### 5.3 UI/UX Principles

- ภาษา: Thai/English Mixed Interface

- Design: Clean, Professional สำหรับ Enterprise

- Mobile-friendly (Responsive) สำหรับ Tablet หน้างาน

- Dark/Light Mode (Optional Phase 2)
 
---
 
## 6. Data & Document Management
 
### 6.1 Document Versioning Schema
 
```

documents/

├── {system_name}/

│   ├── v2024.1/          ← Archived

│   ├── v2024.2/          ← Archived  

│   └── v2025.1/          ← ACTIVE (MA Release ปัจจุบัน)

│       ├── admin_guide.pdf

│       ├── config_manual.pdf

│       └── release_notes.pdf

```
 
### 6.2 Document Metadata Fields
 
| Field | Type | Description |

|---|---|---|

| `doc_id` | UUID | Unique ID |

| `doc_name` | String | ชื่อเอกสาร |

| `version` | String | เช่น "v2025.1" |

| `release_date` | Date | วันที่ MA Release |

| `effective_until` | Date | null = ยัง Active |

| `category` | Enum | admin_guide / config / release_note / training |

| `language` | Enum | th / en / mixed |

| `status` | Enum | processing / active / archived |
 
### 6.3 Version Update Process
 
1. Admin Upload PDF ใหม่พร้อม Metadata

2. ระบบ Process + Index ใน Background

3. เมื่อ Index สำเร็จ → Admin กด "Set as Active"

4. ระบบ Auto-archive Version เก่าอัตโนมัติ

5. User เห็น Badge Version เปลี่ยน + Notification Toast
 
---
 
## 7. Security & Access Control
 
| ข้อกำหนด | รายละเอียด |

|---|---|

| **Network Access** | Intranet Only — Block จาก Public Internet |

| **Authentication** | ไม่ต้อง Login (Trust Intranet Network) — Phase 1 |

| **Admin Access** | Basic Auth หรือ IP Whitelist สำหรับ Admin Portal |

| **Data Storage** | PDF และ Vector Index อยู่ใน Private Infrastructure ทั้งหมด |

| **LLM Data Privacy** | ใช้ Azure OpenAI Private Endpoint — Data ไม่ใช้ Train Model |

| **Audit Log** | บันทึก Query ทุกรายการ (ไม่เก็บ PII) |
 
---
 
## 8. Constraints & Assumptions
 
### 8.1 Constraints

- Deploy บน Intranet เท่านั้น ไม่มี Internet Dependency ในขณะใช้งาน

- LLM ต้องใช้ Azure OpenAI (ไม่ใช้ OpenAI Public API) เพื่อ Data Privacy

- เอกสาร PDF มาจาก Vendor เท่านั้น ห้าม User Upload เอกสารเอง (Phase 1)
 
### 8.2 Assumptions

- องค์กรมี Azure Subscription อยู่แล้ว หรือสามารถจัดหาได้

- เอกสาร PDF จาก Vendor มี Text Layer (ไม่ใช่ Scanned ทั้งหมด)

- มี IT Admin อย่างน้อย 1 คนดูแลระบบ Document Upload

- Vendor ส่งเอกสาร Release ใหม่ภายใน 2 สัปดาห์หลัง MA Update
 
---
 
## 9. Out of Scope (Phase 1)
 
- ❌ Integration กับระบบ Ticketing หรือ ITSM

- ❌ Voice Input / Speech-to-Text

- ❌ Mobile Native App (iOS/Android)

- ❌ Single Sign-On (SSO) / Active Directory Integration

- ❌ Multi-tenant (รองรับหลายองค์กร)

- ❌ Real-time System Monitoring Integration

- ❌ Auto-generate SOP จาก Live Config
 
---
 
## 10. Implementation Roadmap
 
### Phase 1 — MVP (สัปดาห์ 1–8)

- [ ] Setup Infrastructure (Azure OpenAI, AI Search, Blob Storage)

- [ ] PDF Processing Pipeline (Parse, Chunk, Embed, Index)

- [ ] RAG Backend API (FastAPI)

- [ ] Basic Chat Interface (Next.js)

- [ ] Admin Upload Portal

- [ ] Deploy บน Intranet (Docker + Nginx)
 
### Phase 2 — Enhancement (สัปดาห์ 9–16)

- [ ] Checklist Generator Feature

- [ ] Multi-turn Conversation Memory

- [ ] Feedback Dashboard

- [ ] Version Management UI

- [ ] Performance Optimization & Load Testing
 
### Phase 3 — Advanced (สัปดาห์ 17+)

- [ ] SSO / AD Integration

- [ ] ITSM Integration (Ticketing)

- [ ] Analytics Dashboard สำหรับ Management

- [ ] API สำหรับ 3rd Party Integration
 
---
 
## 11. Open Questions
 
| # | คำถาม | Owner | Due |

|---|---|---|---|

| Q1 | Azure OpenAI Region ที่ใช้งานได้ใน Intranet คืออะไร? | IT Infra | — |

| Q2 | เอกสาร PDF ทั้งหมดมีกี่ไฟล์ และขนาดรวมเท่าไหร่? | Document Owner | — |

| Q3 | Vendor ส่ง Release Notes พร้อม PDF หรือแยก? | Vendor Manager | — |

| Q4 | มี Budget Cap สำหรับ Azure OpenAI Token Usage? | PMO / Finance | — |

| Q5 | ต้องการ Audit Log เก็บนานแค่ไหน? (Compliance) | IT Security | — |
 
---
 
## 12. Appendix
 
### A. Glossary
 
| คำศัพท์ | ความหมาย |

|---|---|

| **RAG** | Retrieval-Augmented Generation — เทคนิค AI ที่ดึงข้อมูลจาก Knowledge Base มาช่วยสร้างคำตอบ |

| **NOC** | Network Operations Center — ทีมปฏิบัติการเครือข่าย |

| **MA** | Maintenance Agreement — สัญญาบำรุงรักษาระบบ รายปี |

| **Embedding** | การแปลง Text เป็น Vector สำหรับ Semantic Search |

| **Vector Store** | ฐานข้อมูลสำหรับเก็บและค้นหา Vector (Semantic Index) |

| **Chunk** | ส่วนย่อยของเอกสารที่แบ่งเพื่อ Indexing |

| **Citation** | การอ้างอิงแหล่งที่มาของคำตอบ (ชื่อไฟล์ + หน้า) |
 
### B. Reference Documents

- Executive Summary: NOC AI Assistant (v1.0)

- Vendor System Documentation (ตามเวอร์ชันปัจจุบัน)

- Azure OpenAI Service Documentation
 
---
 
*Document Version: 1.0 | Status: Draft | For IT Committee & Development Team Review*

 