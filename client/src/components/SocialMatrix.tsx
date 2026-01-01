import { ExternalLink } from 'lucide-react';

export default function SocialMatrix() {
  const socialLinks = [
    {
      name: "Twitter (X)",
      url: "https://x.com/teng_meme",
      icon: "𝕏",
      description: "关注最新动态和社区讨论"
    },
    {
      name: "Telegram",
      url: "http://t.me/teng_community",
      icon: "✈",
      description: "加入官方社区，实时互动"
    }
  ];

  return (
    <section id="social" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 tech-bg opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            社交矩阵：
            <span className="text-gradient-gold"> 连接全球社区的官方渠道</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold rounded-full"></div>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 overflow-hidden"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex items-start justify-between">
                <div className="flex-1">
                  {/* Icon */}
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
                    {link.name}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors">
                    {link.description}
                  </p>
                </div>

                {/* External Link Icon */}
                <ExternalLink className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 ml-4 flex-shrink-0" size={20} />
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent group-hover:w-full transition-all duration-300"></div>
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 bg-card/30 border border-border/50 rounded-xl">
          <p className="text-foreground/80 text-center">
            <span className="text-accent font-semibold">官方渠道</span> - 我们仅通过上述官方社交媒体发布信息。请谨慎识别，避免被诈骗。
          </p>
        </div>
      </div>
    </section>
  );
}
