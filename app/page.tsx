"use client";

import {
  ArrowRight,
  Building2,
  Camera,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CirclePlay,
  Compass,
  Globe2,
  Headphones,
  Hotel,
  Luggage,
  Mail,
  MapPin,
  Menu,
  Phone,
  Plane,
  Quote,
  ShieldCheck,
  Star,
  Ticket,
  UserRound,
  Users,
  Utensils,
  X,
  type LucideIcon
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

const navItems = ["Home", "Destinations", "Packages", "Services", "Reviews", "Contact"];

const destinations = [
  {
    title: "Bali",
    location: "Bali, Indonesia",
    text: "Beautiful beaches, vibrant culture and unforgettable sunsets.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Mount Bromo",
    location: "East Java, Indonesia",
    text: "Spectacular sunrise and stunning volcanic landscapes.",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Raja Ampat",
    location: "Raja Ampat, Indonesia",
    text: "World-class marine life and stunning natural beauty.",
    image:
      "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Labuan Bajo",
    location: "Labuan Bajo, Indonesia",
    text: "Gateway to Komodo Island and exotic adventures.",
    image:
      "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=900&q=85"
  }
];

const services: Array<{
  icon: LucideIcon;
  title: string;
  text: string;
  color: string;
}> = [
  {
    icon: Plane,
    title: "Easy Booking",
    text: "Book your trip in just a few clicks with our simple and secure process.",
    color: "from-primary to-secondary"
  },
  {
    icon: Building2,
    title: "Best Hotels",
    text: "Get the best hotel options with unbeatable prices and top-notch quality.",
    color: "from-emerald-400 to-green-600"
  },
  {
    icon: ShieldCheck,
    title: "Safe Travel",
    text: "Your safety is our priority. We work with trusted partners for secure journeys.",
    color: "from-accent to-orange-500"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    text: "Our friendly support team is available 24/7 to assist you anytime, anywhere.",
    color: "from-violet-500 to-purple-600"
  }
];

const packages = [
  {
    title: "Bali Escape",
    duration: "4D 3N",
    price: "Rp 2.499.000",
    text: "Explore the beauty of Bali with cultural tours, beaches, and adventure.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=85"
  },
  {
    title: "Bromo Adventure",
    duration: "3D 2N",
    price: "Rp 1.799.000",
    text: "Enjoy the amazing sunrise at Bromo and explore the surrounding areas.",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1000&q=85"
  },
  {
    title: "Raja Ampat Premium",
    duration: "5D 4N",
    price: "Rp 6.999.000",
    text: "Discover the underwater paradise and stunning islands of Raja Ampat.",
    image:
      "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1000&q=85"
  }
];

const testimonials = [
  {
    name: "Sarah & David",
    city: "Jakarta, Indonesia",
    text: "WanderGo made our honeymoon unforgettable. Everything was perfectly arranged.",
    avatar:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=240&q=80"
  },
  {
    name: "Michael Chen",
    city: "Singapore",
    text: "The booking process was simple and fast. Highly recommended!",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80"
  },
  {
    name: "Rizky Pratama",
    city: "Bandung, Indonesia",
    text: "Excellent service from start to finish. Will definitely travel again with WanderGo.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=240&q=80"
  },
  {
    name: "Alya Putri",
    city: "Surabaya, Indonesia",
    text: "The hotels, guide, and itinerary felt premium without making the trip stressful.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80"
  },
  {
    name: "Daniel Hartono",
    city: "Medan, Indonesia",
    text: "Every transfer was on time and the Raja Ampat package was absolutely stunning.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80"
  }
];

function Reveal({
  children,
  className = "",
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedNumber({
  value,
  suffix = "",
  decimals = 0
}: {
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let frame = 0;
    const totalFrames = 76;
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      setDisplay(value * Math.min(progress, 1));
      if (frame >= totalFrames) window.clearInterval(timer);
    }, 18);

    return () => window.clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="WanderGo home">
      <span className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-glow">
        <Plane className="size-5 -rotate-45 fill-white/20" />
      </span>
      <span className="font-heading text-2xl font-extrabold tracking-tight text-dark">
        Wander<span className="text-secondary">Go</span>
      </span>
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50 h-[90px]">
      <nav className="site-container flex h-full items-center justify-between gap-8">
        <Logo />

        <div className="hidden items-center gap-11 xl:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold text-slate-700 transition hover:text-primary"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          <button className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100">
            <Globe2 className="size-4" />
            EN
            <ChevronDown className="size-4" />
          </button>
          <a
            href="#contact"
            className="btn-ripple rounded-xl bg-gradient-to-r from-primary to-secondary px-8 py-4 text-sm font-extrabold text-white shadow-glow transition hover:-translate-y-0.5"
          >
            Book Now
          </a>
        </div>

        <button
          className="flex size-12 items-center justify-center rounded-2xl border border-slate-200 text-dark lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-premium lg:hidden"
        >
          <div className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 font-bold text-slate-700 hover:bg-sky-50 hover:text-primary"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-ripple mt-2 rounded-2xl bg-gradient-to-r from-primary to-secondary px-6 py-4 text-center font-extrabold text-white shadow-glow"
            >
              Book Now
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function HeroCollage() {
  return (
    <div className="dot-grid relative mx-auto h-[590px] w-full max-w-[850px] lg:h-[680px]">
      <motion.div
        className="hero-blob absolute right-4 top-14 h-[455px] w-[650px] max-w-[84vw] bg-gradient-to-br from-sky-300 via-sky-100 to-blue-500 opacity-95 shadow-glow"
        animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="image-mask absolute right-12 top-8 h-[485px] w-[610px] max-w-[80vw] overflow-hidden border-[12px] border-white bg-sky-100 shadow-premium"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85"
          alt="Tropical island with ocean"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/25 via-transparent to-white/10" />
      </motion.div>

      <motion.div
        className="absolute left-14 top-16 z-20 hidden rounded-full bg-white/80 p-4 text-primary shadow-soft backdrop-blur md:block"
        animate={{ x: [0, 20, 0], y: [0, -18, 0], rotate: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Plane className="size-8 -rotate-45 fill-primary/15" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-32 z-30 w-[230px] overflow-hidden rounded-[34px] border-[10px] border-white bg-white shadow-premium md:w-[270px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=650&q=85"
          alt="Traveler with luggage"
          className="h-[350px] w-full object-cover md:h-[420px]"
        />
        <div className="absolute inset-x-4 bottom-4 rounded-3xl bg-white/82 p-4 shadow-soft backdrop-blur">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-white">
              <Luggage className="size-5" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Next trip</p>
              <p className="font-heading text-lg font-extrabold">Bali Escape</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-2 top-[315px] z-40 w-[210px] rotate-6 rounded-[28px] border border-white/60 bg-white/84 p-5 shadow-premium backdrop-blur-xl md:right-8"
        animate={{ y: [0, -12, 0], rotate: [6, 3, 6] }}
        transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mb-5 flex items-center justify-between">
          <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-extrabold text-primary">PASSPORT</span>
          <Ticket className="size-5 text-secondary" />
        </div>
        <div className="h-20 rounded-2xl bg-gradient-to-br from-dark to-blue-900 p-4 text-white">
          <Globe2 className="mb-3 size-7 text-accent" />
          <div className="h-1.5 w-24 rounded-full bg-white/60" />
          <div className="mt-2 h-1.5 w-16 rounded-full bg-white/30" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-2 right-28 z-50 flex items-center gap-3 rounded-[28px] bg-white p-4 shadow-premium"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="flex size-16 items-center justify-center rounded-3xl bg-slate-900 text-white">
          <Camera className="size-8" />
        </span>
        <span className="flex size-16 items-center justify-center rounded-3xl bg-amber-100 text-accent">
          <Compass className="size-8" />
        </span>
      </motion.div>

      <motion.div
        className="absolute right-32 top-12 z-30 hidden overflow-hidden rounded-[24px] border-[8px] border-white bg-white shadow-premium lg:block"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=420&q=80"
          alt="Mountain scenery"
          className="h-36 w-48 object-cover"
        />
      </motion.div>
    </div>
  );
}

function HeroSection() {
  const stats = [
    { icon: Users, value: 15, suffix: "K+", label: "Happy Travelers", color: "from-primary to-secondary" },
    { icon: MapPin, value: 120, suffix: "+", label: "Destinations", color: "from-emerald-400 to-green-600" },
    { icon: Star, value: 4.9, suffix: "★", label: "Average Rating", color: "from-accent to-orange-400", decimals: 1 }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-white to-sky-50/75 pt-[90px]"
    >
      <div className="site-container grid min-h-[calc(100vh-90px)] items-center gap-12 py-12 lg:grid-cols-[0.9fr_1.1fr] xl:gap-20">
        <div className="relative z-10 max-w-[680px]">
          <motion.h1
            className="font-heading text-[clamp(4rem,5vw,88px)] font-extrabold leading-none tracking-normal text-dark"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            Explore
            <br />
            The World
            <br />
            <span className="font-script text-[clamp(4.2rem,5.5vw,96px)] font-bold text-secondary">
              One Journey
            </span>
            <br />
            At A Time
          </motion.h1>

          <motion.p
            className="mt-9 max-w-[590px] text-xl leading-9 text-slate-600"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
          >
            Discover breathtaking destinations, book unforgettable experiences, and create memories
            that last a lifetime with <span className="font-extrabold text-secondary">WanderGo.</span>
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease: "easeOut" }}
          >
            <a
              href="#destinations"
              className="btn-ripple flex h-16 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-primary to-secondary px-9 text-base font-extrabold text-white shadow-glow transition hover:-translate-y-1"
            >
              Explore Destinations
              <ArrowRight className="size-5" />
            </a>
            <a
              href="#reviews"
              className="flex h-16 items-center justify-center gap-3 rounded-2xl border-2 border-primary/40 bg-white px-9 text-base font-extrabold text-dark shadow-soft transition hover:-translate-y-1 hover:border-primary hover:text-primary"
            >
              Watch Video
              <CirclePlay className="size-5 text-primary" />
            </a>
          </motion.div>

          <motion.div
            className="mt-14 grid max-w-[660px] gap-5 sm:grid-cols-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.32, ease: "easeOut" }}
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-center gap-4 rounded-[26px] bg-white p-4 shadow-soft">
                  <span
                    className={`flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-soft`}
                  >
                    <Icon className="size-6 fill-white/15" />
                  </span>
                  <div>
                    <p className="font-heading text-3xl font-extrabold leading-none text-dark">
                      <AnimatedNumber
                        value={stat.value}
                        suffix={stat.suffix}
                        decimals={stat.decimals ?? 0}
                      />
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-500">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <HeroCollage />
      </div>
    </section>
  );
}

function DestinationsSection() {
  return (
    <section id="destinations" className="bg-white py-24">
      <div className="site-container">
        <Reveal className="mb-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-primary">
              Popular Destinations
            </p>
            <h2 className="font-heading text-5xl font-extrabold leading-tight text-dark lg:text-6xl">
              Explore Top Destinations
              <br />
              Around The World
            </h2>
          </div>
          <div className="max-w-[480px]">
            <p className="text-lg leading-8 text-slate-600">
              From stunning beaches to breathtaking mountains, find your next dream destination with
              WanderGo.
            </p>
            <a
              href="#packages"
              className="mt-5 inline-flex items-center gap-2 font-extrabold text-primary hover:text-secondary"
            >
              View All Destinations <ArrowRight className="size-5" />
            </a>
          </div>
        </Reveal>

        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {destinations.map((destination, index) => (
            <Reveal key={destination.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="destination-card group relative h-[420px] overflow-hidden rounded-[28px] bg-slate-200 shadow-soft"
              >
                <img
                  src={destination.image}
                  alt={`${destination.title} destination`}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full bg-white/92 px-4 py-2 text-xs font-extrabold text-slate-700 shadow-soft backdrop-blur">
                  <MapPin className="size-4 text-primary" />
                  {destination.location}
                </div>
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white">
                  <h3 className="font-heading text-2xl font-extrabold">{destination.title}</h3>
                  <div className="mt-3 flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="size-4 fill-current" />
                    ))}
                  </div>
                  <div className="mt-3 flex items-end justify-between gap-5">
                    <p className="max-w-[220px] text-sm font-medium leading-6 text-white/90">
                      {destination.text}
                    </p>
                    <button className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-soft transition group-hover:bg-primary group-hover:text-white">
                      <ArrowRight className="size-5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="bg-white py-10">
      <div className="site-container">
        <Reveal>
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-primary">
            Why Choose WanderGo
          </p>
          <h2 className="font-heading text-5xl font-extrabold leading-tight text-dark lg:text-6xl">
            We Make Your Travel
            <br />
            Experience Better
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <motion.article
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="h-full rounded-[24px] border border-slate-100 bg-white p-8 shadow-soft"
                >
                  <span
                    className={`mb-7 flex size-16 items-center justify-center rounded-[20px] bg-gradient-to-br ${service.color} text-white shadow-soft`}
                  >
                    <Icon className="size-8" />
                  </span>
                  <h3 className="font-heading text-xl font-extrabold text-dark">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{service.text}</p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PackagesSection() {
  return (
    <section id="packages" className="bg-white py-24">
      <div className="site-container">
        <Reveal className="mb-10 flex items-end justify-between gap-8">
          <div>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-primary">
              Featured Packages
            </p>
            <h2 className="font-heading text-5xl font-extrabold leading-tight text-dark lg:text-6xl">
              Best Travel Packages
              <br />
              For You
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden items-center gap-2 font-extrabold text-primary hover:text-secondary md:inline-flex"
          >
            View All Packages <ArrowRight className="size-5" />
          </a>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="overflow-hidden rounded-[26px] border border-slate-100 bg-white shadow-soft"
              >
                <div className="relative h-[230px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.title} package`}
                    className="h-full w-full object-cover transition duration-700 hover:scale-110"
                  />
                  <span className="absolute right-5 top-5 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-extrabold text-white shadow-soft">
                    {item.duration}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-heading text-2xl font-extrabold text-dark">{item.title}</h3>
                  <div className="mt-5 grid grid-cols-3 gap-3 text-xs font-bold text-slate-500 sm:flex sm:gap-7">
                    <span className="flex items-center gap-1.5">
                      <Hotel className="size-4 text-slate-400" /> Hotel
                    </span>
                    <span className="flex items-center gap-1.5">
                      <UserRound className="size-4 text-slate-400" /> Tour Guide
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Utensils className="size-4 text-slate-400" /> Meals
                    </span>
                  </div>
                  <p className="mt-5 min-h-[58px] text-base leading-7 text-slate-600">{item.text}</p>
                  <div className="mt-8 flex items-center justify-between gap-4">
                    <p className="font-heading text-2xl font-extrabold text-primary">{item.price}</p>
                    <a
                      href="#contact"
                      className="btn-ripple rounded-xl bg-gradient-to-r from-primary to-secondary px-7 py-4 text-sm font-extrabold text-white shadow-glow"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const visible = Array.from({ length: 3 }).map(
    (_, index) => testimonials[(active + index) % testimonials.length]
  );

  return (
    <section id="reviews" className="bg-gradient-to-b from-white to-light py-8">
      <div className="site-container">
        <Reveal className="text-center">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-primary">
            Testimonials
          </p>
          <h2 className="font-heading text-5xl font-extrabold text-dark lg:text-6xl">
            What Our Travelers Say
          </h2>
        </Reveal>

        <div className="relative mt-12 px-0 md:px-16">
          <button
            onClick={() => setActive((value) => (value - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-dark shadow-soft transition hover:bg-primary hover:text-white md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            onClick={() => setActive((value) => (value + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-dark shadow-soft transition hover:bg-primary hover:text-white md:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight className="size-6" />
          </button>

          <div className="grid gap-7 lg:grid-cols-3">
            {visible.map((item, index) => (
              <motion.article
                key={`${item.name}-${active}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[26px] border border-slate-100 bg-white p-8 shadow-soft"
              >
                <div className="flex items-center gap-5">
                  <Quote className="size-11 fill-primary/10 text-primary" />
                  <div className="flex text-accent">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="size-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="mt-7 min-h-[84px] text-lg leading-8 text-slate-700">{item.text}</p>
                <div className="mt-7 flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="size-14 rounded-full object-cover ring-4 ring-sky-50"
                  />
                  <div>
                    <p className="font-heading font-extrabold text-dark">{item.name}</p>
                    <p className="text-sm font-semibold text-slate-500">{item.city}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-9 flex justify-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition ${
                  index === active ? "w-8 bg-primary" : "w-2.5 bg-slate-300"
                }`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="contact" className="cta-beach mt-20 py-20 text-white">
      <Reveal className="site-container text-center">
        <h2 className="font-heading text-5xl font-extrabold leading-tight lg:text-6xl">
          Ready For Your Next Adventure?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold text-white/88">
          Start exploring amazing destinations and exclusive travel deals today.
        </p>
        <a
          href="#packages"
          className="btn-ripple mt-9 inline-flex h-16 items-center justify-center gap-3 rounded-2xl bg-accent px-10 font-extrabold text-white shadow-[0_18px_55px_rgba(245,158,11,0.42)] transition hover:-translate-y-1"
        >
          Book Your Trip Now
          <ArrowRight className="size-5" />
        </a>
      </Reveal>
    </section>
  );
}

function Footer() {
  const columns = [
    { title: "Company", links: ["About Us", "Careers", "Blog", "Press Kit"] },
    { title: "Explore", links: ["Destinations", "Packages", "Hotels", "Flights"] },
    { title: "Services", links: ["Travel Insurance", "Visa Service", "Airport Transfer", "Guide & Tours"] }
  ];

  return (
    <footer className="bg-dark text-white">
      <div className="site-container py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.3fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-[330px] leading-7 text-slate-300">
              WanderGo is your trusted travel companion. We help you explore the world with ease
              and comfort.
            </p>
            <div className="mt-6 flex gap-3">
              {["f", "ig", "x", "yt"].map((social) => (
                <a
                  key={social}
                  href="#home"
                  className="flex size-10 items-center justify-center rounded-full bg-white/10 text-xs font-extrabold uppercase text-white transition hover:bg-primary"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-heading text-lg font-extrabold">{column.title}</h3>
              <div className="mt-5 grid gap-3">
                {column.links.map((link) => (
                  <a key={link} href="#home" className="text-slate-300 transition hover:text-white">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h3 className="font-heading text-lg font-extrabold">Contact Us</h3>
            <div className="mt-5 grid gap-4 text-slate-300">
              <p className="flex items-start gap-3">
                <Phone className="mt-1 size-5 text-primary" />
                +62 812 3456 7890
              </p>
              <p className="flex items-start gap-3">
                <Mail className="mt-1 size-5 text-primary" />
                hello@wandergo.com
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="mt-1 size-5 text-primary" />
                Jl. Sudirman No. 123
                <br />
                Jakarta, Indonesia
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 text-sm text-slate-400 md:flex-row">
          <p>© 2026 WanderGo. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#home" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#home" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <DestinationsSection />
        <ServicesSection />
        <PackagesSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
