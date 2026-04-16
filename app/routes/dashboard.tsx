import {
  BarChart3,
  TrendingUp,
  ScanLine,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Wallet,
  Tag,
} from "lucide-react";
import BottomNav from "../BottomNav";

export function meta({}: any) {
  return [
    { title: "My Budget - Dashboard" },
    { name: "description", content: "My Budget smart budget dashboard" },
  ];
}

export default function Dashboard() {
  const solde = 1450;
  const used = 3050;
  const budgetTotal = 4500;
  const saved = 320;
  const usagePercent = Math.round((used / budgetTotal) * 100);

  const rappels = [
    {
      id: 1,
      title: "Facture Internet",
      vendor: "Inwi",
      days: 2,
      amount: 200,
      badge: "BIENTÔT",
    },
    {
      id: 2,
      title: "Électricité",
      vendor: "ONEE",
      days: 5,
      amount: 350,
      badge: "À VENIR",
    },
    {
      id: 3,
      title: "Loyer",
      vendor: "Propriétaire",
      days: 12,
      amount: 2500,
      badge: "Important",
    },
    {
      id: 4,
      title: "Eau",
      vendor: "Lydec",
      days: 8,
      amount: 85,
      badge: "Doum",
    },
  ];

  const recommandations = [
    {
      id: 1,
      category: "Huile",
      scanned: "Huile A",
      price: 25,
      alt: "Huile B",
      altPrice: 19,
      delta: -6,
      label: "TOP🫒",
      note: "Même qualité, prix malin!",
    },
    {
      id: 2,
      category: "Lait",
      scanned: "Lait Centrale",
      price: 8.5,
      alt: "Lait Jaouda",
      altPrice: 6.5,
      delta: -2,
      label: "TOP🥛",
      note: "Wfar flous kol yom!",
    },
  ];

  return (
    <div className="min-h-screen  pb-28">
      <header className="bg-white shadow-sm px-4 pt-6 pb-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm text-slate-500">My Budget</p>
            <h1 className="text-2xl font-semibold text-[#1e293b]">
              Budget intelligent
            </h1>
          </div>
          <button className="inline-flex items-center gap-2 rounded-2xl bg-[#10b981] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#10b981]/20">
            <ScanLine className="w-4 h-4" /> Scanner
          </button>
        </div>

        <div className="mt-6 grid gap-4">
          <div className="rounded-[30px]  p-5 shadow-[0_25px_60px_rgba(15,23,42,0.28)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                  Solde réel disponible
                </p>
                <p className="mt-2 text-4xl font-semibold text-[#10b981]">
                  {solde} DH
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Flouss ready, mzyan pour tes achats
                </p>
              </div>
              <div className="rounded-3xl bg-slate-900 px-4 py-3 text-sm ">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#10b981]" />
                  <span className="text-white">Budget sécurisé</span>
                </div>
                <p className="mt-3 text-lg font-semibold text-white">
                  +320 DH économisé
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-3xl bg-slate-900/80 p-4">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>Budget mensuel</span>
                <span>{usagePercent}% utilisé</span>
              </div>
              <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-3 rounded-full bg-[#10b981] transition-all duration-500"
                  style={{ width: `${usagePercent}%` }}
                />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/70 p-3">
                  <p className="text-sm text-slate-400">Dépensé</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {used} DH
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-950/70 p-3">
                  <p className="text-sm text-slate-400">Solde</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {budgetTotal} DH
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[26px] bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3 text-slate-700">
                <Sparkles className="w-5 h-5 text-[#10b981]" />
                <p className="font-semibold">Conseil Mizane IA</p>
              </div>
              <p className="mt-3 text-sm text-slate-500">
                Tu as dépensé 15% de plus en courses cette semaine. Essaie le
                marché du dimanche à Derb Sultan — les légumes kaynin b taman
                mzyan! 🥬
              </p>
              <button className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-[#1e293b] px-4 py-2 text-xs font-semibold text-white">
                <Tag className="w-4 h-4" /> Voir les détails
              </button>
            </div>
            <div className="rounded-[26px] bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3 text-slate-700">
                <Wallet className="w-5 h-5 text-[#10b981]" />
                <p className="font-semibold">Dépenses</p>
              </div>
              <p className="mt-3 text-sm text-slate-500">
                3.050 DH dépensés ce mois-ci
              </p>
              <p className="mt-4 text-2xl font-semibold text-[#1e293b]">68%</p>
              <p className="text-sm text-slate-400">
                Reste du budget : 1.450 DH
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 pt-6 space-y-6">
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Rappels Zen 🧘</h2>
              <p className="text-sm text-slate-500">
                Tes charges fixes arrivent, tkoune prêt(e)
              </p>
            </div>
            <a
              href="/factures"
              className="rounded-2xl bg-white px-3 py-2 text-sm font-semibold text-[#1e293b] shadow-sm hover:shadow-md transition-shadow"
            >
              Voir tout
            </a>
          </div>

          <div className="grid gap-3">
            {rappels.map((rappel) => (
              <div
                key={rappel.id}
                className="rounded-[26px] bg-white p-4 shadow-sm"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                      {rappel.badge}
                    </p>
                    <p className="mt-2 font-semibold text-[#1e293b]">
                      {rappel.title}
                    </p>
                    <p className="text-sm text-slate-500">
                      {rappel.vendor} · Dans {rappel.days} jours
                    </p>
                  </div>
                  <div className="rounded-3xl bg-[#ecfdf5] px-3 py-2 text-sm font-semibold text-[#10b981]">
                    {rappel.amount} DH
                  </div>
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
