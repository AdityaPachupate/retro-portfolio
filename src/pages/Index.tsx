import RetroLayout from "@/components/RetroLayout";

const Index = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "ReactJS", "Angular",
    "TailwindCSS", "Node.js", "Express.js", "C", "C++", "C#",
    ".NET Core", "MongoDB", "MySQL", "SQL Server", "Redis",
    "Git", "GitHub", "Vercel", "Postman", "gRPC", "Microservices",
  ];

  const projects = [
    {
      title: "Clinical CRM Platform",
      date: "2025",
      description: "Enterprise-grade clinical CRM with Vertical Slice Architecture, CQRS + MediatR, and global exception/validation pipelines (RFC 7807). Features predictive prefetching on hover, optimistic UI with rollback, and offline resilience via IndexedDB with a custom obfuscation layer. Includes a cascading soft-delete engine (Leads → Bills/Enrollments with full recovery), robust bulk CSV import with row-level validation and dynamic source expansion, and .NET BackgroundServices for automated 30-day trash cleanup. Production hardened with /health/live + /health/ready endpoints, Serilog structured logging, and automated EF Core migrations on startup.",
      tags: [".NET Core", "CQRS", "MediatR", "IndexedDB", "Serilog", "Angular"],
      live: "https://crm-client-m898.onrender.com",
      github: "https://github.com/AdityaPachupate/CRM-personal-copy",
    },
    {
      title: "MoodFlix",
      date: "2024",
      description: "A modern movie discovery platform that dynamically curates content based on user behavior. Integrated Appwrite for authentication, database, and serverless functions.",
      tags: ["ReactJS", "Appwrite", "Tailwind"],
      live: "https://mood-flix-five.vercel.app/",
      github: "https://github.com/AdityaPachupate55/MoodFlix",
    },
    {
      title: "Full Stack E-Commerce App",
      date: "2025",
      description: "Engineered a full-stack e-commerce platform using Angular frontend and ASP.NET Core Web API with JWT-based authentication and role-based authorization. Complete product catalog, shopping cart, and order system.",
      tags: [".NET Core", "Angular", "JWT", "SQL Server"],
      github: "https://github.com/AdityaPachupate",
    },
    {
      title: "Portfolio Website",
      date: "2024",
      description: "Personal developer portfolio showcasing projects, skills and experience. Built with modern React and styled with Tailwind CSS featuring smooth animations and responsive design.",
      tags: ["React", "TypeScript", "Tailwind"],
      live: "https://adityapachupate.vercel.app",
      github: "https://github.com/AdityaPachupate/my-portfolio-main",
    },
  ];

  const experience = [
    {
      role: "Programmer Analyst Trainee",
      company: "Cognizant Technology Solutions",
      period: "July 2025 - Present",
      desc: "Developing scalable web applications using C#, .NET Core Web API, and Microservices architecture. Implemented gRPC for efficient inter-service communication and Redis for distributed caching. Working with SQL databases, optimizing queries and managing data efficiently while collaborating in Agile teams.",
      tags: [".NET Core", "gRPC", "Redis", "SQL Server", "Angular"],
    },
    {
      role: "Intern - Fullstack Developer",
      company: "Cognizant Technology Solutions",
      period: "Feb 2025 - June 2025",
      desc: "Worked collaboratively in a team to develop a full-stack e-commerce application using C#, .NET Core, MVC, Web API, and SQL databases.",
      tags: [".NET Core", "SQL Server", "Angular"],
    },
    {
      role: "Intern - Embedded Developer",
      company: "Amplifier Electronics",
      period: "July 2024 - June 2024",
      desc: "Worked on Intel MCS-51 microcontroller, developed embedded applications using C, and designed UI for system interfaces.",
      tags: ["C", "Proteus", "MCS-51", "Embedded Systems"],
    },
  ];

  return (
    <RetroLayout>
      {/* ABOUT ME */}
      <div id="about">
        <div className="retro-header" style={{ display: "flex", justifyContent: "space-between" }}>
          <span>👤 About Me</span>
          <span style={{ fontWeight: "normal", fontSize: "9px" }}>[<a href="#top" style={{ color: "hsl(180 80% 70%)" }}>top</a>]</span>
        </div>
        <div style={{ padding: "10px 12px", display: "flex", gap: "12px" }}>
          <div style={{ flexShrink: 0 }}>
            <div style={{ width: "120px", height: "120px", border: "2px solid hsl(0 0% 75%)", background: "hsl(220 14% 93%)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <img src="https://adityapachupate.vercel.app/IMG/dp3.jpg" alt="Aditya Pachupate" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
            <div style={{ textAlign: "center", fontSize: "9px", color: "hsl(0 0% 50%)", marginTop: "2px" }}>📸 Aditya P.</div>
          </div>
          <div style={{ fontSize: "11px" }}>
            <p style={{ margin: "0 0 6px 0" }}>
              <b>Hello World!</b> My name is <span style={{ color: "hsl(220 70% 25%)", fontWeight: "bold" }}>Aditya Pachupate</span> and welcome to my corner of the World Wide Web! 🌐
            </p>
            <p style={{ margin: "0 0 6px 0" }}>
              I'm a Full Stack Developer from Karad, India. I primarily work with React, JavaScript, and Tailwind for the frontend, and Node.js and MongoDB for the backend. Currently working at <b>Cognizant Technology Solutions</b> as a Programmer Analyst Trainee, building web applications with C#, .NET Core, and Angular.
            </p>
            <p style={{ margin: "0", fontSize: "10px", color: "hsl(0 0% 50%)" }}>
              📍 Karad, India &nbsp;|&nbsp; 💼 Cognizant Technology Solutions &nbsp;|&nbsp; 🎓 B.Tech, GCE Karad &nbsp;|&nbsp; ☕ Powered by chai
            </p>
          </div>
        </div>
      </div>

      <div className="retro-separator" />

      {/* SKILLS */}
      <div id="skills">
        <div className="retro-header" style={{ display: "flex", justifyContent: "space-between" }}>
          <span>🛠️ Skills & Tools</span>
          <span style={{ fontWeight: "normal", fontSize: "9px" }}>[<a href="#top" style={{ color: "hsl(180 80% 70%)" }}>top</a>]</span>
        </div>
        <div style={{ padding: "10px 12px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {skills.map((skill, i) => (
            <span
              key={i}
              style={{
                background: "hsla(150, 50%, 40%, 0.15)",
                color: "hsl(150 60% 25%)",
                padding: "4px 12px",
                fontSize: "10px",
                fontWeight: "bold",
                border: "1px solid hsla(150, 50%, 40%, 0.35)",
                cursor: "default",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="retro-separator" />

      {/* WORK EXPERIENCE */}
      <div id="experience">
        <div className="retro-header" style={{ display: "flex", justifyContent: "space-between" }}>
          <span>💼 Work Experience</span>
          <span style={{ fontWeight: "normal", fontSize: "9px" }}>[<a href="#top" style={{ color: "hsl(180 80% 70%)" }}>top</a>]</span>
        </div>
        <div style={{ padding: "10px 12px" }}>
          {experience.map((exp, i) => (
            <div key={i} style={{ padding: "8px", marginBottom: i < experience.length - 1 ? "8px" : "0", border: "1px solid hsl(0 0% 80%)", background: i % 2 === 0 ? "hsl(220 14% 97%)" : "white" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "14px" }}>🏢</span>
                  <span style={{ fontWeight: "bold", fontSize: "12px", color: "hsl(220 70% 25%)" }}>{exp.role}</span>
                </div>
                <span style={{ fontSize: "9px", color: "hsl(0 0% 50%)", whiteSpace: "nowrap" as const }}>🕐 {exp.period}</span>
              </div>
              <div style={{ fontSize: "11px", fontWeight: "bold", color: "hsl(0 0% 40%)", marginBottom: "3px", marginLeft: "22px" }}>📌 {exp.company}</div>
              <p style={{ margin: "0 0 4px 22px", fontSize: "11px", color: "hsl(0 0% 30%)" }}>{exp.desc}</p>
              <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", marginLeft: "22px" }}>
                {exp.tags.map((tag, j) => (
                  <span key={j} style={{ background: "hsl(45 80% 88%)", border: "1px solid hsl(45 60% 65%)", padding: "1px 6px", fontSize: "9px", color: "hsl(25 80% 30%)" }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="retro-separator" />

      {/* PROJECTS */}
      <div id="projects">
        <div className="retro-header" style={{ display: "flex", justifyContent: "space-between" }}>
          <span>💻 My Projects</span>
          <span style={{ fontWeight: "normal", fontSize: "9px" }}>[<a href="#top" style={{ color: "hsl(180 80% 70%)" }}>top</a>]</span>
        </div>
        <div style={{ padding: "4px 12px" }}>
          {projects.map((project, i) => (
            <div key={i} style={{ padding: "8px 0", borderBottom: i < projects.length - 1 ? "1px dotted hsl(0 0% 80%)" : "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "14px" }}>📂</span>
                  <a href={project.github} style={{ fontWeight: "bold", fontSize: "13px" }}>{project.title}</a>
                </div>
                <span style={{ fontSize: "9px", color: "hsl(0 0% 50%)", whiteSpace: "nowrap" as const }}>📅 {project.date}</span>
              </div>
              <p style={{ margin: "3px 0 5px 22px", fontSize: "11px", color: "hsl(0 0% 30%)" }}>{project.description}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginLeft: "22px" }}>
                <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                  {project.tags.map((tag, j) => (
                    <span key={j} style={{ background: "hsl(220 60% 92%)", border: "1px solid hsl(220 40% 80%)", padding: "1px 6px", fontSize: "9px", color: "hsl(220 70% 30%)" }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "8px", fontSize: "10px" }}>
                  {project.live && <a href={project.live}>🌐 Live Demo »</a>}
                  <a href={project.github}>📂 Source »</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RetroLayout>
  );
};

export default Index;
