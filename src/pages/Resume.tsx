import RetroLayout from "@/components/RetroLayout";
import { useState, useEffect } from "react";

const Resume = () => {
  const resumeLink = "/Aditya_Pachupate_Resume.pdf";

  return (
    <RetroLayout>
      <div className="retro-header" style={{ display: "flex", justifyContent: "space-between" }}>
        <span>📄 Resume — Aditya Pachupate</span>
        <a href={resumeLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: "10px", fontWeight: "normal", color: "hsl(180 80% 70%)" }}>
          ⬇️ Download PDF
        </a>
      </div>

      <div style={{ padding: "12px 16px", background: "white", fontFamily: "'Courier New', monospace" }}>
        {/* Header */}
        <div style={{ textAlign: "center", borderBottom: "2px solid hsl(0 0% 20%)", paddingBottom: "8px", marginBottom: "10px" }}>
          <div style={{ fontSize: "20px", fontWeight: "bold", letterSpacing: "2px" }}>ADITYA PACHUPATE</div>
          <div style={{ fontSize: "10px", marginTop: "4px", color: "hsl(0 0% 40%)" }}>
            Karad, Maharashtra &nbsp;|&nbsp;{" "}
            <a href="mailto:adityapachupate@gmail.com">adityapachupate@gmail.com</a> &nbsp;|&nbsp;
            +91 7378556711 &nbsp;|&nbsp;{" "}
            <a href="https://www.linkedin.com/in/adityapachupate/">LinkedIn</a> &nbsp;|&nbsp;{" "}
            <a href="https://github.com/AdityaPachupate55">GitHub</a>
          </div>
        </div>

        {/* Professional Summary */}
        <div style={{ marginBottom: "12px" }}>
          <div style={{ fontSize: "12px", fontWeight: "bold", borderBottom: "1px solid hsl(0 0% 60%)", paddingBottom: "2px", marginBottom: "6px" }}>
            ▸ PROFESSIONAL SUMMARY
          </div>
          <p style={{ fontSize: "10px", margin: 0, lineHeight: "1.6" }}>
            Motivated and detail-oriented Electronics and Telecommunication Engineering graduate (2025 pass-out) with a strong foundation in software development. Currently working as a Programmer Analyst Trainee at Cognizant Technology Solutions, with hands-on experience in Full Stack .NET development.
          </p>
        </div>

        {/* Technical Skills */}
        <div style={{ marginBottom: "12px" }}>
          <div style={{ fontSize: "12px", fontWeight: "bold", borderBottom: "1px solid hsl(0 0% 60%)", paddingBottom: "2px", marginBottom: "6px" }}>
            ▸ TECHNICAL SKILLS
          </div>
          <table style={{ width: "100%", fontSize: "10px", borderCollapse: "collapse" }}>
            <tbody>
              {[
                ["Languages", "C, C++, C#, JavaScript, TypeScript"],
                ["Frontend", "React.js, Angular, HTML, CSS, Tailwind CSS, IndexedDB (Offline Storage)"],
                ["Backend", ".NET 8, gRPC, CQRS (MediatR), Microservices, Node.js, Express.js, Serilog"],
                ["Database", "PostgreSQL, SQL Server, MongoDB, Redis, Entity Framework Core"],
                ["Version Control", "Git, GitHub"],
                ["Soft Skills", "Critical thinking, Data-driven decision making, Problem solving"],
              ].map(([label, value], i) => (
                <tr key={i} style={{ borderBottom: "1px dotted hsl(0 0% 85%)" }}>
                  <td style={{ fontWeight: "bold", padding: "3px 8px 3px 0", width: "120px", verticalAlign: "top" }}>{label}:</td>
                  <td style={{ padding: "3px 0" }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Education */}
        <div style={{ marginBottom: "12px" }}>
          <div style={{ fontSize: "12px", fontWeight: "bold", borderBottom: "1px solid hsl(0 0% 60%)", paddingBottom: "2px", marginBottom: "6px" }}>
            ▸ EDUCATION
          </div>
          {[
            { school: "Government College of Engineering, Karad", degree: "Bachelor of Technology (B.Tech), Electronics and Telecommunication Engineering", grade: "CGPA: 7.04", period: "June 2021 – May 2025" },
            { school: "Ligade-Patil Junior College of Science, Karad", degree: "Higher Secondary Certificate (HSC)", grade: "Percentage: 85.3%", period: "June 2020 – August 2021" },
            { school: "K.C.T's Krishna School, Karad", degree: "Secondary School Certificate (CBSE)", grade: "Percentage: 81.2%", period: "June 2018 – March 2019" },
          ].map((edu, i) => (
            <div key={i} style={{ marginBottom: "8px", fontSize: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: "bold" }}>{edu.school} | {edu.grade}</span>
                <span style={{ color: "hsl(0 0% 50%)", fontSize: "9px" }}>{edu.period}</span>
              </div>
              <div style={{ color: "hsl(0 0% 40%)" }}>{edu.degree}</div>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div style={{ marginBottom: "12px" }}>
          <div style={{ fontSize: "12px", fontWeight: "bold", borderBottom: "1px solid hsl(0 0% 60%)", paddingBottom: "2px", marginBottom: "6px" }}>
            ▸ EXPERIENCE
          </div>
          <div style={{ marginBottom: "8px", fontSize: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontWeight: "bold" }}>Programmer Analyst Trainee — Cognizant Technology Solutions</span>
              <span style={{ color: "hsl(0 0% 50%)", fontSize: "9px" }}>Feb 2025 - May 2025</span>
            </div>
            <ul style={{ margin: "4px 0 0 16px", padding: 0, lineHeight: "1.6" }}>
              <li>Developed scalable web applications using C#, .NET Core Web API, and <strong>Microservices architecture</strong>.</li>
              <li>Implemented <strong>gRPC</strong> for efficient inter-service communication and <strong>Redis</strong> for distributed caching.</li>
              <li>Worked with SQL databases, optimizing queries and managing data efficiently while collaborating in Agile teams.</li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div style={{ marginBottom: "12px" }}>
          <div style={{ fontSize: "12px", fontWeight: "bold", borderBottom: "1px solid hsl(0 0% 60%)", paddingBottom: "2px", marginBottom: "6px" }}>
            ▸ PROJECTS
          </div>
          {[
            {
              title: "Production-Ready Clinical CRM | .NET 8, React, CQRS, MediatR, IndexedDB",
              links: { github: "https://github.com/AdityaPachupate/crm-fullstack" },
              bullets: [
                "Engineered a high-performance CRM using Vertical Slice Architecture and CQRS (MediatR), ensuring modularity and decoupling complex business logic for enterprise-scale maintainability.",
                "Implemented Predictive Prefetching and Optimistic UI strategies to eliminate perceived API latency, paired with Offline Resilience using IndexedDB for persistent caching and data obfuscation.",
                "Developed a Cascading Lifecycle (Soft Delete Engine) to manage complex data relationships and a robust Bulk CSV Import system with row-by-row validation and duplicate detection.",
                "Integrated production-grade DevOps features including Structured Logging (Serilog), Automated Background Jobs for data health, and Health Check endpoints for cloud environment monitoring.",
              ],
            },
            {
              title: "Full Stack E-commerce App | .NET Core, Angular, JWT",
              bullets: [
                "Engineered a full-stack e-commerce platform using Angular for the frontend and ASP.NET Core Web API with JWT-based authentication and role-based authorization.",
                "Implemented a complete product catalog, shopping cart, and order system using Entity Framework Core and SQL Server.",
              ],
            },
          ].map((proj, i) => (
            <div key={i} style={{ marginBottom: "8px", fontSize: "10px" }}>
              <div style={{ fontWeight: "bold" }}>
                {proj.title}
                {proj.links && (
                  <span style={{ fontWeight: "normal", marginLeft: "8px" }}>
                    [<a href={proj.links.github}>GitHub</a>]
                  </span>
                )}
              </div>
              <ul style={{ margin: "4px 0 0 16px", padding: 0, lineHeight: "1.6" }}>
                {proj.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Download bar */}
      <div style={{ padding: "8px 12px", background: "hsl(220 14% 93%)", borderTop: "1px solid hsl(0 0% 75%)", textAlign: "center" }}>
        <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="retro-button" style={{ padding: "5px 20px", fontSize: "11px", textDecoration: "none" }}>
          📥 Download Resume (PDF)
        </a>
        <div style={{ fontSize: "9px", color: "hsl(0 0% 50%)", marginTop: "4px" }}>Last updated: May 2026</div>
      </div>
    </RetroLayout>
  );
};

export default Resume;
