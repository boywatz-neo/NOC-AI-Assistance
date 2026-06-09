import { sampleDocuments, sampleFeedback } from "@/lib/mock-data";

export function AdminPanel() {
  return (
    <section className="panel p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-ink">Admin Portal</h2>
          <p className="mt-1 text-sm text-slate-500">
            Upload, indexing status, version visibility, and feedback review.
          </p>
        </div>
        <div className="rounded-3xl border border-dashed border-reef/40 bg-tide/10 px-4 py-3 text-sm text-reef">
          Drag & drop PDF upload is represented in prototype scope.
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Documents</p>
          <p className="mt-2 text-3xl font-semibold text-ink">3</p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Active version</p>
          <p className="mt-2 text-3xl font-semibold text-ink">v2025.1</p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Low-confidence answers</p>
          <p className="mt-2 text-3xl font-semibold text-ink">1</p>
        </div>
      </div>

      <div className="mt-8 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            Document inventory
          </h3>
          <div className="mt-4 overflow-hidden rounded-3xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50 text-left text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-medium">Document</th>
                  <th className="px-4 py-3 font-medium">Version</th>
                  <th className="px-4 py-3 font-medium">Category</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {sampleDocuments.map((document) => (
                  <tr key={document.id}>
                    <td className="px-4 py-3 text-ink">{document.docName}</td>
                    <td className="px-4 py-3">{document.version}</td>
                    <td className="px-4 py-3">{document.category}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                        {document.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            Feedback log
          </h3>
          <div className="mt-4 space-y-4">
            {sampleFeedback.map((record) => (
              <article key={record.id} className="rounded-3xl bg-slate-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-ink">
                    {record.rating === "up" ? "Thumbs Up" : "Needs Review"}
                  </span>
                  <span className="text-xs text-slate-500">{record.createdAt}</span>
                </div>
                <p className="mt-3 text-sm font-medium text-ink">{record.question}</p>
                <p className="mt-2 text-sm text-slate-600">{record.answerSummary}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.22em] text-slate-500">
                  Confidence {record.confidence}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
