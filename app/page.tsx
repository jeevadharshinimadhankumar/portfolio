"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const skills = [
    { name: "Python", percentage: 90 },
    { name: "SQL", percentage: 85 },
    { name: "Apache Spark", percentage: 80 },
    { name: "Apache Kafka", percentage: 75 },
    { name: "Apache Airflow", percentage: 80 },
    { name: "AWS (Data Services)", percentage: 85 },
    { name: "Git", percentage: 90 },
    { name: "GitHub", percentage: 85 },
    { name: "Linux", percentage: 75 },
    { name: "Docker & CI/CD", percentage: 75 },
  ];

  const [expandedSkills, setExpandedSkills] = useState(new Set<number>());

  const gitPushes = [
    {
      action: "Pushed to main branch",
      message: "Optimized Spark job performance by 40% with data partitioning",
      time: "2 hours ago",
    },
    {
      action: "Created new feature branch",
      message: "Implemented real-time Kafka consumer with error handling",
      time: "1 day ago",
    },
    {
      action: "Merged pull request",
      message: "Added data quality checks to ETL pipeline",
      time: "3 days ago",
    },
    {
      action: "Committed changes",
      message: "Migrated data warehouse to AWS Redshift for better analytics",
      time: "1 week ago",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_20%),radial-gradient(circle_at_bottom_left,_rgba(34,197,94,0.16),_transparent_20%)]"></div>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-72 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <nav className="sticky top-0 z-30 mx-auto flex w-full max-w-7xl justify-between border-b border-white/10 bg-slate-950/90 px-6 py-4 backdrop-blur-xl">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200">Jeevadharshini</span>
        <div className="flex items-center gap-6 text-sm text-slate-300">
          <a href="#home" className="transition hover:text-sky-300">Home</a>
          <a href="#featured" className="transition hover:text-sky-300">Projects</a>
          <a href="#skills" className="transition hover:text-sky-300">Skills</a>
          <a href="#contact" className="transition hover:text-sky-300">Contact</a>
        </div>
      </nav>

      <section id="home" className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-10"
          >
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-10 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
              <span className="inline-flex rounded-full bg-sky-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">
                Data Engineering</span>
              <div className="mt-8 max-w-2xl space-y-6">
                <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                  Jeevadharshini
                </h1>
                <p className="text-lg leading-8 text-slate-300">
                  Building modern data platforms with AWS, Python, SQL, Spark and real-time processing. I design scalable pipelines, clean data orchestration and production-grade analytics solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/resume.pdf" download className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
                    Download Resume
                  </a>
                  <a href="https://github.com/jeevadharshinimadhan" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-400 hover:text-sky-300">
                    GitHub Profile
                  </a>
                </div>
                <a href="#featured" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-sky-300">
                  <span>Scroll to projects</span>
                  <span className="animate-bounce text-sky-300">↓</span>
                </a>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <motion.div whileHover={{ y: -6 }} className="rounded-[1.75rem] border border-white/10 bg-slate-900/75 p-6 shadow-xl shadow-slate-950/30 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Focus</p>
                <h2 className="mt-4 text-2xl font-semibold text-white">Real-time analytics</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">Designing event-driven ingestion and transformation for fast-moving data.</p>
              </motion.div>
              <motion.div whileHover={{ y: -6 }} className="rounded-[1.75rem] border border-white/10 bg-slate-900/75 p-6 shadow-xl shadow-slate-950/30 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Impact</p>
                <h2 className="mt-4 text-2xl font-semibold text-white">Data-first cloud systems</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">Building pipelines that keep data accurate, available, and ready for analytics.</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Interactive Skills</p>
                <h3 className="mt-3 text-3xl font-semibold text-white">Click a skill to reveal mastery</h3>
              </div>
              <div className="rounded-3xl border border-sky-400/20 bg-slate-950/60 px-4 py-2 text-sm text-sky-200">
                Click to explore
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="rounded-3xl border border-white/10 bg-slate-900/60 p-4 transition hover:border-sky-500/50 hover:bg-slate-900/80"
                >
                  <button
                    type="button"
                    onClick={() => {
                      const newSet = new Set(expandedSkills);
                      if (newSet.has(index)) {
                        newSet.delete(index);
                      } else {
                        newSet.add(index);
                      }
                      setExpandedSkills(newSet);
                    }}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="text-base font-medium text-white">{skill.name}</span>
                    <span className="text-sm text-slate-400">{expandedSkills.has(index) ? `${skill.percentage}%` : "Show"}</span>
                  </button>

                  {expandedSkills.has(index) && (
                    <div className="mt-4 rounded-3xl bg-slate-950/80 px-4 py-3">
                      <div className="flex justify-between text-sm text-slate-300">
                        <span>{skill.name}</span>
                        <span>{skill.percentage}%</span>
                      </div>
                      <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 0.9 }}
                          className="h-full rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[2rem] border border-white/10 bg-slate-950/80 p-6">
              <h3 className="text-xl font-semibold text-white">Recent Git Activity</h3>
              <div className="mt-5 space-y-4">
                {gitPushes.map((push, index) => (
                  <motion.div
                    key={push.action}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-3xl border border-white/5 bg-slate-900/70 p-4"
                  >
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{push.action}</p>
                    <p className="mt-2 text-sm text-slate-200">{push.message}</p>
                    <p className="mt-2 text-xs text-slate-500">{push.time}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="featured" className="relative z-10 mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Featured Projects</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Data platforms I’ve delivered</h2>
            </div>
            <div className="rounded-full border border-sky-500/20 bg-slate-950/60 px-4 py-2 text-sm text-sky-200">
              AWS · Kafka · Spark · Airflow
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <motion.div whileHover={{ y: -6 }} className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
              <h3 className="text-xl font-semibold text-white">Real-time Data Pipeline</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">Built a scalable pipeline with Apache Kafka and Spark Streaming to process millions of events daily with sub-minute latency.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li>● Event ingestion and streaming analytics</li>
                <li>● Automated schema checks and error handling</li>
                <li>● Delivered reliable reporting for real-time dashboards</li>
              </ul>
            </motion.div>

            <motion.div whileHover={{ y: -6 }} className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
              <h3 className="text-xl font-semibold text-white">ETL Orchestration on AWS</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">Designed a fault-tolerant Airflow ETL workflow to move, transform, and load data into Redshift with consistent performance.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li>● Multi-source extraction and data validation</li>
                <li>● Redshift data warehousing for analytics</li>
                <li>● SLA-driven monitoring and alerts</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <footer id="contact" className="relative z-10 mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Get in touch</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Work with me</h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">I’m open to data engineering and cloud roles. Let’s build scalable systems, modern pipelines, and production-ready analytics together.</p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Email</p>
              <p className="mt-3 text-base text-white">jeevadharshinimadhankumar6777@gmail.com</p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">LinkedIn</p>
              <a href="https://www.linkedin.com/in/jeevadharshini-madhankumar-8152953b8" className="mt-3 block text-base text-sky-300 hover:text-sky-200">linkedin.com/in/jeevadharshini-madhankumar-8152953b8</a>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Jeevadharshini — Data Engineer Portfolio
          </div>
        </div>
      </footer>
    </main>
  );
}

