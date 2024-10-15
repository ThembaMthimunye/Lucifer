import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

const Section2 = () => {
  const data = [
    {
      logo: <FaLaptopCode />,
      title: "A platform to learn",
      desc: "There are many opportuinities to learn and acquire new skills for your developmental needs.",
    },
    {
      logo: <IoPersonSharp />,
      title: "Share with your knowledge",
      desc: "Help the ecosystem grow by sharing and enlightening your acquired knowledge onto the community",
    },
    {
      logo: <HiOutlineChatBubbleBottomCenterText />,
      title: " Inspire The Future",
      desc: "A quest to help young school learners see what is possible and build up same energy and stamina on them.",
    },
  ];
  return (
    <div className="bg-black p-10">
      <div className="grid place-content-center text-white py-[8rem] ">
        <div className="flex items-center gap-2 ">
          <div className="h-16 mt-2 w-2 bg-red-500"></div>
          <h1 className="text-6xl font-bold ">Igniting The African Geek Kulcha</h1>
        </div>
        <p className=" font-thin my-2 uppercase">
        With over 29 000 techies, this is a chance to connect with like-minded techies across Africa.
        </p>
      </div>
      <div>
        <div className="flex justify-center gap-10 text-white px-[22rem] ml-14">
          {data.map((data) => {
            return (
                <div className="bg-gray-900 rounded-xl p-5 space-y-4">
                  <div className="flex items-center gap-2 ">
                    <p className="font-bold">{data.logo}</p>
                    <p >{data.title}</p>
                  </div>
                  <p className="font-thin">{data.desc}</p>
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section2;
