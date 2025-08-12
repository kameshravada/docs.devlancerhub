import React from "react";
import { sideheads } from "../Data/Data";

const SideBar = () => {
  return (
    <div className="h-screen bg-[#0d1224] w-[19%] py-10">
      {sideheads.map((item, index) => (
        <a
          className="flex gap-3 text-white items-center justify-start p-5 cursor-pointer"
          key={index}
        >
          <div className="">{item.icon}</div>
          <h1 className="text-sm">{item.title}</h1>
        </a>
      ))}
    </div>
  );
};

export default SideBar;
