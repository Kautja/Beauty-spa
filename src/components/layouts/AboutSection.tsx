import React from 'react';

const AboutSection = () => {
  return (
    <section className="relative w-full bg-gray-50 px-8 py-16 flex flex-col md:flex-row items-center md:justify-between gap-12">
  {/* Left: Image Placeholder */}
  <div className="w-full md:w-1/2 flex justify-center">
    <div className="bg-gray-200 rounded-[40px] bg-no-repeat bg-cover bg-center w-full h-[500px] md:w-80 md:h-[431px] rounded-se-full rounded-ss-full rounded-b-lg" style={{backgroundImage: "url('/images/luxury_spa_about.png')"}}></div>
  </div>

  {/* Right: Content */}
  <div className="w-full md:w-1/2 flex flex-col items-start">
    <h2 className="text-4xl md:text-5xl font-light leading-tight">
      Uncompromising <br />
      <span className="font-medium">Excellence</span>
    </h2>

    <p className="mt-6 text-gray-600 text-base leading-relaxed max-w-lg">
      At <span className="font-semibold">Aura Spa Botswana</span>, we redefine the art of relaxation. With a profound commitment to holistic wellness, our internationally-trained therapists curate personalized treatments that rejuvenate the mind, body, and spirit.
    </p>

    {/* Checklist */}
    <ul className="mt-6 space-y-3 text-gray-700">
      <li className="flex items-center space-x-2">
        <span className="w-4 h-4 bg-black rounded-full"></span>
        <span>World-class aesthetic & therapeutic treatments</span>
      </li>
      <li className="flex items-center space-x-2">
        <span className="w-4 h-4 bg-black rounded-full"></span>
        <span>Exclusive, premium quality skincare products</span>
      </li>
      <li className="flex items-center space-x-2">
        <span className="w-4 h-4 bg-black rounded-full"></span>
        <span>Unparalleled tranquility in a luxury environment</span>
      </li>
    </ul>

    {/* CTA Button */}
    <button className="mt-8 px-8 py-3 bg-black text-white rounded-full shadow hover:bg-gray-900 transition">
      Discover More
    </button>
  </div>
</section>

  );
};

export default AboutSection;
