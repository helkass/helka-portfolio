import React from "react";
import BtnHome from "../components/BtnHome";

const About = () => {
  return (
    <section className="flex sm:flex-row flex-col-reverse bg-primary">
      <div className="bg-primary sm:w-8/12 md:p-9 p-6 md:h-screen relative overflow-hidden">
        <img
          src="./images/VectorAbout.svg"
          alt=""
          className="absolute md:w-1/2 sm:w-9/12 w-9/12 left-0 right-0 mx-auto"
        />
        <div className="border-l-4 h-full border-secondary border-b-4 text-center md:text-left relative tracking-wider md:px-7 px-4 sm:py-1 py-14 space-y-8">
          <h1 className="text-2xl">
            Halo, saya{" "}
            <strong className="capitalize text-3xl font-title">
              helka septyawan
            </strong>
          </h1>
          <p className="tracking-widest md:w-11/12 w-full leading-loose">
            Saya sekarang adalah seorang mahassiswa tingkat akhir di{" "}
            <strong className="capitalize">
              universitas amikom yogyakarta.
            </strong>{" "}
            sekarang saya menekuni teknologi seputar web development. Selalu
            stay dan komitmen mempelajari tentang web application dan saya juga
            sedang belajar untuk mendesign sebuah aplikasi web dan mobile.
          </p>
          <button className="h-10 border-2 absolute border-secondary py-1 px-3 rounded-xl lg:right-5 lg:bottom-5 right-0 bottom-2 shadow-md shadow-secondary">
            Download CV
          </button>
        </div>
      </div>
      <div className="bg-secondary lg:h-screen md:max-h-max h-screen sm:w-4/12 w-full md:p-9 p-6">
        <div className="h-full border-t-4 border-r-4 border-third relative">
          <div className="max-w-max mx-auto px-3 my-10 py-2 text-center bg-primary rounded-xl shadow-md shadow-third">
            <h2 className="text-xl font-title">About Me</h2>
          </div>
        </div>
      </div>
      <BtnHome />
    </section>
  );
};

export default About;
