import React from "react";
import { HiSearch } from "react-icons/hi";
import OtherUsers from "./OtherUsers";
const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <form action="" className="flex items-center space-x-1">
        <input
          className="input input-bordered rounded-md px-4 py-2 w-full "
          type="text"
          placeholder="Search..."
        />
        <button type="submit" className="btn bg-zinc-500 text-white p-2 rounded-md group hover:bg-zinc-700 transition">
          <HiSearch className="w-5 h-5 outline-none" />
        </button>
      </form>
      <div className="divider px-3"></div>
      <OtherUsers/>
      <div className="mt-2">
            <button className="btn btn-sm hover:bg-zinc-700 transition">   Logout </button>
      </div>
    </div>
  );
};

export default Sidebar;
