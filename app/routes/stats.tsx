import {
  BarChart3,
  TrendingUp,
  ScanLine,
  Lightbulb,
  FileText,
} from "lucide-react";

export function meta({}: any) {
  return [
    { title: "My budget - Stats" },
    { name: "description", content: "Statistics for My budget" },
  ];
}

export default function Stats() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 p-4 pb-20">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1e293b]">Statistiques</h1>
        <p className="text-slate-500 text-sm mt-1">
          Suivez vos dépenses et vos trends
        </p>
      </div>

      {/* Quick Access to Bills */}
      <a
        href="/factures"
        className="block bg-white rounded-xl p-5 mb-6 border border-slate-100 hover:shadow-md transition-shadow"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-50 rounded-full p-3">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="font-semibold text-[#1e293b]">Mes Charges Fixes</p>
              <p className="text-xs text-slate-500">
                Gérer vos factures récurrentes
              </p>
            </div>
          </div>
          <svg
            className="w-5 h-5 text-slate-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </a>

      <p className="mt-4 text-slate-500">
        Page des statistiques - à implémenter
      </p>
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2">
        <div className="flex justify-around">
          <a href="/" className="flex flex-col items-center text-gray-500">
            <BarChart3 className="w-6 h-6" />
            <span className="text-xs">Dashboard</span>
          </a>
          <a
            href="/stats"
            className="flex flex-col items-center text-[#10b981] font-medium"
          >
            <TrendingUp className="w-6 h-6" />
            <span className="text-xs">Stats</span>
          </a>
          <a href="/scan" className="flex flex-col items-center text-gray-500">
            <ScanLine className="w-6 h-6" />
            <span className="text-xs">Scan</span>
          </a>
          <a
            href="/factures"
            className="flex flex-col items-center text-gray-500"
          >
            <FileText className="w-6 h-6" />
            <span className="text-xs">Factures</span>
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
