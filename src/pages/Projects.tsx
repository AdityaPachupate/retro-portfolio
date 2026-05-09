import RetroLayout from "@/components/RetroLayout";

const Projects = () => {
  const projects = [
    {
      title: "Clinical CRM Platform",
      date: "2025",
      description: "Enterprise-grade clinical CRM built with Vertical Slice Architecture and CQRS + MediatR for clean, decoupled business logic. Implements global exception & validation pipelines returning standardized RFC 7807 responses. Frontend uses predictive prefetching (onMouseEnter) and an Optimistic UI strategy with rollback for a native-app feel, plus IndexedDB-backed offline resilience with a custom obfuscation layer. Real-world domain features include a cascading soft-delete lifecycle (deleting a Lead trashes related Bills & Enrollments with full recovery), bulk CSV import with row-by-row validation, duplicate detection, and dynamic Source expansion. Production-ready with .NET BackgroundServices for 30-day trash cleanup, /health/live & /health/ready endpoints, Serilog structured logging, and automated DB migrations on startup.",
      tags: [".NET Core", "CQRS", "MediatR", "Angular", "IndexedDB", "Serilog", "EF Core"],
      live: "https://crm-client-m898.onrender.com",
      github: "https://github.com/AdityaPachupate/CRM-personal-copy",
    },
    {
      title: "MoodFlix",
      date: "2024",
      description: "A modern movie discovery platform designed to provide a seamless and enjoyable experience for movie enthusiasts. Built with React.js, it offers a sleek and responsive interface for browsing and discovering movies.",
      tags: ["ReactJS", "JavaScript", "Tailwind"],
      live: "https://moodflix.vercel.app",
      github: "https://github.com/AdityaPachupate",
    },
    {
      title: "E-Commerce Application",
      date: "2025",
      description: "Full-stack e-commerce application built collaboratively using C#, .NET Core, MVC, Web API, and SQL databases with complete shopping and checkout functionality.",
      tags: [".NET Core", "SQL Server", "Angular"],
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

  return (
    <RetroLayout>
      <div className="retro-header" style={{ display: "flex", justifyContent: "space-between" }}>
        <span>💻 My Projects</span>
        <span style={{ fontWeight: "normal", fontSize: "9px" }}>{projects.length} projects listed</span>
      </div>
      <div style={{ padding: "4px 12px" }}>
        {projects.map((project, i) => (
          <div key={i} style={{ padding: "10px 0", borderBottom: i < projects.length - 1 ? "1px dotted hsl(0 0% 80%)" : "none" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ fontSize: "14px" }}>📂</span>
                <a href={project.github} style={{ fontWeight: "bold", fontSize: "13px" }}>{project.title}</a>
              </div>
              <span style={{ fontSize: "9px", color: "hsl(0 0% 50%)", whiteSpace: "nowrap" as const }}>📅 {project.date}</span>
            </div>
            <p style={{ margin: "4px 0 6px 22px", fontSize: "11px", color: "hsl(0 0% 30%)" }}>{project.description}</p>
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
    </RetroLayout>
  );
};

export default Projects;
