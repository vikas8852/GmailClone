import { Email } from "../models/email.model.js";

export const createEmail=async(req,res)=>{
    try{
        const userId=req.id;    //at the time of authentication we fetch userId from cookies and set it into the req.id
        const{to,subject,message}=req.body;
        if(!to || !subject || !message){
            return res.status(400).json({message:'All fields are required',success:false});
        }
        const email=await Email.create({
            to,
            subject,
            message,
            userId
        });
        return res.status(200).json({
            message:'Email create successfully',
            email,
            success:true
        });

    }
    catch(err){
        console.log(err);
    }
}
export const deleteEmail=async(req,res)=>{
    try{
        const emailId=req.params.id;
        if(!emailId){
            return res.status(400).json({message:'Email id is required',success:false});
        }
        const email=await Email.findByIdAndDelete(emailId);
        if(!email){
            return res.status(400).json({message:'Email is not found',success:false});   
        }
        return res.status(200).json({
            message:'Email deleted successfully',
            email,
            success:true
        });
    }
    catch(err){
        console.log(err);
    }
}
export const getAllEmailById=async(req,res)=>{
    try{
    const userId=req.id;   //fetch all the emails of that user which is currently logged in
    const emails=await await Email.find({userId});

    return res.status(200).json({
        message:"All message fetched Successfully",
        emails,
        success:true
    })
    }
    catch(err){
        console.log(err);
    }

}