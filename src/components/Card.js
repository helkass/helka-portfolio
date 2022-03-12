import React from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const data = [
  {
    id: 0,
    img: "./images/fostor.svg",
    alt: "fostor image",
    github: "https://github.com/helkass/fostor",
    link: "https://fostor.vercel.app/",
    title: "e commerce fostor website",
  },
  {
    id: 1,
    img: "./images/weather-app.jpg",
    alt: "weather-app",
    github: "https://github.com/helkass/weather-app",
    link: "https://weather-app-six-xi.vercel.app/",
    title: "Weather App",
  },
];

const Card = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-5 relative">
      {data.map((d) => (
        <div key={d.id} className="object-cover h-36 space-y-7 block">
          <div className="conOverlay relative max-h-max max-w-max z-10">
            <div className="overlay absolute top-0 right-0 left-0 bottom-0 bg-primary bg-opacity-60 text-center">
              <h2 className="font-title my-12 text-xl">{d.title}</h2>
            </div>
            <a href={d.link}>
              <img src={d.img} alt={d.alt} />
            </a>
          </div>
          <div className="flex justify-center gap-3 w-full">
            <a href={d.github}>
              <AiFillGithub size={30} />
            </a>
            <a href={d.link}>
              <AiOutlineLink size={30} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
