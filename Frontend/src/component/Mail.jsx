// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoMdArrowBack, IoMdMore } from "react-icons/io";
//import { BiArchiveIn } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import {
  MdDeleteOutline,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
  MdOutlineMarkEmailUnread,
  MdOutlineReport,
  MdOutlineWatchLater,
} from "react-icons/md";

const Mail = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div
            onClick={() => navigate("/")}
            className="p-2 rounded-full hover:bg-gray-200"
          >
            <IoMdArrowBack size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200">
            <IoMdArrowBack size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200">
            <MdOutlineReport size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200">
            <MdDeleteOutline size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200">
            <MdOutlineMarkEmailUnread size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200">
            <MdOutlineWatchLater size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200">
            <MdOutlineAddTask size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200">
            <MdOutlineDriveFileMove size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>1 to 50</span>
          <MdKeyboardArrowLeft size={"20px"} />
          <MdKeyboardArrowRight size={"20px"} />
        </div>
      </div>
      <div className="h-[90vh]  overflow-y-auto p-4">
        <div className="flex justify-between bg-white items-center gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">Subject</h1>
            <span className="text-sm bg-gray-100 rounded-md px-2">Inbox</span>
          </div>
          <div className="flex-none text-gray-400 my-5 text-sm">
            <p>12 days ago</p>
          </div>
        </div>
        <div className="text-gray-500 text-sm">
          <h1 className="">aryansingh@gmial.com</h1>
          <span>to me</span>
        </div>
        <div className="my-10"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          aliquid consequuntur dolorum eveniet repellendus omnis.
        </p>
      </div>
    </div>
  );
};

export default Mail;
