import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Code2, Download, Globe, Mail, MapPin } from "lucide-react";
import { DB_LANGUAGES, PROFILE, SKILLS } from "@/lib/portfolio-data";

export function Sidebar() {
  return (
    <aside className="space-y-4 lg:sticky lg:top-18.25">
      <ProfileCard />
      <SkillsCard />
    </aside>
  );
}

function ProfileCard() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center pt-6 pb-5 text-center">
        <div className="mb-4 size-24 overflow-hidden rounded-2xl ring-2 ring-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PROFILE.photo} alt={PROFILE.name} className="size-full object-cover" />
        </div>

        <h1 className="text-base font-bold leading-tight">{PROFILE.name}</h1>
        <p className="mt-0.5 text-sm font-medium text-primary">{PROFILE.headline}</p>
        <p className="text-xs text-muted-foreground">{PROFILE.tagline}</p>

        <Separator className="my-4" />

        <div className="w-full space-y-2 text-left text-sm">
          <div className="flex items-start gap-2 text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0" />
            <span>{PROFILE.location}</span>
          </div>
          <div className="flex items-start gap-2 text-muted-foreground">
            <Mail className="mt-0.5 size-4 shrink-0" />
            <a
              href={`mailto:${PROFILE.email}`}
              className="break-all transition-colors hover:text-foreground"
            >
              {PROFILE.email}
            </a>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="w-full space-y-1">
          {PROFILE.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Globe className="size-3.5 shrink-0" />
              {s.label}
            </a>
          ))}
        </div>

        <Button asChild size="sm" className="mt-4 w-full gap-2">
          <a href={PROFILE.cvUrl} target="_blank" rel="noopener noreferrer">
            <Download className="size-3.5" />
            Download Full CV
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

function SkillsCard() {
  return (
    <Card id="skills">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-sm">
          <span className="flex size-6 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Code2 className="size-3.5" />
          </span>
          Skills &amp; Capabilities
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {SKILLS.map((s) => (
            <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
          ))}
        </div>
        <div>
          <p className="mb-1.5 text-xs font-medium text-muted-foreground">Databases</p>
          <div className="flex flex-wrap gap-1.5">
            {DB_LANGUAGES.map((db) => (
              <Badge key={db} variant="outline" className="text-xs">{db}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
