import { BarChart3, TrendingUp, ScanLine, Lightbulb } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My budget - Dashboard" },
    { name: "description", content: "Fintech dashboard for My budget" },
  ];
}

export default function Dashboard() {
  // Mock data
  const solde = 1450;
  const budgetUsage = 65; // percentage
  const rappels = [
    { id: 1, title: "Facture Internet", days: 2, amount: 200 },
    { id: 2, title: "Loyer", days: 5, amount: 1200 },
  ];
  const recommandations = [
    {
      id: 1,
      scanned: "Huile A",
      price: 25,
      alternative: "Huile B",
      altPrice: 19,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#1e293b]">My budget</h1>
        <button className="bg-[#10b981] text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2">
          <span>📷</span> Scanner Ticket
        </button>
      </header>

      <main className="p-4 space-y-6">
        {/* Hero Card - Solde Réel Disponible */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-[#1e293b] mb-2">
            Solde Réel Disponible
          </h2>
          <p className="text-3xl font-bold text-[#10b981]">{solde} DH</p>
          <p className="text-sm text-gray-600 mt-1">
            Disponible pour dépenses (Darija: flouss dyal lyoum)
          </p>
        </div>

        {/* Progress Bar - Monthly Budget */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-[#1e293b] mb-2">
            Utilisation Budget Mensuel
          </h3>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div
              className="bg-[#10b981] h-4 rounded-full transition-all duration-300"
              style={{ width: `${budgetUsage}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600">
            {budgetUsage}% utilisé ce mois-ci
          </p>
        </div>

        {/* Rappels (Zen) Section */}
        <section>
          <h3 className="text-lg font-semibold text-[#1e293b] mb-4">
            Rappels (Zen)
          </h3>
          <div className="space-y-3">
            {rappels.map((rappel) => (
              <div
                key={rappel.id}
                className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-[#10b981]"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-[#1e293b]">{rappel.title}</p>
                    <p className="text-sm text-gray-600">
                      Dans {rappel.days} jours
                    </p>
                  </div>
                  <p className="text-lg font-bold text-[#10b981]">
                    {rappel.amount} DH
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommandations Section */}
        <section>
          <h3 className="text-lg font-semibold text-[#1e293b] mb-4">
            Recommandations
          </h3>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-sm text-gray-600 mb-3">
              Produit scanné vs alternative moins chère
            </p>
            {recommandations.map((rec) => (
              <div key={rec.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-[#1e293b]">{rec.scanned}</p>
                  <p className="text-sm text-gray-600">{rec.price} DH</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">vs</p>
                </div>
                <div>
                  <p className="font-medium text-[#10b981]">
                    {rec.alternative}
                  </p>
                  <p className="text-sm text-[#10b981]">{rec.altPrice} DH</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2">
        <div className="flex justify-around">
          <a
            href="/"
            className="flex flex-col items-center text-[#10b981] font-medium"
          >
            <BarChart3 className="w-6 h-6" />
            <span className="text-xs">Dashboard</span>
          </a>
          <a href="/stats" className="flex flex-col items-center text-gray-500">
            <TrendingUp className="w-6 h-6" />
            <span className="text-xs">Stats</span>
          </a>
          <a href="/scan" className="flex flex-col items-center text-gray-500">
            <ScanLine className="w-6 h-6" />
            <span className="text-xs">Scan</span>
          </a>
          <a
            href="/conseils"
            className="flex flex-col items-center text-gray-500"
          >
            <Lightbulb className="w-6 h-6" />
            <span className="text-xs">Conseils</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
