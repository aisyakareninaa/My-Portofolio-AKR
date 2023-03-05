import React from 'react'

const Hero = () => {
  return (
<section>
  <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
    <div class="flex flex-wrap items-center mx-auto max-w-7xl">
      <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
        <div>
          <div class="relative w-full max-w-lg">
            <div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

            <div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div class="relative">
              <img class="object-cover object-center mx-auto rounded-lg shadow-2xl" alt="hero" src="/assets/me.jpeg"></img>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
        <span class="mb-8 text-xs font-bold tracking-widest text-red-800 uppercase"> Get to know me </span>
        <h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-900 md:text-7xl lg:text-5xl">Hello! I'm Aisya</h1>
        <p class="mb-8 text-base leading-relaxed text-left text-gray-700">I'm a student in the 11th grade and my manjor is software engineering. I'm currently enrolled in the Expert Node-React class. My hobby include trying new things, and I'm particularly interested in frontend development. I aspires to become a web engineer.</p>
        <a href="/#aboutme" class="inline-flex items-center mt-4 font-semibold text-red-600 lg:mb-0 hover:text-neutral-600" title="About Me"> About Me » </a>
        <div class="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex">
        </div>
      </div>
    </div>
  </div>
</section>
  )};

export default Hero