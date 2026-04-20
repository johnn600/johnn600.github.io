import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/animations/gradient-text";
import {
  Code2,
  Download,
  Mail,
  MapPin,
  Globe,
  Briefcase,
  Code,
  Play,
  Music,
} from "lucide-react";
import {
  DB_LANGUAGES,
  PROFILE,
  SKILLS,
} from "@/lib/portfolio-data";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  Facebook: <Globe className="size-3.5" />,
  LinkedIn: <Briefcase className="size-3.5" />,
  GitHub: <Code className="size-3.5" />,
  YouTube: <Play className="size-3.5" />,
  Spotify: <Music className="size-3.5" />,
};

export function HeroSection() {
  return (
    <section className="grid grid-cols-1 items-center gap-2 lg:gap-10 py-12 lg:grid-cols-[1fr_320px]">
      {/* ── Left: Hero copy ── */}
      <div className="flex flex-col justify-center">
        {/* Status badge */}
        <Badge
          variant="outline"
          className="mb-8 mx-auto lg:mx-0 w-fit gap-2 border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400"
        >
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
          {PROFILE.tagline}
        </Badge>

        {/* Display headline */}
        <h1 className="mb-6 text-4xl text-center lg:text-right font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Hi,
          <br />
          <GradientText>Nice to meet you!</GradientText>
          <br />
        </h1>

        {/* Bio */}
        <p className="mb-7 text-base text-justify lg:text-right leading-relaxed text-muted-foreground">
          {PROFILE.bio}
        </p>

        {/* Social pills */}
        <div className="mb-8 flex flex-wrap justify-center lg:justify-end gap-1.5">
          {PROFILE.socials.map((s) => (
            <Badge
              key={s.label}
              variant="secondary"
              className="gap-1.5 cursor-pointer transition-all border-2 hover:border-foreground"
              asChild
            >
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {SOCIAL_ICONS[s.label]}
                {s.label}
              </a>
            </Badge>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden lg:flex flex-wrap justify-center lg:justify-end gap-3">
          <Button
            asChild
            size="lg"
            className="gap-2 shadow-none rounded-3xl bg-emerald-700"
          >
            <a href={PROFILE.cvUrl} target="_blank" rel="noopener noreferrer">
              <Download className="size-4" />
              Download CV
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 rounded-3xl"
          >
            <a href={`mailto:${PROFILE.email}`}>
              <Mail className="size-4" />
              Get in Touch
            </a>
          </Button>
        </div>

        {/* Contact meta */}
        <div className="mt-8 hidden lg:flex flex-wrap items-center justify-center md:justify-end gap-6 border-t border-border pt-6 text-xs text-muted-foreground">
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

        {/* Photo — compact profile card on mobile (< lg) */}
        <div className="lg:hidden rounded-3xl border-none bg-card flex gap-4 items-stretch">
          {/* Small photo */}
          <div className="relative shrink-0 w-36 overflow-hidden rounded-3xl border border-border bg-primary/5">
            <AspectRatio ratio={1 / 1}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PROFILE.photo}
                alt={PROFILE.name}
                className="w-full h-full object-cover object-top"
              />
            </AspectRatio>
          </div>
          {/* Info */}
          <div className="flex flex-col justify-between flex-1 min-w-0">
            <div>
              <p className="font-bold text-xl leading-tight">
                {PROFILE.name}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {PROFILE.headline}
              </p>
            </div>
            {/* Stats row */}
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-1.5 min-w-0">
                <MapPin className="size-3.5 shrink-0" />
                <span className="truncate text-xs">{PROFILE.location}</span>
              </span>
              <span className="flex items-center gap-1.5 min-w-0">
                <Mail className="size-3.5 shrink-0" />
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="truncate text-xs transition-colors hover:text-foreground"
                >
                  {PROFILE.email}
                </a>
              </span>
            </div>
            {/* Action buttons */}
            <div className="flex gap-2 mt-2">
              <Button
                asChild
                size="sm"
                className="flex-1 gap-1.5 rounded-xl text-xs h-8 shadow-none bg-emerald-700"
              >
                <a
                  href={PROFILE.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="size-3" />
                  CV
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="flex-1 gap-1.5 rounded-xl text-xs h-8"
              >
                <a href={`mailto:${PROFILE.email}`}>
                  <Mail className="size-3" />
                  Contact
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Photo — full editorial square on lg+ */}
        <div className="hidden lg:flex flex-col gap-3">
          <div className="relative overflow-hidden rounded-3xl bg-primary/5 border border-border">
            <AspectRatio ratio={1 / 1} className="w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PROFILE.photo}
                alt={PROFILE.name}
                className="w-full h-full object-cover object-top"
              />
            </AspectRatio>
          </div>
          {/* Identity info below photo */}
          <div className="px-1">
            <p className="text-xl font-bold leading-tight">
              {PROFILE.name}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {PROFILE.headline.split(" · ").map((part) => (
                <span
                  key={part}
                  className="rounded bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
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
            <p className="mb-1.5 text-[11px] font-medium text-muted-foreground">
              Databases
            </p>
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
