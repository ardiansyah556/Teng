export default function BrandVision() {
  const visionPoints = [
    {
      number: "01",
      title: "深色调金融美学",
      description: "采用深色主题设计，融合现代金融科技美学，展现高端专业的品牌形象。每一个细节都精心打磨，体现对品质的执着追求。"
    },
    {
      number: "02",
      title: "极简主义 UI 界面",
      description: "摒弃繁杂的视觉元素，采用极简设计理念。清晰的信息层级、充足的空白空间，让用户体验流畅而直观。"
    },
    {
      number: "03",
      title: "零 Emoji 承诺",
      description: "拒绝低质感的表情符号，坚持专业、严肃的表达方式。这是我们对品质和合规性的坚定承诺。"
    }
  ];

  return (
    <section id="vision" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 tech-bg opacity-30"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            品牌视觉：
            <span className="text-gradient-gold"> 高端、专业且富有科技感</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold rounded-full"></div>
        </div>

        {/* Vision Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visionPoints.map((point, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              {/* Card background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              
              <div className="relative z-10">
                {/* Number */}
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gradient-gold opacity-40 group-hover:opacity-100 transition-opacity">
                    {point.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors">
                  {point.description}
                </p>

                {/* Accent line */}
                <div className="mt-6 w-0 h-1 bg-accent rounded-full group-hover:w-12 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
