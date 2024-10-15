"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function HonorsPortfolio() {
  const [activeTab, setActiveTab] = useState("academic");

  const tabs = [
    { id: "academic", label: "Academic Achievements", color: "bg-blue-500" },
    { id: "research", label: "Research Projects", color: "bg-green-500" },
    { id: "leadership", label: "Leadership & Service", color: "bg-purple-500" },
    { id: "cultural", label: "Cultural Engagement", color: "bg-yellow-500" },
    {
      id: "professional",
      label: "Professional Development",
      color: "bg-red-500",
    },
    { id: "resume", label: "Resume", color: "bg-indigo-500" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-100 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-gray-800"
      >
        Crystal A. McIntosh - Senior Honors Electronic Portfolio
      </motion.h1>

      <Card className="mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-gray-800">
            About Me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            I am a dedicated and ambitious Computer Engineering student at
            Benedict College, with a passion for innovation and technology. My
            academic excellence, coupled with hands-on experience in software
            engineering and research, has prepared me for a dynamic career in
            the tech industry. I thrive on challenges and am committed to making
            meaningful contributions to the field of computer engineering.
          </p>
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-2 mb-4">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={activeTab === tab.id ? "default" : "outline"}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? `${tab.color} text-white` : "text-black"
              }`}
            >
              {tab.label}
            </Button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "academic" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Academic Achievements
              </h2>
              <Card className="mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-blue-700">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">
                    B.S. in Computer Engineering, Benedict College, Columbia, SC
                  </p>
                  <p>Expected Graduation: December 2024</p>
                  <p>Cumulative GPA: 3.96 / 4.00</p>
                  <div className="mt-2">
                    <Badge className="mr-2 bg-blue-200 text-blue-800">
                      Honors Courses: 24 SCH
                    </Badge>
                    <Badge className="mr-2 bg-blue-200 text-blue-800">
                      Fall 2023
                    </Badge>
                    <Badge className="mr-2 bg-blue-200 text-blue-800">
                      Spring 2024
                    </Badge>
                    <Badge className="bg-blue-200 text-blue-800">
                      Fall 2024
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-blue-700">
                    Related Coursework
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Analysis and Research, Calculus, Circuits, Electronics,
                    Engineering Graphics and Design, Digital Logics, Algorithm
                    and Design, Physics, Differential Equation, Linear Algebra,
                    Assemble Language, Computer Org and Architecture, VHDL &
                    VLSI Designs, Software Engineering Principles
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "research" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-600">
                Research Projects
              </h2>
              <Card className="mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-green-700">
                    Research Day Fall 2024
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg font-medium">
                    Blockchain-Enhanced Spectrum Sharing in Cognitive Radio Networks
                  </CardDescription>
                  <p className="mt-2">
                    Presented at Research Day (October 31, 2024)
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="mt-4 bg-green-500 hover:bg-green-600">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Research Project Details</DialogTitle>
                        <DialogDescription>
                          This project explores the integration of blockchain
                          technology with cognitive radio networks to enhance
                          spectrum sharing efficiency. Key findings include
                          improved security, reduced interference, and increased
                          spectrum utilization.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
              <Card className="mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-green-700">
                    Undergraduate Research Symposium Spring 2024
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg font-medium">
                    Machine Learning Approaches for Optimizing Energy
                    Consumption in IoT Networks
                  </CardDescription>
                  <p className="mt-2">
                    Presented at the Undergraduate Research Symposium (April 15,
                    2024)
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="mt-4 bg-green-500 hover:bg-green-600">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Research Project Details</DialogTitle>
                        <DialogDescription>
                          This project investigated various machine learning
                          algorithms to optimize energy consumption in Internet
                          of Things (IoT) networks. Key outcomes included the
                          development of an adaptive routing protocol that
                          significantly reduced energy usage while maintaining
                          network performance.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
              <Card className="mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-green-700">
                    Senior Research Project: VHDL-based Traffic Light System
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg font-medium">
                    Design and Implementation of a VHDL-based Traffic Light
                    Controller Simulation
                  </CardDescription>
                  <p className="mt-2">Completed in April 2024</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="mt-4 bg-green-500 hover:bg-green-600">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          VHDL-based Traffic Light System
                        </DialogTitle>
                        <DialogDescription>
                          This project focused on designing and implementing a
                          VHDL-based traffic light controller simulation using
                          the Basys 3 Artix-7 trainer FPGA. The system
                          accurately emulated the behavior of a physical traffic
                          light system, including smooth transitions between
                          phases, real-world scenario simulations, and priority
                          control for emergency vehicles. Key achievements
                          included developing a modular VHDL architecture,
                          implementing complex traffic logic, and providing an
                          intuitive user interface for configuration and
                          observation. The project was successfully completed in
                          April 2024, demonstrating proficiency in VHDL
                          programming and digital system design.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "leadership" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-600">
                Leadership & Community Service
              </h2>
              <Card className="mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-purple-700">
                    Leadership Positions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Google Developers Student Club - Leader (2021-2023)</li>
                    <li>Robotics Club - President (2021-2023)</li>
                    <li>
                      Benedict College School of Honors - Member (2022 –
                      present)
                    </li>
                    <li>
                      National Society of Black Engineers - Member
                      (2021-present)
                    </li>
                    <li>Passport to College - Student Mentor (2021-present)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-purple-700">
                    Community Service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Passport to College Covid Relief (2020)</li>
                    <li>Jamaica Youth Services Volunteer (2018)</li>
                    <li>Benedict College Class Lead Tutor (2021-present)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "cultural" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-yellow-600">
                Cultural Engagement
              </h2>
              <Card className="mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-yellow-700">
                    Black Intelligentsia Collegiate Honors Series
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      The Mahagany Music Festival – Koger Center (09/11/2021)
                    </li>
                    <li>Honors Induction Ceremony (02/22/2022)</li>
                    <li>{"Palmer's Executive Speaker Series (09/13/2022)"}</li>
                    <li>{"Palmer's Executive Speaker Series (10/15/2024)"}</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "professional" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-600">
                Professional Development
              </h2>
              <Card className="mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-red-700">
                    {"Benedict College Women's Business Center"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-lg">
                    Student Support Intern
                  </h3>
                  <p className="italic">Columbia, SC</p>
                  <p className="font-semibold mt-2">
                    November 2022 – April 2024
                  </p>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>
                      {"Managed social media platforms, enhancing online presence, and broadening the center's audience."}
                    </li>
                    <li>
                      Efficiently handled administrative tasks, contributing to
                      smooth center operations.
                    </li>
                    <li>
                      Developed innovative marketing strategies tailored to
                      diverse business clients, honing strategic thinking and
                      problem-solving abilities.
                    </li>
                    <li>
                      Worked closely with other teams such as product, design,
                      backend, and quality assurance to build, test and deploy
                      new features.
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-red-700">Internships</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-lg">
                    Salesforce, Inc. - Software Engineering Intern (Slack)
                  </h3>
                  <p className="italic">San Francisco, California</p>
                  <h4 className="font-semibold mt-2">May 2024 – August 2024</h4>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Redesigned workflow details view as a flex pane</li>
                    <li>Contributed to Workflow Access Prototype</li>
                    <li>
                      Led bug bash session and collaborated on innovative
                      features
                    </li>
                  </ul>
                  <h4 className="font-semibold mt-2">May 2023 – August 2023</h4>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>
                      Developed a highly usable Workflow Insertion Tool for
                      Slack
                    </li>
                    <li>
                      Implemented feature to insert workflows as cards unfurl
                    </li>
                    <li>
                      Contributed to a high usability rate, benefiting most
                      Slack users and recognized as a significant project with a
                      positive impact on user workflow.
                    </li>
                  </ul>
                  <h4 className="font-semibold mt-2">May 2022 - August 2022</h4>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>
                      Worked with Slack on the Channels Search and Communication
                      team.
                    </li>
                    <li>Used React, JavaScript to improve Slack clients</li>
                  </ul>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="mt-4 bg-red-500 hover:bg-red-600">
                        View Internship Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          Salesforce Internship Experience
                        </DialogTitle>
                        <DialogDescription>
                          During my three internships at Salesforce, I gained
                          invaluable experience in software engineering,
                          particularly in frontend development for Slack. I
                          worked on various projects that improved user
                          experience and functionality, demonstrating my ability
                          to contribute to a large-scale, widely-used
                          application.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "resume" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
                Resume
              </h2>
              <Card className="mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-indigo-700">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Email: crystalmcintosh876@gmail.com</p>
                  <p>Phone: (347) 575-5889</p>
                  <p>
                    LinkedIn: www.linkedin.com/in/crystal-mcintosh-0263a3139
                  </p>
                </CardContent>
              </Card>
              <Card className="mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-indigo-700">Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold">Uber Clone</h3>
                  <p>GitHub: https://github.com/876-samurai/-Uber-clone</p>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>
                      5-day challenge: Next.js, React.js, Tailwind CSS, Mapbox,
                      Firebase
                    </li>
                    <li>Pages: home, search, confirmation</li>
                    <li>
                      Goals: mobile responsive design, MapBox integration,
                      location search, fare calculation, Google Auth with
                      Firebase v9
                    </li>
                  </ul>
                  <h3 className="font-semibold mt-2">Car Showcase</h3>
                  <p>GitHub: https://github.com/876-samurai/CarHub</p>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>
                      Next.js and React.js web app for car model exploration
                    </li>
                    <li>Implemented SSR, SSG, and ISR for performance</li>
                    <li>Responsive design for multi-device compatibility</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-indigo-700">
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    <strong>Programming Languages:</strong> HTML, CSS,
                    JavaScript, Typescript, MATLAB, C++, Python for Data
                    Analysis, SQL
                  </p>
                  <p>
                    <strong>Technical:</strong> Microsoft Office, CRM, Next.js,
                    React.js, Visual Studio Code, Google Collaboratory, Hands-on
                    EE Lab Experience (DMM, digital scope, logic analyzer)
                  </p>
                </CardContent>
              </Card>
              <Card className="mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-indigo-700">
                    Honors and Awards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Most Exceptional and Consistent High Academic Performance
                      (2016)
                    </li>
                    <li>
                      Optimist International Club – Youth Appreciation Award
                      (2018)
                    </li>
                    <li>
                      Benedict College Founders Scholarship recipient
                      (2021-2024)
                    </li>
                    <li>
                      Benedict College Presidential Trophy recipient (2022-2024)
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
