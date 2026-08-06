import React from 'react';
import SectionShell from '../common/SectionShell';
import Chip from '../common/Chip';

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

export default SkillsSection;