const Employee = require('../model/employee')
const Leave = require ('../model/leave')
const Admin = require('../model/admin')
const io = require('../../socket')
const webpush = require("web-push");


exports. createLeave = async (req,res)=>{
    
    try{
      const employee = await Employee.findById({_id:req.body.employee})
   
       
      const leave = new Leave(req.body);
   


    
      
      await leave.save()
      leave.employee = employee._id
   

      await Admin.updateMany({},{$push:{notifications:{leave,msg:"Leave Application",from:employee?.personal?.full_name,isClear:false, isView:false, icon:"FaEnvelope", date: new Date()}}})

      const admin = await Admin.find()
  

 

 

      io.getIO().emit("result", {msg:"Leave request from "+`${employee?.personal?.full_name}`, user:employee?.personal?.full_name, leave})
      

      res.status (201).json({msg:"Leave Request Sent Succesfully", leave})
    }

    catch(error)
    {
       console.log(error)
        res.status (401).json({msg:"somthing went wrong"})
    }


}
exports . getEmployeeLeave =async (req,res)=> {
     const role = req.query.role;
   

    try{
        if(role === 'employee')
        {
       
            const leave = await Leave.find({employee:req.params.id}).populate('employee').sort({createdAt:-1}).exec()
            res.status(201).json({msg:"one leave request got succesfully", leave})
            
        }
        else{
            const leave = await Leave.find().populate('employee').sort({createdAt:-1}).exec()
            res.status(201).json({msg:"one leave request got succesfully", leave})
           
        }   
    }
    catch(error){
        res.status(401).json({message:"somthing went wrong"})
    }
}

exports.getAllLeave = async(req,res)=>{
    try{
        const leave = await Leave.find().populate('employee').exec()
        res.status(201).json({msg:'all Leave request got successfully', leave})
    }
    catch(error){
        res.status(401).json({msg:"something went wrong"})
    }
}

exports.getOneLeave = async(req,res)=>{
    
    try{
        const leave = await Leave.findById(req.params.id).populate('employee').exec()
        res.status(201).json({msg:"One Leave Request got succesfully",leave})
    }
    catch(error){
        res.status(401).json({msg:"Something went Wrong"})
    }
}

exports.updateLeave = async(req,res)=>{
    try{
        const leave =await Leave.updateOne({_id:req.params.id},req.body)

        


        if(req.body.comments){
            const employee = await Leave.findById(req.params.id).populate('employee').exec()
          
            const empid = employee.employee?._id

            
         
              await Employee.updateMany({_id:empid},{$push:{notifications:{employee,msg:"Notification",from:"Admin",isClear:false, isView:false, date: new Date()}}})
        }
        if(!leave.created)
          io.getIO().emit("employee", {msg:"Status on Leave request", leave})

        res.status(201).json({msg:"Leave Request Update Succesfull",leave})
    }
    catch(error){
        console.log(error)
    }
}
exports.deleteLeave = async(req,res)=>{
    try{
        const leave = await Leave.findByIdAndDelete({_id:req.params.id},req.body)
        res.status(201).json({msg:"Leave Request Deleted Suceesfull",leave})
    }
    catch(error){
        res.status(401).json({msg:"something went wrong!!"})
    }
}

