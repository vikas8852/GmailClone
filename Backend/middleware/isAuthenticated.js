import jwt from 'jsonwebtoken'
const isAuthenticated=async(req,res,next)=>{
    try{
        const token=req.cookies.token;
     //   console.log(token);
        if(!token){
            return res.status(400).json({
                message:"User not Authenticated"
            })
        }
     const decode=await jwt.verify(token,process.env.SECRET_KEY);
         if(!decode){
                return res.status(400).json({
                    message:"Invalid token"
                })
            }
            req.id=decode.userId;    // In cookie we sent the userId as data who is login At the of creating cookie in userlogin
            next();
    }
    catch(err){
      console.log(err);
    }
    

}
export default isAuthenticated