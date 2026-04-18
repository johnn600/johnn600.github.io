import { Calendar } from "lucide-react";
import { EVENTS } from "@/lib/portfolio-data";
import { Section } from "../layout/section";

export function EventsSection() {
  return (
    <Section id="events" title="Events & Workshops Attended" icon={Calendar}>
      <div className="space-y-0">
        {EVENTS.map((e, i) => (
          <div
            key={i}
            className="flex items-start gap-3 border-b border-border/50 py-2.5 last:border-0"
          >
            <div className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/60" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium leading-snug">{e.name}</p>
              <p className="text-xs text-muted-foreground">{e.org}</p>
            </div>
            <span className="shrink-0 whitespace-nowrap text-xs text-muted-foreground">
              {e.date}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
