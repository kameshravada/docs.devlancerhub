import React, { useState } from "react";
import { sideheads } from "../Data/Data";

const SideBar = () => {
  const[active,setActive]=useState(null);
  return (
    <div className="h-[90vh] bg-[#0d1224] w-[20%] py-10 flex flex-col gap-2">
      {sideheads.map((item, index) => (
        <a
          className={`flex gap-3 text-white items-center justify-start px-4 py-3 cursor-pointer border-l-4 border-transparent ${
            active === index
              ? //   ? "bg-gradient-to-r from-[#144c52] to-[] border-l-4 !border-[#26ffe3] rounded transition-all duration-10 ease-in-out"
                //"bg-gradient-to-r from-[#002366] to-[] border-l-4 !border-[#4da6ff] rounded transition-all duration-10 ease-in-out"
                "bg-gradient-to-r from-[#ffe503]/15 to-[] border-l-4 !border-[#ffcc33]/90 rounded transition-all duration-10 ease-in-out"
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
