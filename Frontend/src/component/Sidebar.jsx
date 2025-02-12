// eslint-disable-next-line no-unused-vars
import React from "react";
import { RiPencilFill } from "react-icons/ri";
import {  MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineMoveToInbox, MdOutlineWatchLater } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { TbSend2 } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setOpnen } from "../redux/appSlice";

const Sidebar = () => {
    const dispatch=useDispatch();
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button onClick={()=>dispatch(setOpnen(true))} className="flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-md">
          <RiPencilFill size={"24px"} />
          Compose
        </button>
      </div>
      <div className="text-gray-600">
        <div className="flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200">
          <MdOutlineMoveToInbox size={'25px'} />
          <p>Inbox</p>
        </div>
        <div className="flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200">
          <IoMdStar size={'25px'} />
          <p>Starred</p>
        </div>
        <div className="flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200">
          <MdOutlineWatchLater size={'25px'} />
          <p>Snoozed</p>
        </div>
        <div className="flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200">
          <TbSend2 size={'25px'} />
          <p>Sent</p>
        </div>
        <div className="flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200">
          <MdOutlineDrafts size={'25px'} />
          <p>Drafts</p>
        </div>
        <div className="flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200">
          <MdOutlineKeyboardArrowDown size={'25px'} />
          <p>More</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
