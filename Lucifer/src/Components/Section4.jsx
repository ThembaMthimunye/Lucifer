import React from "react";
import { CiMail } from "react-icons/ci";
import { FaIndustry } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";

const Section4 = () => {
  const data = [
    {
      icon: <FaIndustry />,
      title: "Industry Exposure",
      desc: "An ultimate showcase of tech talent for work or collaborative opportuinities",
    },
    {
      icon: <FaPeopleGroup />,
      title: "An Inclusive Tech Culture",
      desc: "Leaving no one behind and creating conducive and enabling environment for all.",
    },
    {
      icon: <FaCode />,
      title: "Capable Skills Force",
      desc: "Channeling skills development for the needs of civilization and a forecasted future.",
    },
    {
      icon: <FaGlobeAfrica />,
      title: "Digital Emancitipation",
      desc: "Digital culture shift and achieving a state of activive and safer digital consumers.",
    },
    {
      icon: <FaLeaf />,
      title: "Sustainable Development",
      desc: "An accelerated business value, enterprising mankind and creating better environment",
    },
    {
      icon: <FaWrench />,
      title: "More Producers Than Consumers",
      desc: "frica must become a high-end creator of technologies for global consumption",
    },
  ];

  return (
    <div className="bg-black">
      <div className="px-[20rem] py-[10rem]">
        <div className="space-y-5 text-white ">
          <h1 className="text-4xl font-semibold">Geekulcha Goals of Development</h1>
          <h3 className="text-gray-600 font-thin ">
            Geekulcha Goals of Development The following are 6 goals that
            Geekulcha seeks to achieve in developing a future proof Geek Kulcha
          </h3>
          <button className="bg-green-500 p-2 flex items-center gap-1 rounded-sm">
            {" "}
            <CiMail />
            SUPPORT GOALS
          </button>
          <hr />
        </div>
        <div className="grid grid-cols-3 place-items-center mt-5 gap-5">
          {data.map((list) => {
            return (
              <div className=" bg-gray-900 text-white p-5 rounded-md">
                <div className="flex gap-4">
                  <p className="bg-red-500 p-1 text-xl rounded-sm">{list.icon}</p>
                  <p>{list.title}</p>
                </div>
                <div>
                    <p>{list.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section4;
