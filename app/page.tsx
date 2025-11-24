// app/pulseboard/page.tsx
"use client";

import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function PulseboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto flex max-w-5xl flex-col gap-20 px-6 pb-24 pt-16 sm:px-8 sm:pt-24 lg:px-0">
        {/* HERO */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Pulseboard
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Keep a live pulse on your product, revenue, and team.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-200/80 sm:text-base">
              Pulseboard brings your metrics, dashboards, and alerts into one
              shared, readable view—so your team always knows what matters now.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400">
                Book a demo
              </button>
              <button className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-medium text-slate-50/90 hover:bg-slate-900">
                View dashboard preview
              </button>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              No setup fees. No contracts. Just clarity.
            </p>
          </div>

          {/* Dashboard preview card */}
          <motion.div
            className="relative hidden min-h-[260px] md:block"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
          >
            <div className="absolute inset-0 rounded-3xl bg-sky-500/10 blur-3xl" />
            <div className="relative h-64 w-full max-w-sm rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-[0_22px_60px_rgba(15,23,42,0.8)] backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="h-2 w-20 rounded-full bg-slate-700" />
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-slate-700" />
                  <span className="h-2 w-2 rounded-full bg-slate-700" />
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-[2fr,1fr] gap-4">
                <div className="space-y-3">
                  <div className="h-28 rounded-2xl bg-gradient-to-br from-sky-500/15 via-sky-400/5 to-emerald-400/10" />
                  <div className="flex gap-2">
                    <div className="h-4 flex-1 rounded-full bg-slate-800" />
                    <div className="h-4 w-16 rounded-full bg-sky-500/70" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-3 w-24 rounded-full bg-slate-800" />
                    <div className="h-3 w-16 rounded-full bg-slate-800" />
                  </div>
                </div>
                {/* <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-xl bg-slate-900/80 px-3 py-2"
                    >
                      <span className="h-3 w-16 rounded-full bg-slate-700" />
                      <span className="h-3 w-10 rounded-full bg-sky-500/70" />
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
            <p className="mt-4 text-[11px] text-slate-400">
                Designed for clarity, not clutter. Everyone sees the same truth.
              </p>
          </motion.div>
        </motion.section>

        {/* PROBLEM */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold sm:text-3xl">
            When your metrics live everywhere, nobody trusts anything.
          </h2>
          <p className="max-w-2xl text-sm text-slate-200/80 sm:text-base">
            Pulseboard is for teams tired of stale reports, unread dashboards,
            and “what are we even tracking?” meetings.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <ProblemBullet text="Metrics split across spreadsheets, BI tools, and one-off exports." />
            <ProblemBullet text="Dashboards nobody actually opens or understands." />
            <ProblemBullet text="Weekly reporting that’s always a step behind reality." />
            <ProblemBullet text="No single place to point to when decisions need to be made." />
          </div>
        </motion.section>

        {/* FEATURES */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold sm:text-3xl">
            One place for the numbers that matter.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Unified dashboards"
              body="Bring product, revenue, marketing, and ops into a single, shared view."
            />
            <FeatureCard
              title="Live health indicators"
              body="Simple red / amber / green signals so anyone can spot issues at a glance."
            />
            <FeatureCard
              title="Respectful alerts"
              body="Trigger-based notifications instead of noisy hourly spam in every channel."
            />
          </div>
        </motion.section>

        {/* USE CASES */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Built for product, ops, and revenue leaders.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <UseCaseCard
              title="Product teams"
              body="Track adoption, retention, and feature usage without building custom reports each week."
            />
            <UseCaseCard
              title="Ops leaders"
              body="Monitor SLAs, tickets, and workflow throughput from a single operational cockpit."
            />
            <UseCaseCard
              title="Rev & GTM teams"
              body="Keep an eye on pipeline, MRR, and campaign performance in one place."
            />
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center shadow-[0_18px_50px_rgba(15,23,42,0.9)]"
        >
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Ready to give your team a clearer pulse?
          </h2>
          <p className="mt-3 text-sm text-slate-200/80 sm:text-base">
            Turn scattered metrics into a single place to look before making
            important decisions.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-medium text-slate-950 shadow-md shadow-sky-500/30 transition hover:bg-sky-400">
              Book a demo
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-medium text-slate-50/90 hover:bg-slate-900">
              Explore a sample dashboard
            </button>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

function ProblemBullet({ text }: { text: string }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sky-400" />
      <p className="text-sm text-slate-200/80">{text}</p>
    </div>
  );
}

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
      <h3 className="text-sm font-semibold sm:text-base">{title}</h3>
      <p className="mt-2 text-xs text-slate-200/80 sm:text-sm">{body}</p>
    </div>
  );
}

function UseCaseCard({ title, body }: { title: string; body: string }) {
  return (
      <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
        <h3 className="text-sm font-semibold sm:text-base">{title}</h3>
        <p className="mt-2 text-xs text-slate-200/80 sm:text-sm">{body}</p>
      </div>
  );
}