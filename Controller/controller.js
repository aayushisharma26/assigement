const register_detail=require('../model/mod')
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

signup= async(req,res)=>{
    try{
        bcrypt
        const reactRegister=new register_detail({
            employee_name:req.body.employee_name,
            employee_email:req.body.employee_email,
            employee_address:req.body.employee_address,
            employee_phoneNo:req.body.employee_phoneNo,
        })
        const result= await reactRegister.save();
        res.send({message:"signup sucssesfully",result:result})
        // console.log(result);

    }catch(err){
        res.send({message:'Email id already exits!'})
        // console.log('')
    }
}


login=async(req,res)=>{
    try{
        const employee_email=req.body.employee_email
        const employee_password=req.body.employee_password

        const result=await register_detail.findOne({employee_email:employee_email})

        const token=jwt.sign({id:register_detail._id},"aayushisharma",{ expiresIn:"12h"})
        // console.log(result,token);
        res.send({message:"login successfuly",result:result,token:token})
        if (err){
            res.send(err)
            }
        else{
            console.log("login");
            res.send({success:"User login succesfully",result})
        }     

    }catch(err){
        res.send("no")
    }

}


module.exports={signup,login}