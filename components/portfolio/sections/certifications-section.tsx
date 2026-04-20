"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/portfolio-data";
import { Section } from "../layout/section";

const PAGE_SIZE = 3;

export function CertificationsSection() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(CERTIFICATIONS.length / PAGE_SIZE);
  const slice = CERTIFICATIONS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <Section id="certifications" title="Certifications" icon={BookOpen} color="violet">
      <div className="h-67 space-y-3 overflow-y-auto">
        {slice.map((c, i) => (
          <a
            key={i}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg border border-border p-3 hover:border-primary/50 hover:bg-muted/50"
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

      <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-4">
        <span className="text-xs text-muted-foreground">
          {page * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE + PAGE_SIZE, CERTIFICATIONS.length)} of {CERTIFICATIONS.length}
        </span>
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="sm"
            disabled={page === 0}
            onClick={() => setPage((p) => p - 1)}
            className="size-8 p-0"
          >
            <ChevronLeft className="size-4" />
          </Button>
          <span className="size-8 flex items-center justify-center text-sm font-medium">
            {page + 1}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={page === totalPages - 1}
            onClick={() => setPage((p) => p + 1)}
            className="size-8 p-0"
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </Section>
  );
}
