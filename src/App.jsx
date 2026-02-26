import React, { useState, useMemo } from 'react';
import {
  BarChart3,
  Target,
  TrendingUp,
  Zap,
  CheckCircle2,
  ArrowRight,
  Info,
  ShieldAlert,
  ShieldCheck,
  ShieldQuestion,
  FileText,
  Users,
  PhoneCall,
  Layout,
  Table,
  ExternalLink,
  ClipboardCheck
} from 'lucide-react';

const App = () => {
  const [scores, setScores] = useState(new Array(6).fill(0));

  const categories = [
    {
      title: "CRM & Pipeline Hygiene",
      icon: <Table className="w-5 h-5" />,
      manual: "Data sits in Excel or static CRM. Tracking depends on 'Monday morning' updates from reps.",
      aiFirst: "AI automatically logs emails/calls, updates stages, and flags 'stale' deals without rep input."
    },
    {
      title: "Proposals & PPTs",
      icon: <Layout className="w-5 h-5" />,
      manual: "Reps spend hours copying/pasting from old PPTs. Pricing and technical specs are manual.",
      aiFirst: "Gen-AI builds brand-aligned, data-driven technical decks and custom proposals in 10 minutes."
    },
    {
      title: "KAM & Renewals",
      icon: <ClipboardCheck className="w-5 h-5" />,
      manual: "Key account renewals tracked in master Excel. High risk of 'last minute' churn or missed upsells.",
      aiFirst: "AI predicts churn risk and flags upsell triggers based on usage/engagement patterns 90 days out."
    },
    {
      title: "High-Volume Outreach",
      icon: <PhoneCall className="w-5 h-5" />,
      manual: "Reps call hundreds of prospects manually. No tracking of sentiment or objection patterns.",
      aiFirst: "AI Voice Agents handle initial qualification and follow-ups, booking meetings only when ready."
    },
    {
      title: "Account Intelligence",
      icon: <Users className="w-5 h-5" />,
      manual: "Strategy based on 'Gut Feel'. Little insight into client industry trends or financial shifts.",
      aiFirst: "AI scans annual reports and industry news to suggest 'Value Hooks' for your next strategic call."
    },
    {
      title: "Lead Response Time",
      icon: <Zap className="w-5 h-5" />,
      manual: "Website leads wait 24-48 hours for a human to call back. High leakage to competitors.",
      aiFirst: "AI Agents respond to leads in <2 minutes, qualifying the technical intent and setting the agenda."
    }
  ];

  const totalScore = useMemo(() => scores.reduce((a, b) => a + b, 0), [scores]);

  const getRiskLevel = () => {
    if (totalScore === 0) return null;
    if (totalScore <= 12) return {
      label: "Operational Debt Risk",
      color: "bg-red-50 text-red-700 border-red-200",
      icon: <ShieldAlert className="w-6 h-6" />,
      desc: "Your revenue engine is running on 'Manual Pilot'. High risk of competitor 'tech-theft' of your key accounts."
    };
    if (totalScore <= 20) return {
      label: "The 'Efficiency Trap'",
      color: "bg-amber-50 text-amber-700 border-amber-200",
      icon: <ShieldQuestion className="w-6 h-6" />,
      desc: "You have digital tools, but they are 'Passive'. You are paying for a CRM that acts as a graveyard, not a growth engine."
    };
    return {
      label: "AI-First Sales Leader",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
      icon: <ShieldCheck className="w-6 h-6" />,
      desc: "You operate with 'Active Intelligence'. Your reps focus on closing, while AI handles the technical and administrative heavy lifting."
    };
  };

  const risk = getRiskLevel();

  const handleScore = (idx, val) => {
    const newScores = [...scores];
    newScores[idx] = val;
    setScores(newScores);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      {/* Container - Expanded to Full Screen with maximum constraints for readability */}
      <div className="max-w-[1400px] mx-auto bg-white shadow-xl min-h-screen">

        {/* HEADER */}
        <header className="bg-[#0F1F2E] text-white p-12 md:p-20 text-center">
          <div className="inline-block px-4 py-1.5 mb-8 border border-slate-500 rounded-full text-xs font-bold tracking-widest uppercase text-slate-400">
            Industrial & Engineering Revenue Audit
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            Stop Selling Like It's <span className="text-[#D97706]">2015.</span>
          </h1>
          <p className="text-2xl text-slate-300 font-medium mb-4">
            AI-First Sales & Marketing Readiness Scorecard
          </p>
          <p className="text-lg text-slate-400 italic max-w-3xl mx-auto">
            Modernize your Key Account Management and Proposal Velocity with predictive intelligence.
          </p>
        </header>

        {/* METRICS SECTION */}
        <section className="p-12 border-b border-slate-100 bg-slate-50/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center shadow-sm">
              <div className="text-5xl font-black text-[#0F1F2E] mb-2">90%</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">CRM Accuracy</div>
              <p className="text-xs text-slate-400 mt-3 italic">With Auto-Capture Intelligence</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center shadow-sm transform scale-105 ring-4 ring-[#D97706]/10">
              <div className="text-5xl font-black text-[#D97706] mb-2">10m</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">Proposal Time</div>
              <p className="text-xs text-slate-400 mt-3 italic">Reduced from 4-8 hours</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center shadow-sm">
              <div className="text-5xl font-black text-[#0F1F2E] mb-2">0%</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">Manual Entry</div>
              <p className="text-xs text-slate-400 mt-3 italic">For AI-Enabled High Performers</p>
            </div>
          </div>
        </section>

        {/* DIAGNOSTIC GRID */}
        <section className="p-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-[#0F1F2E]">Benchmark Your Revenue Engine</h2>
              <p className="text-slate-500 mt-1">Identify the manual bottlenecks slowing down your closings.</p>
            </div>
            <div className="bg-[#0F1F2E] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest">
              Scale: 1 (Manual) &rarr; 5 (AI-First)
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="group border border-slate-100 rounded-2xl overflow-hidden hover:border-[#D97706]/40 transition-all bg-white shadow-sm hover:shadow-md">
                <div className="flex flex-col h-full">
                  <div className="bg-slate-50 p-6 border-b border-slate-100 flex items-center gap-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm text-[#0F1F2E]">
                      {cat.icon}
                    </div>
                    <span className="font-bold text-[#0F1F2E] text-lg">{cat.title}</span>
                  </div>

                  <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase mb-2 tracking-wider">Traditional Flow</div>
                      <p className="text-sm text-slate-500 leading-relaxed">{cat.manual}</p>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[#D97706] uppercase mb-2 tracking-wider">AI-Powered Flow</div>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">{cat.aiFirst}</p>
                    </div>
                  </div>

                  <div className="bg-slate-50/80 p-6 flex flex-col items-center justify-center border-t border-slate-100">
                    <div className="text-[10px] font-bold text-slate-400 uppercase mb-3">Select Your Score</div>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button
                          key={num}
                          onClick={() => handleScore(idx, num)}
                          className={`w-12 h-12 rounded-xl text-sm font-bold transition-all ${scores[idx] === num
                            ? 'bg-[#0F1F2E] text-white shadow-xl scale-110 ring-4 ring-[#0F1F2E]/10'
                            : 'bg-white border border-slate-200 text-slate-400 hover:border-[#D97706] hover:text-[#D97706]'
                            }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RISK LEVEL RESULTS */}
        <section className="p-12 bg-slate-50 border-y border-slate-200">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="text-center lg:text-left shrink-0">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Diagnostic Score</div>
              <div className="text-8xl font-black text-[#0F1F2E] leading-none">{totalScore}<span className="text-3xl text-slate-300">/30</span></div>
            </div>

            <div className="flex-1 w-full">
              {!risk ? (
                <div className="p-12 border-4 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-slate-400 gap-4 bg-white/50">
                  <Info className="w-10 h-10 opacity-20" />
                  <span className="font-medium text-lg italic">Complete all 6 diagnostic categories to reveal your risk profile.</span>
                </div>
              ) : (
                <div className={`p-10 rounded-3xl border-2 shadow-2xl transition-all duration-700 ${risk.color}`}>
                  <div className="flex items-center gap-6 mb-4">
                    <div className="p-3 bg-white rounded-2xl shadow-sm">
                      {risk.icon}
                    </div>
                    <h3 className="text-4xl font-black uppercase tracking-tight">{risk.label}</h3>
                  </div>
                  <p className="font-medium text-xl leading-relaxed">{risk.desc}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* INDUSTRIAL CASE STUDIES */}
        <section className="p-12 md:p-20">
          <h2 className="text-4xl font-bold text-[#0F1F2E] mb-12 text-center uppercase tracking-tight">Industrial Performance Proof</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 border border-slate-100 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 bg-[#0F1F2E] text-white text-xs font-bold rounded-bl-xl">RENEWALS</div>
              <h4 className="text-2xl font-bold text-[#0F1F2E] mb-4 pr-12">Precision Components OEM</h4>
              <p className="text-lg text-slate-500 mb-8 italic leading-relaxed">Replaced fragmented Excel-based KAM with AI Predictive Health Alerts.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xl font-bold text-slate-800">
                  <TrendingUp className="w-6 h-6 text-emerald-500" />
                  <span>95% Renewal Rate (Up from 78%)</span>
                </div>
                <div className="flex items-center gap-4 text-lg text-slate-600">
                  <CheckCircle2 className="w-6 h-6 text-[#D97706]" />
                  <span>12% increase in total cross-sell revenue</span>
                </div>
              </div>
            </div>

            <div className="p-10 border border-slate-100 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 bg-[#D97706] text-white text-xs font-bold rounded-bl-xl">OUTREACH</div>
              <h4 className="text-2xl font-bold text-[#0F1F2E] mb-4 pr-12">Industrial Automation Firm</h4>
              <p className="text-lg text-slate-500 mb-8 italic leading-relaxed">Deployed AI Agentic Voice for cold-lead and dormant account qualification.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xl font-bold text-slate-800">
                  <TrendingUp className="w-6 h-6 text-emerald-500" />
                  <span>4x increase in MQL &rarr; SQL meetings</span>
                </div>
                <div className="flex items-center gap-4 text-lg text-slate-600">
                  <CheckCircle2 className="w-6 h-6 text-[#D97706]" />
                  <span>Sales Reps focus 100% on high-value closings</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AUDIT SECTION */}
        <section className="bg-[#0F1F2E] text-white p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D97706] to-transparent opacity-50" />
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">The AI Sales Audit</h2>
            <p className="text-xl text-slate-400 italic">"Clean up the Excel data-debt. Accelerate your Closings."</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h4 className="text-[#D97706] font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-[#D97706]" /> What We Audit
              </h4>
              <ul className="space-y-6">
                {["CRM Data Decay & Revenue Leakage", "Proposal Design & Technical Bottlenecks", "Key Account Planning Inefficiency", "Manual Call Sentiment Gaps", "Lead Response Friction Analysis"].map((item, i) => (
                  <li key={i} className="flex gap-4 text-lg border-b border-slate-700 pb-4 italic text-slate-300">
                    <span className="text-[#D97706] font-bold shrink-0">0{i + 1}</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800/40 p-10 rounded-3xl border border-slate-700 backdrop-blur-sm shadow-2xl">
              <h4 className="text-white text-xl font-bold mb-8 flex items-center gap-3">
                <Target className="w-6 h-6 text-[#D97706]" /> Strategic Delivery
              </h4>
              <ul className="space-y-6 mb-10">
                <li className="text-lg font-medium flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#D97706] mt-2.5" />
                  Excel-to-AI CRM Migration Map
                </li>
                <li className="text-lg font-medium flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#D97706] mt-2.5" />
                  Automated Technical Proposal Templates
                </li>
                <li className="text-lg font-medium flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#D97706] mt-2.5" />
                  AI Agentic Outreach Pilot Roadmap
                </li>
              </ul>
              <div className="text-sm text-slate-400 border-t border-slate-700 pt-8 flex items-center justify-between">
                <span><strong>Timeline:</strong> 14 Days</span>
                <span className="px-3 py-1 bg-[#D97706]/10 text-[#D97706] rounded text-xs font-bold uppercase">No IT Overhaul Required</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className="p-16 md:p-32 text-center bg-white">
          <h2 className="text-5xl font-bold text-[#0F1F2E] mb-8">Ready to Automate Your Revenue?</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Schedule a structured AI-First Sales Discovery Session. We audit your current Excel/Manual flows and show you the exact ROI of automation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
            <a
              href="https://calendly.com/support-lyq/ai-strategy-audit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#D97706] hover:bg-[#B45309] text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:shadow-orange-500/20 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
            >
              Book Strategy Audit
              <ArrowRight className="w-6 h-6" />
            </a>

            <a
              href="https://www.growthaspire.com/ai-sales-masterclass/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white border-2 border-[#0F1F2E] text-[#0F1F2E] hover:bg-slate-50 px-12 py-6 rounded-full font-bold text-xl shadow-lg transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
            >
              Register Live Masterclass
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>

          <p className="mt-20 text-xs font-bold text-slate-400 uppercase tracking-widest">
            AI-First Sales Scorecard™ (Industrial Edition) &copy; 2026
          </p>
        </section>
      </div>
    </div>
  );
};

export default App;
