import { FadeIn } from '../ui/FadeIn';

export function Scene7() {
  const steps = [
    { text: "In 2024, I joined South India Shelters.", delay: 0.3 },
    { text: "This wasn't just another role.", delay: 0.5 },
    { text: "It changed how I think.", delay: 0.7, bold: true },
    { text: "I stopped seeing marketing as campaigns.", delay: 0.9 },
    { text: "I started seeing businesses as connected experiences.", delay: 1.1, highlight: true }
  ];

  const pillars = [
    { name: "Marketing.", delay: 1.3 },
    { name: "Technology.", delay: 1.4 },
    { name: "Customer Experience.", delay: 1.5 },
    { name: "Automation.", delay: 1.6 },
    { name: "AI.", delay: 1.7 }
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center relative bg-zinc-950 text-white px-4 md:px-6 py-16 md:py-24 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-amber-500/[0.03] rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

      <div className="z-10 w-full max-w-3xl mx-auto flex flex-col space-y-10 md:space-y-12">
        
        {/* Title */}
        <div className="space-y-4 text-center">
          <FadeIn delay={0.1} duration={0.8}>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.1em] sm:tracking-[0.3em] text-amber-500 uppercase bg-amber-500/10 px-4 py-2 rounded-2xl sm:rounded-full inline-block max-w-full text-center">
              SOUTH INDIA SHELTERS – WHERE EVERYTHING CONNECTED
            </span>
          </FadeIn>

          <FadeIn delay={0.2} duration={0.8}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-light text-zinc-400">
              A deeper, unified vision <span className="text-white font-medium">takes shape.</span>
            </h2>
          </FadeIn>
        </div>

        {/* Narrative Flow */}
        <div className="w-full max-w-xl mx-auto space-y-4 md:space-y-5">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {idx > 0 && (
                <FadeIn delay={step.delay - 0.1} duration={0.4}>
                  <div className="text-zinc-700 text-xs my-0.5 font-mono">↓</div>
                </FadeIn>
              )}
              
              <FadeIn delay={step.delay} duration={0.6}>
                <div className={`px-6 py-4 rounded-2xl text-center w-full ${
                  step.highlight 
                    ? 'bg-amber-500/5 border border-amber-500/25 shadow-[0_0_20px_rgba(245,158,11,0.03)]' 
                    : step.bold 
                    ? 'bg-zinc-900 border border-zinc-800 text-white'
                    : 'bg-zinc-900/40 border border-zinc-900/60'
                }`}>
                  <p className={`font-sans text-base md:text-lg leading-relaxed ${
                    step.highlight ? 'text-amber-200 font-semibold' : step.bold ? 'text-white font-medium' : 'text-zinc-350'
                  }`}>
                    {step.text}
                  </p>
                </div>
              </FadeIn>
            </div>
          ))}

          {/* Pillars List */}
          <div className="flex flex-col items-center pt-2">
            <FadeIn delay={1.2} duration={0.4}>
              <div className="text-amber-500 text-xs my-1 font-mono">↓</div>
            </FadeIn>

            <div className="grid grid-cols-1 gap-2 w-full max-w-sm mt-2">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {idx > 0 && (
                    <FadeIn delay={pillar.delay - 0.05} duration={0.3}>
                      <div className="text-zinc-800 text-[10px] my-0.5">↓</div>
                    </FadeIn>
                  )}
                  <FadeIn delay={pillar.delay} duration={0.5}>
                    <div className="px-5 py-2.5 bg-zinc-950 border border-zinc-900 rounded-xl text-center min-w-[200px] shadow-sm hover:border-zinc-800 transition-colors">
                      <span className="font-mono text-xs md:text-sm text-zinc-300 font-semibold uppercase tracking-wider">
                        {pillar.name}
                      </span>
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>

          {/* Concluding Statement */}
          <div className="flex flex-col items-center pt-4">
            <FadeIn delay={1.8} duration={0.4}>
              <div className="text-amber-500 text-xs my-1 font-mono">↓</div>
            </FadeIn>

            <FadeIn delay={1.9} duration={0.8}>
              <div className="text-center pt-3 border-t border-zinc-900 w-full">
                <p className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 leading-tight">
                  Everything working together.
                </p>
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}

