"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";
import { AFFILIATIONS } from "@/lib/portfolio-data";
import { Section } from "../layout/section";

const PAGE_SIZE = 5;

export function AffiliationsSection() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(AFFILIATIONS.length / PAGE_SIZE);
  const slice = AFFILIATIONS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <Section id="affiliations" title="Affiliations" icon={Users} color="teal">
      <div className="h-78 overflow-y-auto space-y-0">
        {slice.map((a, i) => (
          <div key={i}>
            <div className="flex items-start justify-between gap-3 py-3">
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-snug">{a.org}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{a.role}</p>
              </div>
              <Badge variant="outline" className="shrink-0 text-xs">{a.period}</Badge>
            </div>
            {i < slice.length - 1 && <Separator />}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-4">
        <span className="text-xs text-muted-foreground">
          {page * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE + PAGE_SIZE, AFFILIATIONS.length)} of {AFFILIATIONS.length}
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
