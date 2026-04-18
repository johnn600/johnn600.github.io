import { BookOpen, ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/portfolio-data";
import { Section } from "../layout/section";

export function CertificationsSection() {
  return (
    <Section id="certifications" title="Certifications" icon={BookOpen}>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {CERTIFICATIONS.map((c, i) => (
          <a
            key={i}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg border border-border p-3 transition-all hover:border-primary/50 hover:bg-muted/50"
          >
            <div className="mb-1 flex items-start justify-between gap-2">
              <p className="text-sm font-medium leading-snug transition-colors group-hover:text-primary">
                {c.name}
              </p>
              <ExternalLink className="mt-0.5 size-3.5 shrink-0 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground">{c.issuer}</p>
            <p className="text-xs text-muted-foreground">{c.date}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
