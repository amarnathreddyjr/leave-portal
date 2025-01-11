let usermodel=require('../models/users-models');
let usercontroller={
    register:async(req,res)=>{
        let bodyData=req.body;
        let response=await new usermodel({
            name:bodyData.name,
            email:bodyData.email,  
            password:bodyData.password,
            role:bodyData.role,

        }).save();
        res.status(201).send(response);
    },
    logIn:async(req,res)=>{
        let reqemail=req.body.email;
        let reqpassword=req.body.password;
        let response=await usermodel.findOne(
            {email:reqemail,password:reqpassword});
            res.status(200).send(response);
    },
};
module.exports=usercontroller;