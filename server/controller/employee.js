const Employee = require ('../model/employee')

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const maxAge = 3 * 24 * 60 * 60

const createToken = (id) =>{

return jwt.sign({id},  process.env.JWT_SECRET, {
    expiresIn:maxAge
})
  
}
exports. createEmployee = async (req,res)=>{
    

    try{
        const employee = new Employee(req.body);

        const gross = (req.body.salary.basic + req.body.salary.da + req.body.salary.conveyance+req.body.salary.hra)
        
        employee.salary.gross_salary = gross
    
      
        
       
        
        const salt = await bcrypt.genSalt(10)
        employee.password = await bcrypt.hash(req.body.password,salt) 
        employee.confirm_password = await bcrypt.hash(req.body.confirm_password,salt) 
       




        await employee.save()
        res.status (201).json({msg:"Employee Registerd Successfully ", employee})
    }

    catch(error)
    {
       console.log(error)
        res.status (401).json({msg:"Something went wrong"})
    }
}

exports.  getAllEmployee = async(req,res)=>{
try{
    const employee = await Employee.find()
    
    res.status(201).json({msg:'All employees fetched successfully', employee})
}
catch(error){
    
    res.status(401).json({msg:"something went wrong"})
}


}

exports . getOneEmployee =async (req,res)=> {
   

    try{
        const employee =await Employee.findById(req.params.id)
        

    res.status(201).json({msg:"One employee fetched succesfully",employee})
    
    }
    catch(error){
        res.status(401).json({massege:"something went wrong"})
    }
}

exports . updateEmployee =async (req,res)=> {

 console.log(req.body.password)



    try{
        const employee= await Employee.findById(req.params.id)

        const isPasswordMatch = await bcrypt.compare(req.body.password, employee.password)
        console.log(isPasswordMatch)
        if(!isPasswordMatch)
        {

            const salt = await bcrypt.genSalt(10)
            employee.password = await bcrypt.hash(req.body.password,salt) 
        const isConfirmPasswordMatch = await bcrypt.compare(req.body.confirm_password, employee.confirm_password)
        if(!isConfirmPasswordMatch){

            const salt = await bcrypt.genSalt(10)
            employee.confirm_password = await bcrypt.hash(req.body.confirm_password,salt) 
        }
        
    }
        const gross = (req.body.salary?.basic + req.body.salary?.da + req.body.salary?.conveyance+req.body.salary.hra)
 

        employee.salary.gross_salary = gross

        console.log("The updated employee is:",req.body)
        


        const employee1 =await Employee.updateOne({_id:req.params.id},req.body)

        
        // const employee = new Employee(req.body);

        // employee.password = employee1.password
        
        await employee.save();

    res.status(201).json({msg:" Employee Updated Successfully",employee1})
    
    }
    catch(error)
  
    {
        console.log(error);
        
        res.status(401).json({massege:"Something went wrong"})
    }
}

exports . deleteEmployee =async (req,res)=> {

    try{
        const employee =await Employee.findByIdAndDelete({_id:req.params.id},req.body)

    res.status(201).json({msg:" Employee Deleted Successfully",employee})
    
    }
    catch(error){
        res.status(401).json({massege:"something went wrong"})
    }
}








/*****************Employee***************/

exports.login = async (req, res) => {
    console.log(req.body)
    const {email, password} = req.body
    
    try{  

           const employee = await Employee.findOne({email :email})
          
            
            if(!employee) {

                    return res.status(400).json({msg:'Invalid Username'})
                  }
           const isMatch = await bcrypt.compare(password, employee.password)
           if(!isMatch) {

            return  res.status(400).json({msg:'Invalid Password'})
        }
    
        
      const token = createToken(employee._id);

      res.status(201).json({msg:'Login Successfull', token, employee})
    
     }catch(error){
        res.status(401).json({err:"Somthing Went Wrong !",error})
     }
    }
    
    
    /********employee profile*********/
    exports.empProfile = async (req, res)=>{


        try {
    
           const employee = await Employee.findById(req.employee._id).select('-password')
            
           if(!employee) {
    
            return res.status(401).json({json:"No Authorization"})
           }
    
        res.status(201).json(employee) 
    
        } catch (error) {
                res.status(401).json({msg:"Somthing went wrong"}) 
    
        }   
    }
    
    
    /******* Authenticate ********/
    exports.isAuthenticate = async (req, res, next) =>{

        if(
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')
        
        ){ 
            try {  
            
               let token = req.headers.authorization.split(' ')[1]
                         
                const decoded = jwt.verify(token, process.env.JWT_SECRET)
            
                req.employee = await Employee.findById(decoded.id).select('-password')
             
                next()
        
            } catch (error) {
        
                res.status(401).json({error:error.message}) 
            }
        }   else {

             res.status(500).json({msg:'UnAutherized Access'}) 
        }
    }

exports.updateNotify = async(req,res)=>{
    console.log("inside the update notify",req.params.id)
  
    try{
        const employee = await Employee.find()
        console.log("inside the update notify",req.params.id)
     
        const notification = employee[0].notifications.filter((itemnotify) =>{
            console.log(itemnotify)
            console.log(req.params.id)
            console.log(itemnotify._id)
            if(itemnotify._id != req.params.id)
                return itemnotify
        })
        console.log("The notification is",notification)
        await Employee.updateMany({},{$set:{"notifications":notification}})

    }
    
    catch(error){
        console.log(error)
    }

}

















