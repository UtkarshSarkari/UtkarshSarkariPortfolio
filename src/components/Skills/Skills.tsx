import React, { useState } from "react";
import { allskills } from "./allSkills";

export default function Skills() {
  const skillCategories = ["Languages", "Frontend", "Backend", "Others"];
  const [category, setCategory] = useState('');
  
  return (
    <div className="w-screen px-8 sm:px-12 mt-16 md:mt-20 xl:mt-28 lg:w-[90%] xl:w-[80%] 2xl:w-[60%] flex justify-between items-center flex-wrap mb-10 2xl:mb-36">
      <div className="flex items-center justify-start">
        <span className="text-1.5xl xs:text-2xl lg:text-4xl font-bold tracking-wide">
          Skills
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 2xl:w-7 2xl:h-7 ml-3 text-emerald-300"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
          />
        </svg>
      </div>
      <div className="mt-4">
        <div className="xl:mr-10">
          <div className="sm:text-lg mt-5">
            <p className="font-medium">
              Empowering Innovations : <br />
              <span className="italic font-light text-zinc-300">
                Skills that make a difference
              </span>
            </p>
          </div>

          <div className="text-sm sm:text-base mt-5">
            <p className="italic text-gray-200 xl:leading-7">
              " I'm an accomplished developer with a wide-ranging skill set,
              proficient in various programming languages and technologies. My
              expertise covers both front-end and back-end development, and I'm
              well-versed in essential tools and platforms, ensuring a versatile
              approach to software solutions. "
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex flex-wrap mt-8 md:mt-4">
            {skillCategories.map((category) => (
              <span key={category} className="cursor-pointer px-5 xs:px-7 sm:px-8 py-2 sm:py-3 rounded-lg bg-zinc-800 my-2 mr-3 sm:mr-3 text-sm sm:text-xl hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-600 active:bg-gradient-to-r active:from-emerald-500 active:to-cyan-600 tracking-wide md:mt-10 md:mr-5 xl:mt-5 xl:mr-20 lg:mr-12 2xl:mr-16" onClick={()=>setCategory(category)}>
                {category}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-6 md:gap-y-10 grid-rows-skill-rows text-sm  xs:gap-y-4 sm:gap-y-5 lg:gap-y-8 sm:text-xl mt-5 md:mt-10 xl:gap-y-10">
            {allskills.map((skill) => (
              <div className="flex items-center">
                <img
                  src={skill.imgUrl}
                  alt="skillImage"
                  height={15}
                  width={15}
                  className="mr-3 sm:h-5 sm:w-5 xs:h-4 xs:w-4"
                />
                <span className={`${skill.category === category ? "text-white" : "text-gray-500"} transition-all`}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
