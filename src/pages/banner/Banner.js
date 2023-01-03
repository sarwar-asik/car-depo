import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img  src="https://img.freepik.com/free-photo/close-up-sales-manager-black-suit-selling-car-customer_146671-14738.jpg?w=1060&t=st=1669575585~exp=1669576185~hmac=53856eedf892cf04de36a6392f12385e9c99518e18e06dc5a303578aa3f880db" alt='' className="w-full h-[490px]" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://as2.ftcdn.net/v2/jpg/02/65/74/87/1000_F_265748773_yeFazVnXHOdnjumA0wzXWL5FkXTuFyM3.jpg" className="w-full h-[490px] " alt='' />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://as1.ftcdn.net/v2/jpg/03/99/51/32/1000_F_399513285_jt8xoPECnoH1dGIUsYcaNeFnlJ3j3khd.jpg" className="w-full h-[490px] " alt='' />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://as1.ftcdn.net/v2/jpg/03/20/08/76/1000_F_320087600_bt2JGXGArTfvdfq0FOgzy5ZOJkZLpjxH.jpg" className="w-full h-[490px] " alt='' />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-primary btn-sm">1</a> 
  <a href="#item2" className="btn btn-primary btn-sm">2</a> 
  <a href="#item3" className="btn btn-primary btn-sm">3</a> 
  <a href="#item4" className="btn btn-primary btn-sm">4</a>
</div>
            
        </div>
    );
};

export default Banner;