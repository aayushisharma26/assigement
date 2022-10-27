const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/employee')
.then(()=>{
    console.log('connection');
}).catch((err)=>{
    console.log(err);
})



const signupSchema=new mongoose.Schema({
    employee_name : {
        type:String,
        required:true

    },
    employee_email : {
        type:String,
        required:true,
        unique:true
        

    },
    employee_address : {
        type:String,
        required:true
       

    },
    employee_phoneNo : {
        type:String,
        required:true
       

    }
        
    
  
})
console.log("done")
const register_detail=new mongoose.model("detail",signupSchema)
module.exports=register_detail



// Employee Name, Employee Email, Employee Address(Array of Objects – City, State, Country), Employee Phone Number

