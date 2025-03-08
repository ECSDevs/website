import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProductsSection from "@/components/products-section"
import TeamSection from "@/components/team-section"
import GitHubSection from "@/components/github-section"
import RelatedLinksSection from "@/components/related-links-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <HeroSection />
      <div className="bg-white">
        <main className="container mx-auto px-4 divide-y divide-gray-100">
          <AboutSection />
          <ProductsSection />
          <TeamSection />
          <GitHubSection />
          <RelatedLinksSection />
        </main>
        <footer className="py-6 border-t">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            &copy;2022-{new Date().getFullYear()} 元素周期表 保留所有权利
          </div>
        </footer>
      </div>
    </div>
  )
}

