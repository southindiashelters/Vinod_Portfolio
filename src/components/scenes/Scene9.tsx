import { FadeIn } from '../ui/FadeIn';

export function Scene9() {
  const metrics = [
    { label: "Google Ads Ad Spend", value: "₹67.1L+" },
    { label: "Enquiries Captured", value: "19,455 Leads" },
    { label: "Verified Intent", value: "14,996 Qualified" },
    { label: "Physical Site Walk-throughs", value: "964 Site Visits" },
    { label: "Home Bookings", value: "147 Conversions" },
    { label: "Total Real Estate Volume", value: "183,712 Sq.ft Sold" }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-white text-black px-4 md:px-6 py-12 sm:py-16 md:py-24 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center my-auto space-y-10 md:space-y-12 text-center">
        
        {/* Title */}
        <div className="space-y-3">
          <FadeIn delay={0.1} duration={0.8}>
            <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-400 uppercase bg-zinc-100 px-3.5 py-1.5 rounded-full inline-block">
              RESULTS THAT MATTER
            </span>
          </FadeIn>
          
          <FadeIn delay={0.2} duration={0.8}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-light text-zinc-900 leading-tight">
              What happened because of <span className="text-amber-600 font-medium">all this work?</span>
            </h2>
          </FadeIn>
        </div>

        {/* Chronological descending flow of metrics */}
        <div className="flex flex-col items-center space-y-5 md:space-y-6 w-full max-w-xl mx-auto">
          {metrics.map((metric, i) => (
            <div key={metric.label} className="flex flex-col items-center w-full">
              {i > 0 && (
                <FadeIn delay={i * 0.1 + 0.1} duration={0.4} className="w-full flex justify-center">
                  <div className="text-amber-500 text-sm my-1 font-semibold">↓</div>
                </FadeIn>
              )}
              
              <FadeIn delay={i * 0.1 + 0.2} duration={0.6} className="w-full flex justify-center">
                <div className="flex flex-col items-center px-4 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl w-72 sm:w-96 shadow-sm hover:shadow-md transition-shadow text-center">
                  <span className="font-mono text-[9px] md:text-[10px] text-zinc-400 uppercase tracking-widest mb-1.5 block">
                    {metric.label}
                  </span>
                  <p className="text-2xl md:text-3xl font-display font-bold text-zinc-950 tracking-tight">
                    {metric.value}
                  </p>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>

        {/* Concluding text */}
        <div className="space-y-4 pt-10 border-t border-zinc-100 w-full max-w-lg mx-auto">
          <FadeIn delay={metrics.length * 0.1 + 0.3} duration={0.4}>
            <div className="text-amber-500 text-sm my-1 font-semibold">↓</div>
          </FadeIn>

          <FadeIn delay={metrics.length * 0.1 + 0.4} duration={0.8}>
            <p className="text-lg md:text-2xl font-display font-light text-zinc-700 leading-relaxed">
              Every number represents a <span className="font-semibold text-black">family searching for a home.</span>
            </p>
          </FadeIn>
          
          <FadeIn delay={metrics.length * 0.1 + 0.6} duration={0.8}>
            <p className="text-lg md:text-xl font-display font-semibold text-zinc-900 leading-relaxed">
              Every system helped make that journey better.
            </p>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}

