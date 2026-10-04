import { ImageStreamHero } from "@/components/ui/image-stream-hero";
import { ArrowRight, BatteryCharging, Camera, Cpu, ShieldCheck, Smartphone, Zap } from "lucide-react";

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=640&h=900&fit=crop&q=70&auto=format`;

// Swap these for your own phone renders for the best result.
const STREAM = [
  "1511707171634-5f897ff02aa9",
  "1592750475338-74b7b21085ab",
  "1598327105666-5b89351aff97",
  "1601784551446-20c9e07cdbdb",
  "1580910051074-3eb694886505",
  "1565849904461-04a58ad377e0",
  "1605236453806-6ff36851218e",
].map((id) => ({ src: u(id), alt: "Hitech smartphone" }));

const PHONES = [
  { name: "Hitech H1", tag: "Everyday", price: "₹24,999", img: "1511707171634-5f897ff02aa9", specs: ["6.5″ AMOLED 120Hz", "50MP camera", "5,000mAh"] },
  { name: "Hitech H1 Pro", tag: "Flagship", price: "₹44,999", img: "1592750475338-74b7b21085ab", specs: ["6.7″ LTPO 144Hz", "200MP triple camera", "100W charging"] },
  { name: "Hitech H1 Lite", tag: "Essential", price: "₹14,999", img: "1598327105666-5b89351aff97", specs: ["6.4″ AMOLED 90Hz", "48MP camera", "5,000mAh"] },
];

const FEATURES = [
  { icon: Camera, title: "Pro-grade camera", text: "Larger sensor, sharper night shots, steady 4K video." },
  { icon: Cpu, title: "Fast, cool, quiet", text: "Efficient chipset with a vapor chamber that keeps performance steady." },
  { icon: BatteryCharging, title: "Two-day battery", text: "100W charging takes you from 0 to 60% in 15 minutes." },
  { icon: ShieldCheck, title: "Built to last", text: "Gorilla-class glass, IP68 protection and 4 years of updates." },
];

export default function Page() {
  return (
    <main className="bg-neutral-950 text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <Smartphone className="size-5 text-cyan-300" /> hitech
          </a>
          <nav className="hidden gap-8 text-sm text-white/70 md:flex">
            <a href="#phones" className="hover:text-white">Phones</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#buy" className="hover:text-white">Buy</a>
          </nav>
          <a href="#buy" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-cyan-200">
            Buy now
          </a>
        </div>
      </header>

      <ImageStreamHero
        id="top"
        images={STREAM}
        className="h-[100svh] min-h-[620px] w-full bg-neutral-950"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-transparent to-neutral-950/90" />
        <div className="relative z-10 flex h-full flex-col items-center justify-between px-6 pb-14 pt-28 text-center">
          <div>
            <p className="text-sm text-cyan-300">Introducing Hitech H1</p>
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
              Technology that
              <br />
              keeps up with you.
            </h1>
          </div>
          <div className="flex flex-col items-center gap-5">
            <p className="max-w-md text-balance text-white/70">
              A brighter display, a sharper camera and a battery that lasts two days. From ₹14,999.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#phones" className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-medium text-black transition hover:bg-cyan-200">
                Explore phones <ArrowRight className="size-4" />
              </a>
              <a href="#features" className="rounded-full border border-white/25 px-6 py-3 font-medium transition hover:bg-white/10">
                See what’s new
              </a>
            </div>
          </div>
        </div>
      </ImageStreamHero>

      <section id="phones" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-24">
        <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">Pick your Hitech.</h2>
        <p className="mt-3 text-white/60">Three phones, one fast and simple experience.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PHONES.map((p) => (
            <article key={p.name} className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-cyan-300/40">
              <div className="aspect-[4/5] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={u(p.img)} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs text-cyan-300">{p.tag}</p>
                <h3 className="mt-1 text-2xl font-semibold">{p.name}</h3>
                <ul className="mt-4 space-y-1 text-sm text-white/60">
                  {p.specs.map((s) => <li key={s}>{s}</li>)}
                </ul>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-lg">From {p.price}</span>
                  <a href="#buy" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-cyan-200">Buy</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="features" className="scroll-mt-16 border-y border-white/10 bg-white/[0.02] px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">Everything you use most, done better.</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-white/10 p-6">
                <Icon className="size-6 text-cyan-300" />
                <h3 className="mt-5 text-lg font-medium">{title}</h3>
                <p className="mt-2 text-sm text-white/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="buy" className="scroll-mt-16 px-5 py-28 text-center">
        <Zap className="mx-auto size-8 text-cyan-300" />
        <h2 className="mx-auto mt-6 max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">Ready when you are.</h2>
        <p className="mx-auto mt-4 max-w-md text-white/60">Free delivery, 14-day returns and easy EMI on every Hitech phone.</p>
        <a href="#top" className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-8 py-4 font-medium text-black transition hover:bg-cyan-200">
          Shop Hitech <ArrowRight className="size-4" />
        </a>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-white/40">
        © 2026 Hitech. All rights reserved.
      </footer>
    </main>
  );
}
