import { ChatMessage, ChecklistItem, DocumentRecord, FeedbackRecord } from "@/lib/types";

export const activeVersion = "v2025.1";

export const initialMessages: ChatMessage[] = [
  {
    id: "m1",
    role: "assistant",
    content:
      "สวัสดีครับ ผมช่วยตอบคำถามด้าน configuration, release version และสร้าง checklist ให้ทีม NOC ได้ทันทีจาก knowledge base เวอร์ชันปัจจุบัน",
    confidence: "High",
    citations: [
      {
        documentName: "config_manual.pdf",
        page: 12,
        version: activeVersion
      }
    ]
  }
];

export const sampleDocuments: DocumentRecord[] = [
  {
    id: "doc-1",
    docName: "config_manual.pdf",
    version: "v2025.1",
    effectiveDate: "2025-06-03",
    category: "config",
    language: "mixed",
    status: "active",
    pages: 214
  },
  {
    id: "doc-2",
    docName: "admin_guide.pdf",
    version: "v2025.1",
    effectiveDate: "2025-06-03",
    category: "admin_guide",
    language: "en",
    status: "active",
    pages: 96
  },
  {
    id: "doc-3",
    docName: "release_notes.pdf",
    version: "v2024.2",
    effectiveDate: "2024-09-18",
    category: "release_note",
    language: "en",
    status: "archived",
    pages: 42
  }
];

export const sampleFeedback: FeedbackRecord[] = [
  {
    id: "fb-1",
    question: "How do I enable a new live streaming customer profile?",
    answerSummary: "Generated a seven-step pre-check and provisioning flow.",
    rating: "up",
    confidence: "High",
    createdAt: "2026-06-09 09:12"
  },
  {
    id: "fb-2",
    question: "เพิ่ม customer ใหม่ต้องแก้ parameter ตัวไหนบ้าง",
    answerSummary: "Returned parameter checklist but cited older release note context.",
    rating: "down",
    confidence: "Low",
    createdAt: "2026-06-09 10:46"
  }
];

export const checklistTemplate: ChecklistItem[] = [
  {
    step: 1,
    title: "Validate active release",
    detail: "Confirm the current active release before touching customer-specific configuration.",
    requiredParameters: ["release version", "change window"]
  },
  {
    step: 2,
    title: "Review customer service profile",
    detail: "Check service tier, ingest endpoints, redundancy requirement, and SLA notes.",
    requiredParameters: ["customer name", "service type", "redundancy mode"]
  },
  {
    step: 3,
    title: "Prepare configuration values",
    detail: "Collect required IDs, stream profile values, IP ranges, and ACL parameters.",
    requiredParameters: ["profile ID", "ingest IP", "output profile", "ACL values"]
  },
  {
    step: 4,
    title: "Apply configuration in staging or approved target",
    detail: "Use the vendor configuration sequence in order and capture the ticket reference.",
    requiredParameters: ["target environment", "ticket/reference number"]
  },
  {
    step: 5,
    title: "Run validation checks",
    detail: "Verify health status, stream routing, and policy enforcement after the change.",
    requiredParameters: ["validation commands", "expected service state"]
  }
];

export function buildMockAnswer(question: string): ChatMessage {
  const normalized = question.toLowerCase();
  const mentionsChecklist =
    normalized.includes("checklist") ||
    normalized.includes("step") ||
    normalized.includes("เพิ่มลูกค้า") ||
    normalized.includes("new customer");

  return {
    id: `msg-${Date.now()}`,
    role: "assistant",
    content: mentionsChecklist
      ? "สำหรับงานนี้ ผมแนะนำให้เริ่มจากตรวจสอบ active release, ยืนยัน service profile ของลูกค้า, เตรียม parameter ที่จำเป็น และค่อย apply configuration ตามลำดับ พร้อม validation หลังเปลี่ยนแปลง"
      : "จากเอกสารเวอร์ชันปัจจุบัน ระบบควรอ้างอิง active release ก่อนทุกครั้ง และใช้ค่าพารามิเตอร์ตาม service profile ของลูกค้าเพื่อหลีกเลี่ยง configuration mismatch",
    confidence: mentionsChecklist ? "High" : "Medium",
    citations: [
      {
        documentName: mentionsChecklist ? "config_manual.pdf" : "admin_guide.pdf",
        page: mentionsChecklist ? 34 : 18,
        version: activeVersion
      },
      {
        documentName: "release_notes.pdf",
        page: 7,
        version: activeVersion
      }
    ]
  };
}
