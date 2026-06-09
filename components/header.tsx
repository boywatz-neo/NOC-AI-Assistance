type HeaderProps = {
  title: string;
  subtitle: string;
};

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-reef">
          NOC AI Assistant
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-ink">{title}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{subtitle}</p>
      </div>
      <div className="panel inline-flex items-center gap-3 px-5 py-4">
        <div className="h-3 w-3 rounded-full bg-tide" />
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Active release</p>
          <p className="text-lg font-semibold text-ink">v2025.1</p>
        </div>
      </div>
    </div>
  );
}
