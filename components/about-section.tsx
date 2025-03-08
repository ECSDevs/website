import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 py-24">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">关于我们</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          初心和使命
        </p>
      </div>

      <Card>
        <CardContent className="p-6 md:p-8 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">我们的使命</h3>
            <p className="text-muted-foreground">
              在这个数字化时代，我们的使命是为用户提供真正实用的工具，帮助他们更轻松地工作和生活。
              我们致力于简化用户触达的过程，提供直观的界面和强大的功能，让用户能够以最便捷的方式完成任务。
              我们始终坚信着，可靠是开发的核心，而性能和用户体验是我们追求的目标。
              我们的团队由经验丰富的开发者组成，他们共同致力于开发创新的工具和应用程序，以满足用户的需求。
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">故事的开始</h3>
            <p className="text-muted-foreground">
              我们的故事始于一个简单的想法：为用户提供一个强大的工具，帮助他们更轻松地工作和生活。
              我们的团队从一个开发者开始，不断努力改进和扩展我们的产品，并逐渐吸纳社区的各个优秀开发者加入我们。
              我们的团队成员来自不同的地理位置、背景和专业领域，他们共同致力于开发创新的工具和应用程序，以担此重任。
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">我们的决心</h3>
            <p className="text-muted-foreground">
              我们的决心是不断创新和改进，我们的团队不断努力优化及扩展我们的产品，解决问题，增加功能。
              我们对可靠性、性能和用户体验的追求是我们的核心价值观，我们致力于开发高质量的产品和服务。
              我们为了共同的目标而聚集在这里，我们也将始终为了这个目标而努力。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-4">
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <h4 className="font-medium mb-2">革新</h4>
              <p className="text-sm text-muted-foreground">
                我们永葆创新的精神，积极探索新的技术和解决方案，不负时代所托。
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <h4 className="font-medium mb-2">质量</h4>
              <p className="text-sm text-muted-foreground">
                我们的产品和服务始终以质量为第一要务，我们的团队不断努力提高产品的质量和用户体验。
                我们始终追求代码的可维护性、可扩展性和安全性。
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <h4 className="font-medium mb-2">社区</h4>
              <p className="text-sm text-muted-foreground">
                我们的社区是我们的重要组成部分，我们的团队不断努力壮大我们的社区，为用户提供更好的服务。
                我们始终为全球开源社区作出积极贡献，为社区的持续发展献出自己的一丝微薄之力。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

