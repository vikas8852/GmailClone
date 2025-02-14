// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setOpnen } from "../redux/appSlice";
import axios from "axios";
import toast from "react-hot-toast";
const SentEmail = () => {
  const dispatch = useDispatch();
  const { open,emails } = useSelector((store) => store.app);
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:6060/api/v1/email/create",
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // console.log(res.data);
      dispatch(setEmail([...emails,res.data.email]))
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Something went wrong");
    }

    dispatch(setOpnen(false));
  };
  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}
    >
      <div className="flex items-center justify-between px-2 py-2 bg-[#F2F6FC] ">
        <h1>New Message</h1>
        <div
          onClick={() => dispatch(setOpnen(false))}
          className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer"
        >
          <RxCross2 size={"20px"} />
        </div>
      </div>
      <form onSubmit={submitHandler} className=" flex flex-col p-3 gap-2">
        <input
          onChange={changeHandler}
          value={formData.to}
          name="to"
          type="text"
          placeholder="To"
          className="outline-none py-1"
        />
        <input
          onChange={changeHandler}
          value={formData.subject}
          name="subject"
          type="text"
          placeholder="subject"
          className="outline-none py-1"
        />
        <textarea
          onChange={changeHandler}
          value={formData.message}
          name="message"
          rows={"10"}
          cols={"30"}
          className="outline-no py-1"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 rounded-full px-5 py-1 w-fit text-white"
        >
          {" "}
          Send
        </button>
      </form>
    </div>
  );
};

export default SentEmail;
