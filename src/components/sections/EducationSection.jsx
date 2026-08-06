import React from 'react';
import SectionShell from '../common/SectionShell';

function EducationSection() {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institute: 'Uttarakhand Technical University Dehradoon',
      period: '2022-2025',
    },
    {
      degree: 'Diploma Engineering',
      institute: 'Uttarakhand Board of Technical Education Roorkee ',
      period: ' 2019-2022',
    },
  ];

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
      description: 'Gained understanding of cybersecurity principles, threat mitigation, data protection, and legal aspects of cybersecurity.',
    },
  ];

  return (
    <SectionShell
      id="education"
      title="Education & Certifications"
      subtitle="A strong academic foundation combined with continuous learning through professional certifications."
    >
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Education Column */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-textLightPurple border-b border-purple-500/30 pb-2">Academic Background</h3>
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="rounded-3xl bg-gradient-to-r from-purple-500/35 via-primaryPurple/30 to-primaryPink/35 p-[1px]"
            >
              <div className="rounded-3xl bg-slate-900/85 p-5 sm:p-6 flex flex-col gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">{edu.degree}</h3>
                  <p className="text-xs sm:text-sm text-textLightPurple mt-1">{edu.institute}</p>
                  <p className="text-xs text-textGray mt-1">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Column */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-textLightPurple border-b border-purple-500/30 pb-2">Professional Certifications</h3>
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
        </div>

      </div>
    </SectionShell>
  );
}

export default EducationSection;