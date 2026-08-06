import React from 'react';
import SectionShell from '../common/SectionShell';

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



    {
      role: 'Frontend Developer Intern',
      company: 'TDK Group ',
      location: 'Noida, Uttar Pradesh',
      period: 'June 2023 – September 2023',
      current: false,
      bullets: [
        'Contributed to frontend web development projects using HTML, CSS, JavaScript, and React.js.',
        'Designed and developed a cryptocurrency visualization web application with responsive and interactive UI.',
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

export default ExperienceSection;