export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 tech-bg opacity-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                RICHARD
                <br />
                <span className="text-gradient-gold">TENG</span>
              </h1>
              <p className="text-2xl md:text-3xl font-light text-accent">$TENG</p>
            </div>

            <div className="space-y-6">
              <p className="text-lg md:text-xl font-semibold text-accent">
                致敬加密行业领袖，开启合规模因新纪元
              </p>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-lg">
                $TENG 是一个致敬代币，代表着合规性、专业性和加密货币的未来。我们以深厚的敬意向加密行业的领袖致敬，同时致力于打造一个高端、专业且富有科技感的社区。
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#launch"
                className="px-8 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 glow-gold text-center"
              >
                了解更多
              </a>
              <a 
                href="#social"
                className="px-8 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300 text-center"
              >
                加入社区
              </a>
            </div>
          </div>

          {/* Right: Logo Display */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-sm">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl"></div>
              
              {/* Logo */}
              <img 
                src="/images/teng-logo.jpg" 
                alt="$TENG Logo" 
                className="relative w-full h-auto rounded-2xl shadow-2xl glow-gold object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
