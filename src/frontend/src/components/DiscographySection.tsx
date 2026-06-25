import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

interface Release {
  title: string;
  type: "Album" | "Single";
  year: string;
  image: string;
  links: { label: string; url: string }[];
}

const releases: Release[] = [
  {
    title: "Nyla Live",
    type: "Album",
    year: "2024",
    image: "/assets/nylalive_cover.jpg",
    links: [
      { label: "Spotify", url: "#" },
      { label: "Apple Music", url: "#" },
    ],
  },
  {
    title: "Love Like You",
    type: "Single",
    year: "2025",
    image: "/assets/love_like_you_art.jpg",
    links: [
      { label: "Spotify", url: "#" },
      { label: "Apple Music", url: "#" },
    ],
  },
  {
    title: "Spiritus",
    type: "Single",
    year: "2023",
    image: "/assets/spiritus_cover_art.jpg",
    links: [
      { label: "Spotify", url: "#" },
      { label: "Apple Music", url: "#" },
    ],
  },
  {
    title: "Final Bow",
    type: "Single",
    year: "2023",
    image: "/assets/generated/single-2.dim_800x800.jpg",
    links: [
      { label: "Spotify", url: "#" },
      { label: "Apple Music", url: "#" },
    ],
  },
];

export default function DiscographySection() {
  return (
    <section id="discography" className="py-28 md:py-36 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.35em] uppercase text-primary mb-5">
            Discography
          </p>
          <h2 className="font-display italic text-5xl md:text-6xl text-foreground leading-[1.1]">
            Music & Releases
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {releases.map((release, index) => (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <div className="group relative">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-5 shadow-subtle group-hover:shadow-elevated transition-smooth">
                  <img
                    src={release.image}
                    alt={`${release.title} cover art`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth duration-500" />
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs tracking-wider uppercase px-2 py-1 bg-primary/10 text-primary rounded">
                    {release.type}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {release.year}
                  </span>
                </div>

                <h3 className="font-display italic text-2xl text-foreground mb-4 group-hover:text-primary transition-smooth">
                  {release.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {release.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-body text-muted-foreground hover:text-primary transition-smooth border border-border hover:border-primary/40 px-3 py-1.5 rounded-md hover:bg-primary/5"
                      data-ocid={`discography.${release.title.toLowerCase().replace(/\s+/g, "_")}.${link.label.toLowerCase().replace(/\s+/g, "_")}.link`}
                    >
                      {link.label}
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spotify Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="rounded-lg overflow-hidden shadow-elevated border border-border">
            <iframe
              src="https://open.spotify.com/embed/artist/0TnOYISbd1XYRBk9myaseg?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Artist Embed"
              className="bg-card"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
