import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Users } from "lucide-react";
import { AFFILIATIONS } from "@/lib/portfolio-data";
import { Section } from "../layout/section";

export function AffiliationsSection() {
  return (
    <Section id="affiliations" title="Affiliations" icon={Users}>
      <div className="space-y-0">
        {AFFILIATIONS.map((a, i) => (
          <div key={i}>
            <div className="flex items-start justify-between gap-3 py-3">
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-snug">{a.org}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{a.role}</p>
              </div>
              <Badge variant="outline" className="shrink-0 text-xs">{a.period}</Badge>
            </div>
            {i < AFFILIATIONS.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </Section>
  );
}
