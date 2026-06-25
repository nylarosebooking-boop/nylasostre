import { Calendar } from "lucide-react";
import { motion } from "motion/react";

interface NewsItem {
  date: string;
  title: string;
  summary: string;
}

const newsItems: NewsItem[] = [
  {
    date: "June 2026",
    title: "New Single Announcement",
    summary:
      "Excited to share that a new single is in the works, set for release this fall. Stay tuned for behind-the-scenes content from the recording sessions.",
  },
  {
    date: "March 2026",
    title: "MJ the Musical Milestone",
    summary:
      "Celebrating over 100 performances as standby for Katherine Jackson and Rachel. Grateful for every moment on the Neil Simon Theatre stage.",
  },
  {
    date: "January 2026",
    title: "Winter Concert Series",
    summary:
      "Performed a sold-out intimate concert series in Brooklyn, featuring songs from both albums and new unreleased material.",
  },
  {
    date: "October 2025",
    title: "Standing Ovation Single Release",
    summary:
      "Released 'Standing Ovation,' the latest single now streaming on all platforms. Thank you to everyone who has listened and shared.",
  },
];

export default function NewsSection() {
  return (
    <section
      id="news"
      className="py-28 md:py-36 bg-card relative overflow-hidden"
    >
      {/* Subtle section texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(0.72 0.12 185) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-5">
            Updates
          </p>
          <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
            News & Announcements
          </h2>
          <div className="mt-6 w-16 h-px bg-primary/40 mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-10">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group relative pl-10 md:pl-14 border-l border-border hover:border-primary/40 transition-smooth"
              data-ocid={`news.item.${index + 1}.card`}
            >
              <div className="absolute -left-[5px] top-1 w-[9px] h-[9px] rounded-full bg-primary/30 border border-primary/60 group-hover:bg-primary/50 group-hover:border-primary transition-smooth" />
              <div className="flex items-center gap-2.5 mb-3">
                <Calendar size={14} className="text-primary" />
                <span className="font-mono text-xs tracking-wider uppercase text-primary">
                  {item.date}
                </span>
              </div>
              <h3 className="font-display italic text-xl md:text-2xl text-foreground mb-2.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                {item.summary}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
