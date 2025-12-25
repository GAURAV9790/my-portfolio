import { useState } from 'react'
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom'
import GauravResume from './Gauravoliresume3.pdf'
import ProfileImage from './assets/profile.jpeg'

const NAV_ITEMS = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'skills', label: 'Skills', path: '/skills' },
  { id: 'experience', label: 'Experience', path: '/experience' },
  { id: 'education', label: 'Education', path: '/education' },
  { id: 'projects', label: 'Projects', path: '/projects' },
  { id: 'certifications', label: 'Certifications', path: '/certifications' },
  { id: 'contact', label: 'Contact', path: '/contact' },
]

function SectionShell({ id, title, subtitle, children }) {
  return (
    <section id={id} className="mt-8 scroll-mt-28">
      <div className="rounded-3xl bg-gradient-to-br from-purple-500/30 via-primaryPurple/20 to-primaryPink/20 p-[1px] shadow-soft-card">
        <div className="rounded-3xl bg-gradient-to-br from-navy via-heroMid/80 to-heroEnd/90 p-6 sm:p-8 min-h-[calc(100vh-180px)] flex flex-col">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide text-textLightPurple">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-sm sm:text-base text-textGray max-w-3xl">
                {subtitle}
              </p>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  )
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-900/60 px-3 py-1 text-xs sm:text-sm font-medium text-textLightPurple border border-purple-500/40">
      {children}
    </span>
  )
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-900/80 px-3.5 py-1.5 text-xs sm:text-sm md:text-base text-white border border-purple-400/50">
      {children}
    </span>
  )
}

function HomeSection() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#1a103d] via-[#1e0f4a] to-[#2a0e4e]">
      <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row gap-8">
        {/* Left Section - Main Content */}
        <div className="bg-[#1e0f4a] bg-opacity-70 backdrop-blur-sm rounded-3xl p-8 md:p-12 flex-1">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">GAURAV OLI</h1>
            <p className="text-base sm:text-lg text-gray-300 mb-6">
              Full Stack Developer specializing in building scalable, modern web applications with a focus on MERN stack, 
              intuitive UI, and high-performance solutions.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Full Stack Developer</h2>
            <p className="text-sm sm:text-base text-gray-300 mb-6">
              A self-motivated and quick learner with a strong analytical mindset and a passion for technology. 
              Adept at problem-solving and delivering innovative solutions through technical expertise.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-2 bg-white bg-opacity-10 text-white rounded-full text-xs sm:text-sm">Full Stack Developer</span>
            <span className="px-4 py-2 bg-white bg-opacity-10 text-white rounded-full text-xs sm:text-sm">React & Node.js</span>
            <span className="px-4 py-2 bg-white bg-opacity-10 text-white rounded-full text-xs sm:text-sm">MERN Stack</span>
          </div>
          
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a 
              href="https://github.com/GAURAV9790" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full text-sm sm:text-base font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/oligaurav" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full text-sm sm:text-base font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a 
              href="#contact"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-pink-600 to-red-500 text-white rounded-full text-sm sm:text-base font-medium hover:opacity-90 transition-opacity"
            >
              Contact Me
            </a>
            <a
              href="#"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-600 to-green-400 text-white rounded-full text-sm sm:text-base font-medium hover:opacity-90 transition-opacity"
            >
              Download CV
            </a>
          </div>
        </div>
        {/* Right Section - Profile Image */}
        <div className="bg-[#1a103d] bg-opacity-70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 w-full md:w-80 flex-shrink-0 flex flex-col items-center text-center">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-purple-500/60 shadow-lg shadow-purple-500/40 mb-4">
            <img
              src={ProfileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm sm:text-base font-semibold text-white">Gaurav Oli</p>
            <i className="fas fa-check-circle text-blue-400 text-sm"></i>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <i className="fas fa-code text-xs text-gray-400"></i>
            <p className="text-xs sm:text-sm text-gray-300">Full Stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillsSection() {
  const skillGroups = [
    {
      title: 'Languages',
      items: [
        { label: 'C++', icon: '➕' },
        { label: 'Java', icon: '☕' },
        { label: 'Python', icon: '🐍' },
        { label: 'C#', icon: '💠' },
        { label: 'JavaScript', icon: '🟨' },
      ],
    },
    {
      title: 'Frontend',
      items: [
        { label: 'HTML', icon: '📄' },
        { label: 'CSS', icon: '🎨' },
        { label: 'JavaScript', icon: '🟨' },
        { label: 'React.js', icon: '⚛' },
        { label: 'Tailwind CSS', icon: '💨' },
        { label: 'Bootstrap', icon: '🅱' },
      ],
    },
    {
      title: 'Backend & Databases',
      items: [
        { label: 'Node.js', icon: '🌿' },
        { label: 'Express.js', icon: '🚂' },
        { label: 'SQL', icon: '🗄️' },
        { label: 'MySQL', icon: '💾' },
        { label: 'MongoDB', icon: '🍃' },
        { label: 'ANSI SQL', icon: '📊' },
      ],
    },
    {
      title: 'Computer Science Concepts',
      items: [
        { label: 'Data Structures & Algorithms', icon: '🧠' },
        { label: 'OOPs', icon: '🔁' },
        { label: 'Computer Networks', icon: '🌐' },
        { label: 'DBMS', icon: '🗄️' },
        { label: 'Operating System', icon: '💻' },
      ],
    },
  ]

  return (
    <SectionShell
      id="skills"
      title="Skills & Expertise"
      subtitle="A blend of strong computer science fundamentals and hands-on full stack development experience."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl bg-gradient-to-br from-purple-500/30 via-primaryPurple/20 to-primaryPink/20 p-[1px]"
          >
            <div className="rounded-3xl bg-slate-900/80 p-4 sm:p-5">
              <h3 className="text-base sm:text-lg font-semibold text-textLightPurple mb-3 tracking-wide">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Chip key={item.label}>
                    <span className="mr-1.5 text-base leading-none">{item.icon}</span>
                    <span>{item.label}</span>
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}

function ExperienceSection() {
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'AITF',
      location: 'Pune, Maharashtra, India',
      period: 'Current • Present',
      current: true,
      bullets: [
        'Currently working as a Full Stack Developer, building scalable web applications and delivering innovative solutions.',
      ],
    },
    {
      role: 'Frontend Development Intern',
      company: 'Epcos India Private Limited',
      location: 'Rewari, Haryana',
      period: 'June 2023 – September 2023',
      current: false,
      bullets: [
        'Contributed to frontend web development projects using HTML, CSS, JavaScript, and React.js.',
        'Designed and developed a cryptocurrency visualization web application with responsive and interactive UI.',
      ],
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'Epcos India Private Limited',
      location: 'Rewari, Haryana',
      period: 'July 2024 – September 2024',
      current: false,
      bullets: [
        'Enhanced technical expertise working with React.js, Bootstrap, Node.js, and Express.js.',
        'Designed and developed a fully responsive web page with intuitive UI and reliable backend functionality.',
      ],
    },
  ]

  return (
    <SectionShell
      id="experience"
      title="Experience"
      subtitle="Hands-on experience crafting modern web applications through professional internships."
    >
      <div className="space-y-4">
        {experiences.map((exp) => (
          <div
            key={exp.role}
            className={
              exp.current
                ? 'rounded-3xl bg-gradient-to-r from-purple-500 via-primaryPurple to-primaryPink p-[1px] shadow-xl shadow-purple-500/40'
                : 'rounded-3xl bg-gradient-to-r from-purple-500/40 via-primaryPurple/30 to-primaryPink/40 p-[1px]'
            }
          >
            <div className="rounded-3xl bg-slate-900/90 p-5 sm:p-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                  {exp.current && (
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400 border border-emerald-500/40">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-sm text-textLightPurple">{exp.company}</p>
                <p className="text-xs sm:text-sm text-textGray">
                  {exp.location} • {exp.period}
                </p>
                <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-textGray list-disc list-inside">
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}

function EducationSection() {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institute: 'Nanhi Pari Seemant Engineering Institute, Pithoragarh',
      period: 'July 2022 - June 2025',
     
    },
    {
      degree: 'Diploma in Electrical Engineering',
      institute: 'Government Polytechnic College Kanalichhina, Pithoragarh, Uttarakhand',
      period: 'July 2019 - June 2022',
      
    },
    {
      degree: 'Higher Secondary Education (Class XII)',
      institute: 'Government Inter College, Khetikhan, Champawat, Uttarakhand',
      period: 'June 2018 - March 2019',
    
    },
  ]

  return (
    <SectionShell
      id="education"
      title="Education"
      subtitle="A strong academic foundation in computer science and engineering complemented by electrical engineering and higher secondary education."
    >
      <div className="space-y-4">
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="rounded-3xl bg-gradient-to-r from-purple-500/35 via-primaryPurple/30 to-primaryPink/35 p-[1px]"
          >
            <div className="rounded-3xl bg-slate-900/85 p-5 sm:p-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white">{edu.degree}</h3>
                <p className="text-xs sm:text-sm text-textLightPurple mt-1">{edu.institute}</p>
                <p className="text-xs text-textGray mt-1">{edu.period}</p>
              </div>
              <p className="mt-2 sm:mt-0 text-sm font-semibold text-emerald-400">{edu.percentage}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}

function ProjectsSection() {
  const projects = [
    {
      name: 'Heritage Pass (2025)',
      tech: 'React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Stripe API',
      description:
        'Ticketless entry system for heritage sites with secure online payments and real-time slot updates, delivering a smooth visitor experience.',
      link: '',
    },
    {
      name: 'Hotel Haven (2023)',
      tech: 'MERN Stack (MongoDB, Express.js, React.js, Node.js)',
      description:
        'Secure hotel booking web application featuring user authentication, logout, data encryption, and reliable booking workflows.',
      link: 'https://github.com/GAURAV9790/Hotel-Heaven-',
    },
    {
      name: 'INTEGREX-COMPLIANCE',
      tech: '',
      description: 'GitHub project repository.',
      link: 'https://github.com/GAURAV9790/INTEGREX-COMPLIANCE',
    },
    {
      name: 'INTEGREX_WEB',
      tech: '',
      description: 'GitHub project repository.',
      link: 'https://github.com/GAURAV9790/INTEGREX_WEB',
    },
    {
      name: 'Job-Portal',
      tech: '',
      description: 'GitHub project repository.',
      link: 'https://github.com/GAURAV9790/Job-Portal',
    },
    {
      name: 'Signitronic-electronic-Ecommerce',
      tech: '',
      description: 'GitHub project repository.',
      link: 'https://github.com/GAURAV9790/Signitronic-electronic-Ecomerce',
    },
    {
      name: 'My-school-app',
      tech: '',
      description: 'GitHub project repository.',
      link: 'https://github.com/GAURAV9790/My-school-app',
    },
    {
      name: 'Todo-list',
      tech: '',
      description: 'GitHub project repository.',
      link: 'https://github.com/GAURAV9790/Todo-list',
    },
  ]

  return (
    <SectionShell
      id="projects"
      title="Projects"
      subtitle="Real-world projects showcasing full stack development, secure architectures, and user-focused design."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-3xl bg-gradient-to-br from-purple-500/40 via-primaryPurple/30 to-primaryPink/40 p-[1px]"
          >
            <div className="rounded-3xl bg-slate-900/85 p-5 sm:p-6 flex flex-col gap-3">
              <h3 className="text-base sm:text-lg font-semibold text-white">{project.name}</h3>
              <p className="text-xs sm:text-sm text-textGray">{project.description}</p>
              {project.tech && project.tech.trim().length > 0 && (
                <p className="text-xs sm:text-sm text-textLightPurple">
                  <span className="font-semibold">Tech Stack: </span>
                  {project.tech}
                </p>
              )}
              {project.link && project.link.trim().length > 0 && (
                <div className="pt-1">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-slate-900/80 border border-purple-500/40 px-3 py-1 text-xs font-medium text-textLightPurple hover:bg-purple-500/20 transition"
                  >
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}

function CertificationsSection() {
  const certifications = [
    {
      name: 'Version Control Certification (2025)',
      issuer: 'Meta',
      description: 'Completed a course on version control systems, branching strategies, and collaboration workflows.',
    },
    {
      name: 'JavaScript Certification (2024)',
      issuer: 'CodeChef',
      description: 'Demonstrated proficiency in core JavaScript concepts and problem-solving.',
    },
    {
      name: 'Cybersecurity Essentials (2022)',
      issuer: 'Cisco / Other Platform',
      description:
        'Gained understanding of cybersecurity principles, threat mitigation, data protection, and legal aspects of cybersecurity.',
    },
  ]

  return (
    <SectionShell
      id="certifications"
      title="Certifications"
      subtitle="Continuous learning through professional certifications and upskilling."
    >
      <div className="space-y-3">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="rounded-2xl bg-slate-900/80 border border-purple-500/30 p-4"
          >
            <h3 className="text-sm sm:text-base font-semibold text-white">{cert.name}</h3>
            <p className="text-xs text-textLightPurple mt-1">{cert.issuer}</p>
            <p className="text-xs sm:text-sm text-textGray mt-1">{cert.description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}

function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I'm currently working on this feature. Your message is important to me and I'll get back to you soon!");
  };

  return (
    <SectionShell
      id="contact"
      title="Contact"
      subtitle="Let's collaborate on impactful projects or discuss opportunities."
    >
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-4 text-sm sm:text-base text-textGray">
          <div className="rounded-2xl bg-slate-900/80 border border-purple-500/30 p-4 space-y-2">
            <p>
              <span className="text-textLightPurple font-semibold">Email:</span>{' '}
              <a href="mailto:gauravoli777@gmail.com" className="text-white underline-offset-4 hover:underline">
                gauravoli777@gmail.com
              </a>
            </p>
            <p>
              <span className="text-textLightPurple font-semibold">Phone:</span>{' '}
              <a href="tel:+919411799414" className="text-white">
                +91 9411799414
              </a>
            </p>
            <p>
              <span className="text-textLightPurple font-semibold">Location:</span>{' '}
              Champawat, Uttarakhand, India
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-slate-900/80 border border-purple-500/30 p-4 sm:p-5">
          <h3 className="text-sm sm:text-base font-semibold text-textLightPurple mb-3">
            Quick Message (UI only)
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label className="block text-textGray" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-xl bg-slate-950/70 border border-purple-500/30 px-3 py-2 text-sm text-white outline-none focus:border-primaryPurple focus:ring-1 focus:ring-primaryPurple"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-textGray" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-xl bg-slate-950/70 border border-purple-500/30 px-3 py-2 text-sm text-white outline-none focus:border-primaryPurple focus:ring-1 focus:ring-primaryPurple"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-textGray" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full resize-none rounded-xl bg-slate-950/70 border border-purple-500/30 px-3 py-2 text-sm text-white outline-none focus:border-primaryPurple focus:ring-1 focus:ring-primaryPurple"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 text-sm font-semibold shadow-lg shadow-purple-500/40 hover:opacity-90 transition w-full sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </SectionShell>
  )
}

function HomePage({ onContactClick }) {
  return (
    <>
      <HomeSection onContactClick={onContactClick} />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </>
  )
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  const handleHomeContact = () => {
    if (window.location.pathname === '/') {
      const el = document.getElementById('contact')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      navigate('/contact')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-heroStart via-heroMid to-heroEnd text-white">
      <div className="flex min-h-screen flex-col pb-8 pt-2 sm:pt-3 lg:pt-4">
        <header className="sticky top-0 z-50 mb-4 flex flex-col gap-4 rounded-3xl bg-slate-950/80 border border-purple-500/40 px-4 py-3 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-xl font-bold">
              &lt;/&gt;
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-textLightPurple">
                GAURAV OLI
              </p>
              <p className="text-xs text-textGray">Full Stack Developer</p>
            </div>
          </div>
          <nav className="hidden md:flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-full px-3 py-1.5 font-medium transition border text-xs sm:text-sm ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent'
                      : 'bg-slate-900/60 text-textGray border-purple-500/30 hover:border-purple-400/70'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={GauravResume}
              download="Gaurav_Oli_Resume.pdf"
              className="rounded-full px-3 py-1.5 font-medium text-xs sm:text-sm bg-gradient-to-r from-emerald-500 to-green-500 text-white border border-transparent shadow-md shadow-emerald-500/40 hover:opacity-90 transition"
            >
              Download Resume
            </a>
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-full border border-purple-500/40 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-textLightPurple"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            Menu
          </button>
        </header>

        {mobileOpen && (
          <nav className="mb-4 flex flex-col gap-1 rounded-2xl bg-slate-950/70 border border-purple-500/30 px-4 py-3 md:hidden">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `w-full text-left rounded-full px-3 py-1.5 text-sm font-medium transition ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-slate-900/70 text-textGray hover:border-purple-400/70'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={GauravResume}
              download="Gaurav_Oli_Resume.pdf"
              className="w-full text-center rounded-full px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-md shadow-emerald-500/40 hover:opacity-90 transition mt-1"
            >
              Download Resume
            </a>
          </nav>
        )}

        <main className="flex-1 pb-6">
          <Routes>
            <Route path="/" element={<HomePage onContactClick={handleHomeContact} />} />
            <Route path="/skills" element={<SkillsSection />} />
            <Route path="/experience" element={<ExperienceSection />} />
            <Route path="/education" element={<EducationSection />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/certifications" element={<CertificationsSection />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </main>

        <footer className="mt-8 border-t border-slate-700/80 py-6 text-center text-sm sm:text-base text-slate-100">
          <p>
            Built with{' '}
            <span className="inline-block text-pink-400 text-lg sm:text-xl animate-pulse">❤</span>{' '}
            by <span className="text-textLightPurple">Gaurav Oli</span>
          </p>
          <p className="mt-2 text-slate-300">{'Copyright '}{new Date().getFullYear()} All rights reserved</p>
        </footer>
      </div>
    </div>
  )
}

export default App
