import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Discography", href: "#discography" },
  { label: "Gallery", href: "#gallery" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
          scrolled
            ? "bg-card/90 backdrop-blur-xl border-b border-border/60 shadow-elevated"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => handleNavClick("#hero")}
            className="font-display italic text-xl text-foreground hover:text-primary transition-smooth bg-transparent border-none cursor-pointer"
            data-ocid="nav.logo.link"
          >
            Rep: Alexander White Agency
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="relative text-sm font-body text-muted-foreground hover:text-foreground transition-smooth tracking-wide uppercase bg-transparent border-none cursor-pointer group"
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-smooth" />
              </button>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            data-ocid="nav.mobile.toggle"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden bg-card/98 backdrop-blur-xl border-t border-border/60">
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="text-base font-body text-muted-foreground hover:text-foreground transition-smooth tracking-wide uppercase bg-transparent border-none cursor-pointer text-left"
                  data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="bg-background">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border/60 relative overflow-hidden">
        {/* Subtle footer texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, oklch(0.72 0.12 185) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container mx-auto px-6 py-14 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="font-display italic text-lg text-foreground mb-1.5">
                Broadway Performer & Recording Artist
              </p>
              <p className="text-sm text-muted-foreground">
                Currently standby in{" "}
                <span className="text-primary">MJ the Musical</span> on Broadway
              </p>
            </div>
            <div className="flex items-center gap-8">
              <button
                type="button"
                onClick={() => handleNavClick("#contact")}
                className="text-sm text-muted-foreground hover:text-foreground transition-smooth bg-transparent border-none cursor-pointer"
                data-ocid="footer.contact.link"
              >
                Contact
              </button>
              <button
                type="button"
                onClick={() => handleNavClick("#discography")}
                className="text-sm text-muted-foreground hover:text-foreground transition-smooth bg-transparent border-none cursor-pointer"
                data-ocid="footer.music.link"
              >
                Music
              </button>
              <a
                href="https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=broadway-performer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                data-ocid="footer.caffeine.link"
              >
                Built with caffeine.ai
              </a>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-border/40 text-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()}. Built with love using{" "}
              <a
                href="https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=broadway-performer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
                data-ocid="footer.caffeine.inline_link"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
