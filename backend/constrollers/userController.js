const User= require('../module/userModule');


const registerUser= async (req,res,next)=>{
   try {
    const {username,email,password}=req.body;
    const user = await User.create({
        username,email,password,
        avatar:{
            public_id:"this is sampe id",
            url:"prifile url"
        }
    });

    const  token=user.getJWTToken()

    res.status(200).json({sucess:true,massage:"use register  sucessfull",user,token})
   } catch (error) {
     res.status(500).send(error)
   }
}

module.exports={registerUser}