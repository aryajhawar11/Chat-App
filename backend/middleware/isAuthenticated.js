import jwt from "jsonwebtoken";


const isAuthenticated= async(req,res,next)=>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({message:"user not authenticated."})
        }
        const decode= await jwt.verify(token,process.env.JWT_SECRET_KEY);
        // console.log(decode)
        if(!decode){
            return res.status(401).json({
                message:"Invalid token"
            });
        };
        req.id=decode.userId;
        // console.log(token);
        next();

    } catch (error) {
        console.log(error)
    }
};
export default isAuthenticated;


const req={
    id:"",
}
req.id="sdslflsnfml"