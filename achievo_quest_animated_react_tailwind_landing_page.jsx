import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calculator, BookOpen, FlaskConical, Globe2, Brain, ChevronRight, Sparkles, Award, GalleryHorizontalEnd, PhoneCall, Mail, Navigation } from "lucide-react";

export default function AchievoQuest() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
    { label: "Winners", href: "#winners" },
  ];

  const subjects = [
    { name: "Mathematics", icon: Calculator, blurb: "Numbers, logic, and problem solving." },
    { name: "English", icon: BookOpen, blurb: "Grammar, reading, and vocabulary." },
    { name: "Science", icon: FlaskConical, blurb: "Physics, chemistry, biology basics." },
    { name: "General Knowledge", icon: Globe2, blurb: "World, India, current affairs." },
    { name: "Aptitude", icon: Brain, blurb: "Reasoning, puzzles, analytics." },
  ];

  const winners = [
    { name: "Aarav S.", grade: "Class 6", achievement: "All-India Rank 3" },
    { name: "Diya P.", grade: "Class 8", achievement: "State Topper" },
    { name: "Kabir M.", grade: "Class 4", achievement: "City Champion" },
  ];

  const gallery = new Array(8).fill(0).map((_, i) => ({ id: i + 1 }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-slate-800 scroll-smooth">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <motion.div initial={{ rotate: -10, scale: 0.9 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: "spring", stiffness: 120 }} className="p-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              <Sparkles className="h-5 w-5" />
            </motion.div>
            <span className="font-extrabold tracking-tight text-lg md:text-xl">AchievoQuest</span>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="px-3 py-2 rounded-xl hover:bg-indigo-50 transition text-sm font-medium">
                {n.label}
              </a>
            ))}
          </nav>

          <Button className="hidden md:inline-flex rounded-2xl" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Get Started
          </Button>

          {/* Mobile menu */}
          <Button variant="ghost" className="md:hidden" onClick={() => setMobileOpen((s) => !s)} aria-label="Toggle menu">
            <Navigation className="h-5 w-5" />
          </Button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden border-t bg-white/80 backdrop-blur">
              <div className="max-w-6xl mx-auto px-4 py-2 grid">
                {navItems.map((n) => (
                  <a key={n.label} href={n.href} onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-xl hover:bg-indigo-50 transition text-sm font-medium">
                    {n.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mx-auto mt-8 h-64 w-64 md:h-96 md:w-96 bg-gradient-to-tr from-indigo-300/30 to-purple-300/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 100 }} className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Crack Olympiads with Confidence.
            </motion.h1>
            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.05 } }} className="mt-4 text-slate-600 md:text-lg">
              A vibrant learning hub for students from <span className="font-semibold">Class 4 to Class 9</span> – practice, track, and shine in Mathematics, English, Science, GK and Aptitude.
            </motion.p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="rounded-2xl" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
                Explore Subjects <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-2xl" onClick={() => document.getElementById("winners")?.scrollIntoView({ behavior: "smooth" })}>
                Meet Winners
              </Button>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative">
            <div className="grid grid-cols-2 gap-4">
              {subjects.map((s, idx) => (
                <motion.div key={s.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * idx }}>
                  <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-base">
                        <s.icon className="h-5 w-5" /> {s.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 text-sm text-slate-600">{s.blurb}</CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT / SUBJECT HIGHLIGHTS */}
      <section id="about" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-bold">Why AchievoQuest?</motion.h2>
          <p className="mt-3 text-slate-600 md:text-lg max-w-3xl">
            Designed for clarity, speed, and fun. Master concepts with bite‑sized lessons, animated explanations, and gamified quizzes crafted for Olympiad success.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((s, idx) => (
              <motion.div key={s.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.04 * idx }}>
                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><s.icon className="h-5 w-5" />{s.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                      <li>Animated micro-lessons</li>
                      <li>Level-wise practice (Class 4–9)</li>
                      <li>Timed mock tests & analytics</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WINNERS */}
      <section id="winners" className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <Award className="h-6 w-6" /> Hall of Fame
          </motion.h2>
          <p className="mt-2 text-slate-600">Celebrating our toppers and trailblazers.</p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {winners.map((w, i) => (
              <motion.div key={w.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }}>
                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-lg">{w.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600">
                    <div className="text-sm">{w.grade}</div>
                    <div className="mt-1 font-medium">{w.achievement}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <GalleryHorizontalEnd className="h-6 w-6" /> Gallery
          </motion.h2>
          <p className="mt-2 text-slate-600">A peek into our sessions, workshops, and winners.</p>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {gallery.map((g, idx) => (
              <motion.div key={g.id} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.03 * idx }} className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-indigo-200 to-purple-200 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,white,transparent_60%)]" />
                <div className="absolute bottom-2 left-2 text-xs font-medium bg-white/70 backdrop-blur px-2 py-1 rounded-lg">Event #{g.id}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 md:py-24 bg-white/70">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-bold">Contact Us</motion.h2>
            <p className="mt-2 text-slate-600">Have questions or want to enroll? Send us a message.</p>

            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <div className="flex items-center gap-2"><PhoneCall className="h-4 w-4" /> +91-90000-00000</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@achievoquest.com</div>
            </div>
          </div>

          <Card className="rounded-2xl">
            <CardContent className="pt-6">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="Your name" className="mt-1" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Class (4–9)</label>
                    <Input placeholder="e.g., 7" className="mt-1" required />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="you@example.com" className="mt-1" required />
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="Tell us what you need…" className="mt-1" rows={4} />
                </div>
                <Button type="submit" className="rounded-2xl w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} AchievoQuest. All rights reserved.</p>
          <div className="text-xs text-slate-500">Built for Olympiad prep: Math • English • Science • GK • Aptitude</div>
        </div>
      </footer>
    </div>
  );
}
