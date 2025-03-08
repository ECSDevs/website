import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GitFork, Star, Code } from "lucide-react"
import Link from "next/link"
import {cache} from "react"

interface GitHubCardProps {
    repo: string
}

const getRepo = cache(async (repo: string) => {
    try{
        return await fetch(
            `https://api.github.com/repos/${repo}`, 
            {
                headers: {
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                },
            }
        )
        .then(async (res)=>{
            if(res.status != 200) throw new Error(await res.json().then((res)=>res.message));
            return await res.json();
        });
    }catch(error){
        console.log(error);
        return {
            name: repo,
            description: "无法获取存储库信息",
            stargazers_count: 0,
            forks_count: 0,
        }
    }
})

export default async function GitHubCard({ repo } : GitHubCardProps){
    var response = await getRepo(repo);
    return (
        <Card key={response.name} className="flex flex-col">
            <CardContent className="flex-1 p-6">
                <h3 className="text-xl font-bold mb-2">{response.name}</h3>
                <p className="text-muted-foreground mb-4">{response.description}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0 gap-4">
                <Button asChild variant="outline" size="sm">
                    <Link href={`https://github.com/${repo}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        <span>查看存储库</span>
                    </Link>
                </Button>
                <div className="flex gap-2">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="h-4 w-4" />
                        <span>{response.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <GitFork className="h-4 w-4" />
                        <span>{response.forks_count}</span>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}