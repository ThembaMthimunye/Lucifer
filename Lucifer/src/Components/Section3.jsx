import React from "react";
import image from "../assets/Pictures/image.jpg";

const Section3 = () => {
  const data = [
    {
      head: "Starting Them Young :",
      disc: " Building excitation and enlightenment onto young minds from high school. Geekulcha guards tomorrow's Geek Culture.",
    },
    {
      head: "Tertiary - Student Growth:",
      disc: " Academic excellence through tech and innovation leadership on campus. The GKSS initiative also builds Tech and Innovation leadership capacity.",
    },
    {
      head: "Young Professionals :",
      disc: " Development onto one's career and getting exposed to opportuinities. The programmes expose techies to technologies and industry leaders.",
    },
    {
      head: "Marginalised Communities :",
      disc: " People from low-income, the elderly, women & girls, people living with disabilities, rural/remote areas and historical marginalised.",
    },
  ];
  return (
    <div className="bg-white">
      <div className="flex gap-20 justify-center items-center  p-10 z-40 border-solid border-[20rem] border-red-600 ">
        <div className=" flex justify-center items-center">
          <img
            className="z-50 border-solid border-[1rem] w-[300px] -mt-[20rem]"
            src={image}
            alt=""
          />
        </div>
        <div className="">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-slate-500">
              What does Geekulcha really do?
            </h1>
            <p className="max-w-[40rem] ">
              Geekulcha exists to create and enable platforms for innovation and
              creativity through tech excitation at a contextualised and
              developmental approach.
            </p>
            <p className="pb-5">Championing development of these groups:</p>
          </div>

          <div className=" flex flex-col space-y-5 text-white">
            {data.map((list) => {
              return (
                <div className="bg-red-600 rounded-xl shadow-black max-w-[50rem]	 p-3 shadow-xl">
                  <p className="q">
                    {list.head}
                    <span>{list.disc}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
