export type ConfidenceLevel = "High" | "Medium" | "Low";

export type Citation = {
  documentName: string;
  page: number;
  version: string;
};

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  confidence?: ConfidenceLevel;
  citations?: Citation[];
};

export type DocumentRecord = {
  id: string;
  docName: string;
  version: string;
  effectiveDate: string;
  category: "admin_guide" | "config" | "release_note" | "training";
  language: "th" | "en" | "mixed";
  status: "processing" | "active" | "archived" | "failed";
  pages: number;
};

export type FeedbackRecord = {
  id: string;
  question: string;
  answerSummary: string;
  rating: "up" | "down";
  confidence: ConfidenceLevel;
  createdAt: string;
};

export type ChecklistRequest = {
  serviceType: string;
  action: string;
  customerName?: string;
};

export type ChecklistItem = {
  step: number;
  title: string;
  detail: string;
  requiredParameters: string[];
};
