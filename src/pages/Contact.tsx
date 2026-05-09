import { useState } from "react";
import RetroLayout from "@/components/RetroLayout";

const Contact = () => {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <RetroLayout>
      <div className="retro-header">📧 Contact Me</div>
      <div style={{ padding: "10px 12px", fontSize: "11px" }}>
        <p style={{ margin: "0 0 10px 0" }}>
          Got a question, project idea, or just want to say hi? Fill out the form below or reach out through any of my social links!
        </p>
      </div>

      <div className="retro-separator" />

      <div className="retro-header">✉️ Send a Message</div>
      <div style={{ padding: "10px 12px" }}>
        <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
          <div style={{ marginBottom: "8px" }}>
            <label style={{ fontSize: "11px", display: "block", fontWeight: "bold", marginBottom: "2px" }}>👤 Name:</label>
            <input className="retro-input" style={{ width: "100%", boxSizing: "border-box" }} value={contactForm.name} onChange={e => setContactForm(p => ({ ...p, name: e.target.value }))} required />
          </div>
          <div style={{ marginBottom: "8px" }}>
            <label style={{ fontSize: "11px", display: "block", fontWeight: "bold", marginBottom: "2px" }}>📧 Email:</label>
            <input className="retro-input" type="email" style={{ width: "100%", boxSizing: "border-box" }} value={contactForm.email} onChange={e => setContactForm(p => ({ ...p, email: e.target.value }))} required />
          </div>
          <div style={{ marginBottom: "8px" }}>
            <label style={{ fontSize: "11px", display: "block", fontWeight: "bold", marginBottom: "2px" }}>💬 Message:</label>
            <textarea className="retro-input" rows={6} style={{ width: "100%", boxSizing: "border-box", resize: "vertical" }} value={contactForm.message} onChange={e => setContactForm(p => ({ ...p, message: e.target.value }))} required />
          </div>
          <button className="retro-button" type="submit" style={{ padding: "4px 24px" }}>📤 Send Message</button>
        </form>
      </div>

      <div className="retro-separator" />

      <div className="retro-header">🔗 Social Media & Links</div>
      <div style={{ padding: "10px 12px" }}>
        <table className="retro-table" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Platform</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: "bold" }}>🌐 GitHub</td>
              <td><a href="https://github.com/AdityaPachupate">github.com/AdityaPachupate</a></td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>🐦 Twitter</td>
              <td><a href="https://x.com/Adityatwtss">x.com/Adityatwtss</a></td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>💼 LinkedIn</td>
              <td><a href="https://www.linkedin.com/in/adityapachupate/">linkedin.com/in/adityapachupate</a></td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>📧 Email</td>
              <td><a href="mailto:adityapachupate@gmail.com">adityapachupate@gmail.com</a></td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>📄 Resume</td>
              <td><a href="https://drive.google.com/file/d/1xESongoZi-xckAUGvN2VM_PGnAjxuW_c/view?usp=sharing">View / Download Resume</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </RetroLayout>
  );
};

export default Contact;
