import { motion } from 'motion/react';
import { FadeIn } from '../ui/FadeIn';

export function Scene2() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-white text-black px-4 md:px-6 py-16 md:py-24 overflow-hidden">
      
      {/* Dynamic graphic: very subtle grid line */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      <div className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center space-y-10 md:space-y-12 text-center">
        
        {/* Title */}
        <div className="space-y-3">
          <FadeIn delay={0.1} duration={0.8}>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.3em] text-zinc-400 uppercase bg-zinc-100 px-4 py-2 rounded-2xl sm:rounded-full inline-block">
              CURIOSITY CHANGED EVERYTHING
            </span>
          </FadeIn>
          
          <FadeIn delay={0.2} duration={0.8}>
            <p className="text-xl md:text-3xl font-display font-light text-zinc-500 leading-relaxed">
              Early on, <br />
              one page always fascinated me.
            </p>
          </FadeIn>
        </div>

        {/* Google Representation */}
        <div className="space-y-4 w-full flex flex-col items-center">
          <FadeIn delay={0.4} duration={0.8}>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight select-none">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.5} duration={0.8}>
            {/* Minimal elegant search box */}
            <div className="w-64 md:w-96 h-11 rounded-full border border-zinc-200 bg-zinc-50/50 flex items-center px-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="text-xs font-mono text-zinc-400">One search box. Unlimited possibilities.</span>
              <motion.span 
                animate={{ opacity: [1, 0, 1] }} 
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1 w-[1.5px] h-4 bg-zinc-400 inline-block"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.7} duration={0.8}>
            <p className="text-lg md:text-xl font-sans text-zinc-600 font-light max-w-xl">
              It wasn't just a search engine. <br />
              It was my window to the world.
            </p>
          </FadeIn>
        </div>

        {/* Narrative Loop */}
        <div className="space-y-4 md:space-y-6 max-w-2xl">
          <FadeIn delay={0.9} duration={0.8}>
            <p className="text-base md:text-lg font-sans text-zinc-500 leading-relaxed">
              Every search led to another question. <br />
              Every question led to another lesson.
            </p>
          </FadeIn>

          <FadeIn delay={1.1} duration={0.8}>
            <p className="text-xl md:text-2xl font-display font-light text-zinc-800">
              Curiosity became a habit.
            </p>
          </FadeIn>
        </div>

        {/* YouTube Section */}
        <div className="space-y-4 w-full flex flex-col items-center pt-4 border-t border-zinc-100 max-w-xl">
          <FadeIn delay={1.3} duration={0.8}>
            <p className="text-xl md:text-2xl font-display font-light text-zinc-800">
              <span className="font-semibold text-[#FF0000]">YouTube</span> became my classroom.
            </p>
          </FadeIn>

          <FadeIn delay={1.5} duration={0.8}>
            <div className="flex flex-wrap justify-center gap-3">
              {['I learned.', 'I practiced.', 'I built.'].map((phrase, i) => (
                <span 
                  key={phrase} 
                  className="px-4 py-2 bg-zinc-50 border border-zinc-200 text-zinc-800 font-mono text-xs rounded-full shadow-sm"
                >
                  {phrase}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Formal Ed/Internet */}
        <FadeIn delay={1.8} duration={0.8}>
          <div className="pt-6">
            <p className="text-base md:text-lg font-sans text-zinc-600 max-w-xl">
              I studied BBA Tourism at Jawaharlal Rajkeeya Maha Vidyalaya (JNRM). <br />
              <span className="font-semibold text-black">But my real classroom was the internet.</span>
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
