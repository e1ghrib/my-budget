import {
  BarChart3,
  TrendingUp,
  ScanLine,
  Lightbulb,
  Plus,
  Trash2,
  Bell,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

interface RecurrentBill {
  id: string;
  name: string;
  amount: number;
  dayOfMonth: number;
  reminderDays: number;
}

export function meta({}: any) {
  return [
    { title: "My budget - Charges Fixes" },
    {
      name: "description",
      content: "Gestion des charges fixes et factures récurrentes",
    },
  ];
}

export default function RecurrentBills() {
  const [bills, setBills] = useState<RecurrentBill[]>([
    {
      id: "1",
      name: "Internet",
      amount: 200,
      dayOfMonth: 10,
      reminderDays: 2,
    },
    {
      id: "2",
      name: "Électricité",
      amount: 350,
      dayOfMonth: 15,
      reminderDays: 5,
    },
    {
      id: "3",
      name: "Eau",
      amount: 85,
      dayOfMonth: 20,
      reminderDays: 2,
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    dayOfMonth: "",
    reminderDays: "2",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleAddBill = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.amount || !formData.dayOfMonth) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const newBill: RecurrentBill = {
      id: Date.now().toString(),
      name: formData.name,
      amount: parseFloat(formData.amount),
      dayOfMonth: parseInt(formData.dayOfMonth),
      reminderDays: parseInt(formData.reminderDays),
    };

    setBills([...bills, newBill]);
    setSuccessMessage(`✓ Facture "${formData.name}" ajoutée avec succès !`);
    setFormData({ name: "", amount: "", dayOfMonth: "", reminderDays: "2" });
    setShowForm(false);

    // Masquer le message après 3 secondes
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleDeleteBill = (id: string) => {
    setBills(bills.filter((bill) => bill.id !== id));
  };

  // Calculer la date du prochain prélèvement
  const getNextPaymentDate = (dayOfMonth: number) => {
    const now = new Date();
    let nextDate = new Date(now.getFullYear(), now.getMonth(), dayOfMonth);

    if (nextDate < now) {
      nextDate = new Date(now.getFullYear(), now.getMonth() + 1, dayOfMonth);
    }

    return nextDate;
  };

  // Calculer les jours avant la date
  const getDaysUntilPayment = (dayOfMonth: number) => {
    const nextDate = getNextPaymentDate(dayOfMonth);
    const today = new Date();
    const diffTime = nextDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Formater la date
  const formatDate = (dayOfMonth: number) => {
    const nextDate = getNextPaymentDate(dayOfMonth);
    return nextDate.toLocaleDateString("fr-FR", {
      month: "short",
      day: "numeric",
    });
  };

  // Trier les factures par date de prélèvement
  const sortedBills = [...bills].sort((a, b) => a.dayOfMonth - b.dayOfMonth);

  const totalMonthly = bills.reduce((sum, bill) => sum + bill.amount, 0);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] pb-20">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Mes Charges Fixes</h1>
            <p className="text-sm text-slate-500 mt-1">
              Nous vous informerons 2 jours avant pour que votre budget reste
              équilibré
            </p>
          </div>
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-50 text-blue-600 p-3 rounded-full hover:bg-blue-100 transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="mx-4 mt-4 bg-green-50 border border-green-200 rounded-lg p-3 flex items-center gap-2 text-green-700">
          <CheckCircle className="w-5 h-5" />
          <span className="text-sm font-medium">{successMessage}</span>
        </div>
      )}

      {/* Form Section */}
      {showForm && (
        <div className="bg-white border-b border-slate-100 p-4">
          <form onSubmit={handleAddBill} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Nom de la facture
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="ex: Internet, Loyer, Eau..."
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Montant (DH)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.amount}
                  onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value })
                  }
                  placeholder="0.00"
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Jour du mois
                </label>
                <input
                  type="number"
                  min="1"
                  max="31"
                  value={formData.dayOfMonth}
                  onChange={(e) =>
                    setFormData({ ...formData, dayOfMonth: e.target.value })
                  }
                  placeholder="10"
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Quand recevoir le rappel ?
              </label>
              <select
                value={formData.reminderDays}
                onChange={(e) =>
                  setFormData({ ...formData, reminderDays: e.target.value })
                }
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
              >
                <option value="1">1 jour avant</option>
                <option value="2">2 jours avant</option>
                <option value="3">3 jours avant</option>
                <option value="5">5 jours avant</option>
                <option value="7">1 semaine avant</option>
              </select>
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Ajouter la facture
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 bg-slate-100 text-slate-700 font-semibold py-2 px-4 rounded-lg hover:bg-slate-200 transition-colors"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Main Content */}
      <div className="px-4 space-y-6 py-6">
        {/* Total Charges */}
        {bills.length > 0 && (
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-medium">
                  Total mensuel
                </p>
                <p className="text-2xl font-bold text-blue-900 mt-1">
                  {totalMonthly.toFixed(2)} DH
                </p>
              </div>
              <AlertCircle className="w-8 h-8 text-blue-400" />
            </div>
          </div>
        )}

        {/* Bills List */}
        {bills.length === 0 ? (
          <div className="bg-white rounded-xl p-8 text-center border border-slate-100">
            <Bell className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500">
              Aucune facture enregistrée pour l'instant
            </p>
            <p className="text-sm text-slate-400 mt-1">
              Ajoutez vos charges fixes pour mieux planifier votre budget
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-700">
              Prélèvements prévus
            </h2>

            {sortedBills.map((bill, index) => {
              const daysUntil = getDaysUntilPayment(bill.dayOfMonth);
              const nextDate = formatDate(bill.dayOfMonth);
              const isWarning = daysUntil <= bill.reminderDays;

              return (
                <div
                  key={bill.id}
                  className={`bg-white rounded-xl p-4 border ${
                    isWarning
                      ? "border-blue-200 bg-blue-50/30"
                      : "border-slate-100"
                  } hover:shadow-sm transition-shadow`}
                >
                  <div className="flex items-start justify-between gap-3">
                    {/* Timeline indicator */}
                    <div className="flex flex-col items-center gap-2 pt-1">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          isWarning ? "bg-blue-500" : "bg-slate-300"
                        }`}
                      />
                      {index < sortedBills.length - 1 && (
                        <div
                          className={`w-0.5 h-12 ${
                            isWarning ? "bg-blue-200" : "bg-slate-200"
                          }`}
                        />
                      )}
                    </div>

                    {/* Bill Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-semibold text-[#1e293b]">
                            {bill.name}
                          </p>
                          <p className="text-sm text-slate-500 mt-1">
                            Jour {bill.dayOfMonth} du mois
                          </p>
                        </div>
                        <button
                          onClick={() => handleDeleteBill(bill.id)}
                          className="text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 mt-3 flex-wrap">
                        <div className="bg-white rounded-lg px-3 py-1 border border-slate-200">
                          <p className="text-sm font-bold text-blue-600">
                            {bill.amount.toFixed(2)} DH
                          </p>
                        </div>

                        <div className="bg-blue-100 text-blue-700 rounded-lg px-3 py-1 flex items-center gap-1">
                          <Bell className="w-4 h-4" />
                          <span className="text-xs font-medium">
                            J-{bill.reminderDays}
                          </span>
                        </div>

                        <div className="text-xs text-slate-600 bg-slate-100 rounded-lg px-3 py-1">
                          Prévu le {nextDate}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Info Message */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-blue-900">
              Anticipez vos dépenses
            </p>
            <p className="text-xs text-blue-700 mt-1">
              Nous vous enverrons une notification avant le prélèvement de
              chaque facture pour que vous puissiez préparer votre budget
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-2">
        <div className="flex justify-around">
          <a href="/" className="flex flex-col items-center text-slate-500">
            <BarChart3 className="w-6 h-6" />
            <span className="text-xs">Dashboard</span>
          </a>
          <a
            href="/stats"
            className="flex flex-col items-center text-slate-500"
          >
            <TrendingUp className="w-6 h-6" />
            <span className="text-xs">Stats</span>
          </a>
          <a href="/scan" className="flex flex-col items-center text-slate-500">
            <ScanLine className="w-6 h-6" />
            <span className="text-xs">Scan</span>
          </a>
          <a
            href="/conseils"
            className="flex flex-col items-center text-slate-500"
          >
            <Lightbulb className="w-6 h-6" />
            <span className="text-xs">Conseils</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
