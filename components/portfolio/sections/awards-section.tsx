"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import { AWARDS } from "@/lib/portfolio-data";
import { Section } from "../layout/section";

const PAGE_SIZE = 4;

export function AwardsSection() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(AWARDS.length / PAGE_SIZE);
  const slice = AWARDS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <Section id="awards" title="Awards" icon={Briefcase} color="orange">
      <div className="h-66 space-y-4 overflow-y-auto">
        {slice.map((a, i) => (
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

      <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-4">
        <span className="text-xs text-muted-foreground">
          {page * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE + PAGE_SIZE, AWARDS.length)} of {AWARDS.length}
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
