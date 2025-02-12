// eslint-disable-next-line no-unused-vars
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpnen } from "../redux/appSlice";
const SentEmail = () => {
    const dispatch=useDispatch();
    const {open}=useSelector(store=>store.app)
  return (
    <div className={`${open ? 'block' : 'hidden'} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}> 

      <div className="flex items-center justify-between px-2 py-2 bg-[#F2F6FC] ">
        <h1>New Message</h1>
        <div onClick={()=>dispatch(setOpnen(false))}  className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
          <RxCross2 size={"20px"} />
        </div>
      </div>
    <form action="" className=" flex flex-col p-3 gap-2">
        <input type="text" placeholder="To"className="outline-none py-1" />
        <input type="text" placeholder="sublect" className="outline-none py-1"  />
        <textarea rows={'10'} cols={'30'} className="outline-no py-1"></textarea>
    </form>
    </div>
  );
};

export default SentEmail;
