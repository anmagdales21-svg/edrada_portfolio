export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <LearningSection />
      <ContactSection />
    </>
  )
}

// ========== HERO SECTION ==========
function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Open to Opportunities
          </div>
          
          <h1 className="hero-title">
            Computer Systems <span className="gradient-text">Analyst</span>
          </h1>
          
          <p className="hero-subtitle">
            I am a Computer Systems Analyst with a strong foundation in system analysis 
            and software development principles, focused on designing efficient, reliable, 
            and user-centered information systems that support organizational needs.
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Get In Touch
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">3+</div>
              <div className="hero-stat-label">Projects</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">3+</div>
              <div className="hero-stat-label">Skills Growing</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">∞</div>
              <div className="hero-stat-label">Growth Mindset</div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-image-container">
            <div className="hero-image-bg"></div>
            <div className="hero-profile-frame">
              <img 
                src="/profile.jpg" 
                alt="An Edrada - Computer Systems Analyst"
                className="hero-profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ========== ABOUT SECTION ==========
function AboutSection() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-image-container">
              <div style={{ 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '6rem',
                color: 'white'
              }}>
                👩‍💻
              </div>
            </div>
            <div className="about-image-decoration"></div>
          </div>
          
          <div className="about-content">
            <h2>Hi, I'm <span className="gradient-text">An Edrada</span></h2>
            
            <p className="about-text">
              I am a Computer Systems Analyst passionate about understanding business 
              requirements and translating them into effective technical solutions.
            </p>
            
            <p className="about-text">
              I focus on analyzing system workflows, improving existing processes, and 
              supporting the development of reliable applications. I am currently strengthening 
              my skills in JavaScript, Data Structures and Algorithms, and version control using Git.
            </p>
            
            <p className="about-text">
              I value clean system design, continuous learning, and creating solutions that 
              enhance efficiency and user experience. My goal is to grow into a systems analyst 
              who designs scalable, user-focused, and modern systems while contributing 
              meaningfully to organizational success and the tech community.
            </p>
            
            <div className="about-highlights">
              <div className="about-highlight">
                <div className="about-highlight-icon">📊</div>
                <div className="about-highlight-text">
                  <h4>System Analysis</h4>
                  <p>Requirements gathering & modeling</p>
                </div>
              </div>
              <div className="about-highlight">
                <div className="about-highlight-icon">⚙️</div>
                <div className="about-highlight-text">
                  <h4>Process Optimization</h4>
                  <p>Workflow improvement solutions</p>
                </div>
              </div>
              <div className="about-highlight">
                <div className="about-highlight-icon">🗄️</div>
                <div className="about-highlight-text">
                  <h4>Database Design</h4>
                  <p>Data modeling & structure</p>
                </div>
              </div>
              <div className="about-highlight">
                <div className="about-highlight-icon">🎯</div>
                <div className="about-highlight-text">
                  <h4>User-Centered Design</h4>
                  <p>Solutions that enhance UX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ========== PROJECTS SECTION ==========
function ProjectsSection() {
  const projects = [
    {
      title: "Academic Information System Analysis",
      description: "A system analysis project focused on identifying requirements, modeling workflows, and improving how student records are managed. Demonstrates skills in requirements gathering, process analysis, and system documentation.",
      badge: "What I Know",
      tags: ["Requirements Analysis", "Process Flow Diagrams", "Database Structure Design"],
      icon: "🎓",
      gradient: "linear-gradient(135deg, #2563eb, #3b82f6)"
    },
    {
      title: "Business Process Improvement System",
      description: "A system designed to analyze and optimize existing workflows within an organization. Highlights my ability to evaluate inefficiencies and recommend technology-based solutions.",
      badge: "What I Learned",
      tags: ["System Evaluation", "Process Optimization", "User Requirement Documentation"],
      icon: "📈",
      gradient: "linear-gradient(135deg, #06b6d4, #22d3ee)"
    },
    {
      title: "Task and Resource Tracking System",
      description: "A system created to help teams monitor tasks, workloads, and system usage. Emphasizes user-focused system design and scalability.",
      badge: "What I'm Aspiring To",
      tags: ["System Modeling", "Data Organization", "User Experience Analysis"],
      icon: "📋",
      gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)"
    }
  ]

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">The Big Three</h2>
          <p className="section-subtitle">
            Key system projects that showcase my growth as a Computer Systems Analyst
          </p>
        </div>
        
        <div className="grid grid-3">
          {projects.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-image" style={{ background: project.gradient }}>
                <span className="project-icon">{project.icon}</span>
              </div>
              <div className="project-content">
                <span className="project-badge">{project.badge}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========== LEARNING SECTION ==========
function LearningSection() {
  const learningItems = [
    {
      title: "Systems Analysis and Design",
      date: "January 2026 – Present",
      description: "To improve my ability to gather requirements, create system models, and propose effective technical solutions.",
      progress: 40,
      icon: "📐"
    },
    {
      title: "Database Concepts and Data Modeling",
      date: "December 2025 – Present",
      description: "To understand how data is structured, stored, and accessed within information systems.",
      progress: 55,
      icon: "🗃️"
    },
    {
      title: "Business Process Modeling (UML, Flowcharts)",
      date: "January 2026 – Present",
      description: "To clearly document system behavior and communicate solutions between technical and non-technical stakeholders.",
      progress: 35,
      icon: "📊"
    }
  ]

  return (
    <section id="learning" className="section learning">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Currently Learning</h2>
          <p className="section-subtitle">
            Continuously building skills essential to a Computer Systems Analyst role
          </p>
        </div>
        
        <div className="grid" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {learningItems.map((item, index) => (
            <div key={index} className="learning-card">
              <div className="learning-icon">{item.icon}</div>
              <div className="learning-content">
                <span className="learning-date">{item.date}</span>
                <h3 className="learning-title">{item.title}</h3>
                <p className="learning-description">{item.description}</p>
                <div className="learning-progress">
                  <div 
                    className="learning-progress-bar" 
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="section-decoration">
        <div className="decoration-circle decoration-circle-1"></div>
        <div className="decoration-circle decoration-circle-2"></div>
      </div>
    </section>
  )
}

// ========== CONTACT SECTION ==========
function ContactSection() {
  return (
    <section id="contact" className="section contact">
      {/* Background Visual Elements */}
      <div className="contact-bg-elements">
        <div className="contact-bg-grid"></div>
        <div className="contact-bg-bars">
          <div className="bar bar-1"></div>
          <div className="bar bar-2"></div>
          <div className="bar bar-3"></div>
          <div className="bar bar-4"></div>
          <div className="bar bar-5"></div>
        </div>
        <div className="contact-bg-shapes">
          <div className="shape shape-diamond"></div>
          <div className="shape shape-circle"></div>
          <div className="shape shape-dots"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="contact-wrapper">
          {/* Email Form Card */}
          <div className="email-form-card">
            <h2 className="email-form-title">Email me</h2>
            <p className="email-form-subtitle">
              Looking for a systems analyst? Fill out the form and I'll get back to you!
            </p>
            
            <form 
              className="email-form" 
              action={`https://formsubmit.co/anmagdales21@gmail.com`}
              method="POST"
            >
              {/* FormSubmit configuration */}
              <input type="hidden" name="_subject" value="New Portfolio Contact!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-input" 
                  placeholder="John Doe"
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-input" 
                  placeholder="john@example.com"
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className="form-textarea" 
                  placeholder="Tell me about your project..."
                  rows="4"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary btn-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info Side */}
          <div className="contact-info-side">
            <div className="contact-info-card">
              <h3>Let's Connect</h3>
              <p>
                I'm currently looking for opportunities to contribute to meaningful projects 
                and grow as a Computer Systems Analyst.
              </p>
              
              <div className="contact-methods">
                <a href="mailto:anmagdales21@gmail.com" className="contact-method">
                  <div className="contact-method-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className="contact-method-text">
                    <span className="contact-method-label">Email</span>
                    <span className="contact-method-value">anmagdales21@gmail.com</span>
                  </div>
                </a>
                
                <a href="https://github.com/anmagdales21-svg" target="_blank" rel="noopener noreferrer" className="contact-method">
                  <div className="contact-method-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  </div>
                  <div className="contact-method-text">
                    <span className="contact-method-label">GitHub</span>
                    <span className="contact-method-value">anmagdales21-svg</span>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Decorative Quote */}
            <div className="contact-quote">
              <blockquote>
                "Great systems are built through collaboration and understanding."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
