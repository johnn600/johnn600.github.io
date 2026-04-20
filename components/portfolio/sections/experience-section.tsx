import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "@/lib/portfolio-data";
import { Section } from "../layout/section";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Professional Experience" icon={Briefcase} color="cyan">
      <div className="relative space-y-0">
        {EXPERIENCE.map((exp, i) => (
          <div key={i} className="relative pb-6 pl-6 last:pb-0">
            {i < EXPERIENCE.length - 1 && (
              <div className="absolute bottom-0 left-2.25 top-5.5 w-px bg-border" />
            )}
            <div
              className={`absolute left-0 top-1.5 size-4.5 rounded-full border-2 ${
                exp.current
                  ? "border-primary bg-primary"
                  : "border-border bg-background"
              }`}
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-sm font-semibold leading-snug">{exp.role}</h3>
                <p className="text-xs font-medium text-primary">{exp.org}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground text-justify">{exp.description}</p>
              </div>
              <Badge
                variant={exp.current ? "default" : "outline"}
                className="shrink-0 self-start text-xs"
              >
                {exp.period}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
