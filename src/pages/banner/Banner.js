import React from "react";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";


const Banner = () => {
  return (
    <div className="max-w-[100%] mx-auto">
      <div className="carousel w-full mx-auto">
        <div id="item1" className="carousel-item w-full">
          <img
            src={banner1}
            alt=""
            className="w-full h-[590px] rounded-md"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
             src={banner2}
            className="w-full h-[590px] rounded-md "
            alt=""
          />
        </div>
        <div id="item3" className="carousel-item w-[full]">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-ghost-white-fr-3-4-1-1598911711.jpg?crop=1xw:1xh;center,top&resize=480:*"
            alt=""
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-photo/luxury-sports-car-back-half-side-view_90220-308.jpg?w=1060&t=st=1673031816~exp=1673032416~hmac=27829dc99cc9ef1945cd6eac78da07cdbc3d6f2699e1f96fe27783505521500d"
            className="w-full h-[590px] rounded-md "
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2 text-white font-[900]">
        <a href="#item1" className="bg-[#61cab2] p-3 rounded">
          1
        </a>
        <a href="#item2" className="bg-[#61cab2] p-3 rounded">
          2
        </a>
        <a href="#item3" className="bg-[#61cab2] p-3 rounded">
          3
        </a>
        <a href="#item4" className="bg-[#61cab2] p-3 rounded">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
