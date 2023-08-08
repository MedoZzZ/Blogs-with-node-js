const adminAuth=async(req,res,next)=>{
   
    const {role}=req.headers;
        if(role==1){
        next();
    }else{
        res.status(401).json({message:"Unauthorized"});
    }
};
 
module.exports = adminAuth;