import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  Play, 
  Shield, 
  Zap, 
  TrendingUp, 
  Layers, 
  UploadCloud, 
  CheckCheck, 
  Landmark, 
  RefreshCw,
  Server,
  Database,
  Lock,
  Globe,
  ArrowRight,
  FileText,
  X,
  ScrollText
} from 'lucide-react';
import { Button, Card, Badge } from '../components/ui/LayoutPrimitives';
import { useWallet } from '../contexts/WalletContext';
import { useNavigate } from 'react-router-dom';
import { ConnectButton } from '../components/RainbowKit';

// --- Mock Data ---
const HERO_INVOICES = [
  { id: 'INV-001', company: 'Tata Motors Ltd', amount: '₹ 4,50,000', status: 'Funded', color: 'from-blue-500 to-indigo-500', initial: 'T' },
  { id: 'INV-002', company: 'Reliance Retail', amount: '₹ 12,20,000', status: 'Pending', color: 'from-green-500 to-emerald-500', initial: 'R' },
  { id: 'INV-003', company: 'Infosys Limited', amount: '₹ 8,75,000', status: 'Verified', color: 'from-blue-400 to-cyan-400', initial: 'I' },
];

const PROCESS_STEPS = [
  {
    id: 1,
    title: "Upload & Tokenize",
    desc: "MSME uploads invoice. Proof metadata (photos/GPS) is hashed to IPFS. Invoice is minted as an NFT on Polygon.",
    icon: UploadCloud
  },
  {
    id: 2,
    title: "Collaborative Verify",
    desc: "Buyer receives notification. Verifies goods delivery and quality on-chain. Smart contract updates risk score.",
    icon: CheckCheck
  },
  {
    id: 3,
    title: "Auction & Fund",
    desc: "Banks bid on verified invoices. Dynamic discounting engine calculates real-time rates. Funds released instantly.",
    icon: Landmark
  },
  {
    id: 4,
    title: "Auto-Settlement",
    desc: "Buyer pays on due date. Smart contract automatically routes principal + interest to Bank and surplus to MSME.",
    icon: RefreshCw
  }
];

const TRUSTED_PARTNERS = [
  { initial: 'TC', color: 'bg-blue-600' },
  { initial: 'AS', color: 'bg-emerald-600' },
  { initial: 'GL', color: 'bg-purple-600' },
  { initial: 'MM', color: 'bg-orange-600' },
];

export default function Landing() {
  const { isConnected, openModal } = useWallet();
  const navigate = useNavigate();
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    if (isConnected) {
      navigate('/dashboard');
    }
  }, [isConnected, navigate]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary font-sans selection:bg-accent-primary/30 scroll-smooth">
      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border-primary">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
            <div className="w-8 h-8 rounded bg-gradient-primary flex items-center justify-center">
              <TrendingUp className="text-white" size={18} />
            </div>
            <span className="font-bold text-xl tracking-tight">InvoiceChain</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
            <button onClick={() => scrollToSection('how-it-works')} className="hover:text-text-primary transition-colors">How it Works</button>
            <button onClick={() => scrollToSection('msme')} className="hover:text-text-primary transition-colors">For MSMEs</button>
            <button onClick={() => scrollToSection('banks')} className="hover:text-text-primary transition-colors">For Banks</button>
            <button onClick={() => scrollToSection('whitepaper')} className="hover:text-text-primary transition-colors">Whitepaper</button>
          </div>
          <div className="flex gap-4">
             <ConnectButton />
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-secondary/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-xs font-semibold mb-6 border border-accent-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
              </span>
              Powered by Polygon Blockchain
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Instant Liquidity for <br />
              <span className="text-transparent bg-clip-text bg-gradient-primary">India's MSMEs</span>
            </h1>
            <p className="text-lg text-text-secondary mb-8 max-w-lg leading-relaxed">
              Transform unpaid invoices into instant working capital. 
              Collaborative verification and proof metadata lower your risk score and interest rates in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-12 px-8 text-base bg-white text-black hover:bg-gray-100 font-bold border-none" onClick={openModal}>
                Connect Wallet
                <ChevronRight size={18} className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base" onClick={() => scrollToSection('how-it-works')}>
                <Play size={18} className="mr-2" /> How it Works
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-text-tertiary font-medium">
              <div className="flex -space-x-3">
                {TRUSTED_PARTNERS.map((partner, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-bg-primary ${partner.color} flex items-center justify-center text-[10px] font-bold text-white shadow-sm`}>
                    {partner.initial}
                  </div>
                ))}
              </div>
              <p>Trusted by 2,500+ Businesses</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
             <div className="relative z-10 rounded-2xl border border-border-primary bg-bg-secondary/80 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-white/10">
                <div className="h-10 bg-bg-tertiary border-b border-border-primary flex items-center justify-between px-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                  </div>
                  <div className="text-[10px] text-text-tertiary font-mono">dashboard.invoicechain.eth</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-8">
                     <div>
                        <p className="text-xs text-text-tertiary font-medium uppercase tracking-wider">Available Credit Limit</p>
                        <p className="text-3xl font-bold mt-1 text-white">₹ 1,50,00,000</p>
                     </div>
                     <Button size="sm" className="bg-accent-success/10 text-accent-success border border-accent-success/20 hover:bg-accent-success/20">
                       <TrendingUp size={16} className="mr-2" /> Withdraw
                     </Button>
                  </div>
                  <div className="space-y-4">
                    {HERO_INVOICES.map((inv, i) => (
                      <motion.div 
                        key={inv.id}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + (i * 0.1) }}
                        className="flex items-center justify-between p-4 rounded-xl bg-bg-tertiary/50 border border-border-primary hover:border-accent-primary/30 transition-colors group cursor-pointer"
                      >
                         <div className="flex items-center gap-4">
                           <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${inv.color} flex items-center justify-center text-sm font-bold text-white shadow-lg`}>
                             {inv.initial}
                           </div>
                           <div>
                             <p className="text-sm font-bold text-white group-hover:text-accent-primary transition-colors">{inv.company}</p>
                             <p className="text-xs text-text-tertiary">{inv.id}</p>
                           </div>
                         </div>
                         <div className="text-right">
                           <p className="text-sm font-mono font-medium text-white">{inv.amount}</p>
                           <Badge variant={inv.status === 'Funded' ? 'success' : inv.status === 'Verified' ? 'info' : 'warning'} className="mt-1">
                             {inv.status}
                           </Badge>
                         </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-accent-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
             <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-accent-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </motion.div>
        </div>
      </section>

      {/* --- How It Works Section --- */}
      <section id="how-it-works" className="py-24 bg-bg-secondary border-y border-border-primary relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-text-secondary text-lg">
              A transparent, trustless workflow powered by smart contracts. 
              We replace manual paperwork with cryptographic proofs.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border-secondary -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-bg-primary border border-border-primary p-6 rounded-2xl relative group hover:border-accent-primary/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-bg-tertiary rounded-xl border border-border-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-accent-primary/10 group-hover:border-accent-primary/50">
                    <step.icon size={28} className="text-text-primary group-hover:text-accent-primary transition-colors" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-bg-tertiary border border-border-primary flex items-center justify-center font-bold text-sm text-text-tertiary">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- For MSMEs Section --- */}
      <section id="msme" className="py-24 bg-bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-secondary/10 text-accent-secondary text-xs font-semibold mb-6 border border-accent-secondary/20">
                  For Suppliers & MSMEs
               </div>
               <h2 className="text-3xl md:text-5xl font-bold mb-6">
                 Get Paid in <span className="text-accent-secondary">24 Hours</span>, Not 90 Days.
               </h2>
               <p className="text-text-secondary text-lg mb-8">
                 Stop chasing payments. Use your delivered goods as collateral. 
                 Upload proof of delivery and get funded instantly by competing banks.
               </p>
               
               <div className="space-y-6">
                 {[
                   { title: 'Zero Collateral', desc: 'Your invoice is the asset. No property or FD needed.' },
                   { title: 'Dynamic Discounting', desc: 'Upload video proof & GPS data to lower your interest rate by up to 2%.' },
                   { title: 'No Debt Trap', desc: 'It is not a loan. It is an advance on money you have already earned.' }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4">
                     <div className="mt-1 w-6 h-6 rounded-full bg-accent-secondary/20 flex items-center justify-center shrink-0 text-accent-secondary">
                       <CheckCheck size={14} />
                     </div>
                     <div>
                       <h4 className="font-bold text-lg">{item.title}</h4>
                       <p className="text-text-secondary text-sm">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
               
               <Button className="mt-10 bg-accent-secondary hover:bg-accent-secondary/90 text-white" onClick={() => navigate('/dashboard')}>
                 Register as MSME
               </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
               {/* Abstract Dashboard Graphic */}
               <div className="bg-bg-secondary border border-border-primary rounded-2xl p-6 shadow-2xl relative z-10">
                  <div className="flex justify-between items-center mb-6 pb-6 border-b border-border-primary">
                    <div>
                      <p className="text-sm text-text-tertiary">Verification Score</p>
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold text-white">98/100</span>
                        <Badge variant="success">Excellent</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                       <p className="text-sm text-text-tertiary">Interest Rate</p>
                       <p className="text-2xl font-bold text-accent-success">1.2% / mo</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-bg-tertiary p-3 rounded-lg border border-border-secondary flex items-center justify-between">
                       <div className="flex items-center gap-3">
                         <FileText size={18} className="text-text-secondary" />
                         <span className="text-sm">GST Validated</span>
                       </div>
                       <CheckCheck size={18} className="text-accent-success" />
                    </div>
                    <div className="bg-bg-tertiary p-3 rounded-lg border border-border-secondary flex items-center justify-between">
                       <div className="flex items-center gap-3">
                         <Zap size={18} className="text-accent-warning" />
                         <span className="text-sm">Delivery Video Proof</span>
                       </div>
                       <CheckCheck size={18} className="text-accent-success" />
                    </div>
                    <div className="bg-bg-tertiary p-3 rounded-lg border border-border-secondary flex items-center justify-between">
                       <div className="flex items-center gap-3">
                         <Shield size={18} className="text-accent-info" />
                         <span className="text-sm">Buyer Approved</span>
                       </div>
                       <CheckCheck size={18} className="text-accent-success" />
                    </div>
                  </div>
               </div>
               
               {/* Decorative Gradient Blob */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-secondary/10 blur-[80px] rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- For Banks Section --- */}
      <section id="banks" className="py-24 bg-bg-secondary border-t border-border-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual First for Banks */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
               <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-bg-primary border-border-primary p-6">
                     <TrendingUp className="text-accent-success mb-4" size={32} />
                     <p className="text-2xl font-bold mb-1">18.5%</p>
                     <p className="text-xs text-text-tertiary">Avg. Yield (APR)</p>
                  </Card>
                  <Card className="bg-bg-primary border-border-primary p-6">
                     <Shield className="text-accent-primary mb-4" size={32} />
                     <p className="text-2xl font-bold mb-1">0.2%</p>
                     <p className="text-xs text-text-tertiary">Default Rate</p>
                  </Card>
                  <Card className="bg-bg-primary border-border-primary p-6 col-span-2">
                     <div className="flex items-center gap-4 mb-4">
                       <div className="w-10 h-10 rounded-full bg-accent-info/20 flex items-center justify-center text-accent-info">
                         <Globe size={20} />
                       </div>
                       <div>
                         <p className="font-bold">Diversified Portfolio</p>
                         <p className="text-xs text-text-tertiary">Access 15+ Industries</p>
                       </div>
                     </div>
                     <div className="h-2 w-full bg-bg-tertiary rounded-full overflow-hidden">
                       <div className="h-full w-3/4 bg-gradient-primary"></div>
                     </div>
                  </Card>
               </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-success/10 text-accent-success text-xs font-semibold mb-6 border border-accent-success/20">
                  For Banks & NBFCs
               </div>
               <h2 className="text-3xl md:text-5xl font-bold mb-6">
                 High-Yield Assets, <br />
                 <span className="text-accent-success">Validated by Code.</span>
               </h2>
               <p className="text-text-secondary text-lg mb-8">
                 Access a new asset class of short-term, high-yield invoice financing. 
                 Verification is programmatic, settlement is automatic.
               </p>
               
               <div className="space-y-8">
                  <div className="flex gap-4">
                     <div className="w-12 h-12 bg-bg-primary rounded-xl border border-border-primary flex items-center justify-center shrink-0">
                       <Database size={24} className="text-text-primary" />
                     </div>
                     <div>
                       <h4 className="font-bold text-lg mb-1">Immutable Data</h4>
                       <p className="text-sm text-text-secondary">All invoice data and delivery proof is hashed on IPFS and anchored to Polygon. Zero fraud risk.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-12 h-12 bg-bg-primary rounded-xl border border-border-primary flex items-center justify-center shrink-0">
                       <Lock size={24} className="text-text-primary" />
                     </div>
                     <div>
                       <h4 className="font-bold text-lg mb-1">Smart Contract Settlement</h4>
                       <p className="text-sm text-text-secondary">Repayments are enforced by code. When the buyer pays, funds are automatically routed to your wallet.</p>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Whitepaper / Architecture Section --- */}
      <section id="whitepaper" className="py-24 bg-bg-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="info" className="mb-4">Whitepaper</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Future of Trade Finance</h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              We are reimagining invoice financing by replacing trust in intermediaries with trust in code. 
              Our architecture leverages the security of Polygon and the privacy of off-chain computation.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="mb-24">
             <div className="grid md:grid-cols-2 gap-8">
                {/* Traditional */}
                <div className="p-8 rounded-2xl bg-bg-secondary/50 border border-border-primary">
                   <h3 className="text-xl font-bold mb-6 text-text-tertiary">Traditional Factoring</h3>
                   <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-text-secondary">
                         <div className="mt-1 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 text-red-500">
                           <X size={14} /> 
                         </div>
                         <span>Manual Verification (Weeks)</span>
                      </li>
                      <li className="flex items-start gap-3 text-text-secondary">
                         <div className="mt-1 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 text-red-500">
                           <X size={14} /> 
                         </div>
                         <span>High Paperwork & Admin Costs</span>
                      </li>
                      <li className="flex items-start gap-3 text-text-secondary">
                         <div className="mt-1 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 text-red-500">
                           <X size={14} /> 
                         </div>
                         <span>Opaque Risk Assessment</span>
                      </li>
                      <li className="flex items-start gap-3 text-text-secondary">
                         <div className="mt-1 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 text-red-500">
                           <X size={14} /> 
                         </div>
                         <span>Settlement Delays (T+30)</span>
                      </li>
                   </ul>
                </div>

                {/* InvoiceChain */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-bg-secondary to-bg-tertiary border border-accent-primary/30 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-10">
                      <TrendingUp size={100} />
                   </div>
                   <h3 className="text-xl font-bold mb-6 text-white">InvoiceChain Advantage</h3>
                   <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-white">
                         <div className="mt-1 w-5 h-5 rounded-full bg-accent-success/20 flex items-center justify-center shrink-0 text-accent-success">
                           <CheckCheck size={14} /> 
                         </div>
                         <span>Programmatic Verification (Seconds)</span>
                      </li>
                      <li className="flex items-start gap-3 text-white">
                         <div className="mt-1 w-5 h-5 rounded-full bg-accent-success/20 flex items-center justify-center shrink-0 text-accent-success">
                           <CheckCheck size={14} /> 
                         </div>
                         <span>Zero Paperwork via Metadata Layer</span>
                      </li>
                      <li className="flex items-start gap-3 text-white">
                         <div className="mt-1 w-5 h-5 rounded-full bg-accent-success/20 flex items-center justify-center shrink-0 text-accent-success">
                           <CheckCheck size={14} /> 
                         </div>
                         <span>Transparent On-Chain Risk Score</span>
                      </li>
                      <li className="flex items-start gap-3 text-white">
                         <div className="mt-1 w-5 h-5 rounded-full bg-accent-success/20 flex items-center justify-center shrink-0 text-accent-success">
                           <CheckCheck size={14} /> 
                         </div>
                         <span>Instant Atomic Settlement (T+0)</span>
                      </li>
                   </ul>
                </div>
             </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold">System Architecture</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Frontend Layer */}
            <div className="border border-border-primary rounded-xl p-6 bg-bg-secondary relative group hover:border-accent-primary/50 transition-colors">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg-primary px-3 py-1 border border-border-primary rounded-full text-xs font-bold uppercase text-text-tertiary">
                Frontend
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <div className="p-3 bg-bg-tertiary rounded border border-border-secondary text-center text-sm font-bold">Next.js App</div>
                <div className="p-3 bg-bg-tertiary rounded border border-border-secondary text-center text-sm font-bold">RainbowKit</div>
                <div className="p-3 bg-bg-tertiary rounded border border-border-secondary text-center text-sm font-bold">Recharts</div>
              </div>
              <div className="mt-6 text-xs text-text-tertiary text-center">
                Handles User Interaction, Wallet Connection, and Data Visualization.
              </div>
            </div>

            {/* Application Layer */}
            <div className="border border-border-primary rounded-xl p-6 bg-bg-secondary relative group hover:border-accent-primary/50 transition-colors">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg-primary px-3 py-1 border border-border-primary rounded-full text-xs font-bold uppercase text-text-tertiary">
                App Layer
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <div className="p-3 bg-bg-tertiary rounded border border-border-secondary text-center text-sm font-bold">Risk Engine</div>
                <div className="p-3 bg-bg-tertiary rounded border border-border-secondary text-center text-sm font-bold">Notification Svc</div>
                <div className="p-3 bg-bg-tertiary rounded border border-border-secondary text-center text-sm font-bold">Metadata API</div>
              </div>
              <div className="mt-6 text-xs text-text-tertiary text-center">
                Off-chain processing for speed, risk calculation, and file handling.
              </div>
            </div>

            {/* Storage Layer */}
            <div className="border border-border-primary rounded-xl p-6 bg-bg-secondary relative group hover:border-accent-primary/50 transition-colors">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg-primary px-3 py-1 border border-border-primary rounded-full text-xs font-bold uppercase text-text-tertiary">
                Storage
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <div className="p-3 bg-blue-900/20 text-blue-400 rounded border border-blue-500/30 text-center text-sm font-bold">IPFS</div>
                <div className="p-3 bg-bg-tertiary rounded border border-border-secondary text-center text-sm font-bold">PostgreSQL</div>
                <div className="p-3 bg-bg-tertiary rounded border border-border-secondary text-center text-sm font-bold">S3 Bucket</div>
              </div>
              <div className="mt-6 text-xs text-text-tertiary text-center">
                IPFS for decentralized proof storage. SQL for caching and fast retrieval.
              </div>
            </div>

            {/* Blockchain Layer */}
            <div className="border border-border-primary rounded-xl p-6 bg-bg-secondary relative group hover:border-accent-primary/50 transition-colors">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg-primary px-3 py-1 border border-border-primary rounded-full text-xs font-bold uppercase text-text-tertiary">
                Polygon Mainnet
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <div className="p-3 bg-purple-900/20 text-purple-400 rounded border border-purple-500/30 text-center text-sm font-bold">InvoiceRegistry.sol</div>
                <div className="p-3 bg-purple-900/20 text-purple-400 rounded border border-purple-500/30 text-center text-sm font-bold">FundingPool.sol</div>
                <div className="p-3 bg-purple-900/20 text-purple-400 rounded border border-purple-500/30 text-center text-sm font-bold">Settlement.sol</div>
              </div>
              <div className="mt-6 text-xs text-text-tertiary text-center">
                Smart contracts managing ownership, state, and funds distribution.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 bg-bg-secondary border-t border-border-primary">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-8 h-8 rounded bg-gradient-primary flex items-center justify-center">
              <TrendingUp className="text-white" size={18} />
            </div>
            <span className="font-bold text-xl tracking-tight">InvoiceChain</span>
          </div>
          <div className="text-text-tertiary text-sm">
            © 2026 InvoiceChain Decentralized Finance. All rights reserved.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0 text-text-secondary text-sm">
            <button onClick={() => setLegalModal('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => setLegalModal('terms')} className="hover:text-white transition-colors">Terms of Service</button>
            <button className="hover:text-white transition-colors cursor-not-allowed opacity-50">Smart Contracts</button>
          </div>
        </div>
      </footer>

      {/* --- Legal Modals --- */}
      <AnimatePresence>
        {legalModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLegalModal(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-bg-secondary rounded-2xl border border-border-primary shadow-2xl max-h-[80vh] flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-border-primary">
                <div className="flex items-center gap-3">
                  <ScrollText className="text-accent-primary" />
                  <h2 className="text-xl font-bold">
                    {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
                  </h2>
                </div>
                <button onClick={() => setLegalModal(null)} className="p-2 hover:bg-bg-tertiary rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8 overflow-y-auto space-y-6 text-text-secondary text-sm leading-relaxed custom-scrollbar">
                {legalModal === 'privacy' ? (
                  <>
                    <p>Last Updated: October 2026</p>
                    <h3 className="text-lg font-bold text-text-primary">1. Data Collection</h3>
                    <p>We collect information you provide directly to us when you register for an account, create an invoice, or upload proof metadata. This includes GSTIN, business details, and media files (images/videos) for delivery verification.</p>
                    
                    <h3 className="text-lg font-bold text-text-primary">2. Blockchain Transparency</h3>
                    <p>Please note that specific transaction data, including invoice hashes and status updates, are recorded on the Polygon public blockchain. While we do not store PII on-chain, wallet addresses and transaction history are public.</p>
                    
                    <h3 className="text-lg font-bold text-text-primary">3. Media Storage</h3>
                    <p>Proof metadata (delivery photos, videos) is stored on decentralized IPFS nodes. Content is hashed for immutability.</p>
                  </>
                ) : (
                  <>
                     <p>Last Updated: October 2026</p>
                     <h3 className="text-lg font-bold text-text-primary">1. Acceptance of Terms</h3>
                     <p>By accessing InvoiceChain, you agree to be bound by these Terms of Service and all applicable laws and regulations governing decentralized finance (DeFi) in your jurisdiction.</p>

                     <h3 className="text-lg font-bold text-text-primary">2. Smart Contract Risks</h3>
                     <p>InvoiceChain operates via smart contracts on the Polygon network. While audited, smart contracts carry inherent risks. You acknowledge that you are using the protocol at your own risk.</p>

                     <h3 className="text-lg font-bold text-text-primary">3. Financial Disclaimer</h3>
                     <p>We do not provide investment advice. Funding rates and dynamic discounts are calculated algorithmically based on verification inputs.</p>
                  </>
                )}
              </div>

              <div className="p-6 border-t border-border-primary bg-bg-tertiary/30 rounded-b-2xl flex justify-end">
                <Button onClick={() => setLegalModal(null)}>I Understand</Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
