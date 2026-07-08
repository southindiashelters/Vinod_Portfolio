import { motion } from 'motion/react';
import { FadeIn } from '../ui/FadeIn';
import { ArrowRight, Mail, MessageCircle, Sparkles, Linkedin } from 'lucide-react';

const WHATSAPP_NUMBER = "919679533727"; // User's WhatsApp phone number

export function FinalScene() {
  const getWhatsappUrl = () => {
    const formattedText = `Hello Vinod,

I visited your digital portfolio and would love to connect with you regarding digital growth, marketing campaigns, and AI workflows!`;
    return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(formattedText)}`;
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-black text-white px-4 md:px-6 py-16 md:py-24 overflow-hidden">
      
      {/* Absolute dark space background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[800px] h-[350px] sm:h-[800px] border border-zinc-900 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[140px]"></div>
      </div>

      <div className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center space-y-12 md:space-y-16">
        
        {/* PART 1: Silent Cinematic Opening */}
        <div className="text-center space-y-4 md:space-y-6 max-w-3xl">
          <FadeIn delay={0.1} duration={0.8}>
            <p className="text-xl md:text-3xl font-display font-light text-zinc-500 italic">
              I started with curiosity.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} duration={0.8}>
            <p className="text-2xl md:text-4xl lg:text-5xl font-display font-medium text-white leading-tight">
              Today... <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">
                I connect Marketing, Technology & AI <br className="hidden md:inline" /> to drive business growth.
              </span>
            </p>
          </FadeIn>
        </div>

        {/* PART 2: Profile & Professional Details Reveal */}
        <FadeIn delay={0.6} duration={1.0} className="w-full">
          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative max-w-3xl mx-auto">
            
            <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
              
              {/* Elegant Profile Portrait representation (VK badge with spinning orbit rings) */}
              <div className="relative w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-amber-500/30"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 rounded-full border border-zinc-800"
                />
                
                {/* Inner constant glow orb with professional profile image */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-amber-500/40 shadow-[0_0_30px_rgba(245,158,11,0.15)] relative overflow-hidden group bg-zinc-950">
                  <img
                    src="https://i.ibb.co/1Y1msSwD/vinod.png"
                    alt="Vinod Kumar P"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Subtle gold overlay highlight */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Name and Professional Role */}
              <div className="space-y-2 md:space-y-3">
                <h1 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white">
                  Vinod Kumar P
                </h1>
                <p className="text-base md:text-xl font-display font-medium text-zinc-300 leading-snug">
                  Digital Growth & Marketing Technology Professional
                </p>
                <p className="text-xs md:text-sm font-mono text-amber-500 tracking-wider uppercase">
                  Connecting Marketing, Technology & AI to Drive Business Growth.
                </p>
              </div>

              {/* Direct Contact Badges */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-4 text-[11px] font-mono text-zinc-400 bg-zinc-900/30 border border-zinc-900/80 px-4 py-3 rounded-2xl w-full max-w-xl">
                <a href="mailto:vinodkumar@sisestates.com" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                  <Mail size={13} className="text-amber-500 shrink-0" />
                  <span>vinodkumar@sisestates.com</span>
                </a>
                <span className="hidden lg:inline text-zinc-800">|</span>
                <a href="https://wa.me/919679533727" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                  <MessageCircle size={13} className="text-emerald-500 shrink-0" />
                  <span>+91 96795 33727</span>
                </a>
                <span className="hidden lg:inline text-zinc-800">|</span>
                <a href="https://www.linkedin.com/in/vinod-kumar-p-3b0212208/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Linkedin size={13} className="text-blue-400 shrink-0" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>

              {/* Action Buttons Grid */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg justify-center pt-2">
                <a
                  href={getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full font-display text-xs md:text-sm font-semibold text-black bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-400/10 active:scale-95 flex-1"
                >
                  <MessageCircle size={16} />
                  <span>Ping on WhatsApp</span>
                  <ArrowRight size={14} />
                </a>

                <a
                  href="mailto:vinodkumar@sisestates.com"
                  className="px-6 py-3.5 rounded-full font-display text-xs md:text-sm font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 flex-1"
                >
                  <Mail size={16} />
                  <span>Send an Email</span>
                </a>
              </div>

              <div className="text-[10px] font-mono text-zinc-600 flex items-center gap-1.5 justify-center">
                <Sparkles size={10} className="text-amber-500/60" />
                <span>Let's build something meaningful together</span>
              </div>

            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
