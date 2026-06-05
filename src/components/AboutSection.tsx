import React from 'react';

const AboutHomeSection = () => {
  return (
    <section className="mt-[90px] pb-12 sm:pb-20 md:mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-12 md:gap-8 lg:gap-16">
        {/* Left Column - Skincare Info */}
        <div className="w-full md:w-1/4 order-1 md:order-1">
          <div className="h-40 rounded-[var(--radius)] mb-6 rounded-tr-[100px] bg-no-repeat bg-cover bg-center" style={{backgroundImage: "url('/images/luxury_spa_hero.png')"}}></div>
          <h3 className="text-foreground text-[22px] md:text-[28px] font-normal leading-tight tracking-[-1.1px] md:tracking-[-1.4px] mb-6">
            A Sanctuary of
            <br />
            Absolute Serenity
          </h3>
          <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed mb-6">
            Step into a realm of refined relaxation where traditional techniques meet modern luxury.
          </p>
          <div className="space-y-2">
            {[
              'Internationally trained therapists',
              'Bespoke wellness journeys', 
              'Premium botanical products'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-3 h-2 bg-foreground rounded-sm flex-shrink-0"></div>
                <span className="text-muted-foreground text-xs md:text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Center Column - Large Circle */}
        <div className="w-full md:w-1/3 order-2 md:order-2 flex justify-center items-center mb-8 md:mb-0">
          <div className="bg-no-repeat bg-cover bg-center w-full h-[500px] md:w-80 md:h-[431px] rounded-se-full rounded-ss-full rounded-b-lg" style={{backgroundImage: "url('/images/luxury_spa_about.png')"}}></div>
        </div>

        {/* Right Column - Main Content */}
        <div className="w-full flex-1 order-3 md:order-3">
          <h2 className="text-foreground text-[32px] sm:text-[40px] md:text-[64px] leading-tight font-light tracking-[-1.6px] md:tracking-[-3.2px] text-left md:text-right">
            The Art of
            <br />
            Self-Care
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base tracking-[-0.4px] md:tracking-[-0.8px] mt-6 leading-relaxed text-left md:text-right">
            Discover a transformative experience at Aura Spa. We believe that true luxury lies in the details. 
            Our meticulously designed treatments blend ancient healing traditions with contemporary science to 
            restore balance to your mind, body, and spirit.
            <br />
            <br />
            Whether you seek a momentary escape from the bustling city or a comprehensive wellness retreat, 
            our dedicated team provides an unparalleled level of service and discretion. Allow us to elevate 
            your beauty and wellness journey.
          </p>
          <button className="mt-8 md:mt-12 md:py-4 transition-opacity w-full md:w-auto bg-warm-brown-800 hover:bg-warm-brown-800/80 px-7 py-6 rounded-full text-white">
            Discover Our Philosophy
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutHomeSection;
