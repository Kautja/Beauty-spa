import Image from 'next/image'
import React from 'react'

function HeroSection() {
  return (
    <section className="relative w-full bg-white pt-8 pb-16 flex flex-col items-center mx-auto max-w-[1440px] lg:px-16 px-4 sm:px-10">

      <div className="relative w-full h-[85vh] overflow-hidden mb-12 rounded-4xl">
      {/* Background Image */}
      <Image
        src="/images/luxury_spa_hero.png"
        alt="background"
        className="w-full h-full object-cover"
        fill
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center px-8 md:px-16 bg-black/20">
        <div className="text-white max-w-xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal mb-4 font-sentient">
            Refined Relaxation,
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light italic mb-4 font-sentient text-[#fff9]">
            Timeless Elegance
          </h1>
          <p className="text-md sm:text-lg md:text-xl leading-relaxed text-[#fff9]">
            Experience Botswana&apos;s premier luxury wellness sanctuary. Transformative spa therapies, bespoke beauty treatments, and absolute serenity.
          </p>
        </div>
      </div>
    </div>

  {/* Counters */}
  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
    <div className="flex flex-col items-center border rounded-lg p-6">
      <span className="text-2xl font-semibold">20K+</span>
      <p className="text-sm text-gray-600 mt-1">Happy Students</p>
    </div>
    <div className="flex flex-col items-center border rounded-lg p-6">
      <span className="text-2xl font-semibold">100K+</span>
      <p className="text-sm text-gray-600 mt-1">Happy Clients</p>
    </div>
    <div className="flex flex-col items-center border rounded-lg p-6">
      <span className="text-2xl font-semibold">100%</span>
      <p className="text-sm text-gray-600 mt-1">Premium Products</p>
    </div>
    <div className="flex flex-col items-center border rounded-lg p-6">
      <span className="text-2xl font-semibold">10+</span>
      <p className="text-sm text-gray-600 mt-1">Years Experience</p>
    </div>
  </div>

</section>

  )
}

export default HeroSection
