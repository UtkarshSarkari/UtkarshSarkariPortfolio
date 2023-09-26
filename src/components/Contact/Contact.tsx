import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const social = [
    {
      image: "/images/linkedin.png",
      url: "https://www.linkedin.com/in/utkarshsarkari/"
    },
    {
      image: "/images/githubmain.png",
      url: "https://github.com/UtkarshSarkari"
    },
    {
      image: "/images/coding.png",
      url: "https://leetcode.com/utkrsh2001/"
    },
    {
      image: "/images/email.png",
      url: "utkrshsarkari@gmail.com"
    },
    {
      image: "/images/instagram.png",
      url: "https://www.instagram.com/utkrshsarkari/"
    },
    {
      image: "/images/twitter.png",
      url: "https://twitter.com/UtkarshSarkari"
    },
  ];

  const form = useRef<HTMLFormElement | null>(null);

  const [value, setValue] = useState("");
  const [empty, setEmpty] = useState(true);

  const handleMessage1 = (prompt: string) => {
    setValue(prompt);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_uf0rxv3', 'template_z8x4qop', form.current!, 'lgcgoXlxhj_vYhNRj')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact w-screen px-8 sm:px-12 mt-16 md:mt-20 xl:mt-28 lg:w-[90%] xl:w-[80%] 2xl:w-[60%] flex flex-col justify-between flex-wrap mb-16">
      <div className="flex items-center justify-start">
        <span className="text-1.5xl xs:text-2xl lg:text-4xl font-bold tracking-wide">
          Let's Get In Touch
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
            d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
          />
        </svg>
      </div>

      <div className="">
        {/* <div className="">My Social Accounts</div> */}
        <div className="flex items-center pt-8 justify-between mt-4 xl:mt-8">
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
            <a href={social.url} target="_blank" className="md:p-3 m-0 cursor-pointer rounded-full hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-600">
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

        <div className="lg:flex lg:justify-between">
          <div className="mt-10 text-sm md:text-base leading-6 lg:w-[40%] flex flex-col items-center justify-between">Ready to bring your ideas to life or explore exciting opportunities? <br /><br /> Let's connect! Whether you're an aspiring collaborator with a vision or a recruiter looking to chat, your message is the first step towards a meaningful conversation. I'm eager to hear from you!
            <img
              className="hidden lg:block w-[60%] xl:w-[55%] mb-20 mr-10 xl:mr-12"
              src="/images/profilepic.png"
              alt=""
            />
          </div>

          <div className="lg:w-[50%]">
            <form ref={form} onSubmit={(e) => sendEmail(e)} action="">
              <div className="">
                <div className="flex flex-col mt-10">
                  <label className="text-sm text-gray-200">Your Name</label>
                  <input
                    required
                    name="name"
                    className="px-4 py-2 rounded-lg mt-2 ring-1 ring-zinc-600 hover:ring-gray-500 outline-none hover:ring-2 focus:ring-2 bg-zinc-800"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="flex flex-col mt-6">
                  <label className="text-sm text-gray-200">Your Email</label>
                  <input
                    required
                    className="px-4 py-2 rounded-lg mt-2 ring-1 ring-zinc-600 hover:ring-gray-500 outline-none hover:ring-2 focus:ring-2 bg-zinc-800"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="mt-8 relative">
                <label htmlFor="">Message</label>
                <textarea
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                    setEmpty(e.target.value === "");
                  }}
                  required
                  name="message"
                  placeholder="Enter your message"
                  className="px-6 py-6 rounded-lg mt-2 ring-1 ring-zinc-600 hover:ring-gray-500 outline-none hover:ring-2 focus:ring-2 bg-zinc-800 w-full"
                  rows={6}
                ></textarea>
                <div className="flex text-sm absolute bottom-[-5px] md:bottom-[-10px] left-4 items-center flex-wrap">
                  <span
                    className="hidden md:flex gap-1 items-center ring-1 ring-gray-500 py-1.5 px-3 rounded-lg bg-black mt-3 mr-5"
                    onClick={() => handleMessage1(`Hi [Name],${'\n'}${'\n'}I came across your portfolio and was genuinely impressed by your work, especially in [mention specific project or skill]. I'm interested in discussing a potential job opportunity that aligns with your talents. ${'\n'}${'\n'}Could we connect to explore this further when you have a moment? ${'\n'}${'\n'}Best regards, ${'\n'}${'\n'}[Your Name]`)}
                  >
                    <span className="h-3 w-3 mr-2 rounded-full bg-emerald-500"></span>
                    Interested in Hiring{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 ml-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                      />
                    </svg>
                  </span>
                  {/* <span
                    className="flex gap-1 items-center ring-1 ring-gray-500 py-1.5 px-3 rounded-lg bg-black mt-3"
                    onClick={() => handleMessage1(`Hi [Name], ${'\n'}${'\n'}I came across your portfolio and wanted to say I'm really impressed with your work! 😊${'\n'}${'\n'}If you're up for some random chit-chat, I'd love to connect and chat about our common interests or anything that sparks our curiosity.${'\n'}${'\n'}Let me know if you're interested!Best regards,${'\n'}${'\n'}[Your Name]`)}
                  >
                    <span className="h-3 w-3 mr-2 rounded-full bg-cyan-600"></span>
                    Some random convo{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 ml-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                  </span> */}
                  <span
                    className="flex gap-1 items-center ring-1 ring-gray-500 py-1.5 px-3 rounded-lg bg-black mt-3"
                    onClick={() => handleMessage1(``)}
                  >
                    <span className="h-3 w-3 mr-2 rounded-full bg-red-400"></span>
                    Clear text{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="mt-10 md:mt-12">
                <button
                  type="submit"
                  className="flex items-center bg-gradient-to-r from-emerald-500 to-cyan-600 py-2 px-4 rounded-lg "
                >
                  Send Message
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 ml-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
