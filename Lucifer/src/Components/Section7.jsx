import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Section7 = () => {
  const data = [
    {
      id: 1,
      name: "AI Expo Africa 2024",
      date: "Oct 30, 2024",
      location: "Sandton Convention Center",
    },
    {
      id: 2,
      name: "Bxderless Hackathon",
      date: "Oct 30, 2024",
      location: "Sandton Convention Center",
    },
    {
        id:3 ,
        name: "Lesotho Hackathon",
        date: "Nov20, 2024",
        location: "Sandton Convention Center",
      },

      {
        id:4 ,
        name: "Soweto Hackathon",
        date: "Dec12, 2024",
        location: "Sandton Convention Center",
      },
   
  ];

  return (
    <div className="px-[20rem] py-[5rem] bg-gray-800">
      <div>
        <div className="grid grid-cols-2 place-content-center text-white py-4">
          <h1 className="font-bold text-4xl">TECH EVENTS</h1>
          <FaCalendarAlt className="mx-auto text-3xl" />
          <hr className="w-[74.7rem]" />
        </div>
        <div>
          {data.map((event) => (
            <div key={event.id} className="text-white border-red-300 grid grid-cols-2 hover:translate-x-12 duration-300">
              <div className="px-[3rem]">
                <h1 className="text-2xl font-bold">{event.name}</h1>
                <p className="text-[14px]">{event.date}</p>
                <p className="font-semibold">{event.location}</p>
              </div>
              <div className="flex justify-center p-4">
                <p className="border-solid border-2 w-16 bg-red-600 rounded-md px-1 hover:bg-red-400">{event.date}</p>
              </div>
              <hr className="w-[74.7rem]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section7;
