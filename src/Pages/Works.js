import React from "react";
import BtnHome from "../components/BtnHome";
import Card from "../components/Card";

const Tech = () => {
  const data = [
    {
      id: 0,
      title: "library / frameworks",
      listItems: ["React Js", "Next Js"],
    },
    {
      id: 1,
      title: "Styling tech",
      listItems: ["Vanila CSS", "Tailwind CSS", "SASS"],
    },
  ];

  return (
    <div className="text-left space-y-7 mt-8 capitalize flex justify-evenly">
      {data.map((d) => {
        return (
          <div key={d.id} className="space-y-5">
            <h3 className="text-xl">{d.title}</h3>
            <ul className="space-y-3 px-7">
              {d.listItems.map((dt) => {
                return <li className="list-disc">{dt}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

const Works = () => {
  return (
    <section className="bg-primary sm:h-screen max-h-max flex sm:flex-row flex-col">
      <div className="sm:w-4/12 w-full bg-secondary md:p-6 p-4">
        <div className="border-r-4 border-primary border-t-4 py-7 lg:px-9 sm:px-3 w-full">
          <h2 className="uppercase font-title text-2xl text-center">
            build with
          </h2>
          <Tech />
        </div>
      </div>
      <div className="sm:w-8/12 w-full md:p-6 p-4 h-screen">
        <main className="overflow-auto h-full">
          <div className="max-w-max mx-auto px-3 md:my-10 my-7 py-2 text-center bg-secondary rounded-xl shadow-md shadow-third">
            <h2 className="text-xl font-title">My Works</h2>
          </div>
          <Card />
        </main>
      </div>
      <BtnHome />
    </section>
  );
};

export default Works;
