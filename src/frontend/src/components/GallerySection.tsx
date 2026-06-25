import { Play, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "https://www.broadwayworld.com/people/headshots/Nyla-Sostre.jpg",
    alt: "Nyla Sostre headshot from Broadway World",
    caption: "Nyla Sostre — Broadway World",
  },
  {
    src: "https://www.playbill.com/people/headshots/Nyla-Sostre.jpg",
    alt: "Nyla Sostre headshot from Playbill",
    caption: "Nyla Sostre — Playbill",
  },
  {
    src: "https://www.ibdb.com/people/headshots/Nyla-Sostre.jpg",
    alt: "Nyla Sostre headshot from IBDB",
    caption: "Nyla Sostre — IBDB",
  },
  {
    src: "https://www.broadwayworld.com/people/photos/Nyla-Sostre.jpg",
    alt: "Nyla Sostre photo from Broadway World",
    caption: "Nyla Sostre — Broadway World Photos",
  },
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const goNext = () =>
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryImages.length,
    );
  const goPrev = () =>
    setLightboxIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + galleryImages.length) % galleryImages.length,
    );

  return (
    <section id="gallery" className="py-28 md:py-36 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.35em] uppercase text-primary mb-5">
            Media
          </p>
          <h2 className="font-display italic text-5xl md:text-6xl text-foreground leading-[1.1]">
            Gallery & Reel
          </h2>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <button
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-subtle hover:shadow-elevated transition-smooth text-left border border-border/40 hover:border-primary/30"
                data-ocid={`gallery.image.${index + 1}.button`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-smooth duration-500">
                  <p className="text-sm text-foreground font-body">
                    {image.caption}
                  </p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Video Reel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-elevated bg-card border border-border">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <Play size={48} className="text-primary mb-4 opacity-60" />
              <p className="font-mono text-xs tracking-wider uppercase text-primary mb-2">
                Performance Reel
              </p>
              <p className="text-sm text-muted-foreground">
                Coming soon — check back for Nyla&apos;s latest performance reel
              </p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="font-mono text-xs tracking-wider uppercase text-primary mb-2">
              Performance Reel
            </p>
            <a
              href="https://www.youtube.com/results?search_query=Nyla+Sostre+performance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-smooth underline"
              data-ocid="gallery.reel.search.link"
            >
              Search for more Nyla Sostre performances on YouTube
            </a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={closeLightbox}
            data-ocid="gallery.lightbox.dialog"
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-foreground transition-smooth"
              aria-label="Close lightbox"
              data-ocid="gallery.lightbox.close_button"
            >
              <X size={28} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 text-muted-foreground hover:text-foreground transition-smooth"
              aria-label="Previous image"
              data-ocid="gallery.lightbox.prev_button"
            >
              <span className="text-2xl">&larr;</span>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 text-muted-foreground hover:text-foreground transition-smooth"
              aria-label="Next image"
              data-ocid="gallery.lightbox.next_button"
            >
              <span className="text-2xl">&rarr;</span>
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-elevated"
              />
              <p className="text-center mt-4 text-muted-foreground font-body">
                {galleryImages[lightboxIndex].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
