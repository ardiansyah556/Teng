export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/teng-logo.jpg" 
                alt="$TENG Logo" 
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-lg font-bold text-gradient-gold">$TENG</span>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              致敬加密行业领袖，开启合规模因新纪元。高端、专业、富有科技感的社区驱动项目。
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <a href="#vision" className="text-foreground/70 hover:text-accent transition-colors text-sm">
                  品牌视觉
                </a>
              </li>
              <li>
                <a href="#social" className="text-foreground/70 hover:text-accent transition-colors text-sm">
                  社交矩阵
                </a>
              </li>
              <li>
                <a href="#launch" className="text-foreground/70 hover:text-accent transition-colors text-sm">
                  公平发射
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">官方渠道</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://x.com/teng_meme" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Twitter (X)
                </a>
              </li>
              <li>
                <a 
                  href="http://t.me/teng_community" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider my-8"></div>

        {/* Bottom Footer */}
        <div className="space-y-4">
          {/* Disclaimer */}
          <div className="bg-card/30 border border-border/50 rounded-lg p-4">
            <p className="text-foreground/70 text-xs md:text-sm leading-relaxed">
              <span className="text-accent font-semibold">免责声明：</span> 本项目为社区模因代币，不构成任何投资建议。加密资产投资存在风险，请在充分了解相关风险后再做决定。我们致力于遵守所有适用的法律法规。
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-foreground/60 text-xs md:text-sm">
            <p>&copy; {currentYear} $TENG. 版权所有。</p>
            <p>由社区驱动 • 致力于合规 • 拥抱未来</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
