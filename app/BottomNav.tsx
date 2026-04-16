import {
  BarChart3,
  TrendingUp,
  ScanLine,
  Lightbulb,
  FileText,
  Plus,
} from "lucide-react";
import { Link, useLocation } from "react-router";

const navItems = [
  { href: "/", icon: BarChart3, label: "Dashboard" },
  { href: "/stats", icon: TrendingUp, label: "Stats" },
  { href: "/scan", icon: Plus, label: "Ajouter" },
  { href: "/factures", icon: FileText, label: "Factures" },
  { href: "/conseils", icon: Lightbulb, label: "Conseils" },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 bg-white/95 border-t border-slate-200/80 backdrop-blur-md p-3">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={`flex flex-col items-center ${
                isActive ? "text-[#10b981] font-semibold" : "text-slate-500"
              }`}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-[11px]">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
