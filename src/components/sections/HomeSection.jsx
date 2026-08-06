import React from 'react';
import SectionShell from '../common/SectionShell';
import ProfileImage from '../../assets/profile.png';

function HomeSection() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
      <div className="w-full max-w-6xl">
        <SectionShell id="home" title="Hi, I'm Gaurav Oli" subtitle="A passionate Full Stack Developer from India, dedicated to building exceptional digital experiences.">
          <div className="w-full flex flex-col-reverse md:flex-row gap-8">
        {/* Left Section - Main Content */}
        <div className="bg-[#1e0f4a] bg-opacity-70 backdrop-blur-sm rounded-3xl p-8 md:p-12 flex-1">
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">GAURAV OLI</h1>
              <i className="fas fa-check-circle text-blue-400 text-2xl sm:text-3xl"></i>
            </div>
            <div className="flex items-baseline gap-2 mb-6">
              <p className="text-base sm:text-lg text-gray-300">
                Full Stack Developer
              </p>
              <i className="fas fa-code text-blue-400 text-sm"></i>
            </div>
            <p className="text-base sm:text-lg text-gray-300 mb-6">
              specializing in building scalable, modern web applications with a focus on MERN stack, 
              intuitive UI, and high-performance solutions.
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Full Stack Developer</h2>
              <i className="fas fa-code text-blue-400 text-base"></i>
            </div>
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
        </SectionShell>
      </div>
    </div>
  )
}

export default HomeSection;