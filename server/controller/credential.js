const Credential = require('../model/credential')
const Client = require('../model/client')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.createCredential = async(req,res)=>{
    
  
    try{
      const company  = await Client.findById({_id:req.body.company_name})

        const credential = new Credential(req.body)
        const salt = await bcrypt.genSalt(10)

        // if(req.body.service_type == 'Digital Marketing')
        // {
        //     credential.digitalMarketing.password = await bcrypt.hash(req.body.digitalMarketing.password,salt)
        // }
        // else if(req.body.service_type == 'WebApp'){
        //     credential.webApp.frontEnd.front_password = await bcrypt.hash(req.body.webApp.frontEnd.front_password,salt)
        //     credential.webApp.server.server_password = await bcrypt.hash(req.body.webApp.server.server_password,salt)
        //     credential.webApp.database.db_password = await bcrypt.hash(req.body.webApp.database.db_password,salt)
        // }
        // else{
        //     credential.Website.hosting.hosting_password = await bcrypt.hash(req.body.Website.hosting.hosting_password,salt)
        //     credential.Website.domain.domain_password - await bcrypt.hash(req.body.Website.domain.domain_password,salt)
        //     credential.Website.frontEnd.frontend_password = await bcrypt.hash(req.body.Website.frontEnd.frontend_password,salt)
            
        // }
         credential.company_name = company._id
         await credential.save()
        
         res.status(201).json({msg:"Created Client Credential Succesfully",credential})
        }
        catch(error){
        console.log(error)
        res.status(401).json({msg:"Something went wrong..."})

        }
}


exports.  getAllCredential = async(req,res)=>{
   
    try{
        const credential = await Credential.find({}).populate('company_name').exec()
        res.status(201).json({msg:'all credential got successfully', credential})
        
    }
    catch(error){
        
        res.status(401).json({msg:"something went wrong"})
    }
}

exports . getOneCredential =async (req,res)=> {
    try{
        const credential =await Credential.find({company_name:req.params.id}).populate('company_name').exec()
        res.status(201).json({msg:"one credential got succesfully",credential})
        console.log(credential)
    }
    catch(error){
        res.status(401).json({massege:"somthing went wrong"})
    }
}

exports. updateCredential = async(req,res) =>{
    try{
        const credential = new Credential(req.body)

        const salt = await bcrypt.genSalt(10)

      
        if(req.body.dm_password){
            credential.dm_password = await bcrypt.hash(req.body.dm_password,salt)
        }
        else if(req.body.front_password){
            credential.front_password = await bcrypt.hash(req.body.front_password,salt)
        }
        else if(req.body.server_password){
            credential.server_password = await bcrypt.hash(req.body.server_password,salt)
        }
        else if(req.body.db_password){
            credential.db_password = await bcrypt.hash(req.body.db_password,salt)
        }
        else if(req.body.domain_password){
            credential.domain_password = await bcrypt.hash(req.body.domain_password,salt)
        }
        else if(req.body.website_front_password){
            credential.website_front_password = await bcrypt.hash(req.body.website_front_password,salt)
        }

        const credential1 =await Credential.updateOne({_id:req.params.id},req.body)
        res.status(201).json({msg:"Leave Request Update Succesfull",credential1})
    }
    catch(error){
        console.log(error);
        res.status(401).json({massege:"somthing went wrong"})
    }
}

exports . deleteCredential =async (req,res)=> {

    try{
        const credential =await Credential.findByIdAndDelete({_id:req.params.id},req.body)

    res.status(201).json({msg:" employee deleted succesfully",credential})
    
    }
    catch(error){
        res.status(401).json({massege:"something went wrong"})
    }
}


