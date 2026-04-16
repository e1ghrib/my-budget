import type { Route } from "./+types/scan";
import {
  BarChart3,
  TrendingUp,
  ScanLine,
  Lightbulb,
  Mic,
  Camera,
  Edit2,
  X,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

export function meta({}: any) {
  return [
    { title: "My budget - Flux de saisie" },
    {
      name: "description",
      content: "Flux de saisie OCR et Voice pour My budget",
    },
  ];
}

interface DetectedItem {
  id: string;
  name: string;
  price: number;
  category: string;
  source: "scan" | "voice";
}

type FlowState = "idle" | "loading" | "confirmation" | "editing";

export default function DataInputFlow() {
  const [flowState, setFlowState] = useState<FlowState>("idle");
  const [detectedItems, setDetectedItems] = useState<DetectedItem[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    name: "",
    price: 0,
    category: "",
  });

  // Simuler un scan photo
  const handlePhotoScan = async () => {
    setFlowState("loading");
    // Simulation du traitement IA
    setTimeout(() => {
      setDetectedItems([
        {
          id: "1",
          name: "Lait Centrale 1L",
          price: 18.5,
          category: "Produits laitiers",
          source: "scan",
        },
        {
          id: "2",
          name: "Pain complet 650g",
          price: 12.0,
          category: "Boulangerie",
          source: "scan",
        },
        {
          id: "3",
          name: "Yaourt Danone x4",
          price: 22.0,
          category: "Produits laitiers",
          source: "scan",
        },
      ]);
      setFlowState("confirmation");
    }, 2000);
  };

  // Simuler un scan vocal
  const handleVoiceScan = async () => {
    setFlowState("loading");
    // Simulation du traitement IA
    setTimeout(() => {
      setDetectedItems([
        {
          id: "v1",
          name: "Essence - Station Total",
          price: 450.0,
          category: "Transport",
          source: "voice",
        },
        {
          id: "v2",
          name: "Restaurant - Couscous",
          price: 95.0,
          category: "Restauration",
          source: "voice",
        },
      ]);
      setFlowState("confirmation");
    }, 1500);
  };

  // Ouvrir le formulaire d'édition
  const handleEdit = (item: DetectedItem) => {
    setEditingId(item.id);
    setEditForm({
      name: item.name,
      price: item.price,
      category: item.category,
    });
    setFlowState("editing");
  };

  // Sauvegarder les modifications
  const handleSaveEdit = () => {
    setDetectedItems(
      detectedItems.map((item) =>
        item.id === editingId
          ? {
              ...item,
              name: editForm.name,
              price: editForm.price,
              category: editForm.category,
            }
          : item,
      ),
    );
    setEditingId(null);
    setFlowState("confirmation");
  };

  // Supprimer un élément
  const handleDeleteItem = (id: string) => {
    setDetectedItems(detectedItems.filter((item) => item.id !== id));
  };

  // Valider tous les éléments
  const handleValidateAll = () => {
    console.log("Éléments validés:", detectedItems);
    alert(`${detectedItems.length} élément(s) enregistré(s) avec succès !`);
    setDetectedItems([]);
    setFlowState("idle");
  };

  // État IDLE - Boutons de capture
  if (flowState === "idle") {
    return (
      <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] pb-20">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Saisir des données</h1>
          <p className="text-sm text-gray-500 mt-1">
            Capturez vos reçus ou dictez vos dépenses
          </p>
        </div>

        <div className="px-4 space-y-4">
          {/* Photo Scan Button */}
          <button
            onClick={handlePhotoScan}
            className="w-full bg-white rounded-2xl p-6 flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div className="bg-[#ecfdf5] rounded-full p-4">
              <Camera className="w-6 h-6 text-[#10b981]" />
            </div>
            <div className="text-left flex-1">
              <p className="font-semibold text-[#1e293b]">Scanner un ticket</p>
              <p className="text-sm text-gray-500">
                Prenez une photo de votre reçu
              </p>
            </div>
          </button>

          {/* Voice Scan Button */}
          <button
            onClick={handleVoiceScan}
            className="w-full bg-white rounded-2xl p-6 flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div className="bg-[#ecfdf5] rounded-full p-4">
              <Mic className="w-6 h-6 text-[#10b981]" />
            </div>
            <div className="text-left flex-1">
              <p className="font-semibold text-[#1e293b]">Dicter une dépense</p>
              <p className="text-sm text-gray-500">
                Décrivez votre transaction à voix haute
              </p>
            </div>
          </button>
        </div>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2">
          <div className="flex justify-around">
            <a href="/" className="flex flex-col items-center text-gray-500">
              <BarChart3 className="w-6 h-6" />
              <span className="text-xs">Dashboard</span>
            </a>
            <a
              href="/stats"
              className="flex flex-col items-center text-gray-500"
            >
              <TrendingUp className="w-6 h-6" />
              <span className="text-xs">Stats</span>
            </a>
            <a
              href="/scan"
              className="flex flex-col items-center text-[#10b981] font-medium"
            >
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

  // État LOADING - Animation "IA en cours..."
  if (flowState === "loading") {
    return (
      <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] pb-20 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ecfdf5] rounded-full mb-4">
            <div className="animate-spin">
              <ScanLine className="w-8 h-8 text-[#10b981]" />
            </div>
          </div>
          <h2 className="text-xl font-semibold">IA en cours...</h2>
          <p className="text-sm text-gray-500 mt-2">
            Analyse de vos données en cours
          </p>
        </div>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2">
          <div className="flex justify-around">
            <a href="/" className="flex flex-col items-center text-gray-500">
              <BarChart3 className="w-6 h-6" />
              <span className="text-xs">Dashboard</span>
            </a>
            <a
              href="/stats"
              className="flex flex-col items-center text-gray-500"
            >
              <TrendingUp className="w-6 h-6" />
              <span className="text-xs">Stats</span>
            </a>
            <a
              href="/scan"
              className="flex flex-col items-center text-[#10b981] font-medium"
            >
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

  // État EDITING - Formulaire d'édition
  if (flowState === "editing" && editingId) {
    return (
      <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] pb-20">
        <div className="p-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Éditer l'élément</h1>
          <button
            onClick={() => setFlowState("confirmation")}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="px-4 space-y-6">
          <div className="bg-white rounded-2xl p-6 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nom de l'article
              </label>
              <input
                type="text"
                value={editForm.name}
                onChange={(e) =>
                  setEditForm({ ...editForm, name: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10b981]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Prix (DH)
              </label>
              <input
                type="number"
                step="0.01"
                value={editForm.price}
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    price: parseFloat(e.target.value),
                  })
                }
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10b981]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Catégorie
              </label>
              <select
                value={editForm.category}
                onChange={(e) =>
                  setEditForm({ ...editForm, category: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10b981]"
              >
                <option value="">Sélectionner une catégorie</option>
                <option value="Alimentation">Alimentation</option>
                <option value="Transport">Transport</option>
                <option value="Restauration">Restauration</option>
                <option value="Produits laitiers">Produits laitiers</option>
                <option value="Boulangerie">Boulangerie</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleSaveEdit}
            className="w-full bg-[#10b981] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#059669] transition-colors"
          >
            Enregistrer les modifications
          </button>
        </div>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2">
          <div className="flex justify-around">
            <a href="/" className="flex flex-col items-center text-gray-500">
              <BarChart3 className="w-6 h-6" />
              <span className="text-xs">Dashboard</span>
            </a>
            <a
              href="/stats"
              className="flex flex-col items-center text-gray-500"
            >
              <TrendingUp className="w-6 h-6" />
              <span className="text-xs">Stats</span>
            </a>
            <a
              href="/scan"
              className="flex flex-col items-center text-[#10b981] font-medium"
            >
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

  // État CONFIRMATION - Liste de confirmation
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] pb-24">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Confirmation des données</h1>
        <p className="text-sm text-gray-500 mt-1">
          {detectedItems.length} élément(s) détecté(s)
        </p>
      </div>

      <div className="px-4 space-y-3">
        {detectedItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl p-4 flex items-start justify-between hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="flex-1">
              <p className="font-semibold text-[#1e293b]">{item.name}</p>
              <p className="text-xs text-gray-500 mt-1">{item.category}</p>
              <p className="text-lg font-bold text-[#10b981] mt-2">
                {item.price.toFixed(2)} DH
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleEdit(item)}
                className="bg-[#ecfdf5] text-[#10b981] p-2 rounded-lg hover:bg-[#d1fae5] transition-colors"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDeleteItem(item.id)}
                className="bg-red-50 text-red-600 p-2 rounded-lg hover:bg-red-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total Summary */}
      {detectedItems.length > 0 && (
        <div className="px-4 mt-6">
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <p className="text-sm text-gray-500">Total à enregistrer</p>
            <p className="text-2xl font-bold text-[#10b981]">
              {detectedItems
                .reduce((sum, item) => sum + item.price, 0)
                .toFixed(2)}{" "}
              DH
            </p>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="px-4 space-y-3 mt-6">
        <button
          onClick={handleValidateAll}
          className="w-full bg-[#10b981] text-white font-semibold py-4 px-4 rounded-lg hover:bg-[#059669] transition-colors flex items-center justify-center gap-2"
        >
          <CheckCircle2 className="w-5 h-5" />
          Tout Enregistrer
        </button>
        <button
          onClick={() => setFlowState("idle")}
          className="w-full bg-white text-[#1e293b] font-semibold py-3 px-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          Nouvelle saisie
        </button>
      </div>

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
          <a
            href="/scan"
            className="flex flex-col items-center text-[#10b981] font-medium"
          >
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
