import React, { useState } from "react";
import { sideheads } from "../Data/Data";

const SideBar = () => {
  const[active,setActive]=useState(null);
  return (
    <div className="h-screen bg-[#0d1224] w-[19%] py-10 flex flex-col gap-2">
      {sideheads.map((item, index) => (
        <a
          className={`flex gap-3 text-white items-center justify-start p-5 cursor-pointer ${
            active === index
              ? "bg-gradient-to-r from-[#144c52] to-[] border-l-4 border-[#26ffe3] "
              : ""
          } `}
          key={index}
          onClick={() => setActive(index)}
        >
          <div className="">{item.icon}</div>
          <h1 className="text-sm">{item.title}</h1>
        </a>
      ))}
    </div>
  );
};

export default SideBar;
