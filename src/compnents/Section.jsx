import React from "react";


const Section = () => {
  return (
    <main className="hero container">
      <div className="hero-Content">
        <h1> YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR DESERVE THE BEST ,WE ARE HERE TO HELP YOU WITH OUR SHOES .YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES .</p>

        <div className="flex flex-row gap-1">
          <div className="bg-red-400 px-4 py-2 rounded-l-xl shadow-md border border-amber-600 text-black font-semibold hover:bg-[rgba(0,0,0,0.1)] cursor-pointer hover:shadow-none transition-all duration-75"> Shop Now</div>
          <div className="bg-[rgba(0,0,0,0.1)] px-4 py-2  cursor-pointer rounded-r-xl shadow-md border border-amber-600 text-black font-semibold hover:bg-amber-600 hover:shadow-none transition-all duration-75"> Category</div>
        </div>
        <div className="shopping">
          <p1>Also Available On</p1>
          <div className="brand-icons">
            <img src="/Group 3.png" alt="Nike bar1" />
            <img src="/Group 4.png" alt="Nike bar2" />
          </div>


        </div>

      </div>

      <div className="hero-Imag" >
        <img
          className="w-full h-full transform transition-all duration-500 ease-in-out hover:rotate-20 hover:scale-110"
          src="/Shoe 2.png"
          alt="shoe-image"
        />



      </div>

    </main>


  );
};

export default Section;
