import { Navbar } from "@/components/portfolio/layout/navbar";
import { Sidebar } from "@/components/portfolio/layout/sidebar";
import { AboutCard } from "@/components/portfolio/sections/about-card";
import { EducationSection } from "@/components/portfolio/sections/education-section";
import { AchievementsSection } from "@/components/portfolio/sections/achievements-section";
import { ScholarshipsSection } from "@/components/portfolio/sections/scholarships-section";
import { CertificationsSection } from "@/components/portfolio/sections/certifications-section";
import { AwardsSection } from "@/components/portfolio/sections/awards-section";
import { AffiliationsSection } from "@/components/portfolio/sections/affiliations-section";
import { EventsSection } from "@/components/portfolio/sections/events-section";
import { ProjectsSection } from "@/components/portfolio/sections/projects-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[280px_1fr]">
          <Sidebar />

          <main className="min-w-0 space-y-6">
            <AboutCard />
            <EducationSection />
            <AchievementsSection />
            <ScholarshipsSection />
            <CertificationsSection />
            <AwardsSection />
            <AffiliationsSection />
            <EventsSection />
            <ProjectsSection />
          </main>
        </div>
      </div>

      <footer className="mt-16 border-t border-border py-8 text-center text-xs text-muted-foreground">
        <p>&copy; 2024 John Rey Arugay Vilbar &middot; CODE &ndash; PLAY &ndash; LISTEN &ndash; GO</p>
      </footer>
    </div>
  );
}
