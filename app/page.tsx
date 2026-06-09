import { AdminPanel } from "@/components/admin-panel";
import { ChatPanel } from "@/components/chat-panel";
import { ChecklistCard } from "@/components/checklist-card";
import { Header } from "@/components/header";
import { checklistTemplate } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
      <Header
        title="Spec-Driven Prototype"
        subtitle="Vercel-ready MVP shell for the NOC AI Assistant. This prototype focuses on PRD-aligned chat, checklist generation, document visibility, and admin feedback review."
      />

      <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <ChatPanel />
        <div className="space-y-8">
          <ChecklistCard initialItems={checklistTemplate} />
          <section className="panel p-6">
            <h2 className="text-lg font-semibold text-ink">Prototype Scope</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              <li>Includes mocked Phase 1 chat, checklist, admin dashboard, and release badge flows.</li>
              <li>API routes are contract-first placeholders for future FastAPI or server integration.</li>
              <li>Security, private networking, Azure services, and document indexing are documented in specs.</li>
            </ul>
          </section>
        </div>
      </div>

      <AdminPanel />
    </main>
  );
}
