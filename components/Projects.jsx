import React from 'react'
import Image from 'next/image'
import Link from 'next/link'; 

const Aboutus = () => {
  return (
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
<section>
    <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-4xl">
        <div class="grid grid-cols-1">
            <div class="flex flex-col w-full max-w-lg mb-12 text-left lg:mx-auto">
                <a class="inline-flex items-center w-full mb-4">
                    <img alt="blog" src="/assets/me1.JPG" class="flex-shrink-0 object-cover object-center w-20 h-20 rounded-full"></img>
                    <span class="flex flex-col flex-grow pl-3">
                        <h2 class="text-xs font-semibold tracking-widest text-red-800 uppercase">Aisya 
              <span href="/" class="font-semibold text-gray-800 lg:mb-0"> Karenina </span>
                        </h2>
                    </span>
                </a>
                <p class="mx-auto mt-2 text-base leading-relaxed text-gray-800">A Software Engineer Student, Curentlly interest in Node, React, Next, Tailwind CSS, &amp; more. Here's some of my Projects i've made</p>
            </div>
            
        </div>
    </div>
</section>
<section>
    <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
    <h1 class="mb-8 text-3xl font-bold leading-none tracking-tighter text-neutral-900 md:text-7xl lg:text-5xl">Projects</h1>
        <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="/assets/dummy.jpg" alt="blog"></img>
                <h2 class="mb-8 text-xs font-semibold tracking-widest text-red-800 uppercase">Web Design</h2>
                <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Ayo Masak - Web Food Recipe</h1>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">A food recipe website that provides various easy-to-make, and healthy food recipes. This design is built with Figma</p>
                <div class="mt-4">
                    <a href="#" class="inline-flex items-center mt-4 font-semibold text-red-800 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                </div>
            </div>
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="/assets/dummy.jpg" alt="blog"></img>
                <h2 class="mb-8 text-xs font-semibold tracking-widest text-red-800 uppercase">Game</h2>
                <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">RAMPAL Malang - Game Roblox</h1>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">Created Lapangan Rampal Malang with Roblox Studio, Availble at Roblox so can be played by Roblox Players.</p>
                <div class="mt-4">
                    <a href="https://www.roblox.com/games/8918573416/Rampal" class="inline-flex items-center mt-4 font-semibold text-red-800 lg:mb-0 hover:text-neutral-600" title="About"> About » </a>
                </div>
            </div>
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="/assets/dummy.jpg" alt="blog"></img>
                <h2 class="mb-8 text-xs font-semibold tracking-widest text-red-800 uppercase">3D Animation</h2>
                <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">3D Home Design - Blender &amp; Unity</h1>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus elit quis interdum placerat.</p>
                <div class="mt-4">
                    <a href="#" class="inline-flex items-center mt-4 font-semibold text-red-800 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                </div>
            </div>
        </div>
        <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="/assets/dummy.jpg" alt="blog"></img>
                <h2 class="mb-8 text-xs font-semibold tracking-widest text-red-800 uppercase">Programming</h2>
                <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Aneka Jaya - Toko Bangunan</h1>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus elit quis interdum placerat.</p>
                <div class="mt-4">
                    <a href="#" class="inline-flex items-center mt-4 font-semibold text-red-800 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                </div>
            </div>
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="/assets/dummy.jpg" alt="blog"></img>
                <h2 class="mb-8 text-xs font-semibold tracking-widest text-red-800 uppercase">Programming</h2>
                <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">App Laundry - UKL XI-1</h1>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus elit quis interdum placerat.</p>
                <div class="mt-4">
                    <a href="#" class="inline-flex items-center mt-4 font-semibold text-red-800 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                </div>
            </div>
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="/assets/dummy.jpg" alt="blog"></img>
                <h2 class="mb-8 text-xs font-semibold tracking-widest text-red-800 uppercase">3D Animation</h2>
                <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Car 3D Animation Rendering</h1>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus elit quis interdum placerat.</p>
                <div class="mt-4">
                    <a href="#" class="inline-flex items-center mt-4 font-semibold text-red-800 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                </div>
            </div>
        </div>
        <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="/assets/dummy.jpg" alt="blog"></img>
                <h2 class="mb-8 text-xs font-semibold tracking-widest text-red-800 uppercase">Programming</h2>
                <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Eunoia Web Profile + Calculator</h1>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus elit quis interdum placerat.</p>
                <div class="mt-4">
                    <a href="#" class="inline-flex items-center mt-4 font-semibold text-red-800 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                </div>
            </div>
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="/assets/dummy.jpg" alt="blog"></img>
                <h2 class="mb-8 text-xs font-semibold tracking-widest text-red-800 uppercase">Programming</h2>
                <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Eunoia Baby Shop - Card dummy API</h1>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus elit quis interdum placerat.</p>
                <div class="mt-4">
                    <a href="#" class="inline-flex items-center mt-4 font-semibold text-red-800 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                </div>
            </div>
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="/assets/dummy.jpg" alt="blog"></img>
                <h2 class="mb-8 text-xs font-semibold tracking-widest text-red-800 uppercase">Programming</h2>
                <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">HERE - For your comfort Web</h1>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus elit quis interdum placerat.</p>
                <div class="mt-4">
                    <a href="#" class="inline-flex items-center mt-4 font-semibold text-red-800 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                </div>
            </div>
        </div>
    </div>
</section>

        <section class="#experiences">
  <h1 class="mb-8 text-3xl font-bold leading-none tracking-tighter text-neutral-900 md:text-7xl lg:text-5xl">Experiences</h1>
  <div class="flex flex-wrap mx-auto md:flex-nowrap p-12">
    <a href="">
      <div class="flex w-full">
        <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
          <img class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="/assets/dummy.jpg" alt="blog"></img>
          <div class="px-6 py-8">
            <h4 class="mt-4 text-2xl font-semibold text-neutral-600">
              <span class="">Multimedia Journalist</span>
            </h4>
            <p class="mt-4 text-base font-normal text-gray-500 leading-relax">Part of the Management of the SMK Telkom Malang Library since 2021-now, actively involved in organizational activities, improving literacy and communication skills, serving as a multimedia journalist in the field of creativity especially in design.</p>
          </div>
        </div>
      </div>
    </a>

    <a>
      <div class="flex w-full">
        <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
          <img class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="/assets/dummy.jpg" alt="blog"></img>
          <div class="px-6 py-8">
            <h4 class="mt-4 text-2xl font-semibold text-neutral-600">
              <span class="">Treasure of Adiwiyata</span>
            </h4>
            <p class="mt-4 text-base font-normal text-gray-500 leading-relax">Previously a part of the Adiwiyata program at SMP Negeri 1 Tulungagung from 2018-2021. Actively involved as a member of the school's environmental organization. Served as the organization's Treasurer in charge of financial management.</p>
          </div>
        </div>
      </div>
    </a>

    <a href="">
      <div class="flex w-full">
        <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
          <img class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="/assets/dummy.jpg" alt="blog"></img>
          <div class="px-6 py-8">
            <h4 class="mt-4 text-2xl font-semibold text-neutral-600">
              <span class="">Content Creator</span>
            </h4>
            <p class="mt-4 text-base font-normal text-gray-500 leading-relax">I have had a hobby of creating videos and producing content since I was young. I started my YouTube "Aisya Karenina" in 2018, and later moved to the TikTok platform "Favsice". I also channel my other hobbies such as vlogging and makeup into my content creation.</p>
          </div>
        </div>
      </div>
    </a>
    <a href="">
      <div class="flex w-full">
        <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
          <img class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="/assets/dummy.jpg" alt="blog"></img>
          <div class="px-6 py-8">
            <h4 class="mt-4 text-2xl font-semibold text-neutral-600">
              <span class="">Junior FrontEnd Dev</span>
            </h4>
            <p class="mt-4 text-base font-normal text-gray-500 leading-relax"> have a dream of becoming a Web Engineer, and in addition to taking Node-React expert classes, I am grateful to be one of the TEFA DBT students specializing in FrontEnd classes. Currently, I am deepening my knowledge of Javascript (React, Next, etc.).</p>
          </div>
        </div>
      </div>
    </a>

  </div>
</section>
    </div>
            
  )
}

export default Aboutus