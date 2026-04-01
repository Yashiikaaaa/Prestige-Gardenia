import React from 'react';
import image from '../assets/gallery/image7.png';
import Button from '../components/button/buttonMain';

// Overview Component
export const Overview = ({ contactmodal, setContactModal }) => {
  return (
    <div className="bg-PrestigeGrey">
      <section
        className="w-full flex flex-wrap items-center justify-center gap-[20px] mx-auto pb-10 md:py-16 px-5 md:px-[7.5rem]"
        id="Overview"
      >
        {/* Overview Text Section */}
        <div className="flex flex-col justify-center items-center text-center gap-8 h-full md:items-start md:text-left">
          <h1 className="font-subheading font-normal text-3xl md:text-5xl text-black uppercase">
            Overview
          </h1>
          <p className="max-w-2xl md:text-base text-sm text-black font-body font-light">
          <span className="font-body font-bold text-xs md:text-lg ">
        Prestige Gardenia Estate - Phase 2

          </span>
          <br />
          
            <span>
            <p>Phase 2 of Prestige Gardenia adds 30+ acres with 200+ premium plots, expanding the project to over 75 acres in Devanahalli.The development premium plots ranging from 1,500 sq. ft. to 4,000 sq. ft. along with 35+ modern amenities, including a clubhouse, swimming pool, gym, children’s play area, landscaped parks, and more.

   </p>
            <br/>
            <p>With wide internal roads and underground utilities, Prestige Gardenia is ideal for building your dream home or investing in premium plots near Bangalore Airport.
 </p>

            

</span>
          </p>

          {/* Enquire Now Button using the reusable Button component */}
          <Button
                text="Enquire Now!"
                className=""
                onClick={() => setContactModal(!contactmodal)} // Toggle contact modal on button click
              />
          
        </div>

        {/* Image and Download Button Section */}
        <div className="hidden md:flex flex-col items-center">
          {/* Image Section */}
          <div className="w-full h-auto flex justify-center border-PrestigeDarkGrey">
            <img
              src={image}
              alt="Prestige Gardenia"
              className=" w-[420px] h-[300px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
