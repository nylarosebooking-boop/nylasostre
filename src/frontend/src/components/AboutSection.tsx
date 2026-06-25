import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section id="journey" className="py-28 md:py-36 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-mono text-xs tracking-[0.35em] uppercase text-primary mb-5">
            About
          </p>
          <h2 className="font-display italic text-5xl md:text-6xl text-foreground mb-12 leading-[1.1]">
            A Life On Stage
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <p className="text-lg text-muted-foreground leading-[1.8] font-light tracking-wide text-center">
            Nyla Sostre is a New York City-based actor, singer-songwriter, and
            Broadway performer whose work lives somewhere between theatre, soul,
            humor, softness, and a little New York grit.
          </p>
          <p className="text-lg text-muted-foreground leading-[1.8] font-light tracking-wide text-center">
            From the time she first found herself onstage, performing felt like
            more than something she loved — it felt like something that kept
            calling her back. "I'm always looking for the story underneath the
            story," Nyla says. "Whether I'm onstage, in the studio, or creating
            something from my own life, I want people to feel something real."
          </p>
          <p className="text-lg text-muted-foreground leading-[1.8] font-light tracking-wide text-center">
            Her journey has taken her through regional theatre, recording
            studios, original music, and Broadway. She is currently part of MJ:
            The Musical on Broadway and has also performed as Sandy Cheeks in
            The SpongeBob Musical at Sacramento Music Circus. As a recording
            artist, Nyla has released two albums and two singles across
            streaming platforms, blending theatrical storytelling with personal
            musical expression.
          </p>
          <p className="text-lg text-muted-foreground leading-[1.8] font-light tracking-wide text-center">
            Nyla's creative world is honest, layered, soulful, and still
            becoming. She is drawn to characters with heart, music with truth,
            and moments that feel human. "I don't think I'm interested in
            pretending to have it all figured out," she says. "I'm more
            interested in telling the truth while I'm figuring it out."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          <div className="text-center group">
            <p className="font-display italic text-4xl text-primary mb-2 group-hover:scale-105 transition-smooth">
              2
            </p>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Albums Released
            </p>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-center group">
            <p className="font-display italic text-4xl text-primary mb-2 group-hover:scale-105 transition-smooth">
              2
            </p>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Singles Out
            </p>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-center group">
            <p className="font-display italic text-4xl text-primary mb-2 group-hover:scale-105 transition-smooth">
              Broadway
            </p>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Current Role
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
