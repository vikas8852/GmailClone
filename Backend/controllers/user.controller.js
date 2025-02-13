import { User } from "../models/user.models.js";
import bcrypt from 'bcryptjs'
 import jwt from 'jsonwebtoken'


export const register=async(req,res)=>{
 try{
    const{fullname,email,password}=req.body;
    if(!fullname || !email || !password){
        return res.status(400).json({message:'All fields are required',success:false});
    }
    const user=await User.findOne({email});
    if(user){
        return res.status(400).json({message:'User Already exist with this email',success:false});
    }
    const hashPassword=await bcrypt.hash(password,10);
    const profilePhoto=`https://avatar.iran.liara.run/public/boy`;
    await User.create({
        fullname,
        email,
        password:hashPassword,
        profilePhoto
    });
    return res.status(201).json({
        message:'Account created Succssfully',
        success:true
    });

 } 
 catch(err){
    return res.status(400).json({
        message:err,
        success:false
    });

 }
}

export const login=async(req,res)=>{
    try{
        const{fullname,email,password}=req.body;
        if( !email || !password){
            return res.status(400).json({message:'All fields are required',success:false});
        }
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:'Incorrect email or Password',success:false});
        }
        const isPasswordMatch=await bcrypt.compare(password,user.password)
        if(!isPasswordMatch){
            return res.status(400).json({message:'Incorrect  Password',success:false});
        }
        const tokenData={
            userId:user._id
        }
        const token =await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'1d'})
        return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000,httpOnly:true,sameSite:'strict'}).json({
        message:`${user.fullname} logged in Successfully.`,
        user,
        success:true

        })
    }
    catch(err){
        return res.status(400).json({
            message:err,
            success:false
        });
        

    }
    
}
export const logout=async(req,res)=>{
    try{
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"logged out successfully"
        })
    }
    catch(err){
      console.log(err);
    }
   
} 
