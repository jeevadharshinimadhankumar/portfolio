"use client"; import { motion } from "framer-motion";
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

  const [expandedSkills, setExpandedSkills] = useState(new Set());

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

  return ( <main className="min-h-screen bg-gray-950 text-white p-6"> <section className="max-w-6xl mx-auto"> {/* Hero Section */} <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10" > <h1 className="text-5xl font-bold">Jeevadharshini</h1> <p className="text-gray-400 mt-2 text-lg"> Data Engineer | Cloud Developer | AWS | Python | SQL | Big Data </p>

<div className="mt-4 flex gap-4">
        <a
          href="/resume.pdf"
          className="bg-white text-black px-4 py-2 rounded-xl"
          download
        >
          Download Resume
        </a>
        <a
          href="https://github.com/jeevadharshinimadhan"
          target="_blank"
          className="border border-gray-600 px-4 py-2 rounded-xl"
        >
          GitHub
        </a>
      </div>
    </motion.div>

    {/* About + Skills */}
    <div className="grid md:grid-cols-2 gap-6">
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-gray-900 p-6 rounded-2xl shadow"
      >
        <h2 className="text-xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-400">
          Passionate data engineer specializing in building scalable data pipelines, real-time processing, and cloud data solutions. Experienced in AWS, Python, SQL, and big data technologies like Spark and Kafka.
        </p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-gray-900 p-6 rounded-2xl shadow"
      >
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="cursor-pointer transition-colors hover:bg-gray-800 p-2 rounded"
              onClick={() => {
                const newSet = new Set(expandedSkills);
                if (newSet.has(index)) {
                  newSet.delete(index);
                } else {
                  newSet.add(index);
                }
                setExpandedSkills(newSet);
              }}
            >
              <div className="flex justify-between">
                <span className="text-gray-300">{skill.name}</span>
                {expandedSkills.has(index) && (
                  <span className="text-gray-300">{skill.percentage}%</span>
                )}
              </div>
              {expandedSkills.has(index) && (
                <div className="bg-gray-700 h-2 rounded mt-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1 }}
                    className="bg-blue-500 h-2 rounded"
                  ></motion.div>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Projects Section */}
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-900 p-6 rounded-2xl"
        >
          <h3 className="font-semibold text-lg">
            Real-time Data Pipeline with Kafka & Spark
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Built a real-time data ingestion pipeline processing millions of events daily using Apache Kafka and Spark Streaming, reducing latency by 60%.
          </p>
          <a
            href="https://github.com/jeevadharshinimadhan"
            className="text-blue-400 text-sm mt-2 inline-block"
          >
            View Code →
          </a>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-900 p-6 rounded-2xl"
        >
          <h3 className="font-semibold text-lg">ETL Pipeline with Airflow & AWS</h3>
          <p className="text-gray-400 text-sm mt-2">
            Developed automated ETL workflows using Apache Airflow on AWS, handling data from multiple sources with 99.9% reliability.
          </p>
          <a
            href="https://github.com/jeevadharshinimadhan"
            className="text-blue-400 text-sm mt-2 inline-block"
          >
            View Code →
          </a>
        </motion.div>
      </div>
    </div>

    {/* Git Activity Section */}
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Recent Git Activity</h2>
      <div className="space-y-4">
        {gitPushes.map((push, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900 p-4 rounded-2xl"
          >
            <p className="text-sm text-gray-400">{push.action}</p>
            <p className="text-white">{push.message}</p>
            <p className="text-xs text-gray-500">{push.time}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Contact Section */}
    <div className="mt-10 bg-gray-900 p-6 rounded-2xl">
      <h2 className="text-xl font-semibold mb-2">Contact</h2>
      <p className="text-gray-400">Email: jeevadharshinimadhankumar6777@gmail.com</p>
      <p className="text-gray-400">LinkedIn: https://www.linkedin.com/in/jeevadharshini-madhankumar-8152953b8</p>
    </div>
  </section>
</main>

); }
