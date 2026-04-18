import type { ComponentType, ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SectionProps {
  id: string;
  title: string;
  icon: ComponentType<{ className?: string }>;
  children: ReactNode;
}

export function Section({ id, title, icon: Icon, children }: SectionProps) {
  return (
    <Card id={id} className="scroll-mt-20">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-3 text-xl font-bold">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-primary/8 text-primary">
            <Icon className="size-4" />
          </span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
