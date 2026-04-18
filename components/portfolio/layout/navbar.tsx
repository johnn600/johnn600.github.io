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
        <span className="text-base font-bold tracking-tight">John Rey Vilbar</span>
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
