import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img  src="https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg?w=1380&t=st=1673079685~exp=1673080285~hmac=440b3d10f3d42c6c0b7496fd85392b0e7c1d1b2889bf0ac6e5d6a9d8e8bdee40" alt='' className="w-full h-[590px] rounded-md" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://as2.ftcdn.net/v2/jpg/02/65/74/87/1000_F_265748773_yeFazVnXHOdnjumA0wzXWL5FkXTuFyM3.jpg" className="w-full h-[590px] rounded-md " alt='' />
  </div> 
  <div id="item3" className="carousel-item w-[full]">
    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-ghost-white-fr-3-4-1-1598911711.jpg?crop=1xw:1xh;center,top&resize=480:*" alt='' />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://img.freepik.com/free-photo/luxury-sports-car-back-half-side-view_90220-308.jpg?w=1060&t=st=1673031816~exp=1673032416~hmac=27829dc99cc9ef1945cd6eac78da07cdbc3d6f2699e1f96fe27783505521500d" className="w-full h-[590px] rounded-md " alt='' />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2 text-white font-[900]">
  <a href="#item1" className="bg-[#61cab2] p-3 rounded">1</a> 
  <a href="#item2" className="bg-[#61cab2] p-3 rounded">2</a> 
  <a href="#item3" className="bg-[#61cab2] p-3 rounded">3</a> 
  <a href="#item4" className="bg-[#61cab2] p-3 rounded">4</a>
</div>
            
        </div>
    );
};

export default Banner;