import React from "react";

function Addressbar() {
  return (
    <div className=" w-1/3 h-full flex flex-col  p-4">
      <h4 className="text-3xl text-white font-light  font-montserrat">
        Address
      </h4>
      <p className="text-white text-lg mt-10">
        123, Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <h4 className="text-xl font-light text-white  font-montserrat mt-4">
        Phone
      </h4>
      <p className="text-white text-sm font-thin">+91 1234567890</p>
      <h4 className="text-xl font-light text-white  font-montserrat mt-4">
        Email
      </h4>
      <p className="text-white text-sm font-thin">alfknalskfn@lalkfnakl.com</p>

      <p className="text-white mt-10 font-montserrat">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias earum
        iste ipsa eligendi quis, ducimus obcaecati, dolore sequi atque ratione
        reprehenderit numquam molestias, veniam doloribus fugiat quidem non
        saepe quo!
      </p>
    </div>
  );
}

export default Addressbar;
