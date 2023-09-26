import { useEffect, useState } from "react";
import { projectInfo } from "./ProjectInfo";
import toast from 'react-hot-toast';
import {Link} from 'react-scroll';

export default function Projects() {
  const projectNums = [1, 2, 3, 4, 5];
  const [selectedNum, setSelectedNum] = useState(1);
  const codeUrl = [
    "", 
    "https://github.com/UtkarshSarkari/Conversate", 
    "https://github.com/UtkarshSarkari/CodexGram", 
    "", 
    "https://github.com/UtkarshSarkari/OpeninApp-Clone", 
  ]

  const handleNumClick = (num: number) => {
    setSelectedNum(num);
    console.log(projectInfo[num - 1].projectTitle);
  };

  const handleLiveError = ()=>{
      toast.error('Project will be live soon 💯');
      return;
  }

  const handleCodeError = ()=>{
    if(selectedNum === 1 || selectedNum === 4){
      toast.error('Code will be available soon 💯');
      return;
    }
  }

  return (
    <div className="w-screen px-8 sm:px-12 mt-16 md:mt-20 xl:mt-28 lg:w-[90%] xl:w-[80%] 2xl:w-[60%] flex flex-col justify-between flex-wrap mb-10 2xl:mb-36">
      <div className="flex items-center justify-start">
        <span className="text-1.5xl xs:text-2xl lg:text-4xl font-bold tracking-wide">
          Projects
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
            d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
          />
        </svg>
      </div>

      <div className="mt-10 flex items-center justify-center">
        <div className="bg-zinc-800 flex items-center justify-center rounded-xl relative lg:w-[70%]">
          <div className="h-[100%] w-[100%] rounded-lg border-2 border-gray-500 flex items-center justify-center z-0 overflow-hidden">
            <img src={projectInfo[selectedNum - 1].projectImg1} alt="" />
            <div className="absolute right-[-20px] bottom-0 border-2 border-gray-500 h-[70%] w-[25%] rounded-lg z-10 bg-zinc-500 flex items-center justify-center overflow-hidden">
              <img src={projectInfo[selectedNum - 1].projectImg2} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-lg flex items-center justify-center">
        <div className="flex w-full items-center justify-center md:w-[80%] xl:w-[60%]">
          {projectNums.map((num) => (
            <span
              key={num}
              className={`bg-zinc-800 flex-1 mx-2 flex justify-center items-center rounded-md px-2 py-1
              ${num===selectedNum ? "bg-gradient-to-r from-emerald-500 to-cyan-600" : ""} md:h-10`}
              onClick={() => handleNumClick(num)}
            >
              {num}
            </span>
          ))}
        </div>
      </div>

      <div className="italic text-base xs:text-base sm:text-lg font-semibold tracking-wide mt-8 xl:mt-10 2xl:mt-16 border-b flex items-baseline justify-between xl:text-1.5xl">
        {projectInfo[selectedNum - 1].projectTitle}{" "}
        <span className="text-xs xs:text-sm xl:text-base font-light">
          {projectInfo[selectedNum - 1].projectDate}
        </span>
      </div>

      <div className="flex mt-5">
        <span
          
          className="text-sm sm:text-[15px] lg:text-[17px] xl:text-[18px]  rounded-md px-[1px] py-[1px] bg-gradient-to-r from-emerald-500 to-cyan-600 tracking-wide hover:scale-[1.02] mr-4"
        >
          <div className="bg-black rounded-md px-6 py-1.5 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-600 flex items-center justify-between lg:py-3" onClick={handleLiveError}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4 xl:w-5 xl:h-5 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
            Live
          </div>
        </span>
        <a
        href={codeUrl[selectedNum-1]}
          // to={codeUrl[selectedNum-1]}
          // spy={true}
          // smooth={true}
          // offset={-70}
          // duration={2000}
          className="text-sm sm:text-[15px] lg:text-[17px] xl:text-[18px]  rounded-md px-[1px] py-[1px] bg-gradient-to-r from-emerald-500 to-cyan-600 hover:scale-[1.02] mr-4" onClick={handleCodeError}
        >
          <div className="bg-black rounded-md px-4 py-1.5 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-600 flex items-center justify-between lg:py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4 xl:w-5 xl:h-5 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
            Code
          </div>
        </a>
      </div>

      <div className="mt-5">
        <p className="text-sm sm:text-[15px] sm:leading-6 xl:text-xl 2xl:text-lg 2xl:leading-8">{projectInfo[selectedNum - 1].projectDesc}</p>
      </div>
    </div>
  );
}
