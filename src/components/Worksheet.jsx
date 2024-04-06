import React, { useState } from "react";
import construction from "../assets/images/png/construction.png";
import brandname from "../assets/images/png/brandname.png";
import lemonwares from "../assets/images/png/LEMONWARES.png";
import company from "../assets/images/png/company.png";
import dino from "../assets/images/png/dino.png";
import phptek from "../assets/images/png/PHPTEK.png";
import sclair from "../assets/images/png/sclair.png";
import nexai from "../assets/images/png/nexai.png";
import reacttopics from "../assets/images/png/reacttopics.png";
import cloop from "../assets/images/png/cloop.png";
import furniture from "../assets/images/png/furniture.png";
import slider from "../assets/images/png/html-vite-swiper-slider.png";
import worksheet from "../assets/images/png/worksheet.png";
import slides from "../assets/images/png/slickslider.png";
import noble from "../assets/images/png/noble-mind.png";
import miners from "../assets/images/png/mini-miners.png";
import formvalid from "../assets/images/png/formvalid.png";
import reactswiper from "../assets/images/png/swiper-react.png";

const Worksheet = () => {
  const [tab, settab] = useState("tab1");
  function handletab(tabs) {
    settab(tabs);
  }
  return (
    <>
      <div className="bg-[#5f9ea0] min-h-screen">
        <div className="container max-w-[1320px] mx-auto px-3 pt-5">
          <div className="flex-col flex justify-center items-center">
            <h1 className="md:text-5xl text-3xl mb-4 text-center border-b-4 border-white font-bold text-white">
              WORKSHEET-2024
            </h1>
          </div>
          <div>
            <div className="md:my-5 my-3 flex justify-between gap-4 max-w-[1320px] overflow-x-scroll scroll_none">
              <button
                className={`rounded-full  mb-2 w-full px-8 text-2xl text-center py-2 border-solid border-white border-[3px] ${
                  tab === "tab1"
                    ? "text-[#5f9ea0] transition-all duration-500 ease-in-out bg-white"
                    : "text-white transition-all duration-500 ease-in-out"
                }`}
                onClick={() => handletab("tab1")}
              >
                January
              </button>
              <button
                className={`rounded-full  mb-2 w-full px-8 text-2xl text-center py-2 border-solid border-white border-[3px] ${
                  tab === "tab2"
                    ? "text-[#5f9ea0] transition-all duration-500 ease-in-out bg-white"
                    : "text-white transition-all duration-500 ease-in-out"
                }`}
                onClick={() => handletab("tab2")}
              >
                February
              </button>
              <button
                className={`rounded-full  mb-2 w-full px-8 text-2xl text-center py-2 border-solid border-white border-[3px] ${
                  tab === "tab3"
                    ? "text-[#5f9ea0] transition-all duration-500 ease-in-out bg-white"
                    : "text-white transition-all duration-500 ease-in-out"
                }`}
                onClick={() => handletab("tab3")}
              >
                March
              </button>
              <button
                className={`rounded-full  mb-2 w-full px-8 text-2xl text-center py-2 border-solid border-white border-[3px] ${
                  tab === "tab4"
                    ? "text-[#5f9ea0] transition-all duration-500 ease-in-out bg-white"
                    : "text-white transition-all duration-500 ease-in-out"
                }`}
                onClick={() => handletab("tab4")}
              >
                April
              </button>
              <button
                className={`rounded-full  mb-2 w-full px-8 text-2xl text-center py-2 border-solid border-white border-[3px] ${
                  tab === "tab5"
                    ? "text-[#5f9ea0] transition-all duration-500 ease-in-out bg-white"
                    : "text-white transition-all duration-500 ease-in-out"
                }`}
                onClick={() => handletab("tab5")}
              >
                May
              </button>
              <button
                className={`rounded-full  mb-2 w-full px-8 text-2xl text-center py-2 border-solid border-white border-[3px] ${
                  tab === "tab6"
                    ? "text-[#5f9ea0] transition-all duration-500 ease-in-out bg-white"
                    : "text-white transition-all duration-500 ease-in-out"
                }`}
                onClick={() => handletab("tab6")}
              >
                June
              </button>
              <button
                className={`rounded-full  mb-2 w-full px-8 text-2xl text-center py-2 border-solid border-white border-[3px] ${
                  tab === "tab7"
                    ? "text-[#5f9ea0] transition-all duration-500 ease-in-out bg-white"
                    : "text-white transition-all duration-500 ease-in-out"
                }`}
                onClick={() => handletab("tab7")}
              >
                July
              </button>
              <button
                className={`rounded-full  mb-2 w-full px-8 text-2xl text-center py-2 border-solid border-white border-[3px] ${
                  tab === "tab8"
                    ? "text-[#5f9ea0] transition-all duration-500 ease-in-out bg-white"
                    : "text-white transition-all duration-500 ease-in-out"
                }`}
                onClick={() => handletab("tab8")}
              >
                August
              </button>
            </div>
            <div className="pb-5">
              {tab === "tab1" && (
                <div className="px-3 py-5 flex flex-col gap-7 border-white max-h-[500px] overflow-y-scroll border-4 rounded-xl">
                  <div className="flex flex-wrap gap-4 md:justify-between justify-center items-center flex-row">
                    <div className="md:w-[45%]">
                      <div className="flex">
                        <p className="text-white pe-1 text-2xl pb-3">1.</p>
                        <img
                          src={company}
                          alt="1"
                          className="w-full max-h-[200px] h-full md:max-w-[350px] max-w-[290px] rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="md:w-[50%]">
                      <p className="text-white font-bold pb-3 text-3xl">
                        COMPANY
                      </p>
                      <div>
                        <p className="text-white text-xl">
                          Github-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://github.com/Sakshi-Pareek/compant-project.git"
                              target="blank"
                            >
                              https://github.com/Sakshi-Pareek/compant-project.git
                            </a>
                          </span>
                        </p>
                        <p className="text-white text-xl">
                          Live-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://company-66fa0.web.app/"
                              target="blank"
                            >
                              https://company-66fa0.web.app/
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 md:justify-between justify-center items-center flex-row">
                    <div className="md:w-[45%] w-full">
                      <div className="flex">
                        <p className="text-white pe-1 text-2xl pb-3">2.</p>
                        <img
                          src={construction}
                          alt="1"
                          className="w-full max-h-[200px] h-full md:max-w-[350px] max-w-[290px] rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="md:w-[50%] w-full">
                      <p className="text-white font-bold pb-3 text-3xl">
                        CONSTRUCTION
                      </p>
                      <div>
                        <p className="text-white text-xl">
                          Github-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://github.com/Sakshi-Pareek/construction-buildig.git"
                              target="blank"
                            >
                              https://github.com/Sakshi-Pareek/construction-buildig.git
                            </a>
                          </span>
                        </p>
                        <p className="text-white text-xl">
                          Live-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://constructionss.netlify.app/"
                              target="blank"
                            >
                              https://constructionss.netlify.app/
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 md:justify-between justify-center items-center flex-row">
                    <div className="md:w-[45%]">
                      <div className="flex">
                        <p className="text-white pe-1 text-2xl pb-3">3.</p>
                        <img
                          src={brandname}
                          alt="1"
                          className="w-full max-h-[200px] h-full md:max-w-[350px] max-w-[290px] rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="md:w-[50%]">
                      <p className="text-white font-bold pb-3 text-3xl">
                        BRANDNAME
                      </p>
                      <div>
                        <p className="text-white text-xl">
                          Github-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://github.com/Sakshi-Pareek/bran_name.git"
                              target="blank"
                            >
                              https://github.com/Sakshi-Pareek/bran_name.git
                            </a>
                          </span>
                        </p>
                        <p className="text-white text-xl">
                          Live-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://brandname001.netlify.app/"
                              target="blank"
                            >
                              https://brandname001.netlify.app/
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 md:justify-between justify-center items-center flex-row">
                    <div className="md:w-[45%]">
                      <div className="flex">
                        <p className="text-white pe-1 text-2xl pb-3">4.</p>
                        <img
                          src={lemonwares}
                          alt="1"
                          className="w-full max-h-[200px] h-full md:max-w-[350px] max-w-[290px] rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="md:w-[50%]">
                      <p className="text-white font-bold pb-3 text-3xl">
                        LEMON WARES
                      </p>
                      <div>
                        <p className="text-white text-xl">
                          Github-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://github.com/Sakshi-Pareek/lemon-wares.git"
                              target="blank"
                            >
                              https://github.com/Sakshi-Pareek/lemon-wares.git
                            </a>
                          </span>
                        </p>
                        <p className="text-white text-xl">
                          Live-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://lenomwares101.netlify.app/"
                              target="blank"
                            >
                              https://lenomwares101.netlify.app/
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {tab === "tab2" && (
                <div className="px-3 py-5 flex flex-col gap-7 border-white max-h-[500px] overflow-y-scroll border-4 rounded-xl">
                  <div className="flex flex-wrap gap-4 md:justify-between justify-center items-center flex-row">
                    <div className="md:w-[45%]">
                      <div className="flex">
                        <p className="text-white pe-1 text-2xl pb-3">1.</p>
                        <img
                          src={dino}
                          alt="1"
                          className="w-full max-h-[200px] h-full md:max-w-[350px] max-w-[290px] rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="md:w-[50%]">
                      <p className="text-white font-bold pb-3 text-3xl">
                        DINOLFG
                      </p>
                      <div>
                        <p className="text-white text-xl">
                          Github-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://github.com/Sakshi-Pareek/dinolfg.git"
                              target="blank"
                            >
                              https://github.com/Sakshi-Pareek/dinolfg.git
                            </a>
                          </span>
                        </p>
                        <p className="text-white text-xl">
                          Live-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://dinolfg01.netlify.app"
                              target="blank"
                            >
                              https://dinolfg01.netlify.app
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 md:justify-between justify-center items-center flex-row">
                    <div className="md:w-[45%]">
                      <div className="flex">
                        <p className="text-white pe-1 text-2xl pb-3">3.</p>
                        <img
                          src={sclair}
                          alt="1"
                          className="w-full max-h-[200px] h-full md:max-w-[350px] max-w-[290px] rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="md:w-[50%]">
                      <p className="text-white font-bold pb-3 text-3xl">
                        SCLAIR
                      </p>
                      <div>
                        <p className="text-white text-xl">
                          Github-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://github.com/Sakshi-Pareek/Sclair.git"
                              target="blank"
                            >
                              https://github.com/Sakshi-Pareek/Sclair.git
                            </a>
                          </span>
                        </p>
                        <p className="text-white text-xl">
                          Live-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a href="https://sclair.netlify.app" target="blank">
                              https://sclair.netlify.app
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 md:justify-between justify-center items-center flex-row">
                    <div className="md:w-[45%]">
                      <div className="flex">
                        <p className="text-white pe-1 text-2xl pb-3">3.</p>
                        <img
                          src={phptek}
                          alt="1"
                          className="w-full max-h-[200px] h-full md:max-w-[350px] max-w-[290px] rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="md:w-[50%]">
                      <p className="text-white font-bold pb-3 text-3xl">
                        PHP-TEK
                      </p>
                      <div>
                        <p className="text-white text-xl">
                          Github-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://github.com/Sakshi-Pareek/pratice-whole.git"
                              target="blank"
                            >
                              https://github.com/Sakshi-Pareek/pratice-whole.git
                            </a>
                          </span>
                        </p>
                        <p className="text-white text-xl">
                          Live-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a href="https://phptek.netlify.app" target="blank">
                              https://phptek.netlify.app
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 md:justify-between justify-center items-center flex-row">
                    <div className="md:w-[45%]">
                      <div className="flex">
                        <p className="text-white pe-1 text-2xl pb-3">4.</p>
                        <img
                          src={nexai}
                          alt="1"
                          className="w-full max-h-[200px] h-full md:max-w-[350px] max-w-[290px] rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="md:w-[50%]">
                      <p className="text-white font-bold pb-3 text-3xl">
                        NEXAI
                      </p>
                      <div>
                        <p className="text-white text-xl">
                          Github-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://github.com/Sakshi-Pareek/NexAi.git"
                              target="blank"
                            >
                              https://github.com/Sakshi-Pareek/NexAi.git
                            </a>
                          </span>
                        </p>
                        <p className="text-white text-xl">
                          Live-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://nexai01.netlify.app"
                              target="blank"
                            >
                              https://nexai01.netlify.app
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 md:justify-between justify-center items-center flex-row">
                    <div className="md:w-[45%]">
                      <div className="flex">
                        <p className="text-white pe-1 text-2xl pb-3">5.</p>
                        <img
                          src={reacttopics}
                          alt="1"
                          className="w-full max-h-[200px] h-full md:max-w-[350px] max-w-[290px] rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="md:w-[50%]">
                      <p className="text-white font-bold pb-3 text-3xl">
                        REACT-TOPICS
                      </p>
                      <div>
                        <p className="text-white text-xl">
                          Github-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://github.com/Sakshi-Pareek/react-important-topics.git"
                              target="blank"
                            >
                              https://github.com/Sakshi-Pareek/react-important-topics.git
                            </a>
                          </span>
                        </p>
                        <p className="text-white text-xl">
                          Live-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://react-important-topics.netlify.app/"
                              target="blank"
                            >
                              https://react-important-topics.netlify.app/
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {tab === "tab3" && (
                <div className="px-3 py-5 flex flex-col gap-7 border-white max-h-[500px] overflow-y-scroll border-4 rounded-xl">
                  <div className="flex flex-wrap gap-4 md:justify-between justify-center items-center flex-row">
                    <div className="md:w-[45%]">
                      <div className="flex">
                        <p className="text-white pe-1 text-2xl pb-3">1.</p>
                        <img
                          src={cloop}
                          alt="1"
                          className="w-full max-h-[200px] h-full md:max-w-[350px] max-w-[290px] rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="md:w-[50%]">
                      <p className="text-white font-bold pb-3 text-3xl">
                        CLOOPP
                      </p>
                      <div>
                        <p className="text-white text-xl">
                          Github-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://github.com/Sakshi-Pareek/Cloopp.git"
                              target="blank"
                            >
                              https://github.com/Sakshi-Pareek/Cloopp.git
                            </a>
                          </span>
                        </p>
                        <p className="text-white text-xl">
                          Live-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://cloopp01.netlify.app"
                              target="blank"
                            >
                              https://cloopp01.netlify.app
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 md:justify-between justify-center items-center flex-row">
                    <div className="md:w-[45%]">
                      <div className="flex">
                        <p className="text-white pe-1 text-2xl pb-3">2.</p>
                        <img
                          src={furniture}
                          alt="1"
                          className="w-full max-h-[200px] h-full md:max-w-[350px] max-w-[290px] rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="md:w-[50%]">
                      <p className="text-white font-bold pb-3 text-3xl">
                        FURNITURE
                      </p>
                      <div>
                        <p className="text-white text-xl">
                          Github-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://github.com/Sakshi-Pareek/FURNITURE.git"
                              target="blank"
                            >
                              https://github.com/Sakshi-Pareek/FURNITURE.git
                            </a>
                          </span>
                        </p>
                        <p className="text-white text-xl">
                          Live-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://furniture001.netlify.app"
                              target="blank"
                            >
                              https://furniture001.netlify.app
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 md:justify-between justify-center items-center flex-row">
                    <div className="md:w-[45%]">
                      <div className="flex">
                        <p className="text-white pe-1 text-2xl pb-3">3.</p>
                        <img
                          src={slider}
                          alt="1"
                          className="w-full max-h-[200px] h-full md:max-w-[350px] max-w-[290px] rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="md:w-[50%]">
                      <p className="text-white font-bold pb-3 text-3xl">
                        HTML VITE SWIPER SLIDER
                      </p>
                      <div>
                        <p className="text-white text-xl">
                          Github-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://github.com/Sakshi-Pareek/html_vite.git"
                              target="blank"
                            >
                              https://github.com/Sakshi-Pareek/html_vite.git
                            </a>
                          </span>
                        </p>
                        <p className="text-white text-xl">
                          Live-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://html-vite-pi.vercel.app/"
                              target="blank"
                            >
                              https://html-vite-pi.vercel.app/
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 md:justify-between justify-center items-center flex-row">
                    <div className="md:w-[45%]">
                      <div className="flex">
                        <p className="text-white pe-1 text-2xl pb-3">4.</p>
                        <img
                          src={worksheet}
                          alt="1"
                          className="w-full max-h-[200px] h-full md:max-w-[350px] max-w-[290px] rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="md:w-[50%]">
                      <p className="text-white font-bold pb-3 text-3xl">
                        WORKSHEET
                      </p>
                      <div>
                        <p className="text-white text-xl">
                          Github-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://github.com/Sakshi-Pareek/worksheet.git"
                              target="blank"
                            >
                              https://github.com/Sakshi-Pareek/worksheet.git
                            </a>
                          </span>
                        </p>
                        <p className="text-white text-xl">
                          Live-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://worksheet-snowy.vercel.app/"
                              target="blank"
                            >
                              https://worksheet-snowy.vercel.app/
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {tab === "tab4" && (
                <div className="px-3 py-5 flex flex-col gap-7 border-white max-h-[500px] overflow-y-scroll border-4 rounded-xl">
                  <div className="flex flex-wrap gap-4 md:justify-between justify-center items-center flex-row">
                    <div className="md:w-[45%]">
                      <div className="flex">
                        <p className="text-white pe-1 text-2xl pb-3">1.</p>
                        <img
                          src={slides}
                          alt="1"
                          className="w-full max-h-[200px] h-full md:max-w-[350px] max-w-[290px] rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="md:w-[50%]">
                      <p className="text-white font-bold pb-3 text-3xl">
                        REACT SLICK SLIDER
                      </p>
                      <div>
                        <p className="text-white text-xl">
                          Github-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://github.com/Sakshi-Pareek/react-slick-slider.git"
                              target="blank"
                            >
                              https://github.com/Sakshi-Pareek/react-slick-slider.git
                            </a>
                          </span>
                        </p>
                        <p className="text-white text-xl">
                          Live-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://slicksliderreact01.netlify.app/"
                              target="blank"
                            >
                              https://slicksliderreact01.netlify.app/
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 md:justify-between justify-center items-center flex-row">
                    <div className="md:w-[45%]">
                      <div className="flex">
                        <p className="text-white pe-1 text-2xl pb-3">2.</p>
                        <img
                          src={noble}
                          alt="1"
                          className="w-full max-h-[200px] h-full md:max-w-[350px] max-w-[290px] rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="md:w-[50%]">
                      <p className="text-white font-bold pb-3 text-3xl">
                        NOBLE MIND (NEXTJS)
                      </p>
                      <div>
                        <p className="text-white text-xl">
                          Github-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://github.com/Sakshi-Pareek/noble_mind.git"
                              target="blank"
                            >
                              https://github.com/Sakshi-Pareek/noble_mind.git
                            </a>
                          </span>
                        </p>
                        <p className="text-white text-xl">
                          Live-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://noble-mind-tawny.vercel.app/"
                              target="blank"
                            >
                              https://noble-mind-tawny.vercel.app/
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 md:justify-between justify-center items-center flex-row">
                    <div className="md:w-[45%]">
                      <div className="flex">
                        <p className="text-white pe-1 text-2xl pb-3">3.</p>
                        <img
                          src={miners}
                          alt="1"
                          className="w-full max-h-[200px] h-full md:max-w-[350px] max-w-[290px] rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="md:w-[50%]">
                      <p className="text-white font-bold pb-3 text-3xl">
                        MINI MINERS (LIVE PROJECT)
                      </p>
                      <div>
                        <p className="text-white text-xl">
                          Github-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://github.com/Sakshi-Pareek/mini-miners.git"
                              target="blank"
                            >
                              https://github.com/Sakshi-Pareek/mini-miners.git
                            </a>
                          </span>
                        </p>
                        <p className="text-white text-xl">
                          Live-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://mini-miners.netlify.app/"
                              target="blank"
                            >
                              https://mini-miners.netlify.app/
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 md:justify-between justify-center items-center flex-row">
                    <div className="md:w-[45%]">
                      <div className="flex">
                        <p className="text-white pe-1 text-2xl pb-3">4.</p>
                        <img
                          src={formvalid}
                          alt="1"
                          className="w-full max-h-[200px] h-full md:max-w-[350px] max-w-[290px] rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="md:w-[50%]">
                      <p className="text-white font-bold pb-3 text-3xl">
                        FORM VALIDATION IN REACT
                      </p>
                      <div>
                        <p className="text-white text-xl">
                          Github-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://github.com/Sakshi-Pareek/form-validation-react.git"
                              target="blank"
                            >
                              https://github.com/Sakshi-Pareek/form-validation-react.git
                            </a>
                          </span>
                        </p>
                        <p className="text-white text-xl">
                          Live-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://form-validation-react-fawn.vercel.app/"
                              target="blank"
                            >
                              https://form-validation-react-fawn.vercel.app/
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 md:justify-between justify-center items-center flex-row">
                    <div className="md:w-[45%]">
                      <div className="flex">
                        <p className="text-white pe-1 text-2xl pb-3">5.</p>
                        <img
                          src={reactswiper}
                          alt="1"
                          className="w-full max-h-[200px] h-full md:max-w-[350px] max-w-[290px] rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="md:w-[50%]">
                      <p className="text-white font-bold pb-3 text-3xl">
                        SWIPER SLIDER IN REACT
                      </p>
                      <div>
                        <p className="text-white text-xl">
                          Github-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://github.com/Sakshi-Pareek/swiper-slider-react.git"
                              target="blank"
                            >
                              https://github.com/Sakshi-Pareek/swiper-slider-react.git
                            </a>
                          </span>
                        </p>
                        <p className="text-white text-xl">
                          Live-Link :{" "}
                          <span className="ms-3 border-b-2 border-white hover:text-blue-700 duration-500">
                            <a
                              href="https://swiper-slider-react-rosy.vercel.app/"
                              target="blank"
                            >
                              https://swiper-slider-react-rosy.vercel.app/
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {tab === "tab5" && (
                <div className="px-3 py-5 flex flex-col gap-7 border-white h-[500px] overflow-y-scroll border-4 rounded-xl">
                  <p className="text-white text-4xl font-bold">COMING-SOON</p>
                </div>
              )}
              {tab === "tab6" && (
                <div className="px-3 py-5 flex flex-col gap-7 border-white h-[500px] overflow-y-scroll border-4 rounded-xl">
                  <p className="text-white text-4xl font-bold">COMING-SOON</p>
                </div>
              )}
              {tab === "tab7" && (
                <div className="px-3 py-5 flex flex-col gap-7 border-white h-[500px] overflow-y-scroll border-4 rounded-xl">
                  <p className="text-white text-4xl font-bold">COMING-SOON</p>
                </div>
              )}
              {tab === "tab8" && (
                <div className="px-3 py-5 flex flex-col gap-7 border-white h-[500px] overflow-y-scroll border-4 rounded-xl">
                  <p className="text-white text-4xl font-bold">COMING-SOON</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Worksheet;
