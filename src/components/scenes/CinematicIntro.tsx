import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function CinematicIntro() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Hook into scroll progress of the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background animations mapping scroll progress
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);
  const blurAmount = useTransform(scrollYProgress, [0, 0.7, 1], ["0px", "4px", "10px"]);

  // Set up transforms for each textual slide stage using precise, custom function mappings
  // This guarantees elements hide completely (opacity 0) outside their ranges with zero extrapolation.
  
  // Stage 1: Every journey starts somewhere.
  const op1 = useTransform(scrollYProgress, (v) => {
    if (v <= 0.12) return 1;
    if (v >= 0.18) return 0;
    return 1 - (v - 0.12) / (0.18 - 0.12);
  });
  const y1 = useTransform(scrollYProgress, (v) => {
    if (v <= 0.12) return 0;
    if (v >= 0.18) return -30;
    return 0 + ((v - 0.12) / (0.18 - 0.12)) * -30;
  });

  // Stage 2: This is where my story began.
  const op2 = useTransform(scrollYProgress, (v) => {
    if (v < 0.20) return 0;
    if (v >= 0.20 && v < 0.25) return (v - 0.20) / (0.25 - 0.20);
    if (v >= 0.25 && v <= 0.35) return 1;
    if (v > 0.35 && v <= 0.40) return 1 - (v - 0.35) / (0.40 - 0.35);
    return 0;
  });
  const y2 = useTransform(scrollYProgress, (v) => {
    if (v < 0.20) return 30;
    if (v >= 0.20 && v < 0.25) return 30 - ((v - 0.20) / (0.25 - 0.20)) * 30;
    if (v >= 0.25 && v <= 0.35) return 0;
    if (v > 0.35 && v <= 0.40) return ((v - 0.35) / (0.40 - 0.35)) * -30;
    return -30;
  });

  // Stage 3: Andaman Islands
  const op3 = useTransform(scrollYProgress, (v) => {
    if (v < 0.42) return 0;
    if (v >= 0.42 && v < 0.47) return (v - 0.42) / (0.47 - 0.42);
    if (v >= 0.47 && v <= 0.57) return 1;
    if (v > 0.57 && v <= 0.62) return 1 - (v - 0.57) / (0.62 - 0.57);
    return 0;
  });
  const y3 = useTransform(scrollYProgress, (v) => {
    if (v < 0.42) return 30;
    if (v >= 0.42 && v < 0.47) return 30 - ((v - 0.42) / (0.47 - 0.42)) * 30;
    if (v >= 0.47 && v <= 0.57) return 0;
    if (v > 0.57 && v <= 0.62) return ((v - 0.57) / (0.62 - 0.57)) * -30;
    return -30;
  });

  // Stage 4: A place that taught me curiosity before technology.
  const op4 = useTransform(scrollYProgress, (v) => {
    if (v < 0.64) return 0;
    if (v >= 0.64 && v < 0.69) return (v - 0.64) / (0.69 - 0.64);
    if (v >= 0.69 && v <= 0.79) return 1;
    if (v > 0.79 && v <= 0.84) return 1 - (v - 0.79) / (0.84 - 0.79);
    return 0;
  });
  const y4 = useTransform(scrollYProgress, (v) => {
    if (v < 0.64) return 30;
    if (v >= 0.64 && v < 0.69) return 30 - ((v - 0.64) / (0.69 - 0.64)) * 30;
    if (v >= 0.69 && v <= 0.79) return 0;
    if (v > 0.79 && v <= 0.84) return ((v - 0.79) / (0.84 - 0.79)) * -30;
    return -30;
  });

  // Stage 5: My name is Vinod Kumar P.
  const op5 = useTransform(scrollYProgress, (v) => {
    if (v < 0.86) return 0;
    if (v >= 0.86 && v < 0.91) return (v - 0.86) / (0.91 - 0.86);
    if (v >= 0.91 && v <= 0.97) return 1;
    if (v > 0.97 && v <= 1.0) return 1 - (v - 0.97) / (1.0 - 0.97);
    return 0;
  });
  const y5 = useTransform(scrollYProgress, (v) => {
    if (v < 0.86) return 30;
    if (v >= 0.86 && v < 0.91) return 30 - ((v - 0.86) / (0.91 - 0.86)) * 30;
    if (v >= 0.91 && v <= 0.97) return 0;
    if (v > 0.97 && v <= 1.0) return ((v - 0.97) / (1.0 - 0.97)) * -10;
    return -10;
  });

  // Dynamic visibility mapping to ensure zero rendering/hit-test trace when opacity is 0
  const vis1 = useTransform(op1, (o) => (o === 0 ? 'hidden' : 'visible'));
  const vis2 = useTransform(op2, (o) => (o === 0 ? 'hidden' : 'visible'));
  const vis3 = useTransform(op3, (o) => (o === 0 ? 'hidden' : 'visible'));
  const vis4 = useTransform(op4, (o) => (o === 0 ? 'hidden' : 'visible'));
  const vis5 = useTransform(op5, (o) => (o === 0 ? 'hidden' : 'visible'));



  return (
    <div ref={containerRef} className="relative h-[500vh] bg-black">

      {/* Sticky Cinematic Screen Wrapper */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Mysterious Island Sunrise Background */}
        <motion.div 
          style={{ 
            scale: bgScale, 
            opacity: bgOpacity,
            filter: `blur(${blurAmount.get()})`
          }}
          className="absolute inset-0 w-full h-full select-none pointer-events-none"
        >
          {/* Main Cinematic Visual Asset */}
          <img
            src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1920&q=80"
            alt="Cinematic Island Horizon"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-75 brightness-75 transition-all duration-1000"
          />
          
          {/* Cinematic Vignettes and Sunrise Horizon Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_10%,_rgba(0,0,0,0.95)_80%)]"></div>
          
          {/* Subtle gold sunrise glow bar at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-500/10 to-transparent blur-2xl"></div>
        </motion.div>

        {/* Minimal Audio Control button */}


        {/* Cinematic Subtitles / Narrative Container */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 md:px-8 pointer-events-none">
          <div className="relative w-full max-w-4xl h-[40vh] flex items-center justify-center text-center select-none">
            
            {/* Stage 1: Every journey starts somewhere. */}
            <motion.div style={{ opacity: op1, y: y1, visibility: vis1 }} className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-display font-light tracking-wide text-white/90 leading-relaxed px-4">
                Every journey <br />
                <span className="font-semibold text-white">starts somewhere.</span>
              </h1>
            </motion.div>

            {/* Stage 2: Mine began on a small island. */}
            <motion.div style={{ opacity: op2, y: y2, visibility: vis2 }} className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-display font-light tracking-wider text-zinc-300 leading-relaxed px-4">
                Mine began on a <br />
                <span className="font-semibold text-white">small island.</span>
              </h2>
            </motion.div>

            {/* Stage 3: The Andaman Islands. */}
            <motion.div style={{ opacity: op3, y: y3, visibility: vis3 }} className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.4em] text-amber-500/80 uppercase mb-4">WHERE IT ALL BEGAN</p>
              <h2 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-display font-medium tracking-widest text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] px-4">
                The Andaman Islands.
              </h2>
            </motion.div>

            {/* Stage 4: A place surrounded by the ocean... but connected to the world through the internet. */}
            <motion.div style={{ opacity: op4, y: y4, visibility: vis4 }} className="absolute inset-0 flex flex-col items-center justify-center px-4">
              <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-display font-light leading-relaxed text-zinc-300 max-w-3xl px-4">
                A place surrounded by the ocean... <br />
                <span className="font-medium text-white">but connected to the world through the internet.</span>
              </h3>
            </motion.div>

            {/* Stage 5: This is where my story begins. */}
            <motion.div style={{ opacity: op5, y: y5, visibility: vis5 }} className="absolute inset-0 flex flex-col items-center justify-center max-w-2xl mx-auto px-4">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-4 text-center leading-tight px-4">
                This is where <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">my story begins.</span>
              </h1>
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator overlay */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [0.4, 0]) }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll to begin</span>
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-white/40"
          />
        </motion.div>

      </div>
    </div>
  );
}
