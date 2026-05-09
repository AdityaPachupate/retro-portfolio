import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface RetroLayoutProps {
  children: React.ReactNode;
}

const RetroLayout = ({ children }: RetroLayoutProps) => {
  const [visitorCount, setVisitorCount] = useState(18472);
  const [lastUpdated, setLastUpdated] = useState("April 2, 2026");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [commits, setCommits] = useState<Array<{ repo: string; msg: string; date: string; url: string; type: string }>>([]);
  const [workingOnRepos, setWorkingOnRepos] = useState<Array<{ repo: string; url: string }>>([]);
  const [isLoadingGithub, setIsLoadingGithub] = useState(true);
  const location = useLocation();

  const [userStats, setUserStats] = useState<{ public_repos: number; followers: number; following: number } | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    
    // Simple visitor counter simulation using localStorage
    const storedVisits = localStorage.getItem("site_visits_v2");
    const baseVisits = 0;
    if (storedVisits) {
      const newCount = parseInt(storedVisits) + 1;
      setVisitorCount(newCount);
      localStorage.setItem("site_visits_v2", newCount.toString());
    } else {
      localStorage.setItem("site_visits_v2", baseVisits.toString());
      setVisitorCount(baseVisits);
    }

    // Fetch user profile stats
    fetch("https://api.github.com/users/AdityaPachupate")
      .then((r) => r.ok ? r.json() : null)
      .then((data) => {
        if (data) {
          setUserStats({
            public_repos: data.public_repos,
            followers: data.followers,
            following: data.following
          });
        }
      })
      .catch(() => {});

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setIsLoadingGithub(true);
    fetch("https://api.github.com/users/AdityaPachupate/events/public?per_page=100")
      .then((r) => r.ok ? r.json() : [])
      .then((events: any[]) => {
        console.log("GitHub Events fetched:", events);
        if (!events || events.length === 0) {
          setIsLoadingGithub(false);
          return;
        }

        const items: Array<{ repo: string; msg: string; date: string; url: string; type: string }> = [];
        const seenReposForWorkingOn = new Set<string>();
        const activeRepos: Array<{ repo: string; url: string }> = [];
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        for (const ev of events) {
          const repoName = ev.repo?.name?.split("/")[1] ?? "repo";
          const eventDate = new Date(ev.created_at);
          const dateStr = eventDate.toLocaleDateString("en-US", { month: "short", day: "numeric" });
          const repoUrl = `https://github.com/${ev.repo.name}`;

          // Collect unique repos from the last 30 days
          if (!seenReposForWorkingOn.has(repoName) && eventDate >= thirtyDaysAgo) {
            seenReposForWorkingOn.add(repoName);
            activeRepos.push({ repo: repoName, url: repoUrl });
          }

          let msg = "";
          let url = repoUrl;

          if (ev.type === "PushEvent") {
            const lastCommit = ev.payload?.commits?.[ev.payload.commits.length - 1];
            msg = lastCommit ? lastCommit.message.split("\n")[0] : "Pushed changes";
            url = lastCommit ? `${repoUrl}/commit/${lastCommit.sha}` : repoUrl;
            
            if (msg && items.length < 5) {
              items.push({ repo: repoName, msg: msg.slice(0, 60), date: dateStr, url, type: ev.type });
            }
          }
        }
        
        setCommits(items);
        setWorkingOnRepos(activeRepos.slice(0, 5)); // Show top 5 active repos
        if (items[0]) {
          setLastUpdated(items[0].date);
        }
        setIsLoadingGithub(false);
      })
      .catch(() => {
        setIsLoadingGithub(false);
      });
  }, []);

  const updates = [
    { date: "Jul 25", text: "Started at Cognizant as Programmer Analyst!" },
    { date: "Jun 25", text: "Completed Fullstack internship at Cognizant" },
    { date: "Apr 25", text: "Portfolio redesigned in retro 2005 style!" },
    { date: "Mar 25", text: "New project: MoodFlix launched" },
  ];

  const navTabs = [
    { label: "🏠 Home", to: "/" },
    { label: "👤 About", to: "/about" },
    { label: "💻 Projects", to: "/projects" },
    { label: "📧 Contact", to: "/contact" },
    { label: "📄 Resume", to: "/resume" },
  ];

  return (
    <div className="min-h-screen bg-background" id="top">
      {/* === MAIN HEADER / BANNER === */}
      <div style={{
        background: "linear-gradient(180deg, hsla(220, 70%, 28%, 0.85), hsla(220, 70%, 15%, 0.9))",
        backdropFilter: "blur(4px)",
        padding: "10px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <span style={{ color: "white", fontSize: "22px", fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: "bold" }}>
                🖥️ Aditya Pachupate
              </span>
            </Link>
            <span style={{ color: "hsl(45 100% 65%)", fontSize: "11px", fontStyle: "italic" }}>
              ~ Full Stack Web Developer ~
            </span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "3px" }}>
          <span style={{ color: "hsl(45 100% 70%)", fontSize: "10px", fontFamily: "'Courier New', monospace" }}>
            🕐 {currentTime.toLocaleTimeString()} — {currentTime.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" })}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <input className="retro-input" placeholder="Search this site..." style={{ width: "160px" }} />
            <button className="retro-button" style={{ fontSize: "10px" }}>🔍 Go!</button>
          </div>
        </div>
      </div>

      {/* === NAVIGATION TABS === */}
      <div style={{ display: "flex", borderBottom: "2px solid hsl(220 70% 20%)", background: "hsl(220 14% 85%)" }}>
        {navTabs.map((tab, i) => {
          const isActive = location.pathname === tab.to;
          return (
            <Link
              key={i}
              to={tab.to}
              style={{
                padding: "5px 18px",
                fontSize: "11px",
                fontWeight: "bold",
                textDecoration: "none",
                color: isActive ? "hsl(220 70% 20%)" : "hsl(220 70% 30%)",
                background: isActive ? "white" : "transparent",
                border: isActive ? "1px solid hsl(0 0% 75%)" : "none",
                borderBottom: isActive ? "1px solid white" : "none",
                marginBottom: "-2px",
              }}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>

      {/* === MARQUEE BANNER === */}
      <div style={{ background: "hsl(45 100% 90%)", borderBottom: "1px solid hsl(45 80% 60%)", padding: "2px 12px", overflow: "hidden", whiteSpace: "nowrap" as const }}>
        <div className="retro-marquee">
          <span style={{ fontSize: "10px", color: "hsl(0 80% 45%)" }}>
            ⭐ Welcome to Aditya's Homepage! ⭐ Currently working at Cognizant ⭐ Check out my latest projects below ⭐ Electronics Engineer turned Full Stack Developer ⭐ Site updated April 2, 2026 ⭐
          </span>
        </div>
      </div>

      {/* === THREE COLUMN LAYOUT === */}
      <div style={{ display: "grid", gridTemplateColumns: "190px 1fr 220px", gap: "0", borderLeft: "1px solid hsl(0 0% 75%)", borderRight: "1px solid hsl(0 0% 75%)" }}>

        {/* ---- LEFT SIDEBAR ---- */}
        <div style={{ borderRight: "1px solid hsl(0 0% 75%)", background: "hsl(220 14% 96%)", padding: "0" }}>
          <div className="retro-header" style={{ fontSize: "10px" }}>📁 Navigation</div>
          <div style={{ padding: "6px 8px" }}>
            {[
              { icon: "🏠", label: "Home", to: "/" },
              { icon: "👤", label: "About Me", to: "/about" },
              { icon: "💻", label: "Projects", to: "/projects" },
              { icon: "🛠️", label: "Skills", to: "/#skills" },
              { icon: "💼", label: "Experience", to: "/#experience" },
              { icon: "📧", label: "Contact", to: "/contact" },
              { icon: "📄", label: "Resume", to: "/resume" },
            ].map((link, i) => (
              <div key={i} style={{ padding: "3px 0", display: "flex", alignItems: "center", gap: "4px" }}>
                <span style={{ fontSize: "12px" }}>{link.icon}</span>
                <Link to={link.to} style={{ fontSize: "11px" }}>{link.label}</Link>
              </div>
            ))}
          </div>

          <div className="retro-header-yellow" style={{ fontSize: "10px" }}>⚡ Quick Links</div>
          <div style={{ padding: "6px 8px" }}>
            {[
              { icon: "🌐", label: "GitHub Profile", href: "https://github.com/AdityaPachupate" },
              { icon: "💼", label: "LinkedIn", href: "https://www.linkedin.com/in/adityapachupate/" },
              { icon: "🐦", label: "Twitter", href: "https://x.com/Adityatwtss" },
              { icon: "📧", label: "Email Me", href: "mailto:adityapachupate@gmail.com" },
              { icon: "📄", label: "My Resume", href: "/Aditya_Pachupate_Resume.pdf" },
            ].map((link, i) => (
              <div key={i} style={{ padding: "2px 0", display: "flex", alignItems: "center", gap: "4px" }}>
                <span style={{ fontSize: "11px" }}>{link.icon}</span>
                <a href={link.href} style={{ fontSize: "10px" }}>{link.label}</a>
              </div>
            ))}
          </div>

          <div className="retro-header" style={{ fontSize: "10px" }}>📊 Site Stats</div>
          <div style={{ padding: "6px 8px", fontSize: "10px", color: "hsl(0 0% 40%)" }}>
            <div style={{ textAlign: "center", padding: "4px", border: "1px solid hsl(0 0% 80%)", background: "hsl(0 0% 13%)", color: "hsl(120 100% 50%)", fontFamily: "'Courier New', monospace", fontSize: "14px", letterSpacing: "2px", marginBottom: "4px" }}>
              {visitorCount.toString().padStart(7, "0")}
            </div>
            <div style={{ textAlign: "center", fontSize: "9px" }}>Visitors since launch</div>
            <div style={{ marginTop: "8px", borderTop: "1px dotted hsl(0 0% 75%)", paddingTop: "4px" }}>
              <div>📄 Pages: {navTabs.length + 2}</div>
              {userStats && (
                <>
                  <div>📂 Repos: {userStats.public_repos}</div>
                  <div>👥 Followers: {userStats.followers}</div>
                </>
              )}
              <div style={{ marginTop: "4px" }}>🕐 Last Updated:</div>
              <div style={{ fontWeight: "bold" }}>{lastUpdated}</div>
            </div>
          </div>

          <div className="retro-header" style={{ fontSize: "10px" }}>📰 What's New</div>
          <div style={{ padding: "6px 8px" }}>
            {updates.map((update, i) => (
              <div key={i} style={{ padding: "3px 0", borderBottom: i < updates.length - 1 ? "1px dotted hsl(0 0% 85%)" : "none", fontSize: "10px" }}>
                <span style={{ color: "hsl(0 0% 50%)", fontSize: "9px" }}>[{update.date}]</span>{" "}
                {update.text}
              </div>
            ))}
          </div>

          <div style={{ padding: "8px" }}>
          </div>
        </div>

        {/* ---- MAIN CONTENT ---- */}
        <div style={{ padding: "0", background: "white" }}>
          {children}
        </div>

        {/* ---- RIGHT SIDEBAR ---- */}
        <div style={{ borderLeft: "1px solid hsl(0 0% 75%)", background: "hsl(220 14% 96%)", padding: "0" }}>
          <div className="retro-header-yellow" style={{ fontSize: "10px" }}>⭐ Featured Project</div>
          <div style={{ padding: "6px 8px" }}>
            <div style={{ border: "1px solid hsl(0 0% 80%)", background: "white", padding: "6px" }}>
              <div style={{ width: "100%", height: "70px", background: "hsl(220 14% 90%)", border: "1px solid hsl(0 0% 75%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", color: "hsl(0 0% 50%)", marginBottom: "4px", overflow: "hidden" }}>
                <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, hsl(220 70% 30%), hsl(260 60% 35%))", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "bold", letterSpacing: "1px" }}>🏥 CLINICAL CRM</div>
              </div>
              <a href="https://github.com/AdityaPachupate/CRM-personal-copy" style={{ fontWeight: "bold", fontSize: "11px" }}>🏥 Clinical CRM</a>
              <p style={{ fontSize: "9px", margin: "2px 0", color: "hsl(0 0% 40%)" }}>Enterprise CRM with Vertical Slice + CQRS, IndexedDB offline, optimistic UI &amp; cascading soft-delete.</p>
              <a href="https://crm-client-m898.onrender.com" style={{ fontSize: "9px" }}>🌐 Live Demo »</a>
            </div>
          </div>


          <div className="retro-header" style={{ fontSize: "10px" }}>🔨 Currently Working On</div>
          <div style={{ padding: "6px 8px", fontSize: "10px" }}>
            {isLoadingGithub ? (
              <div style={{ color: "hsl(0 0% 50%)", fontStyle: "italic" }}>Loading from GitHub...</div>
            ) : workingOnRepos.length > 0 ? (
              <>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {workingOnRepos.map((repo, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <span style={{ fontSize: "10px" }}>📂</span>
                      <a href={repo.url} style={{ fontWeight: "bold", fontSize: "10px" }}>{repo.repo}</a>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: "9px", color: "hsl(0 0% 50%)", marginTop: "8px", borderTop: "1px dotted hsl(0 0% 80%)", paddingTop: "4px" }}>
                  Status: <span style={{ color: "hsl(120 60% 35%)", fontWeight: "bold" }}>Active</span> · Last 30 days
                </div>
              </>
            ) : (
              <div style={{ color: "hsl(0 0% 50%)", fontStyle: "italic" }}>No recent activity found.</div>
            )}
          </div>

          <div className="retro-header-yellow" style={{ fontSize: "10px" }}>📜 Latest Commits</div>
          <div style={{ padding: "6px 8px" }}>
            {isLoadingGithub ? (
              <div style={{ fontSize: "10px", color: "hsl(0 0% 50%)", fontStyle: "italic" }}>Loading...</div>
            ) : commits.length === 0 ? (
              <div style={{ fontSize: "10px", color: "hsl(0 0% 50%)", fontStyle: "italic" }}>No recent commits.</div>
            ) : (
              commits.map((c, i) => (
                <div key={i} style={{ padding: "3px 0", borderBottom: i < commits.length - 1 ? "1px dotted hsl(0 0% 85%)" : "none", fontSize: "10px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "4px" }}>
                    <a href={c.url} style={{ fontSize: "10px", fontWeight: "bold" }}>{c.repo}</a>
                    <span style={{ color: "hsl(0 0% 50%)", fontSize: "9px" }}>{c.date}</span>
                  </div>
                  <div style={{ color: "hsl(0 0% 35%)", fontSize: "9px", marginTop: "1px" }}>{c.msg}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* === FOOTER === */}
      <div style={{ background: "linear-gradient(180deg, hsl(220 70% 25%), hsl(220 70% 15%))", padding: "8px 16px", borderTop: "2px solid hsl(45 100% 51%)" }}>
        <div style={{ textAlign: "center", color: "hsl(0 0% 80%)", fontSize: "10px" }}>
          <div style={{ marginBottom: "4px" }}>
            <Link to="/" style={{ color: "hsl(180 80% 70%)", margin: "0 6px" }}>🏠 Home</Link>|
            <Link to="/about" style={{ color: "hsl(180 80% 70%)", margin: "0 6px" }}>👤 About</Link>|
            <Link to="/projects" style={{ color: "hsl(180 80% 70%)", margin: "0 6px" }}>💻 Projects</Link>|
            <Link to="/contact" style={{ color: "hsl(180 80% 70%)", margin: "0 6px" }}>📧 Contact</Link>|
            <Link to="/resume" style={{ color: "hsl(180 80% 70%)", margin: "0 6px" }}>📄 Resume</Link>
          </div>
          <div style={{ fontSize: "9px", color: "hsl(0 0% 60%)", marginBottom: "2px" }}>
            Best viewed in <b>Internet Explorer 6.0</b> at <b>1024x768</b> resolution
          </div>
          <div style={{ fontSize: "9px", color: "hsl(0 0% 55%)" }}>
            © 2005-2026 Aditya Pachupate. All Rights Reserved. | Made with ♥ and HTML
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "4px" }}>
            <span style={{ border: "1px solid hsl(0 0% 40%)", padding: "1px 6px", fontSize: "8px", background: "hsl(220 60% 30%)", color: "white" }}>✅ HTML 4.01</span>
            <span style={{ border: "1px solid hsl(0 0% 40%)", padding: "1px 6px", fontSize: "8px", background: "hsl(120 40% 30%)", color: "white" }}>✅ CSS 2.1</span>
            <span style={{ border: "1px solid hsl(0 0% 40%)", padding: "1px 6px", fontSize: "8px", background: "hsl(0 60% 40%)", color: "white" }}>🚫 NO SPAM</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RetroLayout;
