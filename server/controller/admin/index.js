const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const admin = require('../../model/admin/index');
const Admin = require('../../model/admin/index')
const Employee = require('../../model/employee');
const payslip = require('../../model/payslip');



const maxAge = 3 * 24 * 60 * 60

const createToken = (id) =>{

return jwt.sign({id},  process.env.JWT_SECRET, {
    expiresIn:maxAge
})
  
}

/******** register ******/
exports.register = async (req,res) =>{

    
    const {email,password,confirm, name} = req.body
    
    try {
   Admin.findOne({email:req.body.email}, function(err, user){
          
           if(user){

               return res.status(201).json({msg:"Email already exists!"})
           }

        })
   
        if(password !== confirm ){

            return res.status(401).json("password does not match")
     
     }
  
    const admin = new Admin({

        email,
        name,
        password,
      
      
        
    })

    const salt = await bcrypt.genSalt(10)
    admin.password = await bcrypt.hash(password,salt) 
    

    await admin.save();

    const token =  createToken(admin._id);

    
      res.status(201).json({msg:"Registered Successfully", admin,token})
            
        } catch (error) {

                 res.status(401).json({err:"Somthing Went Wrong !",error})
            
        }
    }

/*******get all admin******/

exports.getAllAdmin = async (req,res)=>{

    try {
        
        const admin = await Admin.find({})
    
        res.status(201).json({msg:"Succefully fetched all Admin", admin})

    
    } catch (error) {
    
        res.status(401).json({err:"Somthing Went Wrong !",error})
    
    }
    
    }

    /*******get one admin******/
    exports.getOneAdmin = async (req,res)=>{

        try {      
            const admin = await Admin.findById(req.params.id) 
            res.status(201).json({msg:"Succefully", admin})
    
        } catch (error) {
            res.status(401).json({err:"Somthing Went Wrong !",error})
        
        }
        
        }
    

/*****update admin**********/
exports.updateAdmin = async (req,res)=>{
    
        try{
            const admins = await Admin.findById(req.params.id)
            const admin = await Admin.updateOne({_id:req.params.id},req.body)
          
            if(req.body.new_password ) {

                const new_pass = req.body.new_password   
                    const isMatch = await bcrypt.compare(req.body.password, admins.password)
                    
                    if(!isMatch) {
                           return  res.status(400).json({msg:'invalid password'})
                        }
                const salt = await bcrypt.genSalt(10)
                admins.password = await bcrypt.hash(new_pass,salt) 
            }
             
           await admins.save()  
       

            res.status(201).json({msg:"update Succefully"})

        } catch (error){
         console.log(error);
            res.status(401).json({msg:"Somthing Went Wrong !",error})

        }

    }

/*******delete admin********/
exports.deleteAdmin = async (req,res)=>{

        try {
            
            const admin = await Admin.deleteOne({_id:req.params.id})
            res.status(201).json({msg:"deleted Succefully",admin})
        
        } catch (error) {
        
                    res.status(401).json({err:"Somthing Went Wrong !",error})
        
        }
}


/*****admin login********/
exports.login = async (req, res) => {
   
    const {email, password} = req.body
    try{  

           const admin = await Admin.findOne({email : email})

           if(admin){
        
               const isMatch = await bcrypt.compare(password, admin.password)
               
            if(!isMatch) {
               return  res.status(400).json({msg:'Invalid Password'})

           }
           const token = createToken(admin._id);
           res.status(201).json({msg:'login successfull', token, admin})
          
        }
 

        // const employee = await Employee.findOne({email:email})
        // if(employee){
        //     console.log("Inside employee login");
        //     const isEmpMatch = await bcrypt.compare(password,employee.password)
        //     console.log(password)
        //     console.log(employee.password)
        //     if(!isEmpMatch){
        //         return res.status(400).json({msg:'Invalid Password'})
        //     } 
        //     const token = createToken(employee._id);
        //     res.status(201).json({msg:'login Succesfull',token,employee})
        // }


        if(!admin) {
            return res.status(400).json({msg:'Invalid User'})
          }
 
   
        
        }catch(error){
        res.status(401).json({err:"Somthing Went Wrong !",error})
     }
    }
    
    
    /********admin profile*********/
    exports.adminProfile = async (req, res)=>{
        

        try {
        
           if(req.admin){
                const admin = await Admin.findById(req.admin._id).select('-password')
                if(!admin) {
                    return res.status(401).json({json:"no Authorization"})
                }
             

                return res.status(201).json({user:admin,role:admin.role})
           }
        //    if(req.employee){
            
        //         const employee = await Employee.findById(req.employee._id).select('-password')
        //         if(!employee) {
        //             return res.status(401).json({json:"no Authorization"})
        //         }
        //         return res.status(201).json({user:employee,role:employee.role})
        //    }

    
        } catch (error) {
            console.log(error);
                res.status(401).json({msg:"Something went wrong"}) 
    
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


                const admin = await Admin.findById(decoded.id).select('-password')
               

                if(admin){
                    req.admin = admin
                    // req.employee = null
                    return next()
                }
                // if(employee){
                //     req.employee = employee
                //     req.admin = null
                //     return next()
                // }                
         
        
            } catch (error) {
        
                res.status(401).json({error:error.message}) 
            }
        }   else {

             res.status(500).json({msg:'UnAuthorized Access'}) 
        }
    }

exports.updateNotify = async(req,res)=>{
  
    console.log("Inside the update notify")
    
    
    try {
        
        const admin = await Admin.find()

       const notification = admin[0].notifications.filter((itemnotify)=>{
               
                if(itemnotify._id != req.params.id)
                {
                    return itemnotify
                }

                     
            })
          
         
        
         await Admin.updateMany({},{$set:{"notifications":notification}})
        //  return res.status(201).json({msg:""})
         
    
    } catch (error) {
        
    console.log( error );
    }


    
}