import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";
import { EDUCATION } from "@/lib/portfolio-data";
import { Section } from "../layout/section";

export function EducationSection() {
  return (
    <Section id="education" title="Educational Background" icon={GraduationCap}>
      <div className="relative space-y-0">
        {EDUCATION.map((edu, i) => (
          <div key={i} className="relative pb-6 pl-6 last:pb-0">
            {i < EDUCATION.length - 1 && (
              <div className="absolute bottom-0 left-2.25 top-5.5 w-px bg-border" />
            )}
            <div
              className={`absolute left-0 top-1.5 size-4.5 rounded-full border-2 ${
                edu.current
                  ? "border-primary bg-primary"
                  : "border-border bg-background"
              }`}
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {edu.level}
                </p>
                <h3 className="mt-0.5 text-sm font-semibold leading-snug">{edu.degree}</h3>
                {edu.major && (
                  <p className="text-xs font-medium text-primary">{edu.major}</p>
                )}
                <p className="text-xs text-muted-foreground">{edu.school}</p>
              </div>
              <Badge
                variant={edu.current ? "default" : "outline"}
                className="shrink-0 self-start text-xs"
              >
                {edu.period}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
