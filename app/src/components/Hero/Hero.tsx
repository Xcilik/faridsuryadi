import React from 'react';
import ProfileImage from './ProfileImage';
import SocialLinks from './SocialLinks';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white" id="about">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <ProfileImage />
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Farid Suryadi
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            Full Stack Developer & IT Expert
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about building scalable applications and solving complex problems
            with modern technologies.
          </p>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}