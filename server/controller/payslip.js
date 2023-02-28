const Payslip = require ('../model/payslip')
const Employee = require('../model/employee')

exports.createPayslip = async (req,res)=>{
 
    console.log('testingggggssss')
    console.log(req.body)
    try{
       
      const employee = await Employee.findById({_id:req.body.employee})

      console.log(employee.salary.gross_salary)
      const per_day_salary = employee.salary.gross_salary/(req.body.no_of_working_days)
      console.log({per_day_salary})
      console.log(employee.salary?.gross_salary)
      req.body.deductions_LOP = req.body.deductions_LOP *per_day_salary
      req.body.deductions_WFH = req.body.deductions_WFH *(0.4*per_day_salary)

      console.log(req.body.deductions_WFH)
      console.log(req.body.deductions_LOP)
      
      const net = employee.salary?.gross_salary -  (employee.salary?.professional_tax + Math.floor(req.body.deductions_LOP) +  Math.floor(req.body.deductions_WFH))
      console.log("Payslip")
      console.log(Math.floor(net))
      const payslip = new Payslip 
      payslip.Net_Salary = Math.floor(net)
      payslip.month = req.body.month
      payslip.no_of_working_days = Math.floor(req.body.no_of_working_days)
      payslip.deductions_LOP = Math.floor(req.body.deductions_LOP)
      payslip.deductions_WFH = Math.floor(req.body.deductions_WFH)
      payslip.employee = employee._id
      await payslip.save()

      console.log(payslip)
       
        res.status (201).json({msg:"Payslip Generated Successfully ", payslip})
    }

    catch(error)
    {  
        res.status (401).json({msg:"something went wrong"})
    }
}

exports.  getAllPayslip = async(req,res)=>{
try{
    
    const payslip = await Payslip.find().populate('employee').exec()
    res.status(201).json({msg:'all employee get successfully', payslip})
}
catch(error){
    
    res.status(401).json({msg:"something went wrong"})
}


}

exports . getOnePayslip =async (req,res)=> {

    try{
    
    res.status(201).json({msg:"one payslip register succesfully", payslip})
    
    }
    catch(error){
        res.status(401).json({message:"something went wrong"})
    }
}


exports . getEmployeePayslip =async (req,res)=> {
       const role = req.query.role
       console.log(role)
    try{
        if(role === 'employee'){
            const payslip = await Payslip.find({employee:req.params.id}).populate('employee').exec()
            res.status(201).json({msg:"One employee payslip got succesfully", payslip})
        }
        else {
            const payslip = await Payslip.find().populate('employee').exec()
            res.status(201).json({msg:"All payslip got successfully", payslip})
        }
            
    
    }
    catch(error){
        res.status(401).json({message:"something went wrong"})
    }
}

exports . updatePayslip =async (req,res)=> {
    console.log(req.body)

    try{
        const payslip =await Payslip.updateOne({_id:req.params.id},req.body)
        res.status(201).json({msg:" Payslip Updated Successfully",payslip})
    
    }
    catch(error)
  
    {
        console.log(error);
        
        res.status(401).json({message:"something went wrong"})
    }
}

exports . deletePayslip =async (req,res)=> {

    try{
        
        const payslip =await Payslip.findByIdAndDelete({_id:req.params.id},req.body)

    res.status(201).json({msg:" Payslip Deleted Successfully",payslip})
    
    }
    catch(error){
        res.status(401).json({message:"something went wrong"})
    }
}


