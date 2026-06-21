// About.jsx — QuickStay "About" page (React + Tailwind CSS)
// Drop this into your QuickStay project (e.g. src/pages/About.jsx) and add a route:
//   <Route path="/about" element={<About />} />
//
// It is fully self-contained: it ships its own Navbar + Footer that match the
// site design shown in the reference video. If you already have shared
// <Navbar /> and <Footer /> components, delete them from this file and use yours.

import { useState } from "react";

/* ---------------- Small inline SVG icons (no extra deps) ---------------- */
const HomeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 3 4 9.5V20a1 1 0 0 0 1 1h4v-6h6v6h4a1 1 0 0 0 1-1V9.5L12 3Z" />
  </svg>
);
const SearchIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);
const Arrow = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* ---------------------------------- Navbar -------------------------------- */
// function Navbar() {
//   const [open, setOpen] = useState(false);
//   const links = ["Home", "Hotels", "About"];
//   return (
//     <header className="sticky top-0 z-30 w-full border-b border-gray-100 bg-white/90 backdrop-blur">
//       <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
//         {/* Logo */}
//         <a href="/" className="flex items-center gap-2">
//           <span className="grid h-8 w-8 place-items-center rounded-lg bg-gray-900 text-white">
//             <HomeIcon className="h-4 w-4" />
//           </span>
//           <span className="text-xl font-bold tracking-tight text-gray-900">
//             QuickStay
//           </span>
//         </a>

//         {/* Desktop links */}
//         <ul className="hidden items-center gap-8 md:flex">
//           {links.map((l) => (
//             <li key={l}>
//               <a
//                 href={l === "Home" ? "/" : `/${l.toLowerCase()}`}
//                 className={`text-sm transition-colors hover:text-gray-900 ${
//                   l === "About" ? "font-semibold text-gray-900" : "text-gray-600"
//                 }`}
//               >
//                 {l}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Right side */}
//         <div className="flex items-center gap-4">
//           <button aria-label="Search" className="text-gray-700 hover:text-gray-900">
//             <SearchIcon className="h-5 w-5" />
//           </button>
//           <div className="grid h-8 w-8 place-items-center rounded-full bg-violet-600 text-sm font-semibold text-white">
//             T
//           </div>
//           <button
//             aria-label="Menu"
//             onClick={() => setOpen((o) => !o)}
//             className="md:hidden text-gray-700"
//           >
//             <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none"
//                  stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//               <path d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </nav>

//       {/* Mobile menu */}
//       {open && (
//         <ul className="space-y-1 border-t border-gray-100 px-6 py-3 md:hidden">
//           {links.map((l) => (
//             <li key={l}>
//               <a
//                 href={l === "Home" ? "/" : `/${l.toLowerCase()}`}
//                 className="block rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-gray-50"
//               >
//                 {l}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </header>
//   );
// }

/* ---------------------------------- Footer -------------------------------- */
// function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-300">
//       <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
//         <div className="md:col-span-2">
//           <a href="/" className="flex items-center gap-2">
//             <span className="grid h-8 w-8 place-items-center rounded-lg bg-white text-gray-900">
//               <HomeIcon className="h-4 w-4" />
//             </span>
//             <span className="text-xl font-bold text-white">QuickStay</span>
//           </a>
//           <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
//             QuickStay helps travelers discover and book exceptional hotels,
//             resorts, and unique stays worldwide. Enjoy seamless booking, trusted
//             accommodations, and unforgettable travel experiences.
//           </p>
//         </div>

//         <div>
//           <h4 className="mb-4 text-sm font-semibold text-white">Company</h4>
//           <ul className="space-y-2 text-sm">
//             {["Home", "About us", "Contact us", "Experience"].map((l) => (
//               <li key={l}>
//                 <a href="#" className="text-gray-400 transition-colors hover:text-white">
//                   {l}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h4 className="mb-4 text-sm font-semibold text-white">Get in touch</h4>
//           <ul className="space-y-2 text-sm text-gray-400">
//             <li>+994 (50) 595-54-23</li>
//             <li>quickstay@gmail.com</li>
//           </ul>
//         </div>
//       </div>
//       <div className="border-t border-white/10 py-5 text-center text-xs text-gray-500">
//         QuickStay 2026 © All Rights Reserved.
//       </div>
//     </footer>
//   );
// }

/* ------------------------------- Page data -------------------------------- */
const stats = [
  { value: "500+", label: "Hotels & Resorts" },
  { value: "50+", label: "Countries" },
  { value: "1M+", label: "Happy Guests" },
  { value: "4.9", label: "Average Rating" },
];

const values = [
  {
    title: "Curated Quality",
    desc: "Every property is hand-picked and verified so you only ever book stays that meet our standards.",
    icon: (
      <path d="M12 2 3 7v6c0 5 3.8 8.5 9 9 5.2-.5 9-4 9-9V7l-9-5Zm-1 13-3-3 1.4-1.4L11 12.2l4.6-4.6L17 9l-6 6Z" />
    ),
  },
  {
    title: "Seamless Booking",
    desc: "Search, compare and reserve in a few taps. Instant confirmation, no hidden fees, ever.",
    icon: <path d="M4 4h16v4H4V4Zm0 6h16v10H4V10Zm3 3v4h4v-4H7Z" />,
  },
  {
    title: "24/7 Support",
    desc: "Our travel specialists are available around the clock to help before, during and after your stay.",
    icon: (
      <path d="M12 2a9 9 0 0 0-9 9v5a3 3 0 0 0 3 3h2v-7H6a7 7 0 0 1 12 0h-2v7h2a3 3 0 0 0 3-3v-5a9 9 0 0 0-9-9Z" />
    ),
  },
];

const team = [
  { name: "Togrul Hasanov", role: "Founder & CEO", img: "https://i.pravatar.cc/160?img=12" },
  { name: "Leman Rzali", role: "Head of Product", img: "https://i.pravatar.cc/160?img=45" },
  { name: "Avery Johnson", role: "Operations Lead", img: "https://i.pravatar.cc/160?img=33" },
  { name: "Jordan Lee", role: "Guest Experience", img: "https://i.pravatar.cc/160?img=15" },
];

/* ---------------------------------- Page ---------------------------------- */
export default function About() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* <Navbar /> */}

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury hotel"
          className="h-[420px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-center px-6">
          <span className="mb-3 inline-block w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white backdrop-blur">
            About QuickStay
          </span>
          <h1 className="max-w-2xl font-serif text-4xl leading-tight text-white md:text-5xl">
            Stays you'll love, booked the easy way
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-200">
            We connect discerning travelers with exceptional hotels, resorts and
            unique stays around the world — backed by trusted reviews and
            effortless booking.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-100">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-4xl text-gray-900">{s.value}</div>
              <div className="mt-1 text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our story */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
              alt="Resort"
              className="h-[380px] w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-violet-600">
              Our Story
            </p>
            <h2 className="font-serif text-3xl leading-snug text-gray-900 md:text-4xl">
              Built for travelers who expect more
            </h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              QuickStay started with a simple idea: booking a great place to stay
              shouldn't be complicated. We bring together luxury resorts, boutique
              hotels and hidden gems into one beautifully simple platform.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Today, thousands of travelers trust QuickStay to find stays that feel
              personal, transparent and unforgettable — wherever the journey takes
              them.
            </p>
            <a
              href="/rooms"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700"
            >
              Explore hotels <Arrow className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl text-gray-900 md:text-4xl">
              Why travelers choose us
            </h2>
            <p className="mt-3 text-gray-500">
              Everything we do is designed around making your stay effortless and
              memorable.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-violet-100 text-violet-700">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    {v.icon}
                  </svg>
                </span>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-gray-900 md:text-4xl">
            Meet the team
          </h2>
          <p className="mt-3 text-gray-500">
            The people working hard behind the scenes to make every stay perfect.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="text-center">
              <img
                src={m.img}
                alt={m.name}
                className="mx-auto h-28 w-28 rounded-full object-cover ring-4 ring-gray-100"
              />
              <h3 className="mt-4 font-semibold text-gray-900">{m.name}</h3>
              <p className="text-sm text-gray-500">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-8 py-16 text-center">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violet-600/30 blur-3xl" />
          <h2 className="relative font-serif text-3xl text-white md:text-4xl">
            Ready to find your next stay?
          </h2>
          <p className="relative mx-auto mt-3 max-w-md text-gray-300">
            Browse hand-picked hotels and resorts and book in minutes.
          </p>
          <a
            href="/rooms"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-gray-900 transition-transform hover:scale-105"
          >
            Browse hotels <Arrow className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}