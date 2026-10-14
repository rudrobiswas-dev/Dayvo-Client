import Link from "next/link";
import {
  ArrowRight, CheckCircle2, Flame, Footprints, Droplets,
  BookOpen, Moon, Sun, Target, TrendingUp
} from "lucide-react";

const habits = [
  { label: "Drink 2L water", detail: "Stay hydrated throughout the day", icon: Droplets, color: "text-sky-400", done: true },
  { label: "Morning walk", detail: "Get outside and move your body", icon: Footprints, color: "text-emerald-400", done: true },
  { label: "Read for 20 minutes", detail: "Make a little progress every day", icon: BookOpen, color: "text-violet-400", done: false },
  { label: "Get morning sunlight", detail: "Take 10–15 minutes outdoors", icon: Sun, color: "text-amber-400", done: false },
];

const stats = [
  { label: "Daily completion", value: "67%", note: "+12% this week", icon: Target },
  { label: "Current streak", value: "7 days", note: "Keep it going", icon: Flame },
  { label: "Habits completed", value: "12/18", note: "This week", icon: CheckCircle2 },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-base-200 text-base-content">
      <header className="sticky top-0 z-20 border-b border-base-content/10 bg-base-100/80 backdrop-blur-xl">
        <div className="navbar mx-auto max-w-7xl px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 text-xl font-black tracking-tight">
            <span className="grid size-10 place-items-center rounded-2xl bg-primary text-primary-content"><TrendingUp size={22} /></span>
            DAYVO<span className="text-primary">.</span>
          </Link>
          <div className="ml-auto flex items-center gap-3">
            <span className="hidden text-sm text-base-content/60 sm:inline">Your daily growth space</span>
            <Link href="#dashboard" className="btn btn-primary btn-sm rounded-full">Explore dashboard <ArrowRight size={15} /></Link>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm text-primary">
            <span className="size-2 rounded-full bg-primary" /> Small steps. Real progress.
          </div>
          <h1 className="max-w-2xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Make every day <span className="text-primary">count.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-base-content/65">
            Build better routines, take care of your body, and turn your goals into habits you can actually keep.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#dashboard" className="btn btn-primary rounded-full px-6">Start your day <ArrowRight size={17} /></Link>
            <a href="#habits" className="btn btn-outline rounded-full px-6">See today’s habits</a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-base-content/60">
            <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-primary" /> Simple daily check-ins</span>
            <span className="flex items-center gap-2"><TrendingUp size={17} className="text-primary" /> Progress at a glance</span>
          </div>
        </div>

        <div id="dashboard" className="rounded-[2rem] border border-base-content/10 bg-base-100 p-5 shadow-2xl shadow-primary/5 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-base-content/55">WEDNESDAY, OCTOBER 14</p>
              <h2 className="mt-1 text-2xl font-bold">Today’s overview</h2>
              <p className="mt-1 text-sm text-base-content/55">You’re building momentum. Keep going.</p>
            </div>
            <div className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary"><Flame size={24} /></div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {stats.map(({ label, value, note, icon: Icon }) => (
              <div key={label} className="rounded-2xl bg-base-200 p-3 sm:p-4">
                <Icon size={18} className="mb-3 text-primary" />
                <p className="text-xl font-black sm:text-2xl">{value}</p>
                <p className="mt-1 text-xs font-semibold">{label}</p>
                <p className="mt-2 hidden text-[11px] text-base-content/50 sm:block">{note}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-base-200 p-4">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="font-semibold">Daily goal progress</span><span className="text-primary">4 of 6</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-base-300"><div className="h-full w-2/3 rounded-full bg-primary" /></div>
          </div>
          <div id="habits" className="mt-6 space-y-3">
            {habits.map(({ label, detail, icon: Icon, color, done }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl border border-base-content/5 p-3 transition hover:border-primary/30 hover:bg-base-200/70">
                <div className={`grid size-11 shrink-0 place-items-center rounded-xl bg-base-200 ${color}`}><Icon size={21} /></div>
                <div className="min-w-0 flex-1"><p className="font-semibold">{label}</p><p className="truncate text-xs text-base-content/55">{detail}</p></div>
                <span className={`badge ${done ? "badge-success" : "badge-ghost"} badge-sm`}>{done ? "Done" : "To do"}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 flex items-center gap-2 text-xs text-base-content/45"><Moon size={14} /> Demo preview — connect your account to save real progress.</p>
        </div>
      </section>

      <section className="border-t border-base-content/10 bg-base-100">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:px-6 md:grid-cols-3">
          {[
            ["Build consistency", "Turn the routines you care about into a repeatable daily plan.", CheckCircle2],
            ["Track your wellbeing", "Keep hydration, movement, sleep, and learning in one place.", Droplets],
            ["See your progress", "Use streaks and simple reports to understand your momentum.", TrendingUp],
          ].map(([title, description, Icon]) => (
            <article key={title} className="rounded-3xl border border-base-content/10 p-6 transition hover:-translate-y-1 hover:border-primary/30">
              <div className="mb-4 grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon size={23} /></div>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 leading-7 text-base-content/60">{description}</p>
            </article>
          ))}
        </div>
      </section>
      <footer className="border-t border-base-content/10 px-4 py-7 text-center text-sm text-base-content/50">© 2026 Dayvo · Make Every Day Count</footer>
    </main>
  );
}
