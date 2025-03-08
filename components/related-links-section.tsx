import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function RelatedLinksSection() {
  const linkCategories = [
    {
      title: "相关网站",
      links: [
        { name: "喵喵机的博客", url: "https://www.ptoe.cc/" },
        { name: "DoraZhang的博客", url: "https://www.dorazhang.cn/" },
        { name: "元素论坛", url: "https://bbs.ptoe.cc/" },
        { name: "我鬼知道的博客", url: "https://www.wgzdy.top/" },
      ],
    },
    {
      title: "关联项目",
      links: [
        { name: "Python", url: "https://www.python.org/" },
        { name: "Nonebot 2", url: "https://github.com/nonebot/nonebot2" },
        { name: "Next.js", url: "https://nextjs.org" },
        { name: "Vercel", url: "https://vercel.com" },
        { name: "React", url: "https://zh-hans.react.dev/" },
      ],
    },
  ]

  return (
    <section id="related-links" className="scroll-mt-16 py-24">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">相关链接</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          浏览教程，附属项目和社区资源
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {linkCategories.map((category) => (
          <Card key={category.title}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

