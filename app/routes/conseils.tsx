import { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Plus,
  Lightbulb,
  FileText,
  Sparkles,
  TrendingDown,
  Wallet,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import BottomNav from "~/BottomNav";

export function meta({}: any) {
  return [
    { title: "My budget - Conseils" },
    { name: "description", content: "Conseils for My budget" },
  ];
}

// Composant: Conseils Personnalisés IA
function ConseilsPersonnalisesIA() {
  const [iaState, setIaState] = useState<"idle" | "loading" | "done">("idle");

  const handleGenerateAdvice = () => {
    setIaState("loading");
    setTimeout(() => {
      setIaState("done");
    }, 2000);
  };

  const handleReset = () => {
    setIaState("idle");
  };

  // État IDLE - Bouton d'activation
  if (iaState === "idle") {
    return (
      <div className="mt-6 mb-6">
        <button
          onClick={handleGenerateAdvice}
          className="w-full bg-gradient-to-r from-[#10b981] to-[#059669] text-white font-bold py-4 px-6 rounded-xl   flex items-center justify-center gap-3 group"
        >
          <Sparkles className="w-5 h-5 " />
          <span>Générer mes conseils IA</span>
        </button>
      </div>
    );
  }

  // État LOADING - Loader stylé
  if (iaState === "loading") {
    return (
      <div className="mt-6 mb-6 bg-white rounded-2xl p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#ecfdf5] to-[#d1fae5] rounded-full mb-4 animate-pulse">
          <Sparkles className="w-8 h-8 text-[#10b981] animate-spin" />
        </div>
        <h3 className="text-xl font-bold text-[#1e293b] mt-4">
          IA en cours d'analyse...
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          L'IA analyse vos statistiques de la semaine...
        </p>
      </div>
    );
  }

  // État DONE - Affichage des conseils
  return (
    <div className="mt-6 mb-6 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-[#1e293b]">
          Vos conseils personnalisés IA
        </h3>
        <button
          onClick={handleReset}
          className="text-sm text-[#10b981] font-semibold hover:text-[#059669] transition-colors"
        >
          Régénérer
        </button>
      </div>

      {/* Conseil 1: Alimentation - Alerte (Orange) */}
      <div className="bg-white rounded-2xl p-5 border-l-4 border-orange-500 hover:shadow-md transition-shadow">
        <div className="flex items-start gap-3">
          <TrendingDown className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <p className="font-bold text-[#1e293b]">Dépenses Alimentation</p>
            <p className="text-sm text-orange-700 mt-1 font-medium">
              ⚠️ Alerte: +25% cette semaine
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Vos dépenses en supermarché ont augmenté de 25%. Conseil :
              Privilégiez les achats en gros pour les produits secs (farine,
              huile).
            </p>
          </div>
        </div>
      </div>

      {/* Conseil 2: Loisirs - Alerte (Orange) */}
      <div className="bg-white rounded-2xl p-5 border-l-4 border-blue-500 hover:shadow-md transition-shadow">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <p className="font-bold text-[#1e293b]">Budget Café & Loisirs</p>
            <p className="text-sm text-blue-700 mt-1 font-medium">
              ⏱️ À 90% du budget
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Vous avez atteint 90% de votre budget 'Café'. Essayez de limiter à
              une sortie par jour pour finir le mois sereinement.
            </p>
          </div>
        </div>
      </div>

      {/* Conseil 3: Épargne - Succès (Vert) */}
      <div className="bg-white rounded-2xl p-5 border-l-4 border-[#10b981] hover:shadow-md transition-shadow">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-1 flex-shrink-0" />
          <div className="flex-1">
            <p className="font-bold text-[#1e293b]">Objectif Épargne</p>
            <p className="text-sm text-[#10b981] mt-1 font-medium">
              ✨ Bonne progression
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Statistique : En économisant 10 DH de plus par jour, vous
              atteindrez votre objectif 'Aïd' plus tôt que prévu.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={handleReset}
        className="w-full mt-4 bg-slate-100 text-slate-700 font-semibold py-3 rounded-xl hover:bg-slate-200 transition-colors"
      >
        Fermer les conseils
      </button>
    </div>
  );
}

export default function Conseils() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] pb-20">
      {/* Sticky Header */}
      <div className="bg-white border-b border-slate-100 p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-2xl font-bold">Conseils budgétaires</h1>
            <p className="text-sm text-gray-500 mt-1">
              Optimisez votre gestion financière
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 space-y-6 mt-4">
        {/* Conseils Personnalisés IA */}
        <ConseilsPersonnalisesIA />
        {/* Section: Conseils généraux */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-[#1e293b] flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-[#10b981]" />
            Conseils essentiels
          </h2>

          <div className="bg-white rounded-xl p-4 border border-slate-100 hover:shadow-md transition-shadow">
            <p className="font-semibold text-[#1e293b]">
              📊 Suivez vos dépenses régulièrement
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Enregistrez vos transactions quotidiennement pour mieux comprendre
              vos habitudes de dépense et identifier les domaines où vous pouvez
              économiser.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-100 hover:shadow-md transition-shadow">
            <p className="font-semibold text-[#1e293b]">
              💰 Établissez un budget mensuel
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Fixez un objectif de budget par catégorie (alimentation,
              transport, loisirs) et tenez-vous y pour mieux contrôler vos
              dépenses.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-100 hover:shadow-md transition-shadow">
            <p className="font-semibold text-[#1e293b]">🎯 La règle 50/30/20</p>
            <p className="text-sm text-gray-600 mt-2">
              Divisez votre revenu en 50% besoins, 30% envies, 20% épargne.
              C'est une stratégie éprouvée pour équilibrer finances et qualité
              de vie.
            </p>
          </div>
        </div>

        {/* Section: Économies au quotidien */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-[#1e293b] flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#10b981]" />
            Économies au quotidien
          </h2>

          <div className="bg-white rounded-xl p-4 border border-slate-100 hover:shadow-md transition-shadow">
            <p className="font-semibold text-[#1e293b]">
              🛒 Faites une liste avant de faire vos courses
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Les achats impulsifs coûtent cher. Une liste bien préparée vous
              aide à rester concentré et à économiser jusqu'à 30% sur vos
              courses.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-100 hover:shadow-md transition-shadow">
            <p className="font-semibold text-[#1e293b]">
              ☕ Réduisez les petites dépenses
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Les petits achats quotidiens (café, snacks) s'accumulent
              rapidement. En les limiter peut vous faire économiser 50-100 DH
              par semaine.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-100 hover:shadow-md transition-shadow">
            <p className="font-semibold text-[#1e293b]">
              🔍 Comparez vos tarifs d'abonnements
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Téléphone, internet, streaming... Vérifiez régulièrement si vos
              tarifs sont compétitifs. Les offres promotionnelles changent
              constamment.
            </p>
          </div>
        </div>

        {/* Section: Gestion des factures */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-[#1e293b] flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#10b981]" />
            Gestion des factures
          </h2>

          <div className="bg-white rounded-xl p-4 border border-slate-100 hover:shadow-md transition-shadow">
            <p className="font-semibold text-[#1e293b]">
              📋 Automatisez vos factures
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Mettez en place des prélèvements automatiques pour vos factures
              récurrentes. Cela évite les oublis et les frais de retard.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-100 hover:shadow-md transition-shadow">
            <p className="font-semibold text-[#1e293b]">
              ⚡ Économies d'énergie
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Réduisez votre consommation électrique (LED, éteindre les
              appareils inutilisés). Cela peut baisser votre facture de 15-20%.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-100 hover:shadow-md transition-shadow">
            <p className="font-semibold text-[#1e293b]">
              💧 Contrôlez votre consommation d'eau
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Des douches plus courtes, des fuites réparées rapidement... Les
              petits gestes réduisent votre facture et l'impact environnemental.
            </p>
          </div>
        </div>

        {/* Section: Investissement et épargne */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-[#1e293b] flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-[#10b981]" />
            Épargne & Investissement
          </h2>

          <div className="bg-white rounded-xl p-4 border border-slate-100 hover:shadow-md transition-shadow">
            <p className="font-semibold text-[#1e293b]">
              🏦 Commencez à épargner petit à petit
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Même 50 DH par semaine d'épargne représente 2600 DH par an. Les
              petits efforts ajoutés au fil du temps créent une vraie sécurité
              financière.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-100 hover:shadow-md transition-shadow">
            <p className="font-semibold text-[#1e293b]">
              🎯 Définissez des objectifs clairs
            </p>
            <p className="text-sm text-gray-600 mt-2">
              "Je veux économiser pour des vacances" est plus motivant que "Je
              dois économiser". Donnez-vous des objectifs concrets à court
              terme.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-100 hover:shadow-md transition-shadow">
            <p className="font-semibold text-[#1e293b]">
              📈 Augmentez votre fonds d'urgence
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Essayez de garder l'équivalent de 3-6 mois de dépenses en réserve.
              Cela vous protège contre les imprévus sans recourir à
              l'endettement.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
