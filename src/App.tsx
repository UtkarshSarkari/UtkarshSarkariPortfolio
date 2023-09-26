import React, { useState } from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Skills from "./components/Skills/Skills";
import Quotes from "./components/Quotes";
import Projects from "./components/Projects/Projects";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import { Toaster } from "react-hot-toast";
import { allLinks } from "./components/allLinks";
import { Link } from "react-scroll";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const menu = ["About", "Experience", "Projects", "Skills", "Contact"];

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            fontFamily: "monospace",
          },
        }}
      ></Toaster>
      <div className="flex flex-col items-center justify-center h-full font-mainFont">
        <Header openModal={openModal} />
        <div id="about"></div>
        <About />
        <Quotes
          quote=" You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something - your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life. "
          author="Steve Jobs"
          imgurl="./images/apple.png"
        />
        <div id="work"></div>
        <Work />
        <Quotes
          quote="The common thread for everything I do is this idea of a Web-services architecture. What does that mean? It means taking components of software and systems and having them be self-describing, so that you can aim them, ask them what their capabilities are, and communicate with them using a standard protocol."
          author="Bill Gates"
          imgurl="./images/microsoft.png"
        />
        <div id="projects"></div>
        <Projects />
        <Quotes
          quote="If you are entering anything where there is an existing marketplace, against large, entrenched competitors, then your product or service needs to be much better than theirs. It can not be a little bit better, because then you put yourself in the shoes of the consumer... you are always going to buy the trusted brand unless there is a big difference."
          author="Elon Musk"
          imgurl="./images/rocket.png"
        />
        <div id="skills"></div>
        <Skills />
        <Quotes
          quote="None can destroy iron, but its own rust can! Likewise none can destroy a person, but its own mindset can! I admire people who are very successful. But if that success has been achieved through too much ruthlessness, then I may admire that person, but I can not respect him."
          author="Ratan Tata"
          imgurl="./images/tata.png"
        />
        <div id="contact"></div>
        <Contact />

        {isModalOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black opacity-80 z-40"
              onClick={closeModal}
            ></div>
            {/* Modal */}
            <div
              className="bg-zinc-500 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-6 px-8 z-50 w-[70%] text-white rounded-lg"
              style={{
                transform: "translate(-50%, -50%)", // Center the modal
              }}
            >
              <div className="">
                <div className="text-lg sm:text-1.5xl font-semibold mb-10 flex items-center justify-between">
                  Jump To Section
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                    onClick={closeModal}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <ul className="">
                  {allLinks.map((link) => (
                    <li key={link.name} className="my-5 text-lg">
                      <div className="flex items-center gap-2">
                        <Link
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={1500}
                          to={link.src}
                          className="cursor-pointer hover:text-gray-300"
                        >
                          {link.name}
                        </Link>
                        <div className="h-[1px] w-[100%] bg-white"></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
