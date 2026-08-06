import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import EducationSection from './components/sections/EducationSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import BackgroundParticles from './components/common/BackgroundParticles';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleHomeContact = () => {
    if (window.location.pathname === '/') {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-heroStart via-heroMid to-heroEnd text-white relative overflow-hidden">
      <BackgroundParticles />
      <div className="flex min-h-screen flex-col pb-8 pt-2 sm:pt-3 lg:pt-4 relative z-10">
        
        <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

        <main className="flex-1 pb-6">
          <Routes>
            <Route path="/" element={<HomePage onContactClick={handleHomeContact} />} />
            <Route path="/skills" element={<SkillsSection />} />
            <Route path="/experience" element={<ExperienceSection />} />
            <Route path="/education" element={<EducationSection />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </main>

        <Footer />
        
      </div>
    </div>
  );
}

export default App;
