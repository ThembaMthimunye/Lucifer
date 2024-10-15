import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-black text-white flex justify-center items-center gap-10 h-[4rem] ">
      <a href="">
        <img className='w-[120px] h-[40px]' src={"https://www.geekulcha.dev/logo_white.png"} alt="" />
      </a>
      <a className='' href="">Home</a>
      <a href="">About Us</a>
      <a href="">Initiatives</a>
      <a href="">Stories</a>
      <a href="">Tech Events</a>
      <a href="">#Top15YoungGeeks</a>
      <a href="">The Work</a>
      <button className='border-solid border-2 border-white-700 px-2 py-1 font-bold' href="">JOIN GEEKULTUCHA</button>
    </div>
  )
}

export default Navbar
