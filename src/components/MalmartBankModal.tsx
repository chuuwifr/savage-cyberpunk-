import React, { useState } from 'react';
import { CharacterSheetData } from '../types/character';
import { BANK_PRESETS, recordBankTransaction } from '../utils/swadeRules';
import { 
  Coins, 
  X, 
  Plus, 
  Minus, 
  Check, 
  ArrowUpRight, 
  ArrowDownRight, 
  Receipt, 
  Sliders, 
  Sparkles,
  History,
  CreditCard
} from 'lucide-react';

interface MalmartBankModalProps {
  isOpen: boolean;
  onClose: () => void;
  character: CharacterSheetData;
  onChange: (updated: CharacterSheetData) => void;
}

export const MalmartBankModal: React.FC<MalmartBankModalProps> = ({
  isOpen,
  onClose,
  character,
  onChange
}) => {
  const [customBalanceInput, setCustomBalanceInput] = useState<string>(character.credits.toString());
  const [transactionAmount, setTransactionAmount] = useState<string>('');
  const [transactionLabel, setTransactionLabel] = useState<string>('');
  const [transactionType, setTransactionType] = useState<'credit' | 'debit'>('credit');
  const [activeTab, setActiveTab] = useState<'adjust' | 'presets' | 'history'>('adjust');

  if (!isOpen) return null;

  const handleSetExactBalance = () => {
    const val = parseInt(customBalanceInput, 10);
    if (!isNaN(val) && val >= 0) {
      const delta = val - character.credits;
      const updated = recordBankTransaction(
        character,
        delta,
        `Ajustement direct du solde bancaire`,
        'adjustment'
      );
      onChange(updated);
    }
  };

  const handleQuickAdd = (amount: number) => {
    const label = amount > 0 ? `Crédit rapide (+${amount.toLocaleString()} cr)` : `Débit rapide (${amount.toLocaleString()} cr)`;
    const updated = recordBankTransaction(
      character,
      amount,
      label,
      amount > 0 ? 'mission' : 'equipment'
    );
    onChange(updated);
    setCustomBalanceInput(updated.credits.toString());
  };

  const handleApplyPreset = (presetCredits: number, presetName: string) => {
    const delta = presetCredits - character.credits;
    const updated = recordBankTransaction(
      character,
      delta,
      `Dotation : ${presetName}`,
      'adjustment'
    );
    onChange(updated);
    setCustomBalanceInput(presetCredits.toString());
  };

  const handleAddCustomTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    const amountVal = parseInt(transactionAmount, 10);
    if (isNaN(amountVal) || amountVal <= 0) return;

    const finalAmount = transactionType === 'credit' ? amountVal : -amountVal;
    const label = transactionLabel.trim() || (transactionType === 'credit' ? 'Prime de mission / Run' : 'Dépense tactique');

    const updated = recordBankTransaction(
      character,
      finalAmount,
      label,
      transactionType === 'credit' ? 'mission' : 'equipment'
    );
    onChange(updated);
    setCustomBalanceInput(updated.credits.toString());
    setTransactionAmount('');
    setTransactionLabel('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0b1017] border-2 border-cyan-500/70 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded bg-slate-900 border border-slate-700 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-amber-500/10 border border-amber-500/40 rounded-lg text-amber-400">
            <Coins className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-orbitron text-white flex items-center gap-2">
              MALMART SECURE BANK // COMPTE COURANT
            </h2>
            <p className="text-xs font-mono-tech text-slate-400">
              Terminal bancaire crypté • Gestion des fonds, dotations & transactions de mission
            </p>
          </div>
        </div>

        {/* Current Balance Showcase Card */}
        <div className="bg-[#060a0f] border-2 border-cyan-500/40 rounded-xl p-5 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-inner">
          <div>
            <div className="text-xs text-slate-400 font-mono-tech uppercase tracking-wider flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-cyan-400" />
              <span>Solde Disponible sur le TAP</span>
            </div>
            <div className="text-3xl font-extrabold font-orbitron text-amber-400 mt-1">
              {character.credits.toLocaleString()} <span className="text-sm font-normal text-amber-500/80">crédits</span>
            </div>
            <div className="text-[11px] font-mono-tech text-slate-500 mt-0.5">
              Équivalent standard : ~{(character.credits / 1.25).toLocaleString()} Eurodollars (€$)
            </div>
          </div>

          {/* Quick Direct Edit Field */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative">
              <input
                type="number"
                min="0"
                value={customBalanceInput}
                onChange={(e) => setCustomBalanceInput(e.target.value)}
                className="w-36 bg-[#0d141e] border border-cyan-500/50 rounded-lg px-3 py-2 text-sm font-bold font-orbitron text-amber-400 focus:outline-none focus:border-cyan-400"
                placeholder="Montant..."
              />
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono-tech text-slate-500">cr</span>
            </div>
            <button
              type="button"
              onClick={handleSetExactBalance}
              className="px-3.5 py-2 bg-cyan-950 border border-cyan-400 text-cyan-300 hover:bg-cyan-900 rounded-lg text-xs font-mono-tech font-bold flex items-center gap-1 cursor-pointer transition shadow-md shadow-cyan-950/40"
              title="Définir exactement ce solde"
            >
              <Check className="w-4 h-4" /> Valider
            </button>
          </div>
        </div>

        {/* Tabs inside modal */}
        <div className="flex gap-2 border-b border-slate-800 pb-2 mb-4">
          <button
            type="button"
            onClick={() => setActiveTab('adjust')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'adjust'
                ? 'bg-cyan-500 text-black font-bold'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" /> Opérations Rapides
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('presets')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'presets'
                ? 'bg-cyan-500 text-black font-bold'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" /> Dotations Types (SWADE)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('history')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'history'
                ? 'bg-cyan-500 text-black font-bold'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <History className="w-3.5 h-3.5" /> Relevé Bancaire ({character.bankHistory?.length || 0})
          </button>
        </div>

        {/* TAB 1: OPERATIONS RAPIDES & NOUVELLE TRANSACTION */}
        {activeTab === 'adjust' && (
          <div className="space-y-5">
            {/* Quick Adjustment Buttons */}
            <div>
              <div className="text-xs font-bold font-orbitron text-slate-300 uppercase mb-2">
                Ajustements Rapides en 1 Clic
              </div>
              <div className="grid grid-cols-5 gap-2 font-mono-tech text-xs">
                <button
                  type="button"
                  onClick={() => handleQuickAdd(100)}
                  className="py-1.5 bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900 rounded font-bold cursor-pointer"
                >
                  +100 cr
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickAdd(500)}
                  className="py-1.5 bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900 rounded font-bold cursor-pointer"
                >
                  +500 cr
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickAdd(1000)}
                  className="py-1.5 bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900 rounded font-bold cursor-pointer"
                >
                  +1 000 cr
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickAdd(5000)}
                  className="py-1.5 bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900 rounded font-bold cursor-pointer"
                >
                  +5 000 cr
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickAdd(10000)}
                  className="py-1.5 bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900 rounded font-bold cursor-pointer"
                >
                  +10 000 cr
                </button>

                <button
                  type="button"
                  onClick={() => handleQuickAdd(-100)}
                  className="py-1.5 bg-red-950/60 border border-red-500/40 text-red-300 hover:bg-red-900 rounded font-bold cursor-pointer"
                >
                  -100 cr
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickAdd(-500)}
                  className="py-1.5 bg-red-950/60 border border-red-500/40 text-red-300 hover:bg-red-900 rounded font-bold cursor-pointer"
                >
                  -500 cr
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickAdd(-1000)}
                  className="py-1.5 bg-red-950/60 border border-red-500/40 text-red-300 hover:bg-red-900 rounded font-bold cursor-pointer"
                >
                  -1 000 cr
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickAdd(-5000)}
                  className="py-1.5 bg-red-950/60 border border-red-500/40 text-red-300 hover:bg-red-900 rounded font-bold cursor-pointer"
                >
                  -5 000 cr
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickAdd(-10000)}
                  className="py-1.5 bg-red-950/60 border border-red-500/40 text-red-300 hover:bg-red-900 rounded font-bold cursor-pointer"
                >
                  -10 000 cr
                </button>
              </div>
            </div>

            {/* Custom Transaction Form */}
            <form onSubmit={handleAddCustomTransaction} className="bg-[#090e15] border border-slate-800 rounded-lg p-4 space-y-3">
              <div className="text-xs font-bold font-orbitron text-cyan-400 uppercase">
                Enregistrer une Transaction de Mission / Butin
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex rounded-lg overflow-hidden border border-slate-700">
                  <button
                    type="button"
                    onClick={() => setTransactionType('credit')}
                    className={`flex-1 py-1.5 text-xs font-mono-tech font-bold transition cursor-pointer ${
                      transactionType === 'credit'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    + Crédit (Gain)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTransactionType('debit')}
                    className={`flex-1 py-1.5 text-xs font-mono-tech font-bold transition cursor-pointer ${
                      transactionType === 'debit'
                        ? 'bg-red-600 text-white'
                        : 'bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    - Débit (Perte)
                  </button>
                </div>

                <div>
                  <input
                    type="number"
                    min="1"
                    required
                    value={transactionAmount}
                    onChange={(e) => setTransactionAmount(e.target.value)}
                    placeholder="Montant en crédits..."
                    className="w-full bg-[#060a0f] border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-mono-tech text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full py-1.5 bg-cyan-950 border border-cyan-400 text-cyan-300 hover:bg-cyan-900 rounded-lg text-xs font-mono-tech font-bold cursor-pointer shadow-md"
                  >
                    Exécuter Virement
                  </button>
                </div>
              </div>

              <div>
                <input
                  type="text"
                  value={transactionLabel}
                  onChange={(e) => setTransactionLabel(e.target.value)}
                  placeholder="Motif (ex: Prime contrat d'infiltration Arasaka, Butin corpo, Frais d'hôpital...)"
                  className="w-full bg-[#060a0f] border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-mono-tech text-slate-200 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </form>
          </div>
        )}

        {/* TAB 2: PREREGLAGES OFFICIELS SWADE */}
        {activeTab === 'presets' && (
          <div className="space-y-3">
            <div className="text-xs font-mono-tech text-slate-400 mb-2">
              Règle SWADE (p. 54) : <em>« De manière générale, les fonds de départ sont doublés pour chaque Rang au-delà de Novice. »</em>
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {BANK_PRESETS.map(preset => (
                <div
                  key={preset.id}
                  className="bg-[#090e15] border border-slate-800 hover:border-cyan-500/50 rounded-lg p-3 flex items-center justify-between transition"
                >
                  <div>
                    <div className="text-xs font-bold text-white font-orbitron">{preset.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono-tech mt-0.5">{preset.desc}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold font-orbitron text-amber-400">
                      {preset.credits.toLocaleString()} cr
                    </span>
                    <button
                      type="button"
                      onClick={() => handleApplyPreset(preset.credits, preset.name)}
                      className="px-3 py-1.5 bg-cyan-950 border border-cyan-500 text-cyan-300 hover:bg-cyan-900 rounded text-xs font-mono-tech cursor-pointer"
                    >
                      Appliquer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: HISTORIQUE DES TRANSACTIONS */}
        {activeTab === 'history' && (
          <div className="space-y-2">
            {!character.bankHistory || character.bankHistory.length === 0 ? (
              <div className="text-center py-10 text-slate-500 font-mono-tech text-xs border border-dashed border-slate-800 rounded-lg">
                Aucun mouvement bancaire enregistré sur ce compte.
              </div>
            ) : (
              <div className="space-y-1.5 max-h-80 overflow-y-auto pr-1">
                {character.bankHistory.map(tx => (
                  <div
                    key={tx.id}
                    className="bg-[#090e15] border border-slate-800 rounded-lg p-2.5 flex items-center justify-between font-mono-tech text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      {tx.amount >= 0 ? (
                        <ArrowUpRight className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4 text-red-400 shrink-0" />
                      )}
                      <div>
                        <div className="font-bold text-white">{tx.label}</div>
                        <div className="text-[10px] text-slate-500">
                          {new Date(tx.date).toLocaleDateString()} {new Date(tx.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className={`font-bold ${tx.amount >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {tx.amount >= 0 ? `+${tx.amount.toLocaleString()}` : tx.amount.toLocaleString()} cr
                      </div>
                      <div className="text-[10px] text-slate-400">
                        Solde : {tx.balanceAfter.toLocaleString()} cr
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Bottom Close Action */}
        <div className="mt-6 pt-3 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 border border-slate-700 text-slate-300 hover:text-white rounded-lg text-xs font-mono-tech cursor-pointer"
          >
            Fermer le Terminal Bancaire
          </button>
        </div>
      </div>
    </div>
  );
};
