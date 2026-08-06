import React from 'react';
import HomeSection from '../components/sections/HomeSection';
import SkillsSection from '../components/sections/SkillsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import EducationSection from '../components/sections/EducationSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactSection from '../components/sections/ContactSection';

function HomePage({ onContactClick }) {
  return (
    <>
      <HomeSection onContactClick={onContactClick} />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}

export default HomePage;