import { Badge } from "@/components/ui/badge";
import { Briefcase, Trophy } from "lucide-react";
import { AWARDS } from "@/lib/portfolio-data";
import { Section } from "../layout/section";

export function AwardsSection() {
  return (
    <Section id="awards" title="Awards" icon={Briefcase}>
      <div className="space-y-4">
        {AWARDS.map((a, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
              <Trophy className="size-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-semibold leading-snug">{a.title}</p>
                <Badge variant="outline" className="shrink-0 text-xs">{a.year}</Badge>
              </div>
              <p className="mt-0.5 text-xs text-foreground/80">{a.event}</p>
              <p className="text-xs text-muted-foreground">{a.org}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
