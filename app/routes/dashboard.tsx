import {
  TrendingUp,
  Calendar,
  AlertCircle,
  Sparkles,
  Wallet,
  Plus,
  Scan,
  ChevronRight,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import BottomNav from "../BottomNav";

export function meta({}: any) {
  return [
    { title: "Dashboard | My Budget" },
    {
      name: "description",
      content: "Gérez votre budget intelligemment en vert",
    },
  ];
}

export default function Dashboard() {
  const solde = 1450;
  const used = 3050;
  const budgetTotal = 4500;
  const usagePercent = Math.round((used / budgetTotal) * 100);

  // Green-centric status colors
  const getStatusClasses = (percent: number) => {
    if (percent < 70) return "bg-emerald-500 text-white";
    if (percent < 90) return "bg-amber-400 text-amber-950";
    return "bg-rose-500 text-white";
  };

  const rappels = [
    { id: 1, title: "Facture Internet", vendor: "Inwi", days: 2, amount: 200 },
    { id: 2, title: "Électricité", vendor: "ONEE", days: 5, amount: 350 },
    { id: 3, title: "Loyer", vendor: "Propriétaire", days: 12, amount: 2500 },
  ];

  return (
    <div className="min-h-screen bg-[#F0F4F2] pb-28">
      {/* --- HERO SECTION --- */}
      <header className="bg-emerald-900 px-6 pt-12 pb-16 rounded-b-[3rem] shadow-2xl shadow-emerald-900/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50"></div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-500 p-1.5 rounded-lg">
                <LeafIcon className="text-emerald-950 w-5 h-5" />
              </div>
              <h1 className="text-xl font-black text-white tracking-tight italic">
                MyBudget
              </h1>
            </div>
            <div className="h-10 w-10 rounded-full border-2 border-emerald-500/30 p-0.5">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                alt="Profile"
                className="rounded-full bg-emerald-100"
              />
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-bold text-emerald-300 uppercase tracking-widest opacity-80">
              Solde disponible
            </p>
            <div className="flex items-baseline gap-2">
              <p className="text-5xl font-black text-white">{solde}</p>
              <p className="text-xl font-bold text-emerald-400">DH</p>
            </div>
          </div>
        </div>
      </header>

      {/* --- QUICK ACTIONS --- */}
      <div className="px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 bg-white p-4 rounded-2xl shadow-sm border border-emerald-100 active:scale-95 transition-all">
            <div className="bg-emerald-100 p-2 rounded-xl text-emerald-700">
              <Plus size={20} />
            </div>
            <span className="font-bold text-sm text-emerald-900">Dépense</span>
          </button>
          <button className="flex items-center justify-center gap-2 bg-white p-4 rounded-2xl shadow-sm border border-emerald-100 active:scale-95 transition-all">
            <div className="bg-emerald-100 p-2 rounded-xl text-emerald-700">
              <Scan size={20} />
            </div>
            <span className="font-bold text-sm text-emerald-900">Scanner</span>
          </button>
        </div>
      </div>

      <main className="px-6 mt-8 space-y-8">
        {/* --- BUDGET TRACKER --- */}
        <section>
          <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-emerald-50">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-sm font-black text-emerald-950 uppercase tracking-tighter">
                  État du Budget
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  Mise à jour il y a 2 min
                </p>
              </div>
              <div
                className={`px-3 py-1 rounded-full text-xs font-black ${getStatusClasses(usagePercent)}`}
              >
                {usagePercent}%
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm font-bold">
                <span className="text-slate-400">Utilisé</span>
                <span className="text-emerald-900">{used} DH</span>
              </div>
              <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden p-1">
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all duration-1000"
                  style={{ width: `${usagePercent}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-black uppercase text-slate-400 tracking-widest pt-1">
                <span>0 DH</span>
                <span>Limite: {budgetTotal} DH</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- SMART INSIGHT --- */}
        <section>
          <div className="bg-emerald-100/50 border border-emerald-200 p-5 rounded-3xl flex gap-4 items-center">
            <div className="bg-emerald-500 text-white p-3 rounded-2xl shadow-lg shadow-emerald-200">
              <Sparkles size={20} />
            </div>
            <div className="flex-1">
              <p className="text-xs font-black text-emerald-800 uppercase">
                Conseil IA
              </p>
              <p className="text-sm text-emerald-900 leading-tight mt-0.5">
                Tu as dépensé 15% de plus en courses.{" "}
                <span className="font-bold">Check Derb Sultan!</span>
              </p>
            </div>
            <ArrowUpRight size={20} className="text-emerald-400" />
          </div>
        </section>

        {/* --- UPCOMING BILLS --- */}
        <section className="pb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-black text-emerald-950">
              Factures à venir
            </h2>
            <button className="text-xs font-bold text-emerald-600 hover:underline">
              Calendrier
            </button>
          </div>

          <div className="space-y-3">
            {rappels.map((rappel) => (
              <div
                key={rappel.id}
                className="bg-white p-4 rounded-2xl flex items-center justify-between group active:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl ${rappel.days <= 2 ? "bg-rose-50 text-rose-500" : "bg-emerald-50 text-emerald-600"}`}
                  >
                    {rappel.days <= 2 ? (
                      <AlertCircle size={20} />
                    ) : (
                      <Clock size={20} />
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">
                      {rappel.title}
                    </h4>
                    <p className="text-[11px] font-medium text-slate-400 uppercase tracking-tighter">
                      {rappel.vendor} • Dans {rappel.days} jours
                    </p>
                  </div>
                </div>
                <div className="text-right flex items-center gap-3">
                  <p className="font-black text-sm text-emerald-950">
                    {rappel.amount} DH
                  </p>
                  <ChevronRight
                    size={16}
                    className="text-slate-300 group-hover:text-emerald-500 transition-colors"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

// Custom Leaf/Growth Icon to replace Lucide if needed
function LeafIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a7 7 0 0 1-7 7c-1.15 0-2.21-.26-3.15-.72" />
      <path d="M15 11l-4 4" />
      <path d="M18 10l-4 4" />
    </svg>
  );
}
