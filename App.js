
import React from "react";

export default function App() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: 'auto',
      padding: '2rem',
      backgroundColor: '#fff',
      color: '#333',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ color: '#0066cc' }}>Ramadhan Salim</h1>
      <p><strong>Web Designer & Front-End Developer</strong> | Nairobi, Kenya</p>

      <section>
        <h2 style={{ color: '#0066cc' }}>About Me</h2>
        <p>I'm a freelance web designer and front-end developer based in Nairobi. I specialize in creating clean, responsive websites for small businesses and startups.</p>
      </section>

      <section>
        <h2 style={{ color: '#0066cc' }}>Services Offered</h2>
        <ul>
          <li>Responsive Web Design</li>
          <li>Front-End Development</li>
          <li>Website Redesigns</li>
          <li>Landing Pages</li>
          <li>Portfolio Websites</li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: '#0066cc' }}>Skills</h2>
        <ul>
          <li>HTML5, CSS3, JavaScript</li>
          <li>Bootstrap, Tailwind CSS</li>
          <li>React.js</li>
          <li>Git & GitHub</li>
          <li>Figma</li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: '#0066cc' }}>Selected Projects</h2>
        <p>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/Salimhac" target="_blank" rel="noreferrer">
            github.com/Salimhac
          </a>
        </p>
      </section>

      <section>
        <h2 style={{ color: '#0066cc' }}>Why Work With Me?</h2>
        <ul>
          <li>I deliver clean, responsive code</li>
          <li>Clear communication and fast turnaround</li>
          <li>I understand what small businesses need</li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: '#0066cc' }}>Contact</h2>
        <p><strong>Email:</strong> melanj23@gmail.com</p>
        <p><strong>WhatsApp:</strong> +254 719 622 849</p>
        <p><strong>GitHub:</strong> github.com/Salimhac</p>
      </section>
    </div>
  );
}
