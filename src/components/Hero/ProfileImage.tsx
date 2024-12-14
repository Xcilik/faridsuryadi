import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Database, Globe } from 'lucide-react';

const TechIcon = ({ children, rotate }: { children: React.ReactNode; rotate: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    className="absolute w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-cyan-400 shadow-lg"
    style={{
      transform: `rotate(${rotate}deg) translateX(80px)`,
      transformOrigin: "center center"
    }}
  >
    {children}
  </motion.div>
);

export default function ProfileImage() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="mb-8 relative">
      <motion.div
        className="relative w-40 h-40 mx-auto"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Rotating outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Tech icons that appear on hover */}
        {isHovered && (
          <>
            <TechIcon rotate={0}><Globe className="w-5 h-5" /></TechIcon>
            <TechIcon rotate={90}><Code className="w-5 h-5" /></TechIcon>
            <TechIcon rotate={180}><Database className="w-5 h-5" /></TechIcon>
            <TechIcon rotate={270}><Cpu className="w-5 h-5" /></TechIcon>
          </>
        )}

        {/* Profile image container */}
        <motion.div
          className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-cyan-400 ring-offset-4 ring-offset-gray-900"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src="src/farid.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-cyan-500/50 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Status indicator */}
        <motion.div
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
          animate={{
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-4 h-4 bg-green-400 rounded-full ring-2 ring-gray-900">
            <motion.div
              className="w-full h-full rounded-full bg-green-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}