import React from 'react';
import SectionShell from '../common/SectionShell';

function ProjectsSection() {
  const projects = [
    {
      name: 'INTEGREX-COMPLIANCE',
      tech: 'Next.js, React, Node.js, MongoDB, Tailwind CSS',
      description: 'Developed a clean, modern corporate website for company marketing with responsive design and attractive UI. The project features a professional layout, smooth animations, and optimized performance. Hosted on Vercel for fast, reliable global delivery.',
      link: 'https://github.com/GAURAV9790/INTEGREX-COMPLIANCE',
      hostedLink: 'https://www.integrex.in'
    },
    {
      name: 'Varkly Global — ISO 9001 Audit Management',
      tech: 'React, Node.js, MySQL, GoDaddy cPanel, RBAC, Authentication',
      description: 'Built a responsive audit management web application for corporate profiles with secure authentication and role-based access control. Includes ISO 9001 compliance workflows, real-time audit checklist tracking, auditor management, audit performance monitoring, contact review, invoice generation, and payment/dues tracking.',
      link: '',
      hostedLink: 'https://varklyglobal.com'
    },
    {
      name: 'AITF Management Certification Ltd.',
      tech: 'Next.js, React, Node.js, MongoDB, Tailwind CSS',
      description: 'Developed and maintained a complete corporate website and internal certification management system for AITF Management Certification Ltd. The project includes a public-facing website for clients and an internal admin system to manage certifications, client records, automated communications, and certification workflows. Hosted on GoDaddy for reliable enterprise-grade hosting.',
      link: 'https://www.aitf.org.in',
      hostedLink: 'https://www.aitf.co.in'
    },
    {
      name: 'QMS Financial Portal',
      tech: 'Node.js, Express, React, SQL, Digital Signature Integration',
      description: 'Designed and developed a QMS-based financial portal for managing company invoices and billing workflows. Implemented invoice generation with structured financial data, client details, and certification references. Integrated Digital Signature functionality for authorized signatures on invoices. Developed secure admin panels for invoice management and ensured data accuracy for financial operations. Hosted on GoDaddy for enterprise reliability.',
      link: 'http://www.qmscare.com/',
      hostedLink: 'http://www.qmscare.com/'
    },
    {
      name: 'The Himalayan Traveller',
      tech: 'MERN Stack (MongoDB, Express.js, React.js, Node.js), JWT Authentication, Cloudinary, Real-time Updates',
      description: 'A comprehensive travel blogging platform featuring user authentication, admin panel, blog management with CRUD operations, real-time interactions, likes/comments system, image uploads via Cloudinary, and a dynamic gallery section managed by admin. Built as a real-time platform for Himalayan travel enthusiasts.',
      hostedLink: 'https://e-himalayan-traveller.vercel.app',
      link: 'https://github.com/GAURAV9790/The-Himalayan-Traveller'
    },
    {
      name: 'Job Portal',
      tech: 'MERN Stack (MongoDB, Express.js, React.js, Node.js), JWT, Cloudinary, Tailwind CSS',
      description: 'A full-stack job portal connecting job seekers and recruiters. Features include role-based authentication (Admin/Recruiter/Job Seeker), job postings, applications, resume uploads via Cloudinary, and a responsive interface. Built with secure JWT authentication, RESTful API, and modern UI components.',
      link: 'https://github.com/GAURAV9790/Job-Portal',
    },
    {
      name: 'Signitronic E-commerce',
      tech: 'Next.js, Node.js, MySQL, Tailwind CSS',
      description: 'A full-featured electronics eCommerce platform with admin dashboard, built from scratch with custom design. The application features a responsive interface, product catalog, shopping cart, and secure checkout. Developed as part of a college software engineering exam, this project includes comprehensive 40-page documentation following software engineering best practices. Collaborated with Bojan Cesnak (@cesnak02) to implement modern web development practices and create a robust e-commerce solution.',
      link: 'https://github.com/GAURAV9790/Signitronic-electronic-Ecomerce',
    },
    {
      name: 'School Management System',
      tech: 'MERN Stack (MongoDB, Express.js, React.js, Node.js), SQL, Digital Attendance System',
      description: 'A comprehensive School Management and Digital Attendance System for efficient school administration. Features include school profile management with photo uploads, real-time digital attendance tracking, and secure data storage. Built with a client-server architecture, the system enhances time management and data accuracy while reducing manual work. Implements role-based access control for administrators and staff.',
      link: 'https://github.com/GAURAV9790/My-school-app',
    },
    {
      name: 'Heritage Pass (2025)',
      tech: 'React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Stripe API',
      description: 'Ticketless entry system for heritage sites with secure online payments and real-time slot updates, delivering a smooth visitor experience.',
      link: '',
    },
    {
      name: 'Hotel Haven (2023)',
      tech: 'MERN Stack (MongoDB, Express.js, React.js, Node.js)',
      description: 'Secure hotel booking web application featuring user authentication, logout, data encryption, and reliable booking workflows.',
      link: 'https://github.com/GAURAV9790/Hotel-Heaven-',
    }
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
            className="rounded-3xl bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-primaryPink/30 p-[1px]"
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
              <div className="pt-1 flex flex-wrap gap-2">
                {project.hostedLink && (
                  <a
                    href={project.hostedLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-500/90 to-green-500/90 px-3 py-1 text-xs font-medium text-white hover:opacity-90 transition shadow-md shadow-emerald-500/30"
                  >
                    Live Demo
                  </a>
                )}
                {project.link && project.link.trim().length > 0 && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-slate-900/80 border border-purple-500/40 px-3 py-1 text-xs font-medium text-white hover:bg-purple-500/20 transition"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}

export default ProjectsSection;