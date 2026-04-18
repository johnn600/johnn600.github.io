import type { ComponentType, ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const accents = {
  blue:    { bg: "bg-blue-50",    text: "text-blue-600",   title: "text-blue-700" },
  amber:   { bg: "bg-amber-50",   text: "text-amber-600",  title: "text-amber-700" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", title: "text-emerald-700" },
  violet:  { bg: "bg-violet-50",  text: "text-violet-600", title: "text-violet-700" },
  orange:  { bg: "bg-orange-50",  text: "text-orange-600", title: "text-orange-700" },
  teal:    { bg: "bg-teal-50",    text: "text-teal-600",   title: "text-teal-700" },
  indigo:  { bg: "bg-indigo-50",  text: "text-indigo-600", title: "text-indigo-700" },
  pink:    { bg: "bg-pink-50",    text: "text-pink-600",   title: "text-pink-700" },
  cyan:    { bg: "bg-cyan-50",    text: "text-cyan-600",   title: "text-cyan-700" },
} as const;

export type AccentColor = keyof typeof accents;

interface SectionProps {
  id: string;
  title: string;
  icon: ComponentType<{ className?: string }>;
  color: AccentColor;
  children: ReactNode;
}

export function Section({ id, title, icon: Icon, color, children }: SectionProps) {
  const { bg, text } = accents[color];
  return (
    <Card id={id} className="scroll-mt-20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between gap-4">
          <span className={cn("text-xl font-bold")}>{title}</span>
          <span className={cn("flex size-10 shrink-0 items-center justify-center rounded-full", bg, text)}>
            <Icon className="size-5" />
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
