import { Badge } from "@/components/ui/badge";
import { ExternalLink, FolderOpen } from "lucide-react";
import { PROJECTS } from "@/lib/portfolio-data";
import { Section } from "../layout/section";

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects" icon={FolderOpen} color="pink">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <a
            key={i}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg border border-border p-4 transition-all hover:border-primary/50 hover:shadow-sm"
          >
            <div className="mb-2 flex items-start justify-between gap-2">
              <h3 className="font-semibold transition-colors group-hover:text-primary">{p.name}</h3>
              <ExternalLink className="size-4 shrink-0 text-muted-foreground" />
            </div>
            <p className="mb-3 text-sm text-muted-foreground">{p.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
