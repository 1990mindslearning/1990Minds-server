const Client = require('../model/client')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Credential = require('../model/credential')
const Project = require('../model/project')

const maxAge = 3 * 24 * 60 * 60

const createToken = (id) =>{

return jwt.sign({id},  process.env.JWT_SECRET, {
    expiresIn:maxAge
})
}

exports.createClient = async(req,res)=>{
    try{
        const client = new Client(req.body);


        // encrpt password
        if(req.body.password){

            const salt = await bcrypt.genSalt(10)
            client.password = await bcrypt.hash(req.body.password,salt)
        }

        await client.save();

        res.status(201).json({msg:"Client Creation Succesfull",client})
        
    }
    catch(error){
        console.log(error)
        res.status(401).json({msg:"Something went wrong..."})
    }
}


exports.getAllClient = async(req,res)=>{
    try{
        const client = await Client.find()
        res.status(201).json({msg:"All Client got successfully",client})
    }
    catch(error){
        res.status(401).json({msg:"something went wrong"})
    }
}


exports.getOneClient = async(req,res)=>{
    
    try{
        const client = await Client.findById(req.params.id)
        res.status(201).json({msg:"One Client got Succesfull",client})
    }
    catch(error){
        res.status(401).json({msg:"Something went wrong"})
    }
}


exports.updateClient = async(req,res)=> {
    try{ 

        const client= await Client.findById(req.params.id)

        if(req.body.password){
                    const salt = await bcrypt.genSalt(10)
                    client.password = await bcrypt.hash(req.body.password,salt)
        }

        const client1 = await Client.updateOne({_id:req.params.id},req.body)
        await client.save()  
        res.status(201).json({msg:"Client updated Sucessfully",client1})
    }
    catch(error){
        console.log(error)
        res.status(401).json({message:"Something went wrong"})
    }
}

exports.deleteClient = async(req,res) =>{
    try{
        const client = await Client.findByIdAndDelete({_id:req.params.id},req.body)
        const credential = await Credential.deleteMany({company_name:req.params.id})
        const project = await Project.deleteMany({company:req.params.id})

        res.status(201).json({msg:"Client deleted Succesfully",client})
        
       
    }
    catch(error){
        res.status(401).json({msg:"Something went wrong"})
    }
}