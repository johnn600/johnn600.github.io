import { Badge } from "@/components/ui/badge";
import { Star, Trophy } from "lucide-react";
import { ACHIEVEMENTS } from "@/lib/portfolio-data";
import { Section } from "../layout/section";

export function AchievementsSection() {
  return (
    <Section id="achievements" title="Achievements" icon={Trophy}>
      <div className="space-y-3">
        {ACHIEVEMENTS.map((a, i) => (
          <div key={i} className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 items-start gap-2.5">
              <Star className="mt-0.5 size-4 shrink-0 text-amber-500" />
              <div className="min-w-0">
                <p className="text-sm font-medium leading-snug">{a.title}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{a.org}</p>
              </div>
            </div>
            <Badge variant="outline" className="shrink-0 text-xs">{a.period}</Badge>
          </div>
        ))}
      </div>
    </Section>
  );
}
