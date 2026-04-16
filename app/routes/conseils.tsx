import {
  BarChart3,
  TrendingUp,
  ScanLine,
  Lightbulb,
  FileText,
} from "lucide-react";
import BottomNav from "../BottomNav";

export function meta({}: any) {
  return [
    { title: "My budget - Conseils" },
    { name: "description", content: "Conseils for My budget" },
  ];
}

export default function Conseils() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 p-4 pb-20">
      <h1 className="text-xl font-bold text-[#1e293b]">Conseils</h1>
      <p className="mt-4">Page des conseils - à implémenter</p>
      <BottomNav />
    </div>
  );
}
