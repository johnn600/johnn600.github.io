"use client";

import { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EVENTS } from "@/lib/portfolio-data";
import { Section } from "../layout/section";

const PAGE_SIZE = 7;

export function EventsSection() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(EVENTS.length / PAGE_SIZE);
  const slice = EVENTS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <Section id="events" title="Events & Workshops Attended" icon={Calendar} color="indigo">
      <div className="h-80 overflow-y-auto space-y-0">
        {slice.map((e, i) => (
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

      <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-4">
        <span className="text-xs text-muted-foreground">
          {page * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE + PAGE_SIZE, EVENTS.length)} of {EVENTS.length}
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
