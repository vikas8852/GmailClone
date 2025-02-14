// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser, setSearchText } from "../redux/appSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const { user } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  // console.log(user);
  const logoutHandler = async () => {
    try {
      const res = await axios.get("http://localhost:6060/api/v1/user/logout", {
        withCredentials: true,
      });
      toast.success(res.data.message);
      dispatch(setAuthUser(null));
      navigate("/login");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };
  useEffect(() => {
    dispatch(setSearchText(text));
  }, [text]);
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 hover:bg-gray-200 rounded-full cursor-pointer">
            <GiHamburgerMenu />
          </div>
          <img
            className="w-12"
            src="https://png.monster/wp-content/uploads/2020/11/gmail-logo-2020-01-4d7e53f1-370x175.png"
            alt="logo"
          />
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>
      {user && (
        <>
          <div className="w-[50%] mr-60 ">
            <div className="flex items-center bg-[#dae1eb] px-2 py-3 rounded-full ml-[5%]">
              <IoIosSearch size={"24px"} className="text-gray-700" />
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Search Mail"
                className="rounded-full w-full bg-transparent outline-none px-1"
              />
            </div>
          </div>
          <div className=" flex items-center gap-2">
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <CiCircleQuestion size={"26px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <IoMdSettings size={"26px"} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
              <TbGridDots size={"26px"} />
            </div>
            <span onClick={logoutHandler} className="underline cursor-pointer">
              Logout
            </span>
            <Avatar
              className=""
              src={user.profilePhoto}
              size="35"
              round={true}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
