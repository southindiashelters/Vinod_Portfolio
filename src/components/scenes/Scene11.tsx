import { FadeIn } from '../ui/FadeIn';

export function Scene11() {
  const influencers = [
    { name: "Google", concept: "Curiosity." },
    { name: "YouTube", concept: "Learning." },
    { name: "Jio", concept: "Access — Sparking India's internet revolution." },
    { name: "Rich Dad Poor Dad", concept: "Mindset shift — One book changed the way I thought." },
    { name: "ChatGPT", concept: "Unlocking efficiency." },
    { name: "Steve Jobs", concept: "Connect the dots." },
    { 
      name: "Jeff Bezos", 
      concept: "Start small. Think long-term." 
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-zinc-50 text-black px-4 md:px-6 py-16 md:py-24 overflow-hidden">
      
      {/* Background soft tech ambient layout */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      <div className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center space-y-10 md:space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-3">
          <FadeIn delay={0.1} duration={0.8}>
            <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-400 uppercase bg-zinc-100 px-3.5 py-1.5 rounded-full inline-block">
              WHAT SHAPED MY THINKING
            </span>
          </FadeIn>
          
          <FadeIn delay={0.2} duration={0.8}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-light text-zinc-800">
              Every journey is influenced by something.
            </h2>
          </FadeIn>
        </div>

        {/* Minimal list of key pairings */}
        <div className="w-full max-w-2xl space-y-6 divide-y divide-zinc-200/60 pt-4">
          {influencers.map((item, idx) => (
            <div key={item.name} className="pt-6 first:pt-0 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-baseline md:items-center">
              <FadeIn delay={0.4 + idx * 0.15} direction="none" duration={0.6} className="md:col-span-5">
                <span className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-zinc-950 block">
                  {item.name}
                </span>
              </FadeIn>
              
              <FadeIn delay={0.6 + idx * 0.15} direction="none" duration={0.6} className="md:col-span-7 md:text-right">
                <span className="font-display text-base md:text-lg lg:text-xl font-light text-zinc-500 block">
                  {item.concept}
                </span>
              </FadeIn>
            </div>
          ))}
        </div>

        {/* Ending statement */}
        <FadeIn delay={1.6} duration={0.8}>
          <div className="pt-8 border-t border-zinc-200 w-full max-w-md text-center">
            <p className="text-base md:text-lg font-sans text-zinc-500">
              These ideas continue to shape how I think and build.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
