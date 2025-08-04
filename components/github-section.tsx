import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import GitHubCard from "@/components/github-card"
import { Github } from "lucide-react"
import Link from "next/link"


export default function GitHubSection() {
  const repositories = [
    "originalFactor/QwenBotQ",
    "originalFactor/QwenBotQ.NET",
    "ECSDevs/SyncFile",
    "originalFactor/embyguide",
  ]

  return (
    <section id="github" className="scroll-mt-16 py-24">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">GitHub</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          浏览我们的 GitHub 组织，了解我们的项目、参与贡献或报告问题。
        </p>
      </div>

      <div className="space-y-8">
        <Card>
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <Github className="h-16 w-16" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">GitHub 上的 ECSDevs</h3>
                <p className="text-muted-foreground">
                  我们的 GitHub 组织汇集了我们的所有项目和库，包括我们的开源项目、工具和文档。
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button asChild>
                  <Link href="https://github.com/ECSDevs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    <span>前往 GitHub</span>
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          {repositories.map((repo) => (
            <GitHubCard key={repo} repo={repo} />
          ))}
        </div>
      </div>
    </section>
  )
}

