import { createActor } from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import {
  Instagram,
  Mail,
  Send,
  ShoppingBag,
  Twitter,
  Youtube,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const { actor, isFetching } = useActor(createActor);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor || isFetching) {
      toast.error("Backend not ready. Please try again in a moment.");
      return;
    }
    setIsSubmitting(true);

    try {
      const result = await actor.submitContactForm({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      if (result.__kind__ === "ok") {
        toast.success("Message sent! We'll be in touch soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(result.err || "Failed to send message. Please try again.");
      }
    } catch (_err) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/nylanana/",
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://www.twitter.com/nylasostre",
    },
    {
      icon: Youtube,
      label: "YouTube",
      url: "https://www.youtube.com/c/NylaSostre",
    },
    { icon: ShoppingBag, label: "Amazon", url: "https://a.co/d/01S3vGok" },
    { icon: Mail, label: "Email", url: "mailto:nylasostre@gmail.com" },
  ];

  return (
    <section
      id="contact"
      className="py-28 md:py-36 bg-background relative overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-5">
            Contact
          </p>
          <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
            Get In Touch
          </h2>
          <div className="mt-6 w-16 h-px bg-primary/40 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="font-display italic text-2xl md:text-3xl text-foreground mb-6 leading-snug">
              Booking & Inquiries
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-10 text-[15px]">
              For booking inquiries, press requests, or just to say hello, reach
              out using the form or connect on social media. Looking forward to
              hearing from you.
            </p>

            <div className="space-y-5 mb-12">
              <div className="flex items-center gap-3.5 group">
                <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-primary/40 transition-smooth">
                  <Mail size={16} className="text-primary" />
                </div>
                <a
                  href="mailto:nylasostre@gmail.com"
                  className="text-foreground hover:text-primary transition-smooth text-[15px]"
                  data-ocid="contact.email.link"
                >
                  nylasostre@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-glow transition-smooth"
                  aria-label={social.label}
                  data-ocid={`contact.social.${social.label.toLowerCase()}.link`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-body text-muted-foreground mb-2.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-card/60 border border-border rounded-lg text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 focus:bg-card transition-smooth"
                  placeholder="Your name"
                  data-ocid="contact.name.input"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-body text-muted-foreground mb-2.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-card/60 border border-border rounded-lg text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 focus:bg-card transition-smooth"
                  placeholder="your@email.com"
                  data-ocid="contact.email.input"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-body text-muted-foreground mb-2.5"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-card/60 border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 focus:bg-card transition-smooth appearance-none cursor-pointer"
                  data-ocid="contact.subject.select"
                >
                  <option value="">Select a subject</option>
                  <option value="booking">Booking Inquiry</option>
                  <option value="press">Press & Media</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-body text-muted-foreground mb-2.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3.5 bg-card/60 border border-border rounded-lg text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 focus:bg-card transition-smooth resize-none"
                  placeholder="Tell me about your project or inquiry..."
                  data-ocid="contact.message.textarea"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-wide uppercase rounded-lg hover:brightness-110 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed shadow-glow"
                data-ocid="contact.submit.button"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
