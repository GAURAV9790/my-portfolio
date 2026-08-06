import React from 'react';
import { motion } from 'framer-motion';

function SectionShell({ id, title, subtitle, children }) {
  // Animation variants for smooth scroll reveal
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id={id} className="mt-8 scroll-mt-28 relative z-10">
      <motion.div 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="rounded-3xl bg-gradient-to-br from-purple-500/30 via-primaryPurple/20 to-primaryPink/20 p-[1px] shadow-soft-card"
      >
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
      </motion.div>
    </section>
  );
}

export default SectionShell;