import {
  BarChart3,
  TrendingUp,
  ScanLine,
  Lightbulb,
  FileText,
  ArrowDownRight,
  ArrowUpRight,
  Calendar,
  Clock3,
  Wallet,
  PieChart,
} from "lucide-react";

export function meta({}: any) {
  return [
    { title: "My budget - Stats" },
    {
      name: "description",
      content: "Smart spending and budget stats for My budget",
    },
  ];
}

export default function Stats() {
  const summary = [
    {
      id: 1,
      label: "Budget mensuel",
      value: "4.500 DH",
      icon: Wallet,
      tone: "text-[#10b981]",
    },
    {
      id: 2,
      label: "Économies",
      value: "+320 DH",
      icon: ArrowUpRight,
      tone: "text-[#1e293b]",
    },
    {
      id: 3,
      label: "Transactions",
      value: "18",
      icon: Clock3,
      tone: "text-[#1e293b]",
    },
  ];

  const categories = [
    {
      id: 1,
      name: "Courses",
      amount: 1650,
      percent: 37,
      color: "bg-[#10b981]/15 text-[#10b981]",
    },
    {
      id: 2,
      name: "Transport",
      amount: 820,
      percent: 18,
      color: "bg-[#1e293b]/10 text-[#1e293b]",
    },
    {
      id: 3,
      name: "Factures",
      amount: 950,
      percent: 21,
      color: "bg-[#0f172a]/10 text-[#0f172a]",
    },
    {
      id: 4,
      name: "Autres",
      amount: 580,
      percent: 13,
      color: "bg-[#475569]/10 text-[#475569]",
    },
  ];

  const trends = [
    {
      id: 1,
      label: "Courses",
      change: "+12%",
      note: "Slight increase this week",
    },
    { id: 2, label: "Café & resto", change: "-8%", note: "Good kontrol" },
    { id: 3, label: "Transports", change: "+5%", note: "Garde un œil" },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] pb-28">
      <header className="px-4 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">My budget</p>
            <h1 className="text-2xl font-semibold">
              Statistiques intelligentes
            </h1>
          </div>
          <button className="rounded-2xl bg-[#10b981] px-4 py-2 text-sm font-semibold text-white shadow-sm">
            Scanner
          </button>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[30px] bg-white p-5 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
              Consommation
            </p>
            <p className="mt-3 text-3xl font-semibold">3.050 DH</p>
            <p className="mt-2 text-sm text-slate-500">Dépensé ce mois-ci</p>
          </div>
          <div className="rounded-[30px] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                Performance
              </p>
              <div className="rounded-2xl bg-[#ecfdf5] px-3 py-1 text-sm font-semibold text-[#10b981]">
                +6.8%
              </div>
            </div>
            <p className="mt-3 text-3xl font-semibold">68%</p>
            <p className="mt-2 text-sm text-slate-500">Budget utilisé</p>
          </div>
        </div>
      </header>

      <main className="px-4 space-y-6">
        <section className="grid gap-4 sm:grid-cols-3">
          {summary.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-[28px] bg-white p-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`rounded-2xl p-3 ${item.tone} bg-[#ecfdf5]/80`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="mt-2 text-xl font-semibold">{item.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        <section className="rounded-[30px] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Dépenses par catégorie</h2>
              <p className="text-sm text-slate-500">
                Regarde où ton argent part le plus
              </p>
            </div>
            <button className="rounded-2xl bg-[#1e293b] px-3 py-2 text-xs font-semibold text-white">
              Voir plus
            </button>
          </div>
          <div className="mt-5 space-y-3">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex items-center justify-between rounded-3xl bg-[#f8fafc] p-4"
              >
                <div>
                  <p className="font-semibold text-[#1e293b]">
                    {category.name}
                  </p>
                  <p className="text-sm text-slate-500">{category.amount} DH</p>
                </div>
                <div className="text-right">
                  <p
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${category.color}`}
                  >
                    {category.percent}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[30px] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Tendance hebdo</h2>
                <p className="text-sm text-slate-500">Résumé rapide</p>
              </div>
              <div className="rounded-2xl bg-[#ecfdf5] px-3 py-1 text-xs font-semibold text-[#10b981]">
                Fresh
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {trends.map((trend) => (
                <div
                  key={trend.id}
                  className="flex items-center justify-between gap-3 rounded-3xl bg-[#f8fafc] p-4"
                >
                  <div>
                    <p className="font-medium text-[#1e293b]">{trend.label}</p>
                    <p className="text-sm text-slate-500">{trend.note}</p>
                  </div>
                  <div className="text-sm font-semibold text-[#10b981]">
                    {trend.change}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Budget restant</h2>
                <p className="text-sm text-slate-500">
                  Prévision semaine prochaine
                </p>
              </div>
              <PieChart className="w-6 h-6 text-[#10b981]" />
            </div>
            <div className="mt-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-4xl font-semibold text-[#1e293b]">
                  1.450 DH
                </p>
                <p className="text-sm text-slate-500">Reste de budget</p>
              </div>
              <div className="h-28 w-full max-w-[120px] overflow-hidden rounded-3xl bg-[#f8fafc]">
                <div
                  className="h-full rounded-3xl bg-[#10b981]"
                  style={{ width: "52%" }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-20 bg-white/95 border-t border-slate-200/80 backdrop-blur-md p-3">
        <div className="flex justify-around">
          <a href="/" className="flex flex-col items-center text-slate-500">
            <BarChart3 className="w-6 h-6" />
            <span className="text-[11px]">Dashboard</span>
          </a>
          <a
            href="/stats"
            className="flex flex-col items-center text-[#10b981] font-semibold"
          >
            <TrendingUp className="w-6 h-6" />
            <span className="text-[11px]">Stats</span>
          </a>
          <a href="/scan" className="flex flex-col items-center text-slate-500">
            <ScanLine className="w-6 h-6" />
            <span className="text-[11px]">Scan</span>
          </a>
          <a
            href="/factures"
            className="flex flex-col items-center text-slate-500"
          >
            <FileText className="w-6 h-6" />
            <span className="text-[11px]">Factures</span>
          </a>
          <a
            href="/conseils"
            className="flex flex-col items-center text-slate-500"
          >
            <Lightbulb className="w-6 h-6" />
            <span className="text-[11px]">Conseils</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
