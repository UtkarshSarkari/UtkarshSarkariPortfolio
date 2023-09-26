import React from "react";
import { workInfo } from "./WorkInfo";

export default function Work() {
  return (
    <div className="w-screen px-8 sm:px-12 mt-16 md:mt-20 xl:mt-28 lg:w-[90%] xl:w-[80%] 2xl:w-[60%] flex flex-col justify-between flex-wrap mb-10 2xl:mb-36">

      <div className="flex items-center justify-start">
        <span className="text-1.5xl xs:text-2xl lg:text-4xl font-bold tracking-wide">
          Work Experience
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-7 h-7 ml-3 2xl:w-8 2xl:h-8 text-emerald-300"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
          />
        </svg>
      </div>

      <div className="">
        {
            workInfo.map((info)=>(
                <div className="mt-12">
                    <p className="sm:text-lg">{info.designation}</p>
                    <p className="sm:text-[17px] italic mt-0.5">{info.organisation}</p>
                    <p className="mt-3 text-sm sm:text-base">{info.period}</p>
                    <div className="mt-8 relative">
                        <p className="pl-8 border-l pt-2 text-sm sm:text-[15px] lg:text-base">{info.description.one}</p>
                        <p className="border-l pl-8 pt-5 text-sm sm:text-[15px] lg:text-base">{info.description.two}</p>
                        <span className="absolute top-[-20px] left-[-9.5px] text-5xl text-emerald-400">&bull;</span>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  );
}
