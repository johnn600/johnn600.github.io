import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import { SCHOLARSHIPS } from "@/lib/portfolio-data";
import { Section } from "../layout/section";

export function ScholarshipsSection() {
  return (
    <Section id="scholarships" title="Grants & Scholarships" icon={Award} color="emerald">
      <div className="space-y-4">
        {SCHOLARSHIPS.map((s, i) => (
          <div key={i} className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm font-medium leading-snug">{s.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{s.org}</p>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-1">
              <Badge variant={s.active ? "default" : "outline"} className="text-xs">
                {s.active ? "Active" : "Past"}
              </Badge>
              <span className="text-xs text-muted-foreground">{s.period}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
