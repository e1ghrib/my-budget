import type { Route } from "./+types/scan";
import {
  BarChart3,
  TrendingUp,
  ScanLine,
  Lightbulb,
  Camera,
} from "lucide-react";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My budget - Scan" },
    { name: "description", content: "Scan products for My budget" },
  ];
}

interface ScannedProduct {
  id: number;
  name: string;
  originalPrice: number;
  currentPrice: number;
  icon: string;
}

export default function Scan() {
  const [scannedProducts, setScannedProducts] = useState<ScannedProduct[]>([
    {
      id: 1,
      name: "Lait Centrale 1L",
      originalPrice: 5,
      currentPrice: 2,
      icon: "🥛",
    },
    {
      id: 2,
      name: "Pain de mie Harry's",
      originalPrice: 14,
      currentPrice: 4,
      icon: "🍞",
    },
    {
      id: 3,
      name: "Yaourt Danone x4",
      originalPrice: 22,
      currentPrice: 5,
      icon: "🥛",
    },
  ]);

  const handleSimulateScan = () => {
    alert("Simulation de scan - Fonctionnalité de caméra à intégrer");
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 pb-20">
      {/* Header */}
      <div className="p-4">
        <h1 className="text-2xl font-bold text-[#1e293b]">
          Scanner un produit
        </h1>
      </div>

      {/* Main Content */}
      <div className="px-4 space-y-6">
        {/* Scanner Section */}
        <div className="bg-white rounded-lg p-6 space-y-4">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-[#1e293b] mb-2">
              Scanner un produit
            </h2>
            <p className="text-sm text-gray-600">
              Scanne le code barré d'un produit pour trouver une alternative
              moins chère — wfar Rouad
            </p>
          </div>

          {/* Scan Frame */}
          <div className="flex justify-center">
            <div className="w-48 h-48 border-4 border-[#a1f0d9] rounded-lg flex items-center justify-center bg-gradient-to-br from-[#f0fdf4] to-[#ecfdf5] relative">
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-4 border-l-4 border-[#10b981]"></div>
              <div className="absolute top-2 right-2 w-6 h-6 border-t-4 border-r-4 border-[#10b981]"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-4 border-l-4 border-[#10b981]"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-4 border-r-4 border-[#10b981]"></div>

              {/* Scan lines animation */}
              <div className="text-center">
                <div className="text-4xl mb-2">
                  <svg
                    className="w-12 h-12 mx-auto text-[#10b981]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <line x1="3" y1="7" x2="21" y2="7" strokeWidth="2" />
                    <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" />
                    <line x1="3" y1="17" x2="21" y2="17" strokeWidth="2" />
                  </svg>
                </div>
                <p className="text-xs text-gray-500">Position caméra</p>
              </div>
            </div>
          </div>

          {/* Simulate Scan Button */}
          <button
            onClick={handleSimulateScan}
            className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Camera className="w-5 h-5" />
            Simuler un scan
          </button>
        </div>

        {/* Recent Scans Section */}
        <div>
          <h3 className="text-lg font-semibold text-[#1e293b] mb-3">
            Scans récents
          </h3>
          <div className="space-y-2">
            {scannedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="text-2xl">{product.icon}</div>
                  <div>
                    <p className="font-medium text-[#1e293b]">{product.name}</p>
                    <p className="text-xs text-gray-500">Il y a 1h</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="line-through text-gray-400 text-sm">
                    {product.originalPrice} DH
                  </p>
                  <p className="font-semibold text-[#10b981]">
                    -{product.originalPrice - product.currentPrice} DH
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
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
