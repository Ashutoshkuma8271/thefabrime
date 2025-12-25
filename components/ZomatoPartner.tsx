
import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Users, 
  BarChart3, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Quote, 
  Star, 
  Building2, 
  Layers, 
  Trophy,
  History,
  Activity,
  Globe,
  Radio,
  SearchCheck,
  Server,
  PackageCheck
} from 'lucide-react';
import { db } from '../services/db';

const ZomatoPartner: React.FC = () => {
  const [partnerId, setPartnerId] = useState('');
  const [password, setPassword] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [stats, setStats] = useState({ partners: 0, sla: '0%', dispatch: '0h' });

  useEffect(() => {
    db.getPartnerStats().then(setStats);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerId) return;
    setIsVerifying(true);
    const isValid = await db.verifyPartnerID(partnerId);
    setIsVerifying(false);
    if (!isValid) {
      alert("Invalid Partner ID. Must start with 'ZM-'");
    } else {
      alert("Access Granted. Redirecting to Enterprise Dashboard...");
    }
  };

  const benefits = [
    {
      title: "Dedicated Interface",
      description: "A high-performance environment engineered for zero latency. Optimized for bulk procurement and real-time inventory synchronization.",
      icon: Layers,
      accent: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "ID-Based Verification",
      description: "Secure, credential-gate access protecting exclusive B2B pricing, trade secrets, and proprietary material specifications.",
      icon: ShieldCheck,
      accent: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive data visualization for supply chain transparency, quality benchmarking, and SLA compliance tracking.",
      icon: BarChart3,
      accent: "text-[#E23744]",
      bg: "bg-red-50"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Kumar Garments (Zomato Partner)",
      text: "The specialized access to Fabrima's premium textiles has completely transformed our production quality. The dedicated ecosystem provides priority treatment usually reserved for large-scale corporations.",
      image: "https://i.pravatar.cc/150?u=rajesh"
    },
    {
      name: "Anita Desai",
      company: "Modern Bags & Tents",
      text: "Having a secure, professional environment with ID-based entry gives us immense confidence. The logistics support from the Singhara Chowk team is consistently world-class.",
      image: "https://i.pravatar.cc/150?u=anita"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* --- Premium Hero Section --- */}
      <section className="relative pt-24 pb-32 px-4 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-[0.03] pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-[#E23744] rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 left-0 w-72 h-72 bg-blue-600 rounded-full blur-[80px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-1.5 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E23744]"></span>
              </span>
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-[0.2em]">Partner Ecosystem v2.5</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              Strategic Sourcing for <br />
              <span className="text-[#E23744]">Zomato Manufacturers</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-10 font-light">
              We’ve engineered a high-performance specialized platform tailored for Zomato’s elite manufacturing network. Experience industrial procurement with unprecedented precision and scale.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#E23744] text-white px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-red-700 transition-all flex items-center gap-2 group">
                Enter Portal <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm">
                Request Onboarding
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Specialized Benefits Section --- */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className={`w-14 h-14 rounded-2xl ${benefit.bg} ${benefit.accent} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {benefit.description}
                </p>
                <div className="w-10 h-1 bg-slate-100 rounded-full group-hover:w-full group-hover:bg-[#E23744]/20 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Operational Transparency & Z-Wing --- */}
      <section className="py-32 px-4 bg-[#0f172a] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Operational Transparency</h2>
            <p className="text-slate-400 text-lg">We provide a window into our soul. From the Z-Wing facility to live telemetry tracking, every byte of data is shared with our partners.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <SearchCheck size={30} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Global Standards</h3>
                  <p className="text-slate-400 leading-relaxed">Adhering to strict international protocols. Every roll of fabric undergoes a 4-point inspection system before it earns the Fabrima Seal, meeting ISO 9001:2015 certifications.</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Radio size={30} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Real-time Telemetry</h3>
                  <p className="text-slate-400 leading-relaxed">Complete visibility on your cargo. Our telemetry system provides live GPS coordinates and environmental monitoring for sensitive textile shipments via your dashboard.</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-[#E23744] flex items-center justify-center shrink-0 group-hover:bg-[#E23744] group-hover:text-white transition-all">
                  <Server size={30} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">The Dedicated Z-Wing Team</h3>
                  <p className="text-slate-400 leading-relaxed">Our Singhara Chowk headquarters houses the "Z-Wing"—a precision facility managed by a 24/7 team focused exclusively on Zomato manufacturer SLAs and quality assurance.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5">
                  <Globe size={300} className="text-white" />
                </div>
                
                <div className="relative z-10 space-y-10">
                  <div className="flex items-center justify-between border-b border-white/5 pb-8">
                    <span className="text-white font-bold text-lg flex items-center gap-2">
                      <Activity size={20} className="text-[#E23744]" />
                      System Integrity
                    </span>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider animate-pulse">Operational</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                      <p className="text-white text-3xl font-black mb-1">{stats.partners}+</p>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Active Partners</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                      <p className="text-white text-3xl font-black mb-1">{stats.sla}</p>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">SLA Success</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                      <p className="text-white text-3xl font-black mb-1">{stats.dispatch}</p>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Dispatch SLA</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="flex justify-between text-xs text-slate-400 mb-2 font-bold uppercase tracking-widest">
                      <span>Live Logistics Load</span>
                      <span>84% Capacity</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="w-[84%] h-full bg-[#E23744] shadow-[0_0_15px_rgba(226,55,68,0.5)]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Partner Access Panel --- */}
      <section className="py-32 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-stretch">
            {/* Left: Login Panel */}
            <div className="w-full lg:w-[450px]">
              <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] p-10 md:p-12 h-full">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-10 bg-[#E23744] rounded-xl flex items-center justify-center text-white">
                    <Lock size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Partner Access</h2>
                    <p className="text-xs text-slate-500">Authorized personnel only</p>
                  </div>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Partner ID</label>
                    <input 
                      type="text" 
                      placeholder="ZM-XXXX-ID"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#E23744] focus:ring-4 focus:ring-red-500/5 transition-all disabled:opacity-50"
                      value={partnerId}
                      onChange={(e) => setPartnerId(e.target.value)}
                      disabled={isVerifying}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Security Key</label>
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#E23744] focus:ring-4 focus:ring-red-500/5 transition-all disabled:opacity-50"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={isVerifying}
                    />
                  </div>
                  <button 
                    disabled={isVerifying}
                    className="w-full bg-slate-900 text-white font-bold py-5 rounded-2xl hover:bg-black transition-all shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 group disabled:bg-slate-400"
                  >
                    {isVerifying ? 'Verifying Gateway...' : 'Authorize Session'}
                    {!isVerifying && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                  </button>
                  <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest font-bold mt-4">
                    Protected by AES-256 Encryption
                  </p>
                </form>
              </div>
            </div>

            {/* Right: Operational Detail */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                  Seamless <br /> Operational Visibility
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-12 font-light">
                  Our Singhara Chowk facility has been upgraded with a specialized unit focusing exclusively on high-frequency, high-precision fulfillment for the Zomato manufacturing base. We provide end-to-end tracking from sourcing to factory delivery.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                      <Trophy size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Elite Standards</h4>
                      <p className="text-sm text-slate-500">ISO-certified quality inspection on every single roll.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                      <PackageCheck size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Precision Fulfillment</h4>
                      <p className="text-sm text-slate-500">24h turnaround for high-priority partner inventories.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Partner Testimonials --- */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Voice of the Partners</h2>
            <p className="text-slate-500">Real feedback from manufacturers integrated into the Z-Wing ecosystem.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-slate-50 p-12 rounded-[3rem] relative group border border-slate-100 transition-all hover:bg-white hover:shadow-2xl">
                <Quote size={60} className="absolute top-10 right-10 opacity-5 text-slate-900" />
                <div className="flex text-yellow-500 mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-xl md:text-2xl font-light italic leading-relaxed text-slate-700 mb-10 relative z-10">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-5 border-t border-slate-200 pt-10">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#E23744]/20">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{t.name}</h4>
                    <p className="text-sm text-[#E23744] font-bold uppercase tracking-widest">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Final Call To Action --- */}
      <section className="py-32 px-4 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#E23744] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(226,55,68,0.3)]">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tight text-white">
                Accelerate Your <br /> Enterprise Sourcing
              </h2>
              <p className="text-red-100 text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-light">
                Join {stats.partners}+ verified Zomato Partner manufacturers who have optimized their supply chains with Fabrima’s specialized platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="bg-white text-[#E23744] px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl">
                  Register as Partner
                </button>
                <button className="bg-transparent border-2 border-white/20 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-white/10 transition-all">
                  Contact Ops Team
                </button>
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto pt-16 border-t border-white/10 w-full">
                <div>
                  <div className="text-5xl font-black text-white mb-1">{stats.partners}+</div>
                  <div className="text-xs uppercase tracking-[0.2em] font-bold text-red-200">Verified Partners</div>
                </div>
                <div>
                  <div className="text-5xl font-black text-white mb-1">{stats.sla}</div>
                  <div className="text-xs uppercase tracking-[0.2em] font-bold text-red-200">SLA Success Rate</div>
                </div>
                <div>
                  <div className="text-5xl font-black text-white mb-1">{stats.dispatch}</div>
                  <div className="text-xs uppercase tracking-[0.2em] font-bold text-red-200">Express Fulfillment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZomatoPartner;
