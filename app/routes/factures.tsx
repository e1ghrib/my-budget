import { useState } from "react";
import {
  Plus,
  Trash2,
  Bell,
  AlertCircle,
  CheckCircle,
  Calendar,
  Wallet,
  X,
  ChevronDown,
} from "lucide-react";
import BottomNav from "../BottomNav";

interface RecurrentBill {
  id: string;
  name: string;
  amount: number;
  dayOfMonth: number;
  reminderDays: number;
}

export function meta({}: any) {
  return [
    { title: "Charges Fixes | My Budget" },
    {
      name: "description",
      content: "Gestion intelligente des factures récurrentes",
    },
  ];
}

export default function RecurrentBills() {
  const [bills, setBills] = useState<RecurrentBill[]>([
    {
      id: "1",
      name: "Internet (Inwi)",
      amount: 200,
      dayOfMonth: 10,
      reminderDays: 2,
    },
    {
      id: "2",
      name: "Électricité (ONEE)",
      amount: 350,
      dayOfMonth: 15,
      reminderDays: 5,
    },
    { id: "3", name: "Loyer", amount: 2500, dayOfMonth: 1, reminderDays: 7 },
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
    if (!formData.name || !formData.amount || !formData.dayOfMonth) return;

    const newBill: RecurrentBill = {
      id: Date.now().toString(),
      name: formData.name,
      amount: parseFloat(formData.amount),
      dayOfMonth: parseInt(formData.dayOfMonth),
      reminderDays: parseInt(formData.reminderDays),
    };

    setBills([...bills, newBill]);
    setSuccessMessage(`Facture "${formData.name}" ajoutée !`);
    setFormData({ name: "", amount: "", dayOfMonth: "", reminderDays: "2" });
    setShowForm(false);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const getNextPaymentDate = (dayOfMonth: number) => {
    const now = new Date();
    let nextDate = new Date(now.getFullYear(), now.getMonth(), dayOfMonth);
    if (nextDate < now)
      nextDate = new Date(now.getFullYear(), now.getMonth() + 1, dayOfMonth);
    return nextDate;
  };

  const sortedBills = [...bills].sort((a, b) => a.dayOfMonth - b.dayOfMonth);
  const totalMonthly = bills.reduce((sum, bill) => sum + bill.amount, 0);

  return (
    <div className="min-h-screen bg-[#F0F4F2] pb-28">
      {/* --- HEADER --- */}
      <header className="bg-white px-6 pt-12 pb-8 rounded-b-[2.5rem] shadow-sm border-b border-emerald-50">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-emerald-950 tracking-tight">
              Mes Charges
            </h1>
            <p className="text-sm text-emerald-600/70 font-medium">
              Anticipez vos sorties d'argent
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className={`p-3 rounded-2xl transition-all shadow-lg ${
              showForm
                ? "bg-rose-500 text-white rotate-45"
                : "bg-emerald-600 text-white"
            }`}
          >
            <Plus size={24} />
          </button>
        </div>

        {/* Total Summary Card */}
        <div className="mt-8 bg-emerald-900 rounded-[2rem] p-6 text-white relative overflow-hidden shadow-xl shadow-emerald-900/20">
          <div className="relative z-10 flex justify-between items-center">
            <div>
              <p className="text-xs font-bold text-emerald-300 uppercase tracking-widest mb-1">
                Total mensuel fixe
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black">
                  {totalMonthly.toLocaleString()}
                </span>
                <span className="text-emerald-400 font-bold">DH</span>
              </div>
            </div>
            <div className="bg-white/10 p-3 rounded-2xl">
              <Wallet className="text-emerald-400" size={28} />
            </div>
          </div>
        </div>
      </header>

      <main className="px-6 -mt-4 space-y-6">
        {/* Success Alert */}
        {successMessage && (
          <div className="bg-emerald-500 text-white px-4 py-3 rounded-2xl flex items-center gap-2 shadow-lg animate-in fade-in slide-in-from-top-2">
            <CheckCircle size={18} />
            <span className="text-sm font-bold">{successMessage}</span>
          </div>
        )}

        {/* --- ADD BILL FORM --- */}
        {showForm && (
          <section className="bg-white rounded-[2rem] p-6 shadow-xl border border-emerald-50 animate-in zoom-in-95 duration-200">
            <h3 className="font-black text-emerald-950 mb-5">
              Nouvelle Charge
            </h3>
            <form onSubmit={handleAddBill} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-1">
                  Nom
                </label>
                <input
                  type="text"
                  placeholder="Ex: Loyer, Spotify..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-1">
                    Montant (DH)
                  </label>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={formData.amount}
                    onChange={(e) =>
                      setFormData({ ...formData, amount: e.target.value })
                    }
                    className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-1">
                    Jour du mois
                  </label>
                  <input
                    type="number"
                    placeholder="1-31"
                    value={formData.dayOfMonth}
                    onChange={(e) =>
                      setFormData({ ...formData, dayOfMonth: e.target.value })
                    }
                    className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white font-black py-4 rounded-xl shadow-lg shadow-emerald-600/20 active:scale-95 transition-all"
              >
                Enregistrer la facture
              </button>
            </form>
          </section>
        )}

        {/* --- BILLS LIST --- */}
        <section className="space-y-4 pb-10">
          <div className="flex items-center gap-2 px-1">
            <Calendar size={18} className="text-emerald-600" />
            <h2 className="font-black text-emerald-950 uppercase tracking-tighter text-sm">
              Échéancier mensuel
            </h2>
          </div>

          <div className="space-y-3">
            {sortedBills.map((bill) => {
              const nextDate = getNextPaymentDate(bill.dayOfMonth);
              const isUrgent = new Date().getDate() === bill.dayOfMonth;

              return (
                <div
                  key={bill.id}
                  className="bg-white rounded-[1.5rem] p-4 flex items-center justify-between border border-emerald-50 group shadow-sm active:bg-emerald-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center justify-center bg-emerald-50 rounded-xl h-14 w-12 text-emerald-700">
                      <span className="text-[10px] font-bold uppercase">
                        {nextDate.toLocaleDateString("fr-FR", {
                          month: "short",
                        })}
                      </span>
                      <span className="text-lg font-black leading-tight">
                        {bill.dayOfMonth}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">
                        {bill.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded uppercase">
                          Fixe
                        </span>
                        <p className="text-[11px] text-slate-400 font-medium">
                          Auto-rappel J-{bill.reminderDays}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm font-black text-emerald-950">
                        {bill.amount.toFixed(2)} DH
                      </p>
                      {isUrgent && (
                        <p className="text-[9px] font-bold text-rose-500 uppercase tracking-widest">
                          Aujourd'hui
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() =>
                        setBills(bills.filter((b) => b.id !== bill.id))
                      }
                      className="text-slate-200 hover:text-rose-500 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tips Footer */}
          <div className="bg-emerald-100/40 rounded-2xl p-4 border border-emerald-200/50 flex gap-3">
            <AlertCircle size={20} className="text-emerald-600 shrink-0" />
            <p className="text-[11px] text-emerald-800 leading-relaxed">
              <strong>Conseil:</strong> Pensez à automatiser ces virements sur
              votre application bancaire pour éviter tout retard de paiement.
            </p>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
