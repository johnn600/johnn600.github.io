export function Navbar() {
  const links = [
    { href: "#education", label: "Education" },
    { href: "#achievements", label: "Achievements" },
    { href: "#certifications", label: "Certifications" },
    { href: "#affiliations", label: "Affiliations" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <span className="flex items-center gap-1.5 text-sm font-bold tracking-tight">
          {["Code", "Play", "Listen", "Go"].map((word, i) => (
            <span key={word} className="flex items-center gap-1.5">
              {i > 0 && <span className="font-normal text-muted-foreground">–</span>}
              {word}
            </span>
          ))}
        </span>
        <div className="hidden items-center gap-6 text-sm font-medium text-muted-foreground sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
