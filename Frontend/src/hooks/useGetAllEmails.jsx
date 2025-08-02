import axios from "axios"
import { useEffect } from "react"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { setEmail } from "../redux/appSlice"

const useGetAllEmails=()=>{
    const dispatch=useDispatch()
    const{emails}=useSelector(store=>store.app);
    useEffect(()=>{
        const fetchEmails=async()=>{
            try {
                const res = await axios.get(
                  `${import.meta.env.VITE_API_URL}/api/v1/email/getAllEmails`,{
                    withCredentials:true
                  })
        
                if (res.data.success) {
                  toast.success(res.data.message);
                }
               // console.log(res.data.emails)
                dispatch(setEmail(res.data.emails))
              } catch (err) {
                console.error(err);
                toast.error(err.response?.data?.message || "Something went wrong");
              }
            
        }
        fetchEmails();
    },[])
}
export default useGetAllEmails;