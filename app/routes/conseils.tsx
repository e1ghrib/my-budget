import { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Lightbulb,
  Sparkles,
  Wallet,
  CheckCircle2,
  PiggyBank,
  Coffee,
  Zap,
  Target,
  ShoppingCart,
  ChevronRight,
  Leaf,
} from "lucide-react";
import BottomNav from "~/BottomNav";

type Category = "Tous" | "AI" | "Courses" | "Factures" | "Épargne";

function ConseilsPersonnalisesIA() {
  const [iaState, setIaState] = useState<"idle" | "loading" | "done">("idle");

  const handleGenerate = () => {
    setIaState("loading");
    setTimeout(() => setIaState("done"), 1800);
  };

  if (iaState === "idle") {
    return (
      <div className="relative overflow-hidden rounded-3xl bg-emerald-900 p-6 text-white shadow-lg shadow-emerald-900/20">
        <Leaf className="absolute -right-4 -top-4 h-24 w-24 opacity-10 rotate-12" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-emerald-500/20 p-1.5 rounded-lg">
              <Sparkles size={16} className="text-emerald-300" />
            </div>
            <h3 className="text-lg font-bold">Analyse Intelligente</h3>
          </div>
          <p className="text-sm text-emerald-100/80 leading-snug">
            Laissez notre IA scanner vos habitudes pour identifier vos plus
            grandes opportunités d'épargne.
          </p>
          <button
            onClick={handleGenerate}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 py-3.5 font-black text-emerald-950 transition-all active:scale-[0.98] hover:bg-emerald-300"
          >
            Générer mes conseils
          </button>
        </div>
      </div>
    );
  }

  if (iaState === "loading") {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl bg-emerald-50/50 p-10 border-2 border-dashed border-emerald-200">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute h-full w-full animate-ping rounded-full bg-emerald-200"></div>
          <Leaf className="h-8 w-8 text-emerald-600 animate-bounce" />
        </div>
        <p className="mt-4 font-bold text-emerald-900">
          Calcul des économies...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="flex items-center justify-between px-1">
        <h3 className="font-bold text-emerald-900 flex items-center gap-2">
          <Sparkles size={18} className="text-emerald-500" /> Pépites pour vous
        </h3>
        <button
          onClick={() => setIaState("idle")}
          className="text-xs font-bold text-emerald-600 underline"
        >
          Relancer
        </button>
      </div>

      <div className="rounded-2xl bg-white p-4 border-l-4 border-emerald-500 shadow-sm">
        <div className="flex gap-4">
          <div className="rounded-xl bg-emerald-100 p-2.5 text-emerald-700 h-fit">
            <ShoppingCart size={20} />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 text-sm">
              Courses : -150 DH possibles
            </h4>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              Vos achats de produits laitiers sont 20% plus élevés que la
              moyenne. Testez la marque distributeur ce mois-ci.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Conseils() {
  const [activeTab, setActiveTab] = useState<Category>("Tous");
  const categories: Category[] = ["Tous", "Courses", "Factures", "Épargne"];

  return (
    <div className="min-h-screen  pb-24">
      {/* Header with Green Gradient background */}
      <header className="bg-gradient-to-b  px-6 pt-12 pb-6">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-600 p-2 rounded-xl text-white shadow-lg ">
            <TrendingUp size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-black text-emerald-950 tracking-tight">
              Conseils
            </h1>
            <p className="text-emerald-700/70 text-xs font-medium uppercase tracking-widest">
              Growth Mindset
            </p>
          </div>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all ${
                activeTab === cat
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-200"
                  : "bg-white text-emerald-700 border border-emerald-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <main className="px-5 space-y-8">
        {activeTab === "Tous" && <ConseilsPersonnalisesIA />}

        <section className="space-y-4">
          <div className="flex items-center gap-2 mb-2 px-1 text-emerald-900/40">
            <Lightbulb size={16} />
            <span className="text-xs font-bold uppercase tracking-tighter">
              Bibliothèque de conseils
            </span>
          </div>

          <AdviceCard
            icon={<Target className="text-emerald-600" />}
            title="La règle 50/30/20"
            desc="L'automatisme est la clé. Séparez votre salaire dès réception."
            impact="Haut Impact"
            difficulty="Expert"
          />

          <AdviceCard
            icon={<Coffee className="text-emerald-500" />}
            title="Micro-Épargne Café"
            desc="Un café 'maison' économise 300 DH/mois. Calculez sur un an !"
            impact="+3.600 DH/an"
            difficulty="Débutant"
          />

          <AdviceCard
            icon={<Zap className="text-emerald-400" />}
            title="Facture ONEE"
            desc="Éteignez vos multiprises la nuit. Jusqu'à 8% d'économie."
            impact="-50 DH/mois"
            difficulty="Moyen"
          />
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

function AdviceCard({ icon, title, desc, impact, difficulty }: any) {
  return (
    <div className="flex gap-4 rounded-[2rem] bg-white p-5 shadow-sm border border-emerald-50 hover:border-emerald-200 transition-all group active:bg-emerald-50/50">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
        {icon}
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-black text-slate-800">{title}</h4>
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full uppercase tracking-tighter">
            {difficulty}
          </span>
        </div>
        <p className="mt-1 text-xs text-slate-500 leading-relaxed pr-2">
          {desc}
        </p>
        <div className="mt-3 flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="text-[11px] font-bold text-emerald-700 italic">
            {impact}
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <ChevronRight
          size={18}
          className="text-emerald-200 group-hover:text-emerald-500 transition-colors"
        />
      </div>
    </div>
  );
}
