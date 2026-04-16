import {
  TrendingDown,
  TrendingUp,
  Maximize,
  ChevronDown,
  PieChart as PieIcon,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import BottomNav from "../BottomNav";

// --- Data Constants ---
const EVOLUTION_DATA = [
  { name: "Oct", value: 3800 },
  { name: "Nov", value: 4000 },
  { name: "Déc", value: 4600 },
  { name: "Jan", value: 3200 },
  { name: "Fév", value: 3100 },
  { name: "Mar", value: 3050 },
];

const WEEKLY_DATA = [
  { day: "Lun", height: "h-6" },
  { day: "Mar", height: "h-2" },
  { day: "Mer", height: "h-12" },
  { day: "Jeu", height: "h-4" },
  { day: "Ven", height: "h-16" },
  { day: "Sam", height: "h-24", active: true },
  { day: "Dim", height: "h-8" },
];

const CATEGORY_DATA = [
  { name: "Alimentation", value: 1200, color: "#10b981" },
  { name: "Loyer", value: 800, color: "#1e293b" },
  { name: "Transport", value: 320, color: "#6366f1" },
  { name: "Factures", value: 430, color: "#f59e0b" },
  { name: "Loisirs", value: 300, color: "#ec4899" },
];

const TRENDS = [
  {
    id: 1,
    label: "Courses",
    change: "+12%",
    note: "Slight increase this week",
    color: "text-emerald-500",
  },
  {
    id: 2,
    label: "Café & resto",
    change: "-8%",
    note: "Good control",
    color: "text-emerald-500",
  },
  {
    id: 3,
    label: "Transports",
    change: "+5%",
    note: "Garde un œil",
    color: "text-amber-500",
  },
];

export default function FullStatsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] pb-28 font-sans">
      <header className="px-6 pt-10 pb-6">
        <h1 className="text-[26px] font-bold text-[#0f172a] tracking-tight">
          Mes Statistiques
        </h1>
      </header>

      <main className="px-5 space-y-6">
        {/* KPI Cards Row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-[28px] shadow-sm border border-slate-50">
            <div className="flex items-center gap-2 text-[#10b981]">
              <TrendingDown size={16} strokeWidth={3} />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Ce Mois
              </span>
            </div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-3xl font-black text-[#1e293b]">3 050</span>
              <span className="text-sm font-bold text-slate-400">DH</span>
            </div>
            <p className="mt-1 text-[13px] font-semibold text-[#10b981]">
              ↓ 12% vs mois dernier
            </p>
          </div>

          <div className="bg-white p-5 rounded-[28px] shadow-sm border border-slate-50">
            <div className="flex items-center gap-2 text-[#f59e0b]">
              <TrendingUp size={16} strokeWidth={3} />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Économies
              </span>
            </div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-3xl font-black text-[#1e293b]">320</span>
              <span className="text-sm font-bold text-slate-400">DH</span>
            </div>
            <p className="mt-1 text-[13px] font-semibold text-[#f59e0b]">
              ↑ Grâce à Mizane AI
            </p>
          </div>
        </div>

        {/* Evolution Chart Section */}
        <section className="bg-white p-6 rounded-[32px] shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-[17px] font-bold text-[#0f172a]">
                Évolution des dépenses
              </h2>
              <p className="text-[13px] text-slate-400 font-medium">
                6 derniers mois
              </p>
            </div>
            <button className="flex items-center gap-1.5 bg-[#f1f5f9] px-3 py-2 rounded-xl text-[13px] font-bold text-slate-600">
              Mois <ChevronDown size={14} />
            </button>
          </div>

          <div className="h-40 w-full -ml-4">
            <ResponsiveContainer width="110%" height="100%">
              <AreaChart data={EVOLUTION_DATA}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#10b981"
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#colorVal)"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex justify-between px-6 mt-2 text-[11px] font-bold text-slate-300 uppercase tracking-tighter">
              {EVOLUTION_DATA.map((d) => (
                <span key={d.name}>{d.name}</span>
              ))}
            </div>
          </div>

          <button className="absolute right-5 bottom-12 bg-[#34d399] text-white pl-5 pr-6 py-3.5 rounded-[20px] flex items-center gap-3 shadow-xl shadow-emerald-200/50 active:scale-95 transition-transform">
            <Maximize size={20} strokeWidth={2.5} />
            <span className="font-bold text-[15px]">Scanner</span>
          </button>
        </section>

        {/* Weekly Bar Chart Section */}
        <section className="bg-white p-6 rounded-[32px] shadow-sm">
          <h2 className="text-[17px] font-bold text-[#0f172a]">
            Cette semaine
          </h2>
          <p className="text-[13px] text-slate-400 font-medium mb-8">
            Dépenses jour par jour
          </p>
          <div className="flex justify-between items-end h-28 px-1">
            {WEEKLY_DATA.map((item) => (
              <div key={item.day} className="flex flex-col items-center gap-4">
                <div
                  className={`w-9 rounded-xl transition-all duration-500 ${item.active ? "bg-[#10b981]" : "bg-slate-100"} ${item.height}`}
                />
                <span
                  className={`text-[12px] font-bold ${item.active ? "text-slate-800" : "text-slate-300"}`}
                >
                  {item.day}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Category Pie Chart Section */}
        <section className="bg-white p-6 rounded-[32px] shadow-sm">
          <h2 className="text-[17px] font-bold text-[#0f172a] mb-8">
            Répartition par catégorie
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-10">
            <div className="w-[140px] h-[140px] flex-shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={CATEGORY_DATA}
                    innerRadius={45}
                    outerRadius={70}
                    dataKey="value"
                    stroke="none"
                  >
                    {CATEGORY_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full space-y-4">
              {CATEGORY_DATA.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-[15px] font-bold text-slate-400">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-[15px] font-black text-[#0f172a]">
                    {item.value}{" "}
                    <span className="text-[12px] font-bold text-slate-300">
                      DH
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM SECTION: Trends & Remaining Budget (From your initial logic) */}
        <section className="grid gap-4 sm:grid-cols-2 pb-6">
          {/* Trend Card */}
          <div className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-50">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[17px] font-bold">Tendance hebdo</h2>
              <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[11px] font-black uppercase">
                Fresh
              </span>
            </div>
            <div className="space-y-4">
              {TRENDS.map((trend) => (
                <div
                  key={trend.id}
                  className="flex items-center justify-between bg-slate-50/50 p-4 rounded-3xl"
                >
                  <div>
                    <p className="text-[14px] font-bold text-[#1e293b]">
                      {trend.label}
                    </p>
                    <p className="text-[12px] text-slate-400 font-medium">
                      {trend.note}
                    </p>
                  </div>
                  <span className={`text-[14px] font-black ${trend.color}`}>
                    {trend.change}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Remaining Budget Card */}
          <div className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-50">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[17px] font-bold">Budget restant</h2>
              <PieIcon className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-4xl font-black text-[#1e293b]">
                  1 450 <span className="text-lg text-slate-300">DH</span>
                </p>
                <p className="text-[13px] text-slate-400 font-medium mt-1">
                  Prévision semaine prochaine
                </p>
              </div>
              {/* Visual Progress Bar */}
              <div className="h-28 w-14 bg-slate-100 rounded-3xl relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 bg-emerald-500 h-[52%] rounded-t-xl" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
