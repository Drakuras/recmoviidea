import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Play, ChevronRight, Flame, Diamond, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

import imgObsession from "@/assets/thumbs/obsession.jpg";
import imgMichael from "@/assets/thumbs/michael.jpg";
import imgMK2 from "@/assets/thumbs/mk2.jpg";
import imgToyStory from "@/assets/thumbs/toystory5.jpg";
import imgDisclosure from "@/assets/thumbs/disclosureday.jpg";
import imgUnknownMan from "@/assets/thumbs/unknownman.jpg";
import imgMarioGalaxy from "@/assets/thumbs/mariogalaxy.jpg";
import imgMandalorian from "@/assets/thumbs/mandalorian.webp";
import imgDamage from "@/assets/thumbs/damage.jpg";
import imgYourFault from "@/assets/thumbs/yourfault.jpg";
import imgFurious from "@/assets/thumbs/furious.jpg";
import imgMadness from "@/assets/thumbs/madness.jpg";
import imgYourHeart from "@/assets/thumbs/yourheart.jpg";
import imgBhooth from "@/assets/thumbs/bhooth.jpg";
import imgSalitan from "@/assets/thumbs/salitan.jpg";
import imgKD from "@/assets/thumbs/kd.jpg";
import imgHaiJawaani from "@/assets/thumbs/haijawaani.jpg";
import imgDridam from "@/assets/thumbs/dridam.jpg";
import imgPeddi from "@/assets/thumbs/peddi.jpg";
import imgKaruppu from "@/assets/thumbs/karuppu.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RecMovie — Stream Free Movies & TV" },
      { name: "description", content: "Watch thousands of free movies and TV shows on RecMovie. Action, romance, classics and more — all in one place." },
      { property: "og:title", content: "RecMovie" },
      { property: "og:description", content: "Watch thousands of free movies and TV shows on RecMovie." },
    ],
  }),
  component: Index,
});

type Item = { src: string; title: string; payout: number };
const mk = (src: string, title: string, payout: number): Item => ({ src, title, payout });

const rows: { title: string; items: Item[] }[] = [
  { title: "Trending Now", items: [
    mk(imgObsession, "Obsession", 44),
    mk(imgMichael, "Michael", 38),
    mk(imgMK2, "Mortal Kombat II", 52),
    mk(imgDisclosure, "Disclosure Day", 31),
    mk(imgUnknownMan, "The Unknown Man", 29),
    mk(imgMandalorian, "The Mandalorian & Grogu", 61),
  ]},
  { title: "Big Screen Hits", items: [
    mk(imgToyStory, "Toy Story 5", 57),
    mk(imgMarioGalaxy, "The Super Mario Galaxy Movie", 49),
    mk(imgFurious, "The Furious", 33),
    mk(imgDamage, "Damage", 27),
    mk(imgYourFault, "Your Fault: London", 36),
    mk(imgMadness, "Madness", 41),
  ]},
  { title: "Romance", items: [
    mk(imgYourHeart, "Your Heart Will Be Broken", 23),
    mk(imgHaiJawaani, "Hai Jawani Toh Ishq Hona Hai", 19),
    mk(imgBhooth, "Bhooth Bangla", 28),
    mk(imgSalitan, "Salitan", 22),
    mk(imgPeddi, "Peddi", 25),
    mk(imgKaruppu, "Karuppu", 18),
  ]},
  { title: "Action & Thriller", items: [
    mk(imgMK2, "Mortal Kombat II", 52),
    mk(imgFurious, "The Furious", 33),
    mk(imgDamage, "Damage", 27),
    mk(imgKD, "KD – The Devil", 35),
    mk(imgDridam, "Dridam", 21),
    mk(imgUnknownMan, "The Unknown Man", 29),
  ]},
  { title: "Weekly Watchlist", items: [
    mk(imgToyStory, "Toy Story 5", 57),
    mk(imgMandalorian, "The Mandalorian & Grogu", 61),
    mk(imgObsession, "Obsession", 44),
    mk(imgMichael, "Michael", 38),
    mk(imgDisclosure, "Disclosure Day", 31),
    mk(imgMarioGalaxy, "The Super Mario Galaxy Movie", 49),
  ]},
];

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/85 border-b border-border">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 h-14 flex items-center gap-2 sm:gap-4">
        <a href="/" className="font-display font-bold text-xl tracking-tight shrink-0">
          rec<span className="logo-accent">movi</span>
        </a>
        <nav className="hidden md:flex items-center gap-2 text-sm">
          <span className="font-semibold text-foreground">Review Platform</span>
          <span className="text-muted-foreground">·</span>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Discover Movies</a>
        </nav>
        <div className="flex-1" />
        <div className="flex items-center gap-2 sm:gap-3 text-sm">
          <div className="flex items-center gap-1 sm:gap-1.5 font-semibold text-streak">
            <Flame className="size-4 fill-current shrink-0" />
            <span className="hidden sm:inline">477 day streak</span>
            <span className="sm:hidden text-xs tabular-nums">477</span>
          </div>
          <div className="flex items-center gap-1 font-semibold text-primary">
            <Diamond className="size-3.5 sm:size-4 fill-current shrink-0" />
            <span className="hidden sm:inline">Top Reviewer</span>
          </div>
        </div>
        <span className="text-xs sm:text-sm font-semibold text-money tabular-nums">$3,460.53</span>
        <button
          aria-label="Profile"
          className="size-8 rounded-full bg-gradient-to-br from-red-500 to-orange-400 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md hover:opacity-90 transition"
        >
          D
        </button>
      </div>
    </header>
  );
}

function FeaturedCard({ src, title, meta, desc, payout }: { src: string; title: string; meta: string; desc: string; payout: number }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl aspect-[16/9] shadow-[var(--shadow-poster)]">
      <img src={src} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-end">
        <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight">{title}</h3>
        <div className="flex items-center gap-3 mt-2 flex-wrap">
          <p className="text-xs sm:text-sm text-muted-foreground">{meta}</p>
          <span className="sm:hidden inline-flex items-center text-xs font-bold text-money bg-black/50 px-2 py-0.5 rounded-full border border-money/30">
            ${payout.toFixed(2)} payout
          </span>
        </div>
        <p className="text-sm text-foreground/80 mt-2 max-w-xl line-clamp-2 hidden sm:block">{desc}</p>
      </div>
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-4xl sm:text-5xl font-bold text-money mb-1">${payout.toFixed(2)}</div>
        <div className="text-sm text-muted-foreground mb-6">Review payout</div>
        <button className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:scale-105 transition-transform shadow-lg">
          Start Reviewer
        </button>
      </div>
      <button aria-label="Play" className="absolute bottom-5 right-5 z-30 size-12 sm:size-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        <Play className="size-5 fill-current" />
      </button>
    </article>
  );
}

function PosterCard({ item }: { item: Item }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="group poster aspect-[2/3] relative overflow-hidden cursor-pointer"
      onClick={() => setOpen(o => !o)}
    >
      <img src={item.src} alt={item.title} loading="lazy" />
      {/* Always-visible bottom strip on mobile (hidden when overlay is open) */}
      <div className={`absolute bottom-0 inset-x-0 z-10 bg-gradient-to-t from-black/90 to-transparent pt-8 pb-2 px-2 transition-opacity duration-200 sm:hidden ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <p className="text-[10px] font-semibold leading-tight line-clamp-2 text-white/90">{item.title}</p>
        <p className="text-[11px] font-bold text-money">${item.payout.toFixed(2)}</p>
      </div>
      {/* Overlay: hover on desktop, tap on mobile */}
      <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center text-center bg-black/80 p-3 transition-opacity duration-300 group-hover:opacity-100 ${open ? "opacity-100" : "opacity-0"}`}>
        <div className="text-2xl sm:text-3xl font-bold text-money mb-0.5">${item.payout.toFixed(2)}</div>
        <div className="text-[10px] sm:text-xs text-muted-foreground mb-3">Review payout</div>
        <button
          className="rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs sm:text-sm font-semibold hover:scale-105 transition-transform shadow-lg"
          onClick={e => e.stopPropagation()}
        >
          Start Reviewer
        </button>
        <p className="mt-3 text-xs sm:text-sm font-semibold leading-tight line-clamp-2">{item.title}</p>
      </div>
    </div>
  );
}

function Row({ title, items }: { title: string; items: Item[] }) {
  return (
    <section className="mt-10">
      <button className="group flex items-center gap-1 mb-3 text-base sm:text-lg font-display font-semibold tracking-tight">
        {title}
        <ChevronRight className="size-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
      </button>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
        {items.map((it, i) => <PosterCard key={i} item={it} />)}
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { h: "Company", links: ["About Us", "Careers", "Contact"] },
    { h: "Support", links: ["Contact Support", "Help Center", "Supported Devices", "Activate Your Device", "Accessibility"] },
    { h: "Partners", links: ["Advertise with Us", "Partner with Us"] },
    { h: "Get the Apps", links: ["iOS", "Android", "Smart TV"] },
    { h: "Press", links: ["Press Releases", "In the News"] },
    { h: "Legal", links: ["Privacy Policy", "Terms of Use", "Cookies", "Privacy Centre"] },
  ];
  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <span className="font-display font-bold text-xl logo-grad">recmovie</span>
          <div className="flex items-center gap-3 text-muted-foreground">
            <a href="#" aria-label="Facebook" className="hover:text-foreground transition"><Facebook className="size-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-foreground transition"><Instagram className="size-4" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-foreground transition"><Twitter className="size-4" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-foreground transition"><Linkedin className="size-4" /></a>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-sm">
          {cols.map((c) => (
            <div key={c.h}>
              <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">{c.h}</h4>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-foreground/80 hover:text-foreground transition">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} RecMovie. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 pt-6">
        <h1 className="sr-only">RecMovie — Free movies and TV</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FeaturedCard
            src={imgToyStory}
            title="Toy Story 5"
            meta="Animation · 2026 · In Theaters Now"
            desc="Woody, Buzz, and the gang return for one more adventure in the most anticipated sequel of 2026."
            payout={75}
          />
          <FeaturedCard
            src={imgMandalorian}
            title="The Mandalorian & Grogu"
            meta="Sci-Fi · 2026 · In Theaters Now"
            desc="The galaxy's most beloved bounty hunter and his tiny green companion hit the big screen."
            payout={68}
          />
        </section>

        {rows.map((r) => <Row key={r.title} {...r} />)}
      </main>
      <Footer />
    </div>
  );
}
