import RetroLayout from "@/components/RetroLayout";

const About = () => {
  return (
    <RetroLayout>
      <div className="retro-header" style={{ display: "flex", justifyContent: "space-between" }}>
        <span>👤 About Me</span>
      </div>
      <div style={{ padding: "10px 12px", display: "flex", gap: "12px" }}>
        <div style={{ flexShrink: 0 }}>
          <div style={{ width: "140px", height: "140px", border: "2px solid hsl(0 0% 75%)", background: "hsl(220 14% 93%)", overflow: "hidden" }}>
            <img src="https://adityapachupate.vercel.app/IMG/dp3.jpg" alt="Aditya Pachupate" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          </div>
          <div style={{ textAlign: "center", fontSize: "9px", color: "hsl(0 0% 50%)", marginTop: "2px" }}>📸 Aditya P.</div>
        </div>
        <div style={{ fontSize: "11px" }}>
          <p style={{ margin: "0 0 8px 0" }}>
            <b>Hello World!</b> My name is <span style={{ color: "hsl(220 70% 25%)", fontWeight: "bold" }}>Aditya Pachupate</span> and welcome to my corner of the World Wide Web! 🌐
          </p>
          <p style={{ margin: "0 0 8px 0" }}>
            I'm a Full Stack Developer from Karad, India. I primarily work with React, JavaScript, and Tailwind for the frontend, and Node.js and MongoDB for the backend. I love building things and learning something new every day.
          </p>
          <p style={{ margin: "0 0 8px 0" }}>
            I'm currently working at <b>Cognizant Technology Solutions</b> as a Programmer Analyst Trainee, building web applications with C#, .NET Core, and Angular. I love creating cool projects and exploring new technologies!
          </p>
        </div>
      </div>

      <div className="retro-separator" />

      <div className="retro-header">📋 Personal Details</div>
      <div style={{ padding: "10px 12px" }}>
        <table className="retro-table" style={{ width: "100%" }}>
          <tbody>
            <tr><td style={{ fontWeight: "bold", width: "30%" }}>📍 Location</td><td>Karad, Maharashtra, India</td></tr>
            <tr><td style={{ fontWeight: "bold" }}>📞 Phone</td><td>+91 7378556711</td></tr>
            <tr><td style={{ fontWeight: "bold" }}>💼 Current Role</td><td>Programmer Analyst Trainee @ Cognizant</td></tr>
            <tr><td style={{ fontWeight: "bold" }}>🎓 Education</td><td>B.Tech, Electronics & Telecom, GCE Karad (CGPA: 7.04)</td></tr>
            <tr><td style={{ fontWeight: "bold" }}>☕ Fuel</td><td>Chai</td></tr>
            <tr><td style={{ fontWeight: "bold" }}>🌐 Languages</td><td>English, Hindi, Marathi</td></tr>
          </tbody>
        </table>
      </div>

      <div className="retro-separator" />

      {/* Days I Code - Retro Style */}
      <div className="retro-header">💻 Days I Code</div>
      <div style={{ padding: "10px 12px" }}>
        <div style={{ border: "2px inset hsl(0 0% 75%)", background: "hsl(0 0% 98%)", padding: "8px", marginBottom: "8px" }}>
          <div style={{ fontSize: "10px", fontWeight: "bold", marginBottom: "6px", color: "hsl(220 70% 25%)" }}>📊 GitHub Contribution Chart</div>
          <div style={{ overflow: "auto" }}>
            <img
              src="https://ghchart.rshah.org/008000/AdityaPachupate55"
              alt="Aditya's GitHub Contribution Chart"
              style={{ width: "100%", minWidth: "600px", height: "auto", imageRendering: "pixelated" as any }}
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <div style={{ flex: "1", minWidth: "200px", border: "1px solid hsl(0 0% 80%)", background: "white" }}>
            <div style={{ background: "hsl(45 80% 88%)", padding: "3px 6px", fontSize: "10px", fontWeight: "bold", borderBottom: "1px solid hsl(45 60% 65%)" }}>🏆 LeetCode Stats</div>
            <div style={{ padding: "4px" }}>
              <a href="https://leetcode.com/u/adityapachupate/" target="_blank" rel="noopener noreferrer">
                <img src="https://leetcard.jacoblin.cool/adityapachupate?height=180&theme=light&border=0" alt="LeetCode Stats" style={{ width: "100%", height: "auto" }} />
              </a>
            </div>
          </div>
          <div style={{ flex: "1", minWidth: "200px", border: "1px solid hsl(0 0% 80%)", background: "white" }}>
            <div style={{ background: "hsl(120 40% 88%)", padding: "3px 6px", fontSize: "10px", fontWeight: "bold", borderBottom: "1px solid hsl(120 30% 65%)" }}>🧑‍💻 GeeksForGeeks Stats</div>
            <div style={{ padding: "4px" }}>
              <a href="https://www.geeksforgeeks.org/user/adityapachupate/" target="_blank" rel="noopener noreferrer">
                <img src="https://gfgstatscard.vercel.app/adityapachupate" alt="GFG Stats" style={{ width: "100%", height: "auto" }} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="retro-separator" />

      <div className="retro-header">🔗 Find Me Online</div>
      <div style={{ padding: "10px 12px", fontSize: "11px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div>🌐 <a href="https://github.com/AdityaPachupate">GitHub — github.com/AdityaPachupate</a></div>
          <div>🐦 <a href="https://x.com/Adityatwtss">Twitter — x.com/Adityatwtss</a></div>
          <div>💼 <a href="https://www.linkedin.com/in/adityapachupate/">LinkedIn — linkedin.com/in/adityapachupate</a></div>
          <div>📧 <a href="mailto:adityapachupate@gmail.com">Email — adityapachupate@gmail.com</a></div>
          <div>📄 <a href="https://drive.google.com/file/d/1xESongoZi-xckAUGvN2VM_PGnAjxuW_c/view?usp=sharing">Resume — View / Download</a></div>
        </div>
      </div>
    </RetroLayout>
  );
};

export default About;
