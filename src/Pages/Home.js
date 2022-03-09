import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineClose,
} from "react-icons/ai";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="h-screen bg-primary overflow-hidden relative">
      <div className="lg:ml-12 md:ml-9 ml-5 flex gap-4 absolute">
        <div className="bg-secondary h-screen lg:w-12 md:w-9 sm:w-7 w-5" />
        <div className="bg-secondary h-screen lg:w-12 md:w-9 sm:w-7 w-5" />
      </div>
      <div className="bg-secondary relative sm:h-16 h-14 w-screen md:mt-10 sm:mt-8 mt-4 md:px-0">
        <div className="md:w-11/12 w-full float-right h-full items-center flex md:justify-around sm:justify-between px-4">
          <div
            className={`${
              isOpen ? "left-0" : "-left-full"
            } fixed backdrop-blur-sm md:static py-28 md:py-0 md:bg-inherit md:px-2 transition-all ease-in-out duration-500 items-center text-center bg-white/30 z-20 h-full top-0 left-0 w-full md:flex md:w-auto`}
          >
            <nav className="flex flex-col md:flex-row mx-auto md:mx-0 gap-5 w-2/5 md:w-full">
              <Link
                className="md:px-7 px-5 md:py-2 py-1 rounded-xl bg-primary"
                to="./about"
              >
                About
              </Link>
              <Link
                className="md:px-7 px-5 md:py-2 py-1 rounded-xl bg-primary"
                to="./works"
              >
                Works
              </Link>
              <Link
                className="md:px-7 px-5 md:py-2 py-1 rounded-xl bg-primary"
                to="/Contact"
              >
                Contact
              </Link>
            </nav>
            <button
              className="absolute md:hidden top-5 right-5"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <AiOutlineClose size={35} />
            </button>
          </div>
          <div className="flex justify-between w-full md:max-w-max items-center">
            <div className="text-xl uppercase bg-primary py-2 px-3 rounded-xl">
              <h2>frontera</h2>
            </div>
            <button
              className="md:hidden"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <FaBars size={26} />
            </button>
          </div>
        </div>
      </div>
      <main className="w-10/12 relative float-right h-full flex sm:flex-row flex-col px-6 py-12">
        <div className="relative space-y-28 py-7 z-10">
          <h1 className="font-title lg:text-5xl text-4xl w-10/12 capitalize">
            web developer / UI/UX designer
          </h1>
          <img src="./images/footCat.svg" className="w-1/3" alt="" />
          <div className="absolute right-0 bottom-16 flex gap-3">
            <a
              className="text-secondary hover:text-white hover:scale-110 transition"
              href="https://github.com/helkass"
            >
              <AiFillGithub size={35} />
            </a>
            <a
              className="text-secondary hover:text-white hover:scale-110 transition"
              href="https://www.instagram.com/helka_septyawan/"
            >
              <AiFillInstagram size={35} />
            </a>
            <a
              className="text-secondary hover:text-white hover:scale-110 transition"
              href="https://www.instagram.com/helka_septyawan/"
            >
              <AiFillLinkedin size={35} />
            </a>
          </div>
        </div>
        <div className="w-full text-center sm:static z-0">
          <img
            className="md:w-3/4 lg:w-9/12 sm:max-w-max w-4/5 mx-auto"
            src="./images/zombie.svg"
            alt=""
          />
        </div>
      </main>
    </section>
  );
};

export default Home;
