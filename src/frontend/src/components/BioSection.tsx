import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";

export default function BioSection() {
  return (
    <section id="about" className="relative bg-muted/30 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-primary">
            About
          </p>
          <h2 className="font-display text-5xl italic text-foreground md:text-6xl leading-[1.1]">
            humble Beginnings
          </h2>
        </motion.div>

        <Separator className="my-12 bg-border/60" />

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg leading-[1.8] text-foreground font-light tracking-wide">
              Nyla Sostre is a New York City-based actor, singer-songwriter, and
              Broadway performer whose work lives somewhere between theatre,
              soul, humor, softness, and a little New York grit.
            </p>
            <p className="mt-8 text-lg leading-[1.8] text-muted-foreground font-light tracking-wide">
              From the time she first found herself onstage, performing felt
              like more than something she loved — it felt like something that
              kept calling her back. "I'm always looking for the story
              underneath the story," Nyla says. "Whether I'm onstage, in the
              studio, or creating something from my own life, I want people to
              feel something real."
            </p>
            <p className="mt-8 text-lg leading-[1.8] text-muted-foreground font-light tracking-wide">
              Her journey has taken her through regional theatre, recording
              studios, original music, and Broadway. She is currently part of
              MJ: The Musical on Broadway and has also performed as Sandy Cheeks
              in The SpongeBob Musical at Sacramento Music Circus. As a
              recording artist, Nyla has released two albums and two singles
              across streaming platforms, blending theatrical storytelling with
              personal musical expression.
            </p>
            <p className="mt-8 text-lg leading-[1.8] text-muted-foreground font-light tracking-wide">
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
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-8 hover:border-primary/30 transition-smooth">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Current Role
              </p>
              <p className="mt-3 font-display text-3xl italic text-foreground leading-tight">
                MJ the Musical
              </p>
              <p className="mt-2 text-muted-foreground font-light">
                Standby for Katherine Jackson and Rachel
              </p>
              <p className="mt-4 text-sm text-muted-foreground/70 font-mono tracking-wider">
                Neil Simon Theatre, Broadway
              </p>
            </div>

            <div className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-8 hover:border-primary/30 transition-smooth">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Discography
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-light">Albums</span>
                  <span className="font-display text-2xl italic text-primary">
                    2
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-light">Singles</span>
                  <span className="font-display text-2xl italic text-primary">
                    2
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground/70 font-mono tracking-wider">
                Available on all streaming platforms
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
