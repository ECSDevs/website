import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function ProductsSection() {
  const products = [
    {
      name: "QwenBotQ",
      description: "一个全功能娱乐机器人，接入大模型，高度定制化",
      features: [
        "个人中心", 
        "关系系统", 
        "大模型聊天",
      ],
      benefits:
        "活跃你的群聊，让你的群聊更加有趣，更加有活力。",
      imageUrl: "/qwenbotq.svg",
      demoUrl: "#",
      docsUrl: "https://bot.mod.wiki/",
    },
    {
      name: "SyncFile",
      description: "一个基于HTTP的快速单向同步工具",
      features: [
        "简单配置",
        "简易部署",
        "多线程传输",
        "多平台支持",
        "断点续传",
        "增量同步",
        "全量同步"
      ],
      benefits:
        "轻易实现资源拉取，支持静态CDN",
      imageUrl: "/syncfile.svg",
      demoUrl: "#",
      docsUrl: "https://sfv3x.mod.wiki/",
    },
    {
      name: "BiliAPI",
      description: "简易的 Python 异步 BiliBili Web API 封装",
      features: [
        "简单易用",
        "异步支持",
        "高效稳定",
        "接口清晰",
        "文档详细",
        "类型注解"
      ],
      benefits: "迅速构建基于 BiliBili API 的应用程序",
      imageUrl: "/biliapi.svg",
      demoUrl: "#",
      docsUrl: "#",
    },
  ]

  return (
    <section id="products" className="scroll-mt-16 py-24">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">我们的产品</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          探索那些我们引以为傲的产品
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.name} className="flex flex-col overflow-hidden">
            <div className="relative h-48 w-full bg-muted">
              <Image src={product.imageUrl} alt={product.name} fill className="object-contain"/>
            </div>
            <CardContent className="flex-1 p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-muted-foreground mt-1">{product.description}</p>
              </div>

              <div>
                <h4 className="font-medium mb-2">功能</h4>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">优势</h4>
                <p className="text-sm text-muted-foreground">{product.benefits}</p>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex flex-wrap gap-3">
              <Button asChild variant="outline" size="sm">
                <Link href={product.demoUrl}>示例</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link href={product.docsUrl}>文档</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

