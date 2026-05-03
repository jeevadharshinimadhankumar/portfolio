"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  "Python",
  "SQL",
  "Apache Spark",
  "Apache Kafka",
  "Apache Airflow",
  "AWS",
  "GitHub",
  "Docker",
];

const projects = [
  {
    title: "Real-time ingestion pipeline",
    summary: "Built an end-to-end Kafka and Spark Streaming pipeline to process event data with sub-minute delivery and built-in failure recovery.",
    tags: ["Kafka", "Spark", "AWS"],
  },
  {
    title: "Data lake modernization",
    summary: "Migrated raw and refined data into an AWS lakehouse, improving query speed and enabling self-service analytics.",
    tags: ["S3", "Glue", "Lake Formation"],
  },
  {
    title: "Airflow orchestration platform",
    summary: "Designed fault-tolerant workflows with Airflow and monitoring dashboards for production ETL jobs.",
    tags: ["Airflow", "ETL", "Redshift"],
  },
  {
    title: "Data quality automation",
    summary: "Implemented automated checks and alerts to reduce pipeline failures and improve dataset accuracy.",
    tags: ["Great Expectations", "CI/CD", "Monitoring"],
  },
];

const articles = [
  {
    title: "Scaling Spark workloads for peak performance",
    description: "Practical guidance on avoiding data skew, tuning partitioning, and making Spark jobs production-ready.",
    link: "https://medium.com/@jeevadharshini",
  },
  {
    title: "Designing resilient ETL pipelines with Airflow",
    description: "Best practices for scheduling, retries, monitoring, and observability in data workflows.",
    link: "https://medium.com/@jeevadharshini",
  },
];

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState<string>(skills[0]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.22),_transparent_22%),radial-gradient(circle_at_bottom_left,_rgba(52,211,153,0.18),_transparent_22%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-slate-900/70 to-transparent" />

      <nav className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 text-sm font-medium text-slate-300 sm:px-8">
        <span className="font-semibold uppercase tracking-[0.35em] text-sky-300">Jeevadharshini</span>
        <div className="flex items-center gap-6">
          <a href="#home" className="transition hover:text-sky-300">Home</a>
          <a href="#projects" className="transition hover:text-sky-300">Projects</a>
          <a href="#blogs" className="transition hover:text-sky-300">Blog</a>
          <a href="#contact" className="transition hover:text-sky-300">Contact</a>
        </div>
      </nav>

      <section id="home" className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-8 sm:px-8 lg:pt-14">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-8">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-10 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
              <span className="inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-sky-300">Data Engineer</span>
              <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Building scalable cloud data platforms for analytics and automation.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                I design reliable ETL orchestration, streaming data pipelines, and analytics-ready data lakes using AWS, Spark, Kafka, and Airflow.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/resume.pdf" download className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
                  Download Resume
                </a>
                <a href="https://github.com/jeevadharshinimadhan" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-400 hover:text-sky-300">
                  View GitHub
                </a>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { label: "Experience", value: "4+ years" },
                { label: "Projects", value: "8+ delivered" },
                { label: "Cloud", value: "AWS Data" },
                { label: "Impact", value: "Reliable data" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-[1.75rem] border border-white/10 bg-slate-900/75 p-6 text-slate-300 shadow-xl shadow-slate-950/20">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{stat.label}</p>
                  <p className="mt-4 text-2xl font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="rounded-[2rem] border border-white/10 bg-slate-900/45 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Featured stack</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Core strengths</h2>
              </div>
              <span className="rounded-full bg-slate-950/80 px-4 py-2 text-xs uppercase tracking-[0.35em] text-sky-300">Modern</span>
            </div>

            <div className="mt-8 space-y-4">
              {skills.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => setSelectedSkill(skill)}
                  className={`w-full rounded-3xl border px-5 py-4 text-left transition ${selectedSkill === skill ? "border-sky-400 bg-slate-950/90 text-white" : "border-white/10 bg-slate-950/70 text-slate-300 hover:border-sky-400/60 hover:bg-slate-950/80"}`}
                >
                  <span className="text-base font-medium">{skill}</span>
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-slate-950/85 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Selected skill</p>
              <p className="mt-4 text-xl font-semibold text-white">{selectedSkill}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">Deep experience integrating {selectedSkill} into secure, high-throughput analytics pipelines and production data systems.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 pb-20 sm:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-10 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Featured work</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Projects that move data faster</h2>
            </div>
            <div className="rounded-full border border-sky-500/20 bg-slate-950/70 px-4 py-2 text-sm text-sky-300">Cloud · Streaming · ETL · Automation</div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <motion.div key={project.title} whileHover={{ y: -6 }} className="rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-8 transition-shadow duration-200 shadow-slate-950/10 hover:shadow-xl">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{project.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-900 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="blogs" className="relative z-10 mx-auto max-w-7xl px-6 pb-20 sm:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-10 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Medium articles</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Writing about data engineering</h2>
            </div>
            <a href="https://medium.com/@jeevadharshini" target="_blank" rel="noreferrer" className="rounded-full border border-sky-500/20 bg-sky-500/10 px-5 py-3 text-sm font-semibold text-sky-300 transition hover:bg-sky-500/20 hover:text-white">
              Read my Medium
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {articles.map((article) => (
              <motion.a
                key={article.title}
                href={article.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4 }}
                className="group rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-8 transition hover:border-sky-400/50"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Article</p>
                <h3 className="mt-4 text-2xl font-semibold text-white group-hover:text-sky-300">{article.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{article.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="relative z-10 mx-auto max-w-7xl px-6 pb-24 sm:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Contact</p>
              <h2 className="mt-3 text-4xl font-semibold text-white">Let’s build better data systems together.</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">I’m available for data engineering roles, consulting, and analytics pipeline projects. Reach out for collaboration on cloud data platforms and production-ready workflows.</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Email</p>
              <a href="mailto:jeevadharshinimadhankumar6777@gmail.com" className="mt-3 block text-lg font-semibold text-white hover:text-sky-300">jeevadharshinimadhankumar6777@gmail.com</a>
              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <div>
                  <p className="text-slate-400">GitHub</p>
                  <a href="https://github.com/jeevadharshinimadhan" target="_blank" rel="noreferrer" className="text-sky-300 hover:text-white">github.com/jeevadharshinimadhan</a>
                </div>
                <div>
                  <p className="text-slate-400">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/jeevadharshini-madhankumar-8152953b8" target="_blank" rel="noreferrer" className="text-sky-300 hover:text-white">linkedin.com/in/jeevadharshini-madhankumar-8152953b8</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Jeevadharshini — Data Engineering Portfolio
          </div>
        </div>
      </footer>
    </main>
  );
}
