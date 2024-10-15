import React from "react";

const Section6 = () => {
  const data = [
    {
      icon: "https://oscar.ofm.co.za/img/ca10cf33-a6b0-4107-a0d0-d40b55952fc3.png?crop=5,0,465,259",
    },
    {
      icon: "https://www.poverty-action.org/sites/default/files/atoms/image/2021/04/19/Logo_of_the_FCDO.png",
    },
    {
      icon: "https://www.geekulcha.dev/img/friends/cpsi.png",
    },
    {
      icon: "https://www.epfweb.org/sites/default/files/2020-05/Deutsche%20Gesellschaft%20fur%20Internationale%20Zusammenarbeit.png",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/en/3/3b/Northern_Cape_DEDaT_seal.png",
    },
    {
      icon: "https://www.ars.de/thumbnail_direct/16149?w=278&h=0",
    },
    {
      icon: "https://www.uj.ac.za/wp-content/uploads/2021/08/uj-logo.png",
    },
    {
      icon: "https://customerservicecontactnumber.uk/wp-content/uploads/2017/04/RS_Components_logo.jpg",
    },
    {
      icon: "https://www.insurancechat.co.za/wp-content/uploads/2018/11/telkom-blue-1.png",
    },
    {
      icon: "https://webslides.tv/static/images/logos/microsoft.svg",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/HERE_logo.svg/1200px-HERE_logo.svg.png",
    },
    {
      icon: "https://uploads-ssl.webflow.com/5edfc79600691067acf835bd/6079706c752a09007a6ebea3_Paystack_Logo.png",
    },
  ];
  return (
    <div className="py-20">
      <div className="text-center text-gray-400 space-y-5">
        <h1 className="text-4xl font-bold ">Who we work with</h1>
        <p>
          Geekulcha has a global footprint and serve both local and
          international organisations
        </p>
        <hr className="w-[50rem] mx-auto"/>
      </div> 
      <div className="grid grid-cols-4 px-[27rem] py-[5rem] gap-3">
        {data.map((data) => {
          return (
            <div className=" border-solid border-2 p-10 hover:scale-110 shadow-md">
              <div className="bg-white  rounded-md py-2 px-1 flex flex-col justify-center items-center space-y-2 ">
                <img
                  className="w-[500px] h-[70px] rounded-sm "
                  src={data.icon}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section6;
