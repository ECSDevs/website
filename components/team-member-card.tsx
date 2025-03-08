import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cache } from "react"

interface TeamMemberCardProps {
  username: string
}

const getUser = cache(async(username:string)=>{
  try{
    return await fetch(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        }
      }
    )
      .then(async (res)=>{
        const result = await res.json();
        if(res.status != 200) throw new Error(result.message);
        if(!result.name) result.name = result.login;
        if(!result.bio) result.bio = "这个人很懒，什么都没有留下";
        return result;
      });
  }catch(error){
    console.error(error);
    return {
      name: username,
      avatar_url: `/unknown.png`,
      bio: "无法获取用户信息"
    }
  }
});

export default async function TeamMemberCard({ username }: TeamMemberCardProps) {
  const result = await getUser(username);
  return (
    <Card className="max-w-56 min-w-56 place-content-center pt-4">
      <CardContent className="space-y-4">
        <div className="relative mx-auto h-32 w-32 rounded-full overflow-hidden bg-muted">
          <Image
            src={result.avatar_url}
            alt={result.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold">{result.name}</h3>
          <p className="text-muted-foreground">{result.bio}</p>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Link
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 text-sm font-medium transition-colors hover:text-primary"
        >
          <Github className="h-5 w-5" />
          <span>GitHub 主页</span>
        </Link>
      </CardFooter>
    </Card>
  )
}

