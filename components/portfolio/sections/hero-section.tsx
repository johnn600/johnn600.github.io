import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Download, Mail, MapPin, Globe, Briefcase, Code, Play, Music } from "lucide-react";
import { DB_LANGUAGES, PROFILE, SKILLS } from "@/lib/portfolio-data";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  Facebook: <Globe className="size-3.5" />,
  LinkedIn: <Briefcase className="size-3.5" />,
  GitHub: <Code className="size-3.5" />,
  YouTube: <Play className="size-3.5" />,
  Spotify: <Music className="size-3.5" />,
};

export function HeroSection() {
  return (
    <section className="grid grid-cols-1 items-center gap-10 py-12 lg:grid-cols-[1fr_320px]">
      {/* ── Left: Hero copy ── */}
      <div className="flex flex-col justify-center">
        {/* Status badge */}
        <Badge variant="outline" className="mb-8 mx-auto md:mx-0 w-fit gap-2 border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400">
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
          {PROFILE.tagline}
        </Badge>

        {/* Display headline */}
        <h1 className="mb-6 text-5xl text-center md:text-right font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Hi,<br />
          <span className="text-foreground">Nice to meet you!</span><br />
        </h1>

        {/* Bio */}
        <p className="mb-7 text-base text-justify md:text-right leading-relaxed text-muted-foreground">
          {PROFILE.bio}
        </p>

        {/* Social pills */}
        <div className="mb-8 flex flex-wrap justify-center md:justify-end gap-1.5">
          {PROFILE.socials.map((s) => (
            <Badge key={s.label} variant="secondary" className="gap-1.5 cursor-pointer transition-all bg-accent-foreground/10 hover:border-foreground " asChild>
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {SOCIAL_ICONS[s.label]}
                {s.label}
              </a>
            </Badge>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center md:justify-end gap-3">
          <Button asChild size="lg" className="gap-2 shadow-none rounded-3xl bg-emerald-700">
            <a href={PROFILE.cvUrl} target="_blank" rel="noopener noreferrer">
              <Download className="size-4" />
              Download CV
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2 rounded-3xl">
            <a href={`mailto:${PROFILE.email}`}>
              <Mail className="size-4" />
              Get in Touch
            </a>
          </Button>
        </div>

        {/* Contact meta */}
        <div className="mt-8 flex flex-wrap items-center justify-center md:justify-end gap-6 border-t border-border pt-6 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5 shrink-0" />
            {PROFILE.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="size-3.5 shrink-0" />
            <a
              href={`mailto:${PROFILE.email}`}
              className="transition-colors hover:text-foreground"
            >
              {PROFILE.email}
            </a>
          </span>
        </div>
      </div>

      {/* ── Right: Photo design element + Skills card ── */}
      <div className="flex flex-col gap-4 lg:sticky lg:top-6">

        {/* Photo as styled editorial element */}
        <div className="relative overflow-hidden rounded-3xl bg-primary/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PROFILE.photo}
            alt={PROFILE.name}
            className="w-full object-cover object-top"
            style={{ aspectRatio: "3/4", maxHeight: "380px" }}
          />
          {/* Identity gradient overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 via-black/30 to-transparent p-4 pt-12">
            <p className="text-sm font-bold leading-tight text-white">{PROFILE.name}</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {PROFILE.headline.split(" · ").map((part) => (
                <span
                  key={part}
                  className="rounded-sm bg-white/20 px-1.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm"
                >
                  {part}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skills & Capabilities */}
        <div className="rounded-3xl border border-border bg-muted/30 p-4 space-y-3">
          <div className="flex items-center gap-2">
            <span className="flex size-5 shrink-0 items-center justify-center rounded bg-primary/10 text-primary">
              <Code2 className="size-3" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Skills &amp; Capabilities
            </span>
          </div>
          <div className="flex flex-wrap gap-1">
            {SKILLS.map((s) => (
              <Badge key={s} variant="default" className="text-[11px]">
                {s}
              </Badge>
            ))}
          </div>
          <div className="border-t border-border/60 pt-3">
            <p className="mb-1.5 text-[11px] font-medium text-muted-foreground">Databases</p>
            <div className="flex flex-wrap gap-1">
              {DB_LANGUAGES.map((db) => (
                <Badge key={db} variant="outline" className="text-[11px]">
                  {db}
                </Badge>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
