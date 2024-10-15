import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineSpeakerPhone } from "react-icons/md";
import { PiStudentLight } from "react-icons/pi";

const Section1 = () => {
  return (
    <div
      className="  bg-no-repeat bg-center blur-sm hover:blur-none duration-500 text-white "
      style={{ 
        backgroundImage:
          'url("https://www.geekulcha.dev/images/geekculture.jpg")',
      }}
    >
      <div className=" grid place-content-center ">
        <div className=" bg-gradient-to-r from-slate-600 to-gray-900  grid gap-4 content-end relative top-1/2  p-10">
          <h1 className="text-5xl font-bold">WELCOME TO THE HOME OF THE GEEKS</h1>
          <h3 className="text-3xl  font-thin">
            Geekulcha is your tech growth one stop, building a culture of Geeks
            in Africa
          </h3>
          <hr />
          <div className="flex gap-4">
            <button
              className="border-solid border-2 border-white-700 px-2 py-1 font-bold flex items-center gap-2"
              href=""
            >
              <IoIosPhonePortrait />Build with ayoba
            </button>
            <button
              className="border-solid border-2 border-white-700 px-2 py-1 font-bold flex items-center gap-2"
              href=""
            >
               <MdOutlineSpeakerPhone />Lead GKSS
            </button>
            <button
              className="border-solid border-2 border-white-700 px-2 py-1 font-bold flex items-center gap-2"
              href=""
            >
             <PiStudentLight /> Top 15 Young Geeks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
