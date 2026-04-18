import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PROFILE } from "@/lib/portfolio-data";

export function AboutCard() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="mb-3 flex flex-wrap gap-2">
          <Badge variant="secondary">Nationality: {PROFILE.nationality}</Badge>
          <Badge variant="secondary">Age: {PROFILE.age}</Badge>
          <Badge variant="secondary">Nicknames: {PROFILE.nickname}</Badge>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{PROFILE.bio}</p>
        <p className="mt-3 text-xs italic text-muted-foreground">
          &ldquo;If science is for the nation, so should we be.&rdquo;
        </p>
      </CardContent>
    </Card>
  );
}
