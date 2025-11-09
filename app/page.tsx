"use client";

import Image from "next/image";

import { Typewriter } from "react-simple-typewriter";
import { LinkPreview } from "@/components/ui/link-preview";
import { ThemeToggle } from "@/components/theme-toggle";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { InlineWidget } from "react-calendly";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { Link as ScrollLink, Element } from "react-scroll";

const projects = [
  {
    title: "MaestroBot",
    description: "Specialized Music Theory Tutor (Node.js CLI) - Conversational tutoring system using Node.js and OpenAI API. Developed a conversational tutoring system using Node.js and the OpenAI API, utilizing a System Role to establish the consistent 'MaestroBot' persona and managing conversation state via full history arrays for contextual, long-running discussions.",
    date: "10/2025",
    image: "/images/Maestrobot Logo.png",
    github: "https://github.com/T4NG23/Maestro_Bot_NodeJS",
    skills: ["Node.js", "OpenAI API", "JavaScript"],
  },
  {
    title: "Memento",
    description: "AI-powered web application supporting dementia patients through personalized reminders, event scheduling, and task tracking. Built frontend with React + TypeScript + Vite and backend with FastAPI, integrating OpenAI Realtime API and WebRTC for a two-way voice assistant. Expanding project roadmap to include multilingual support, mobile deployment, and wearable integration.",
    date: "10/2025",
    image: "/images/MementoLogoPic.png",
    github: "https://github.com/T4NG23/AWS-Hackathon-App/tree/main",
    skills: ["React", "TypeScript", "Vite", "FastAPI", "OpenAI Realtime API", "WebRTC"],
  },
  {
    title: "LexiLens",
    description: "Google Hack for Justice Winner - Awarded 'Most Likely to Be Venture Capital Funded'. A web platform that helps immigrants navigate complex legal documents by providing simplified translations in their preferred language and an AI-powered chatbot for assistance. Users can upload legal documents, store them in a personal project list, and receive simplified translations to make legal forms more accessible for non-native English speakers. The AI does not just translate—it also guides users on how to fill out forms, what information to put into specific lines, and where they&apos;re likely to find that information. Developed backend with FastAPI + SQLAlchemy; deployed on Google Cloud Compute, Cloud SQL, and Cloud Storage. Integrated OpenAI GPT-01 for NLU-based bias detection and context analysis.",
    date: "03/2025",
    image: "/images/Lexilens.png",
    github: "https://github.com/T4NG23/Nautica-Hackathon25-Win-",
    skills: ["FastAPI", "SQLAlchemy", "Google Cloud Platform", "OpenAI GPT", "Python"],
  },
  {
    title: "AI Gift Recommendation Model",
    description: "Designed and implemented an AI-based gift recommendation system using LinkedIn profile data. Created a dynamic, branded UI with Revsend-themed backgrounds and engaging animations. Built feedback capture tools and AI-generated personalized notes, delivering a seamless end-to-end gifting experience. Improved recommendation accuracy and user retention through iterative testing and cross-functional collaboration.",
    date: "01/2025 - 05/2025",
    image: "/images/Revsend Logo.png",
    skills: ["React", "JavaScript", "LinkedIn API", "AI/ML", "Node.js"],
  },
];

const experience = [
  {
    title: "Accounting and Database Intern",
    description: "City of Norwalk Comptroller's Office",
    date: "06/2025 - 08/2025",
    image: "/images/Norwalk Logo.jpg",
    details: [
      "Automated IRS Form 941 Schedule B with T-SQL, joining and validating ERP data to reduce reconciliation time by 90%",
      "Validated FY26 Budget Book and FY25 Fixed Assets datasets under GASB compliance, increasing data reliability",
      "Processed payroll for 200+ employees through UKG/NovaTime; built Excel macros for automated discrepancy detection"
    ]
  },
  {
    title: "Full Stack UI/UX Developer Intern",
    description: "RevSend (El Segundo, California - Remote)",
    date: "01/2025 - 05/2025",
    image: "/images/Revsend Logo.png",
    details: [
      "Built and deployed an AI-driven gifting recommendation engine using LinkedIn data; improved feature adoption by 75%",
      "Created internal automation tools for feedback integration and content delivery, reducing manual QA cycles",
      "Partnered with ML and design teams to optimize application performance and front-end usability"
    ]
  },
  {
    title: "Technology Intern",
    description: "CaiXiaoMi",
    date: "08/2023",
    image: "/images/CaiXiaoMi.png",
    details: [
      "Contributed to the development of a web-based reporting platform using Python",
      "Collaborated with the Production team to enhance software capabilities for local farmer-consumer connections",
      "Supported efforts to minimize food waste and carbon footprint by optimizing logistics"
    ]
  },
];

const researchExperience = [
  {
    title: "Computer Vision Research Lead",
    description: "Lehigh University Bina Lab",
    date: "11/2024 - Present",
    image: "/images/Bina Labs Logo.jpg",
    details: [
      "Co-authored an IEEE paper accepted for IGARSS 2025 on UAV-based hurricane damage detection using deep learning",
      "Designed ML pipelines processing 40,000+ UAV frames using Detectron2, DVIS++, and TMaNNet, improving segmentation accuracy over baseline CNNs",
      "Implemented large-scale data augmentation and hyperparameter tuning to enhance model precision and runtime efficiency",
      "Leading development of a next-generation multimodal AI system for ARCH Insurance, scaling cross-disaster building assessment models to achieve 30% faster claim damage classification and higher granularity in severity detection"
    ]
  },
];

const leadership = [
  {
    title: "Eagle Scout",
    description: "Boy Scouts of America, Troop 70",
    image: "/images/Eagle Scout Logo.jpg",
    details: []
  },
];

const navbar = [
  {
    title: "About",
    link: "about",
  },
  {
    title: "Projects",
    link: "projects",
  },
  {
    title: "Research",
    link: "research",
  },
  {
    title: "Work Experience",
    link: "work",
  },
  {
    title: "Leadership",
    link: "leadership",
  },
];




export default function Home() {

  const [isHidden, setIsHidden] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  })



  return (
    <div>
      <motion.div
      initial={{ y:0, opacity:0 }}
      animate={{ y:0, opacity:10 }}
      transition={{ duration: 2 }}
        className="min-h-screen w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)]
     [background-size:16px_16px] 
     [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_70%,transparent_100%)] bg-background"
      >

        <motion.div
        animate={isHidden ? 'hidden' : 'visible'} 
        whileHover='visible'
        onFocusCapture={() => setIsHidden(false)}
        variants={{
          hidden : {
            y: '-90%'
          },
          visible : {
            y: '0%'
          }
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 z-10 md:flex w-full justify-center pt-3 hidden"
        >
          <div className="flex bg-white dark:bg-card gap-x-4 p-4 items-center rounded-xl border border-border">
            {navbar.map((item) => (
              <ScrollLink
              key={item.title}
              to={item.link}
              smooth={true}
              duration={500}
              className='border px-4 py-3 rounded-xl text-center flex
               items-center justify-center
                cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800'>
                {item.title}
                </ScrollLink>
            ))}

            <Dialog>
              <DialogTrigger className="border px-4 py-3 rounded-xl 
              text-center flex items-center justify-center
               cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                Contact
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <div className="mb-4 space-y-2">
                  <p className="text-muted-foreground">
                    <strong>Phone:</strong> 203-820-0983
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Email:</strong>{" "}
                    <a href="mailto:williamhudsontang@gmail.com" className="font-bold text-rose-500 underline">
                      williamhudsontang@gmail.com
                    </a>
                  </p>
                </div>
                <InlineWidget url="https://calendly.com/williamhudsontang/30min" />
              </DialogContent>
            </Dialog>

            <ThemeToggle />   

          </div>

        </motion.div>



        <div className="md:w-3/5 mx-auto px-6 md:px-0 pb-20 ">
          <div className="pt-10 justify-end items-center flex gap-4 md:hidden">
            <Dialog>
              <DialogTrigger className="underline">Contact</DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <div className="mb-4 space-y-2">
                  <p className="text-muted-foreground">
                    <strong>Phone:</strong> 203-820-0983
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Email:</strong>{" "}
                    <a href="mailto:williamhudsontang@gmail.com" className="font-bold text-rose-500 underline">
                      williamhudsontang@gmail.com
                    </a>
                  </p>
                </div>
                <InlineWidget url="https://calendly.com/williamhudsontang/30min" />
              </DialogContent>
            </Dialog>
            <ThemeToggle />
          </div>

          <div className="md:flex md:gap-x-10 items-center md:pt-28">
            <Image
              src={"/images/Me.jpg"}
              alt="William Hudson Tang"
              width={400}
              height={400}
              priority
              quality={100}
              className="rounded-full w-40 h-40 mt-4 object-cover object-center"
            />

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <motion.div
                  style={{
                    display: "inline-block",
                  }}
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0,
                  }}
                  className="text-4xl"
                >
                  👋
                </motion.div>
                <h1 className="text-xl lg:text-4xl font-semibold">
                  <Typewriter
                    words={["Hi, I am William Hudson Tang! Welcome to my portfolio!"]}
                    cursor
                  />
                </h1>
              </div>

              <p className="text-muted-foreground text-lg ">
                Connect with me on{" "}
                <a
                  href="https://www.linkedin.com/in/williamhudsontang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-indigo-500 underline hover:text-indigo-600"
                >
                  LinkedIn
                </a>{" "}
                or{" "}
                <a
                  href="https://github.com/T4NG23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-indigo-500 underline hover:text-indigo-600"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>


          <Element
          name="about"
          >
            <h2 className="text-xl pt-10 font-semibold">About Me</h2>
            <div className="border rounded-2xl p-4 bg-white dark:bg-card my-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                I&apos;m a Junior at Lehigh University studying under the interdisciplinary Computer Science and Business Honors Program. 
                I&apos;m also a research lead at Bina Labs, where I work on cutting-edge computer vision and machine learning projects. 
                A fun fact about me: I&apos;ve been playing the cello for over 10 years!
              </p>
            </div>
          </Element>

          <Element
          name="projects"
          
          >
            <h2 className="text-xl pt-10 font-semibold">Projects</h2>
            <div className="mt-5 space-y-4">
              {projects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  className="border rounded-2xl p-4 bg-white dark:bg-card cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedProject(expandedProject === project.title ? null : project.title);
                  }}
                  initial={false}
                  animate={{ height: "auto" }}
                >
                  <div className="md:flex items-center gap-x-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={100}
                      height={100}
                      className="rounded-md w-16 h-16 flex-shrink-0"
                    />
                    
                    <div className="flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <h2 className="text-md font-semibold">
                            {project.title}
                          </h2>
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-indigo-500 hover:text-indigo-600 text-sm underline"
                              onClick={(e) => e.stopPropagation()}
                            >
                              View on GitHub →
                            </a>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {project.date}
                        </p>
                      </div>
                      
                      {project.skills && (
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-md text-muted-foreground"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {expandedProject === project.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-border"
                    >
                      <p className="text-muted-foreground text-sm">
                        {project.description}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </Element>

          <Element
          name="work"
          
          >
            <h2 className="text-xl pt-10 font-semibold">Work Experience</h2>
            {experience.map((item) => (
              <div key={item.title} className="my-4">
                <div
                  className="
               border rounded-2xl p-4
              bg-white dark:bg-card
              "
                >
                  <div className="md:flex justify-between items-start mb-3">
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={100}
                        height={100}
                        className="rounded-md w-20 p-2"
                      />

                      <div className="">
                        <h2 className="text-md font-semibold mt-4 md:mt-0">
                          {item.title}
                        </h2>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="text-muted-foreground text-sm mt-4 md:mt-0">
                        {item.date}
                      </div>
                    </div>
                  </div>
                  {item.details && (
                    <ul className="list-disc list-inside space-y-1 ml-24 text-sm text-muted-foreground">
                      {item.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </Element>


          <Element
          name="research"
          >
            <h2 className="text-xl pt-10 font-semibold">Research Experience</h2>
            {researchExperience.map((item) => (
              <div key={item.title} className="my-4">
                <div
                  className="border rounded-2xl p-4 bg-white dark:bg-card"
                >
                  <div className="md:flex justify-between items-start mb-3">
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={60}
                        height={60}
                        className="rounded-md w-12 h-12 object-contain"
                      />

                      <div className="">
                        <h2 className="text-md font-semibold mt-4 md:mt-0">
                          {item.title}
                        </h2>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="text-muted-foreground text-sm mt-4 md:mt-0">
                        {item.date}
                      </div>
                    </div>
                  </div>
                  {item.details && (
                    <ul className="list-disc list-inside space-y-1 ml-24 text-sm text-muted-foreground">
                      {item.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </Element>

          <Element
          name="leadership"
          >
            <h2 className="text-xl pt-10 font-semibold">Leadership</h2>
            {leadership.map((item) => (
              <div key={item.title} className="my-4">
                <div
                  className="border rounded-2xl p-4 bg-white dark:bg-card"
                >
                  <div className="md:flex items-center gap-x-4 mb-3">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={100}
                        height={100}
                        className="rounded-md w-20 h-20 object-contain"
                      />
                    )}
                    <div>
                      <h2 className="text-md font-semibold">
                        {item.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {item.details && (
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-muted-foreground">
                      {item.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </Element>
        </div>
      </motion.div>
    </div>
  );
}
