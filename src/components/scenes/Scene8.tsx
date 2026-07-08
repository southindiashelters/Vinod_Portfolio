import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn } from '../ui/FadeIn';
import { 
  TrendingUp, 
  Layout, 
  Sparkles, 
  Smartphone, 
  Database, 
  ShieldCheck, 
  ClipboardCheck, 
  Cpu, 
  ArrowRight,
  ArrowLeft,
  FolderOpen,
  ExternalLink
} from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  problem: string;
  strategy: string;
  solution: string;
  outcome: string;
  aiIntegration: string;
  url?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "google-ads",
    title: "Google Ads Performance Marketing",
    subtitle: "PMax, Demand Gen, YouTube, Search & Display campaigns across multiple developments.",
    icon: TrendingUp,
    problem: "Real estate leads are notoriously expensive and often of low quality. Without a clear distinction between audiences, digital ad spend is easily wasted, and cost-per-lead (CPL) quickly skyrockets.",
    strategy: "Developed completely distinct multi-channel marketing campaigns based on project type to capture different home-buyer mindsets:\n\n• Apartment Projects (e.g., S.I.S Florence): Focuses on lifestyle aspirations, community security, family amenities, and ready-to-move comfort with multi-format YouTube and Demand Gen campaigns.\n\n• Plotted Development Projects (e.g., S.I.S Golden Gate): Focuses on land appreciation, high investment returns, pride of land ownership, and financial wealth generation using high-performing Performance Max (PMax) strategies.",
    solution: "Built robust, multi-channel digital campaign architectures running Performance Max (PMax), Demand Gen, and YouTube campaigns, in addition to high-intent Search and Display networks with laser-targeted geographic overlays. Integrated negative keyword lists to exclude junk traffic and maximized high-intent keyword tracking.",
    outcome: "Successfully optimized ad campaigns across multiple S.I.S developments (including S.I.S Golden Gate, S.I.S Florence, and others), achieving a combined high-converting funnel of 19,455 leads using PMax, Demand Gen, YouTube, Search, and Display campaigns.",
    aiIntegration: "Used AI models to draft dozens of responsive search ad copy variations, dynamically adjust bidding parameters based on daily trends, and predict cost-per-lead thresholds prior to campaign launch."
  },
  {
    id: "sis-isfahan",
    title: "S.I.S Isfahan Landing Page",
    subtitle: "Aesthetically striking digital design.",
    icon: Sparkles,
    problem: "Luxury properties need to establish immediate value. A generic template damages the credibility of high-end Persian architecture apartments.",
    strategy: "Designed a custom visual presentation capturing the elegance and majesty of Persian architecture, centering on high-quality visuals and exclusive layouts at www.sisisfahan.in.",
    solution: "Engineered smooth scrolling behaviors, premium image galleries, and immediate digital contact points for prospective premium buyers on www.sisisfahan.in.",
    outcome: "Successfully captured affluent buyer inquiries through www.sisisfahan.in, positioning the brand as a leader in premium themed architectural design.",
    aiIntegration: "Used generative AI to brainstorm cultural copy hooks and refine Persian design descriptions for high-converting landing copy.",
    url: "www.sisisfahan.in"
  },
  {
    id: "sis-golden-gate",
    title: "S.I.S Golden Gate Interactive Kiosk",
    subtitle: "Buying land should feel interactive.",
    icon: Smartphone,
    problem: "Buyers visiting plotted developments on-site struggle to visualize plot placements, dimensions, and layout sizes from flat paper blueprints.",
    strategy: "Created an interactive touch-screen launcher app deployed in physical sales galleries, giving visitors an intuitive way to explore the entire site layout on demand.",
    solution: "Developed an on-site Android kiosk app featuring a dynamic plot layout grid. Visitors can touch individual plots to view availability, precise dimensions, and pricing.",
    outcome: "Boosted engagement during site visits, giving the sales team a modern, high-tech conversion tool right on the ground.",
    aiIntegration: "Accelerated development by generating the Android web-view container code and debugging screen-resize layouts using AI."
  },
  {
    id: "sis-inventory-portal",
    title: "S.I.S Inventory Portal",
    subtitle: "Internal tools deserve great experiences too.",
    icon: Database,
    problem: "When multiple sales reps sell real estate simultaneously, tracking available units on paper grids leads to double bookings, errors, and loss of buyer trust.",
    strategy: "Designed a secure, real-time internal unit reservation system helping the sales force access inventory instantaneously from any device.",
    solution: "Built a reactive database grid mapping out all apartment blocks. Rep reps can instantly reserve or release units, and managers receive automatic reservation notifications.",
    outcome: "100% eliminated unit booking conflicts, accelerated internal sales communication, and reduced booking cycle times.",
    aiIntegration: "Leveraged AI to design optimal database schema relationships and write secure reservation validation logic."
  },
  {
    id: "website-audit",
    title: "Website Audit Automation",
    subtitle: "Ensuring zero downtime for marketing funnels.",
    icon: ShieldCheck,
    problem: "Silent landing page errors, broken SSLs, or slow page load speeds cost valuable ad budget before anyone notices the issue.",
    strategy: "Created an automated daily audit suite that acts as a continuous quality control layer for all digital touchpoints.",
    solution: "Wrote background scripts that check active server status, test contact forms, and inspect page load times every 6 hours.",
    outcome: "Guaranteed 99.9% uptime for core landing pages, ensuring marketing budgets are never spent on broken landing experiences.",
    aiIntegration: "Used AI to write and refine node scripts, parsing server response logs to identify slow database queries."
  },
  {
    id: "lead-audit",
    title: "Lead Form Audit Automation",
    subtitle: "Never lose a high-intent buyer.",
    icon: ClipboardCheck,
    problem: "If landing page forms fail to route inquiries to the CRM, valuable potential buyers are lost forever, with no audit trail.",
    strategy: "Built a self-testing form scanner that simulates lead submissions to verify routing paths.",
    solution: "Created background testing routines that automatically verify lead form APIs, ensuring that contact information always lands safely in our databases.",
    outcome: "Achieved 100% lead capture fidelity with absolute accountability and zero missing inquiries.",
    aiIntegration: "Utilized AI-guided API mock tests to validate multi-route JSON payload configurations."
  },
  {
    id: "whatsapp-automation",
    title: "WhatsApp Automation & n8n Workflows",
    subtitle: "Instant engagement breeds customer trust.",
    icon: Cpu,
    problem: "Real estate buyers expect instant communication. A delay of hours or days before replying to a web lead slashes booking conversions by over 80%.",
    strategy: "Connected advertising channels, CRM, and communication APIs using n8n to ensure immediate post-lead action.",
    solution: "Engineered a low-latency workflow that parses newly submitted leads, logs details in the CRM database, and immediately fires a personalized brochure to the buyer's WhatsApp.",
    outcome: "Ensured 100% of digital leads are engaged within 10 seconds of submission, massively building buyer trust and brand authority.",
    aiIntegration: "Used AI to map complex JSON payloads, write custom Javascript handlers within n8n nodes, and structure natural-sounding messaging templates."
  },
  {
    id: "sis-florence",
    title: "S.I.S Florence Landing Page",
    subtitle: "Every click deserves a better experience.",
    icon: Layout,
    problem: "Traditional real estate landers are slow, overloaded with technical text, and fail to evoke the actual emotion of touring a beautiful home.",
    strategy: "Designed a premium, fast-loading, mobile-optimized experience celebrating French-inspired architecture at www.sisflorence.in. Structured content to highlight aesthetic keynotes first.",
    solution: "Used clean, high-contrast typography, clear micro-interactions, responsive form fields, and direct CTA buttons targeting home walk-throughs for www.sisflorence.in.",
    outcome: "Achieved lightning-fast load times under 1.8 seconds on www.sisflorence.in, significantly reducing visitor bounce rate and accelerating lead-to-booking speed.",
    aiIntegration: "Employed AI to draft persuasive sales hooks and architectural narratives highlighting the French structural legacy of S.I.S Florence.",
    url: "www.sisflorence.in"
  }
];

export function Scene8() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [detailTab, setDetailTab] = useState<'challenge' | 'solution'>('challenge');

  const selectActiveStudy = (id: string) => {
    setActiveId(id);
    setDetailTab('challenge');
  };

  const activeStudy = caseStudies.find(cs => cs.id === activeId);
  const IconComponent = activeStudy ? activeStudy.icon : null;

  return (
    <section className="min-h-screen flex flex-col justify-center relative bg-zinc-950 text-white px-4 md:px-6 py-16 md:py-24 overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[750px] h-[400px] md:h-[750px] bg-amber-500/[0.02] rounded-full blur-[100px] md:blur-[160px] pointer-events-none" />

      <div className="z-10 w-full max-w-6xl mx-auto flex flex-col space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-4">
          <FadeIn delay={0.1} duration={0.8}>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.3em] text-amber-500 uppercase bg-amber-500/10 px-4 py-2 rounded-2xl sm:rounded-full inline-block">
              BUILDING REAL SOLUTIONS
            </span>
          </FadeIn>

          <FadeIn delay={0.2} duration={0.8}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-light text-zinc-300">
              Every challenge became <br />
              an <span className="text-amber-500 font-medium">opportunity to build.</span>
            </h2>
          </FadeIn>
        </div>

        {/* Case Studies Container: Grid vs Detail */}
        <AnimatePresence mode="wait">
          {!activeId ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 w-full"
            >
              {caseStudies.map((cs) => {
                const ItemIcon = cs.icon;
                return (
                  <div
                    key={cs.id}
                    onClick={() => selectActiveStudy(cs.id)}
                    className="bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/80 hover:border-amber-500/50 p-5 rounded-2xl transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full hover:shadow-[0_8px_30px_rgba(245,158,11,0.06)] relative"
                  >
                    <div className="space-y-4">
                      {/* Icon */}
                      <div className="w-10 h-10 rounded-xl bg-zinc-950 flex items-center justify-center border border-zinc-850 group-hover:border-amber-500/30 group-hover:bg-amber-500/10 text-zinc-400 group-hover:text-amber-500 transition-all duration-300">
                        <ItemIcon size={18} />
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="font-display text-sm md:text-base font-bold text-zinc-100 group-hover:text-white transition-colors tracking-tight leading-snug">
                          {cs.title}
                        </h4>
                        <p className="text-zinc-400 text-xs line-clamp-2 leading-relaxed">
                          {cs.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-5 pt-3 border-t border-zinc-850/40 flex items-center justify-between text-[11px] font-mono text-zinc-500 group-hover:text-amber-400 transition-colors">
                      <span>View Case Study</span>
                      <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="w-full max-w-4xl mx-auto space-y-6"
            >
              {/* Top Action Header */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setActiveId(null)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-all text-xs font-mono cursor-pointer"
                >
                  <ArrowLeft size={14} />
                  <span>Back to All Solutions</span>
                </button>
                
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-zinc-500 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-850">
                    {caseStudies.findIndex(cs => cs.id === activeId) + 1} OF {caseStudies.length}
                  </span>
                </div>
              </div>

              {/* Core Content Stage */}
              <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 sm:p-8 min-h-[450px] flex flex-col justify-between relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/[0.015] rounded-full blur-3xl pointer-events-none" />
                
                <div className="space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-6">
                    {/* Header with Title and Quote */}
                    <div className="space-y-2 border-b border-zinc-800/60 pb-5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-amber-500">
                          {IconComponent && <IconComponent size={18} />}
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                            Case Study Detail
                          </span>
                        </div>
                        {activeStudy?.url && (
                          <a 
                            href={activeStudy.url.startsWith('http') ? activeStudy.url : `https://${activeStudy.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3.5 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full hover:bg-amber-500/25 transition-all font-mono text-[10px] tracking-wider shrink-0 w-fit cursor-pointer"
                          >
                            <ExternalLink size={10} />
                            <span>Visit: {activeStudy.url}</span>
                          </a>
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-white tracking-tight mt-2">
                        {activeStudy?.title}
                      </h3>
                      <p className="text-zinc-400 font-display italic text-sm md:text-base">
                        "{activeStudy?.subtitle}"
                      </p>
                    </div>

                    {/* Mobile tab controller (hidden on md+) */}
                    <div className="flex md:hidden bg-zinc-950 p-1 rounded-xl border border-zinc-800/80">
                      <button
                        onClick={() => setDetailTab('challenge')}
                        className={`flex-1 text-center py-2 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                          detailTab === 'challenge'
                            ? 'bg-amber-500 text-black shadow-sm'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        Challenge & Strategy
                      </button>
                      <button
                        onClick={() => setDetailTab('solution')}
                        className={`flex-1 text-center py-2 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                          detailTab === 'solution'
                            ? 'bg-amber-500 text-black shadow-sm'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        Solution & Outcome
                      </button>
                    </div>

                    {/* Problem / Strategy / Solution Breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs md:text-sm text-zinc-300">
                      <div className={`space-y-4 ${detailTab === 'challenge' ? 'block' : 'hidden md:block'}`}>
                        <div className="bg-zinc-950/40 p-4 border border-zinc-850 rounded-xl space-y-1.5">
                          <span className="text-[10px] font-mono text-rose-400 font-bold uppercase tracking-wider block">Business Challenge</span>
                          <p className="leading-relaxed text-zinc-300">{activeStudy?.problem}</p>
                        </div>
                        
                        <div className="bg-zinc-950/40 p-4 border border-zinc-850 rounded-xl space-y-1.5">
                          <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">My Strategy & Approach</span>
                          <p className="whitespace-pre-line leading-relaxed text-zinc-300">{activeStudy?.strategy}</p>
                        </div>
                      </div>

                      <div className={`space-y-4 ${detailTab === 'solution' ? 'block' : 'hidden md:block'}`}>
                        <div className="bg-zinc-950/40 p-4 border border-zinc-850 rounded-xl space-y-1.5">
                          <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block">Solution Executed</span>
                          <p className="leading-relaxed text-zinc-300">{activeStudy?.solution}</p>
                        </div>

                        <div className="bg-zinc-950/40 p-4 border border-zinc-850 rounded-xl space-y-1.5">
                          <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-wider block">Measurable Outcome</span>
                          <p className="leading-relaxed text-zinc-300">{activeStudy?.outcome}</p>
                        </div>
                      </div>
                    </div>

                    {/* Integrated AI Section */}
                    <div className="bg-amber-500/[0.02] border border-amber-500/10 p-4 rounded-xl text-xs md:text-sm">
                      <div className="flex items-center gap-2 text-amber-400 font-semibold mb-1.5 font-mono text-[10px] uppercase tracking-wider">
                        <Cpu size={14} />
                        AI Workflow Integration (Core Workflow Enhancer)
                      </div>
                      <p className="leading-relaxed text-zinc-400">
                        {activeStudy?.aiIntegration}
                      </p>
                    </div>

                  </div>

                  {/* Back / Next selectors */}
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mt-8 pt-5 border-t border-zinc-800/60">
                    <button
                      onClick={() => {
                        const currentIdx = caseStudies.findIndex(cs => cs.id === activeId);
                        const prevIdx = (currentIdx - 1 + caseStudies.length) % caseStudies.length;
                        selectActiveStudy(caseStudies[prevIdx].id);
                      }}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 text-zinc-300 font-mono text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <ArrowLeft size={14} />
                      <span>Prev Case Study</span>
                    </button>

                    <button
                      onClick={() => {
                        const currentIdx = caseStudies.findIndex(cs => cs.id === activeId);
                        const nextIdx = (currentIdx + 1) % caseStudies.length;
                        selectActiveStudy(caseStudies[nextIdx].id);
                      }}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-mono text-xs font-bold hover:bg-zinc-200 transition-colors cursor-pointer"
                    >
                      <span>Next Case Study</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
