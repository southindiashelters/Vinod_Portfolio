import { FadeIn } from '../ui/FadeIn';

export function Scene3() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-zinc-50 text-black px-4 md:px-6 py-16 md:py-24 overflow-hidden">
      
      {/* Background soft ambient grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center space-y-10 md:space-y-12 text-center">
        
        {/* Title */}
        <div className="space-y-3">
          <FadeIn delay={0.1} duration={0.8}>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.3em] text-zinc-400 uppercase bg-zinc-200 px-4 py-2 rounded-2xl sm:rounded-full inline-block">
              LEARNING THROUGH PEOPLE
            </span>
          </FadeIn>
          
          <FadeIn delay={0.2} duration={0.8}>
            <p className="text-xl md:text-3xl font-display font-light text-zinc-500">
              Technology wasn't my first career.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3} duration={0.8}>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-zinc-950 tracking-tight">
              People were.
            </h3>
          </FadeIn>
        </div>

        {/* Career start */}
        <FadeIn delay={0.5} duration={0.8}>
          <p className="text-lg md:text-xl font-sans text-zinc-600 font-light">
            I started my career in the tourism industry.
          </p>
        </FadeIn>

        {/* Roles/Capabilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-3xl">
          {[
            { title: 'Front Office', delay: 0.7 },
            { title: 'Tour Guide', delay: 0.8 },
            { title: 'Sales', delay: 0.9 },
            { title: 'CRM', delay: 1.0 }
          ].map((item, i) => (
            <FadeIn key={item.title} delay={item.delay} duration={0.6}>
              <div className="px-4 py-4 bg-white border border-zinc-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <span className="font-mono text-[10px] text-zinc-400 block mb-1">0{i+1}</span>
                <p className="font-display text-sm md:text-base font-semibold text-zinc-800">
                  {item.title}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Customer insights */}
        <div className="space-y-4 max-w-xl">
          <FadeIn delay={1.2} duration={0.8}>
            <p className="text-base md:text-lg font-sans text-zinc-600">
              Every customer taught me something. <br />
              <span className="font-semibold text-black">Every conversation mattered.</span>
            </p>
          </FadeIn>
          
          <FadeIn delay={1.4} duration={0.8}>
            <p className="text-lg md:text-xl font-display font-light text-zinc-500 italic">
              Before understanding technology... <br />
              I learned to understand people.
            </p>
          </FadeIn>
        </div>

        {/* Digital marketing shift */}
        <div className="pt-6 border-t border-zinc-200/60 w-full max-w-xl space-y-4">
          <FadeIn delay={1.6} duration={0.8}>
            <p className="text-sm font-mono text-zinc-500">
              During this time... I started exploring digital marketing.
            </p>
          </FadeIn>

          <FadeIn delay={1.8} duration={0.8}>
            <p className="text-xl md:text-2xl font-display font-semibold text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-600">
              Dreams became bigger. So did my curiosity.
            </p>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
