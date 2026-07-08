import { FadeIn } from '../ui/FadeIn';

export function Scene6() {
  const steps = [
    { text: "I moved from the Andaman Islands to Chennai.", delay: 0.4 },
    { text: "I joined Promanage.biz.", delay: 0.6 },
    { text: "Here, I experienced enterprise digital marketing for the first time.", delay: 0.8 },
    { 
      text: "I worked with brands like DHL, Mia by Tanishq, Mahindra Finance, and Manappuram Finance.", 
      delay: 1.0, 
      highlight: true 
    },
    { text: "I learned how large organizations approach digital growth.", delay: 1.2 },
    { text: "That experience prepared me for what came next.", delay: 1.4 }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-black text-white px-4 md:px-6 py-16 md:py-24 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-900/10 rounded-full blur-[100px] md:blur-[140px]" />
      </div>

      <div className="z-10 w-full max-w-3xl mx-auto flex flex-col items-center space-y-8 md:space-y-10 text-center">
        
        {/* Title */}
        <div className="space-y-3">
          <FadeIn delay={0.1} duration={0.8}>
            <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-500 uppercase bg-zinc-900 px-3.5 py-1.5 rounded-full inline-block">
              A BIGGER STAGE
            </span>
          </FadeIn>
          
          <FadeIn delay={0.2} duration={0.8}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-light text-zinc-200 leading-tight max-w-2xl">
              Growth requires <span className="text-white font-medium">stepping outside your comfort zone.</span>
            </h2>
          </FadeIn>
        </div>

        {/* Chronological Flow */}
        <div className="w-full max-w-xl space-y-4 md:space-y-5">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {idx > 0 && (
                <FadeIn delay={step.delay - 0.1} duration={0.4}>
                  <div className="text-zinc-600 text-xs my-1 font-mono">↓</div>
                </FadeIn>
              )}
              
              <FadeIn delay={step.delay} duration={0.6}>
                <div className={`px-5 py-3.5 rounded-2xl border text-center transition-colors w-full ${
                  step.highlight 
                    ? 'bg-zinc-950 border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.05)]' 
                    : 'bg-zinc-950/60 border-zinc-900'
                }`}>
                  <p className={`font-sans text-sm md:text-base leading-relaxed ${
                    step.highlight ? 'text-amber-100 font-medium' : 'text-zinc-300'
                  }`}>
                    {step.text}
                  </p>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

