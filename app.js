const { useState, useEffect } = React;

function Portfolio() {
  const [profilePhoto, setProfilePhoto] = useState('my profile pic.jpg');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [showCopyCode, setShowCopyCode] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    { id: 1, name: 'Tic Tac Toe Game', description: 'Interactive Tic Tac Toe game built with JavaScript and React. Play against AI or another player.', url: 'https://github.com/Anish2076/tictactoerepo' },
    { id: 2, name: 'Calculator App', description: 'A fully functional calculator application with a clean UI and smooth operations.', url: 'https://github.com/Anish2076/calculatorrepo' },
    { id: 3, name: 'More Projects Coming', description: 'Stay tuned for more amazing projects! Check my GitHub for the latest work.', url: 'https://github.com/Anish2076' },
  ];

  const skills = ['HTML', 'CSS', 'JavaScript', 'REACT', 'Java', 'GitHub', 'REST APIs'];

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'anishjogi10@gmail.com', link: 'mailto:anishjogi10@gmail.com' },
    { icon: '📱', label: 'Phone', value: '+91 8217634422', link: 'tel:+918217634422' },
    { icon: '📍', label: 'Location', value: 'Bangalore, India', link: '#' },
  ];

  const socialLinks = [
    { icon: '💻', name: 'GitHub', url: 'https://github.com/Anish2076', handle: 'Anish2076' },
    { icon: '💼', name: 'LinkedIn', url: 'https://www.linkedin.com/in/anish-kumar-m-876478302', handle: 'Anish Kumar M' },
    { icon: '🎨', name: 'Portfolio', url: '#', handle: 'View Live' },
  ];

  // Handle profile photo upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePhoto(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Copy photo code to clipboard
  const copyPhotoCode = () => {
    const codeText = `'${profilePhoto}'`;
    navigator.clipboard.writeText(codeText);
    alert('✅ Photo code copied! Paste it in line 4 of app.js');
  };

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">💼 Anish Kumar M</div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Portfolio</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="contact-btn">GET IN TOUCH</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-label">WELCOME TO MY PORTFOLIO</p>
            <h1 className="hero-title">FULL STACK DEVELOPER</h1>
            <p className="hero-subtitle">BUILD AMAZING WEB EXPERIENCES</p>
            <button className="cta-btn">VIEW MY WORK</button>
          </div>
          <div className="hero-image">
            {profilePhoto ? (
              <img src={profilePhoto} alt="Profile" className="profile-img" />
            ) : (
              <div className="image-placeholder">📸</div>
            )}
          </div>
        </div>
        <label className="photo-upload">
          <input type="file" accept="image/*" onChange={handlePhotoUpload} style={{ display: 'none' }} />
          <span className="upload-link">+ Upload Photo</span>
        </label>
        {profilePhoto !== 'https://via.placeholder.com/500x500?text=Your+Photo' && (
          <button onClick={copyPhotoCode} className="copy-code-btn">
            📋 Copy Code to Save
          </button>
        )}
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-wrapper">
          <h2>About Me</h2>
          <p>I'm a passionate Full Stack Developer with expertise in building modern, responsive web applications. I specialize in creating seamless user experiences and robust backend systems that solve real-world problems.</p>
          
          <p><strong>🎓 Java Full Stack Developer at Tap Academy | BCA Graduate</strong></p>
          
          <p> I'm committed to writing clean, maintainable code and staying updated with the latest industry trends. I love tackling challenging problems and turning ideas into elegant solutions that make a difference.</p>
          
          <p><strong>💡 What I Do:</strong> I develop full-stack web applications using modern technologies like React, JavaScript, Java, and REST APIs. From designing intuitive user interfaces to building scalable backend systems, I ensure every project meets the highest quality standards.</p>
          
          <p><strong>🎯 My Passion:</strong> I'm driven by the desire to create web experiences that are not just functional but also beautiful and user-friendly. I believe in continuous learning and collaborating with talented teams to build products that impact users positively.</p>
          
          <p><strong>🚀 Looking For:</strong> I'm actively seeking opportunities to work on challenging projects where I can apply my skills in a collaborative environment and grow as a developer. Open to internships, freelance projects, or full-time positions.</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-wrapper">
          <h2>Technical Skills</h2>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div 
                key={skill} 
                className="skill animated-skill"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
                }}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <span className="skill-text">{skill}</span>
                <span className="skill-bar"></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-wrapper">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-number">0{project.id}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.url} className="project-link">View Project →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="resume-section">
        <div className="section-wrapper">
          <h2>My Resume</h2>
          <p className="resume-intro">Download my resume to know more about my experience and qualifications.</p>
          
          <div className="resume-container">
            <div className="resume-preview">
              <div className="resume-placeholder">
                📄 Resume Document
              </div>
              <p className="resume-note">Click the button below to download my full resume</p>
            </div>

            <div className="resume-actions">
              <a href="resume.pdf" download="Anish_Kumar_M_Resume.pdf" className="resume-btn">
                ⬇️ Download Resume (PDF)
              </a>
              <a href="resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn-secondary">
                👁️ View Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-wrapper">
          <h2>Let's Work Together</h2>
          <p className="contact-intro">I'm always interested in hearing about new projects and opportunities.</p>
          
          {/* Contact Details Grid */}
          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <a key={index} href={info.link} className="contact-card">
                <span className="contact-icon">{info.icon}</span>
                <span className="contact-label">{info.label}</span>
                <span className="contact-value">{info.value}</span>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="social-section">
            <h3>Connect With Me</h3>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="social-card">
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                  <span className="social-handle">{social.handle}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Anish Kumar M. All rights reserved.</p>
      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Portfolio />);