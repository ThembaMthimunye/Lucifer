import React from "react";

const Section5 = () => {
  const data = [
    {
      image:
        "https://live.staticflickr.com/3921/14522956215_9be3faa1ee_w_d.jpg",
      desc: "First Annual Hackathon",
    },

    {
      image:
        "https://live.staticflickr.com/65535/52650086838_cfc8b976fa_w_d.jpg",
      desc: "Lesotho PFM Hackathon",
    },

    {
      image: "https://live.staticflickr.com/275/19272890156_280e314da2_w_d.jpg",
      desc: "Mozambique x South Africa",
    },
    {
      image:
        "https://live.staticflickr.com/8600/16484237350_2d3e9eda48_w_d.jpg",
      desc: "Raeketsetsa Launch",
    },
    {
      image:
        "https://pbs.twimg.com/media/CKlRZEMW8AEriAg?format=jpg&name=small",
      desc: "#GKHack15, Kenya",
    },
    {
      image:
        "https://live.staticflickr.com/65535/52162523647_6e7fcf9a63_w_d.jpg",
      desc: "Mthatha with President",
    },
    {
      image:
        "https://live.staticflickr.com/65535/47972555692_46cab34985_w_d.jpg",
      desc: "Security Hackathon, Kimberley",
    },
    {
      image:
        "https://live.staticflickr.com/7912/47517007582_9f384cec90_w_d.jpg",
      desc: "Soweto, Youth VacWork",
    },
  ];
  return (
    <div
      className="  bg-no-repeat bg-center bg-fit  "
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1531685250784-7569952593d2?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMyOTE2OTh8&ixlib=rb-4.0.3&q=100&w=3000")',
      }}
    >
      <div className="grid grid-cols-4 px-[27rem] py-[5rem] gap-3 ">
        {data.map((data) => {
          return (
            <div className=" text-center">
              <div className="bg-white  rounded-md py-2 px-1 flex flex-col justify-center items-center space-y-2 shadow-xl">
                <img className="w-[400px] h-[120px] rounded-sm" src={data.image} alt="" />
                <p className="font-thin">{data.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section5;
