"use client";

import React, { useRef, useEffect } from "react";

// Scroll animation hook for mobile
function useMobileScrollReveal(
  selector,
  animationClass = "scroll-reveal",
  rootMargin = "0px 0px -10% 0px"
) {
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth > 900) return;
    const nodes = document.querySelectorAll(selector);
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add(animationClass);
        });
      },
      { rootMargin }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => nodes.forEach((node) => observer.unobserve(node));
  }, [selector, animationClass, rootMargin]);
}

// Contact/links
const phone = "9163575549";
const whatsappLink = `https://wa.me/91${phone}`;
const email = "afrazali.contact@gmail.com";
const mailto = `mailto:${email}`;

const skills = [
  { label: "Application Architecture & Development" },
  {
    label: "Frontend",
    detail:
      "HTML5, CSS3, React.js (Hooks), Next.js, Tailwind, CSS, Bootstrap, Lottie Animations",
  },
  { label: "Backend & APIs", detail: "Node.js, REST APIs, Socket.IO, JWT" },
  { label: "Database/Version Control", detail: "MongoDB, Git" },
  {
    label: "DevOps/Infra",
    detail:
      "Docker Compose, Netlify Functions, Domain & DNS Management, Nginx, Firebase",
  },
  { label: "Others", detail: "SWR (React Context), OpenAI API" },
  { label: "Prompt Engineering" },
];

const softSkills = [
  {
    label: "Communication",
    detail: "Clear, tailored communication across diverse audiences",
  },
  {
    label: "Adaptability",
    detail: "Flexible approach in addressing diverse needs",
  },
  {
    label: "Execution",
    detail: "Goal-oriented planning and independent ownership of tasks",
  },
  {
    label: "Relationship Management",
    detail: "Built trust and long–term rapport",
  },
];

const experience = [
  {
    role: "SOLO FULL-STACK DEVELOPER",
    company: "STAFFSOUL",
    period: "2024 – Ongoing",
    details: [
      "Architected and built a scalable, multi-role SaaS job portal as a solo full-stack engineer using Next.js and MongoDB.",
      "Led Docker-based development, and streamlined deployment using Netlify Functions and custom domain/DNS configuration.",
      "Delivered mobile-first, responsive UI/UX with advanced animations (SVG, Lottie) and custom React hooks, optimizing engagement across devices.",
      "Ensured code quality and maintainability with modular Mongoose models and robust version control practices.",
      "Designed and implemented multi-role dashboards with strict access controls, custom HOCs, and in-app notification systems.",
      "Created scalable API endpoints for OTP-based auth, job lifecycle management, resume uploads, and candidate-client matching (with OpenAI-assisted suggestions).",
    ],
  },
  {
    role: "EDUCATIONAL SPECIALIST",
    company: "",
    period: "2013 – 2024",
    details: [
      "Developed and delivered personalized tutoring sessions tailored to individual student needs, resulting in measurable academic improvement and enhanced learning outcomes.",
      "Equipped students with the necessary skills and strategies to excel in competitive exams such as IELTS, SAT and UPSC, through rigorous preparation and focused coaching.",
      "Demonstrated adaptability and versatility by accommodating various learning styles, abilities, and age groups, including elementary, middle school and high school students.",
      "Continuously evaluated student progress and performance through assessments and feedback, adjusting teaching strategies as needed to address areas of difficulty and maximize learning outcomes.",
      "Utilized technology and online platforms to facilitate remote learning and provide flexible scheduling options for students, expanding reach and accessibility of tutoring services.",
      "Established a reputable and reliable tutoring practice through word-of-mouth referrals, positive reviews, and client testimonials, reflecting dedication to excellence and student success over the years.",
    ],
  },
];

export default function Resume() {
  const resumeRef = useRef();

  useMobileScrollReveal(".mobile-animate");

  const handleSavePdf = async () => {
    if (!window.html2pdf) {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
      script.onload = () => generatePDF();
      document.body.appendChild(script);
    } else {
      generatePDF();
    }

    function generatePDF() {
      window
        .html2pdf()
        .set({
          margin: [0.5, 0.5, 0.5, 0.5],
          filename: "Afraz_Ali_Resume.pdf",
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
          pagebreak: { mode: ["avoid-all"] },
        })
        .from(resumeRef.current)
        .save();
    }
  };

  return (
    <div className="resume-root">
      {/* FontAwesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />
      {/* <div className="resume-actions">
        <button className="savepdf-btn" onClick={handleSavePdf}>
          <i className="fa fa-download"></i>
          Save as PDF
        </button>
      </div> */}
      <div className="resume-container" ref={resumeRef}>
        <div className="resume-header mobile-animate">
          <div className="resume-name">Afraz Ali</div>
          <div className="resume-contacts">
            <a href={mailto}>
              <i className="fa fa-envelope"></i>
              {email}
            </a>
            <br />
            <a
              href="https://linkedin.com/in/afraz-ali/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>LinkedIn
            </a>
            <span className="bar">|</span>
            <a
              href="https://github.com/Afraz94"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>GitHub
            </a>
            <br />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-phone"></i> {phone}
            </a>
            <span className="bar-two">|</span>
            <span> Kolkata, West Bengal</span>
          </div>
        </div>
        <div className="resume-main">
          {/* LEFT */}
          <div className="resume-left mobile-animate">
            <div className="section-title">
              <i className="fa fa-graduation-cap"></i> Education
            </div>
            <div className="resume-edu-school">
              <div className="degree">JOGESH CHANDRA CHAUDHURI COLLEGE</div>
              <div className="field">
                Bachelor of Arts{" "}
                <span style={{ fontWeight: 400 }}>(Honours in English)</span>
              </div>
              <div className="period">2014 – 2017</div>
              <div className="loc">Kolkata, West Bengal</div>
            </div>
            <div className="section-title">
              <i className="fa fa-laptop-code"></i> Technical Proficiencies
            </div>
            <ul className="resume-ul">
              {skills.map((s, i) => (
                <li key={i}>
                  <span className="skill-title">{s.label}</span>
                  {s.detail && (
                    <span className="skill-detail">: {s.detail}</span>
                  )}
                </li>
              ))}
            </ul>
            <div className="section-title">
              <i className="fa fa-users"></i> Interpersonal Skills
            </div>
            <ul className="resume-ul">
              {softSkills.map((s, i) => (
                <li key={i}>
                  <span className="soft-skill-title">{s.label}</span>
                  {s.detail && (
                    <span className="soft-skill-detail">: {s.detail}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* RIGHT */}
          <div className="resume-right mobile-animate">
            <div className="section-title">
              <i className="fa fa-briefcase"></i> Experience
            </div>
            {experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: "34px" }}>
                <div className="resume-exp-role">
                  {exp.role}
                  {exp.company && (
                    <>
                      {" "}
                      |{" "}
                      <span className="resume-exp-company">{exp.company}</span>
                    </>
                  )}
                </div>
                <div className="resume-exp-period">{exp.period}</div>
                <ul className="resume-exp-list">
                  {exp.details.map((point, j) => (
                    <li key={j}>
                      <span className="exp-bullet" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="resume-footnote mobile-animate">
          <i className="fab fa-react react-spin"></i>
          <span>
            This resume was crafted 100% in <b>React.js</b>
          </span>
        </div>
      </div>
    </div>
  );
}
