import TeamMemberCard from "@/components/team-member-card"

export default function TeamSection() {
  const teamMembers = [
    "dora-z",
    "originalfactor",
    "nanhaoluo",
    "xiaoluobo58",
    "mygodknow",
    "wdvipa"
  ]

  return (
    <section id="team" className="scroll-mt-16 py-24">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">我们的团队</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          富有天赋和经验的开发者，共同打造出色的产品
        </p>
      </div>
      <br/>
      <div className="lg:justify-center flex max-w-screen space-x-6 overflow-x-auto scroll-smooth">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member} username={member} />
          ))}
      </div>
    </section>
  )
}

