import { BarChart3, TrendingUp, ScanLine, Lightbulb } from "lucide-react";

export function meta({}: any) {
  return [
    { title: "My budget - Conseils" },
    { name: "description", content: "Conseils for My budget" },
  ];
}

export default function Conseils() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 p-4">
      <h1 className="text-xl font-bold text-[#1e293b]">Conseils</h1>
      <p className="mt-4">Page des conseils - à implémenter</p>
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2">
        <div className="flex justify-around">
          <a href="/" className="flex flex-col items-center text-gray-500">
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
            className="flex flex-col items-center text-[#10b981] font-medium"
          >
            <Lightbulb className="w-6 h-6" />
            <span className="text-xs">Conseils</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
