import { CheckCircle2 } from 'lucide-react';

export default function FairLaunch() {
  const launchPoints = [
    {
      number: "01",
      title: "平台选择与优势",
      details: [
        "在 FOUR.MEME 平台进行公平发射",
        "基于 BNB Chain 生态",
        "享受平台的流动性和安全保障"
      ]
    },
    {
      number: "02",
      title: "Fair Launch 模式",
      details: [
        "无私募轮融资",
        "无团队预留份额",
        "所有参与者享受平等的发射条件"
      ]
    },
    {
      number: "03",
      title: "流动性安全保障",
      details: [
        "自动流动性锁定机制",
        "完全透明的合约代码",
        "社区驱动的治理模式"
      ]
    }
  ];

  return (
    <section id="launch" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 tech-bg opacity-30"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            公平发射：
            <span className="text-gradient-gold"> 在 FOUR.MEME 平台开启新征程</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold rounded-full"></div>
        </div>

        {/* Launch Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {launchPoints.map((point, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-accent/50 transition-all duration-300"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              
              <div className="relative z-10">
                {/* Number */}
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gradient-gold opacity-40 group-hover:opacity-100 transition-opacity">
                    {point.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground group-hover:text-accent transition-colors">
                  {point.title}
                </h3>

                {/* Details List */}
                <ul className="space-y-3">
                  {point.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-foreground/80 group-hover:text-foreground/90 transition-colors">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Accent line */}
                <div className="mt-6 w-0 h-1 bg-accent rounded-full group-hover:w-12 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features Section */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            $TENG 的核心承诺
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <h4 className="text-lg font-semibold text-accent">无私募融资</h4>
              </div>
              <p className="text-foreground/80 ml-6">
                所有代币通过公平发射方式分配，确保每个参与者都有平等的机会。
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <h4 className="text-lg font-semibold text-accent">无团队预留</h4>
              </div>
              <p className="text-foreground/80 ml-6">
                团队与社区成员享受相同的条件，利益完全一致，共同建设生态。
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <h4 className="text-lg font-semibold text-accent">流动性锁定</h4>
              </div>
              <p className="text-foreground/80 ml-6">
                自动锁定机制确保流动性安全，保护所有代币持有者的利益。
              </p>
            </div>

            {/* Feature 4 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <h4 className="text-lg font-semibold text-accent">合规导向</h4>
              </div>
              <p className="text-foreground/80 ml-6">
                我们致力于遵守所有适用的法律法规，打造合规的加密生态。
              </p>
            </div>
          </div>
        </div>

        {/* Platform Info */}
        <div className="mt-12 text-center">
          <p className="text-foreground/70 mb-4">
            在 <span className="text-accent font-semibold">FOUR.MEME</span> 平台上进行公平发射
          </p>
          <p className="text-sm text-foreground/60">
            基于 BNB Chain 生态，享受最安全、最透明的发射体验
          </p>
        </div>
      </div>
    </section>
  );
}
