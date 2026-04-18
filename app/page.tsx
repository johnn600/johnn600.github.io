import { Navbar } from "@/components/portfolio/layout/navbar";
import { HeroSection } from "@/components/portfolio/sections/hero-section";
import { EducationSection } from "@/components/portfolio/sections/education-section";
import { AchievementsSection } from "@/components/portfolio/sections/achievements-section";
import { ScholarshipsSection } from "@/components/portfolio/sections/scholarships-section";
import { CertificationsSection } from "@/components/portfolio/sections/certifications-section";
import { ExperienceSection } from "@/components/portfolio/sections/experience-section";
import { AwardsSection } from "@/components/portfolio/sections/awards-section";
import { AffiliationsSection } from "@/components/portfolio/sections/affiliations-section";
import { EventsSection } from "@/components/portfolio/sections/events-section";
import { ProjectsSection } from "@/components/portfolio/sections/projects-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <HeroSection />

        <main className="space-y-6 pb-8">
          <ExperienceSection />
          <EducationSection />
          <AchievementsSection />
          <ScholarshipsSection />
          <CertificationsSection />
          <AwardsSection />
          <AffiliationsSection />
          <EventsSection />
          <ProjectsSection />
        </main>

        <footer className="mt-8 border-t border-border py-8 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} John Rey Vilbar</p>
        </footer>
      </div>
    </div>
  );
}
