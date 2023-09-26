import { Link } from "react-scroll";
export default function About() {
  const social = [
    {
      image : "/images/linkedin.png",
      url : "https://www.linkedin.com/in/utkarshsarkari/"
    },
    {
      image : "/images/githubmain.png",
      url : "https://github.com/UtkarshSarkari"
    },
    {
      image : "/images/coding.png",
      url : "https://leetcode.com/utkrsh2001/"
    },
    {
      image : "/images/email.png",
      url : "utkrshsarkari@gmail.com"
    },
    {
      image : "/images/instagram.png",
      url : "https://www.instagram.com/utkrshsarkari/"
    },
    {
      image : "/images/twitter.png",
      url : "https://twitter.com/UtkarshSarkari"
    },
  ];

  return (
    <div className="text-white mt-10 sm:mt-16 sm:mb-5 pt-28 px-8 sm:px-12 h-auto flex flex-col justify-center items-center lg:w-[90%] xl:w-[80%] 2xl:w-[60%] md:mb-12 xl:mb-20 2xl:mb-36">
      <div className="2xl-w[60%]">
        <div className="xl:mr-20">
          <span className="text-2.5xl xs:text-5xl sm:text-6xl lg:text-7xl font-mainFont font-semibold my-2 block mt-5 text-gray-100 lg:mb-5">
            Utkarsh Sarkari.
          </span>

          <p className="text-1.5xl xs:text-2xl sm:text-3xl lg:text-5xl text-gray-400 font-semibold my-2 xs:my-3 lg:mb-10">
            Converting Thoughts into Code{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 lg:w-10 lg:h-10 inline-block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
          </p>

          {/* <span className='hidden xl:flex items-center mt-12 animate-bounce'>Scroll to explore <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

          </span> */}
        </div>

        <div className="">
          <p className="font-mainFont text-sm xs:text-xl lg:text-lg xl:text-1.5xl lg:leading-7 xl:leading-9 italic text-gray-500 my-6">
            As a <span className="text-emerald-200">Software Engineer</span>{" "}
            with a strong development background, I deliver high-quality web
            solutions that drive impactful outcomes.
            <span className="text-emerald-200">
              Proficient in the MERN Stack
            </span>
            , I expertly develop robust and user-centric applications as a
            skilled{" "}
            <span className="text-emerald-200">Full-Stack Developer</span>.
          </p>

          <div className="flex flex-wrap items-center">
            <a
              href="https://drive.google.com/file/d/1FGP5vYsqlCqgJttojbQldcdvG_ShD6uI/view?usp=sharing"
              target="_blank"
              className="text-sm sm:text-[15px] lg:text-[17px] xl:text-[18px]  rounded-md px-[2px] py-[2px] bg-gradient-to-r from-emerald-500 to-cyan-600 font-semibold  hover:scale-[1.02] my-4 md:mr-6 lg:mr-8 lg:py-1"
            >
              <div className="bg-black rounded-md px-5 py-2 bg-gradient-to-r from-emerald-500 to-cyan-600 flex items-center justify-between">
                Check my Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 ml-2 xl:w-6 xl:h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </div>
            </a>
            
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
              className="text-sm sm:text-[15px] lg:text-[17px] xl:text-[18px]  rounded-md px-[2px] py-[2px] bg-gradient-to-r from-emerald-500 to-cyan-600 font-semibold  hover:scale-[1.02]"
            >
              <div className="bg-black rounded-md px-5 py-2 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-600 flex items-center justify-between lg:py-3">
                Contact Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 ml-2 xl:w-5 xl:h-5 lg:ml-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
            </Link>
          </div>

          <div className="flex items-center pt-8 justify-between xl:mt-8">
            <span className="hidden md:flex md:text-1.5xl text-2xl items-center">
              Social Links
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8 ml-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </span>

            {social.map((social) => (
              <a href={social.url} target="_blank" className="p-2 md:p-3 m-0 cursor-pointer rounded-full hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-600">
                <img
                  src={social.image}
                  alt="socialIcon"
                  className="xs:h-5 lg:h-6 xs:w-5 lg:w-6"
                  height={15}
                  width={15}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
