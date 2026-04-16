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
    <div className="min-h-screen bg-base-100 pb-28">
      <header className="bg-base-100 shadow-sm px-4 pt-6 pb-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm text-base-content/60">My Budget</p>
            <h1 className="text-2xl font-semibold text-base-content">
              Budget intelligent
            </h1>
          </div>
        </div>

        <div className="mt-6 grid gap-4">
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-base-content/60">
                    Solde réel disponible
                  </p>
                  <p className="mt-2 text-4xl font-semibold text-success">
                    {solde} DH
                  </p>
                </div>
              </div>

              <div className="mt-5 card bg-base-200 shadow-md">
                <div className="card-body">
                  <div className="flex items-center justify-between text-sm text-base-content">
                    <span>Budget mensuel</span>
                    <span>{usagePercent}% utilisé</span>
                  </div>
                  <progress
                    className="progress progress-success mt-3"
                    value={usagePercent}
                    max="100"
                  ></progress>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="card bg-base-300 shadow-sm">
                      <div className="card-body p-3">
                        <p className="text-sm text-base-content/60">Dépensé</p>
                        <p className="mt-2 text-lg font-semibold text-base-content">
                          {used} DH
                        </p>
                      </div>
                    </div>
                    <div className="card bg-base-300 shadow-sm">
                      <div className="card-body p-3">
                        <p className="text-sm text-base-content/60">Solde</p>
                        <p className="mt-2 text-lg font-semibold text-base-content">
                          {budgetTotal} DH
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <div className="flex items-center gap-3 text-base-content">
                  <Sparkles className="w-5 h-5 text-success" />
                  <p className="font-semibold">Conseil Mizane IA</p>
                </div>
                <p className="mt-3 text-sm text-base-content/70">
                  Tu as dépensé 15% de plus en courses cette semaine. Essaie le
                  marché du dimanche à Derb Sultan — les légumes kaynin b taman
                  mzyan! 🥬
                </p>
                <button className="btn btn-sm btn-ghost border-success text-success hover:bg-success hover:text-success-content mt-4">
                  <Tag className="w-4 h-4" /> Voir les détails
                </button>
              </div>
            </div>
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <div className="flex items-center gap-3 text-base-content">
                  <Wallet className="w-5 h-5 text-success" />
                  <p className="font-semibold">Dépenses</p>
                </div>
                <p className="mt-3 text-sm text-base-content/70">
                  3.050 DH dépensés ce mois-ci
                </p>
                <p className="mt-4 text-2xl font-semibold text-base-content">
                  68%
                </p>
                <p className="text-sm text-base-content/70">
                  Reste du budget : 1.450 DH
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 pt-6 space-y-6">
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-base-content">
                Rappels
              </h2>
              <p className="text-sm text-base-content/60">
                Tes charges fixes arrivent bientôt
              </p>
            </div>
            <a href="/factures" className="btn btn-sm btn-ghost">
              Voir tout
            </a>
          </div>

          <div className="grid gap-3">
            {rappels.map((rappel) => (
              <div key={rappel.id} className="card bg-base-100 shadow-sm">
                <div className="card-body p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="badge badge-ghost">{rappel.badge}</div>
                      <p className="mt-2 font-semibold text-base-content">
                        {rappel.title}
                      </p>
                      <p className="text-sm text-base-content/60">
                        {rappel.vendor} · Dans {rappel.days} jours
                      </p>
                    </div>
                    <div className="badge badge-success badge-lg">
                      {rappel.amount} DH
                    </div>
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
