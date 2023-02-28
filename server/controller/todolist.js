const Todolist = require('../model/todolist')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const maxAge =  3 * 60 * 60 * 60

const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:maxAge
    })
}

exports.createTodo = async(req,res)=>{
    try{

     

        const todolist = new Todolist(req.body); 

        await todolist.save();
        res.status(201).json({msg:"Todo creation successfull",todolist})
        
        
    }
    catch(error){
        console.log(error)
        res.status(401).json({msg:"Something went Wrong"})
    }
}

exports.datewiseTodo = async(req,res)=>{
    console.log('//////////')
    console.log(req.body);
    let filter = req.query.filter 
    let startdate = req.query.startdate
    let enddate = req.query.enddate
 
    console.log("All todo",startdate);
    try{
        if(startdate && enddate){
                console.log("Indise the startdate",startdate)
                const todolist = await Todolist.find({$and:[{startdate:{$gte:startdate}},{enddate:{$lt:enddate}}]})
                
                console.log({todolist})
                res.status(201).json({msg:"all todo got successfully",todolist})
            }       
    }
        
    catch(error){
        res.status(401).json({msg:"Something went wrong"})
    }
}

exports.getAllTodo = async(req,res)=>{
    console.log('//////////')
    console.log(req.body);
    let filter = req.query.filter 
    let startdate = req.query.startdate
    let enddate = req.query.enddate
 
    console.log("All todo",startdate);
    try{
        if(startdate && enddate){
                console.log("Indise the startdate",startdate)
                const todolist = await Todolist.find({$and:[{startdate:{$gte:startdate}},{enddate:{$lte:enddate}},{employee:req.params.id}]})
                res.status(201).json({msg:"all todo got successfully",todolist})
                console.log(todolist)
            }
        if(filter){
            const todolist = await Todolist.find({status:filter,employee:req.params.id}).sort({priority:1})
            res.status(201).json({msg:"all todo got successfully",todolist})
            console.log(todolist)
        }
        else{
            console.log("Inside else")
            if(req.params.id){
                const todolist = await Todolist.find({employee:req.params.id,$or:[{status:"New"},{status:"in-Progress"},{status:"Completed"}]}).sort({priority:1})
                res.status(201).json({msg:"all todo got successfully",todolist})
            }
            else{
                const todolist = await Todolist.find()
                res.status(201).json({msg:"all todo got successfully",todolist})

            }
        }
    }
        
    catch(error){
        res.status(401).json({msg:"Something went wrong"})
    }
}

exports.getOneTodo = async (req,res) =>{
    try{
        const todolist = await Todolist.findById(req.params.id)
        res.status(201).json({msg:"One todo succesfull",todolist})
    }
    catch(error){
        res.status(401).json({msg:"Something went wrong"})
    }
}

exports.updateTodo = async (req,res)=>{
    try{
        const todolist = await Todolist.updateOne({_id:req.params.id},req.body)
        // await todolist.save();
        res.status(201).json({msg:"Todolist update succesfull",todolist})
    }
    catch(error){
        console.log(error);
        res.status(401).json({msg:"Update todo Succesfull"})
    }
}


exports.deleteTodo = async(req,res)=>{
    try{
        const todolist = await Todolist.findByIdAndDelete({_id:req.params.id},req.body)
        res.status(201).json({msg:"Deleted todo succesfull",todolist})
    }
    catch(error){
        res.status(401).json({msg:"Deletion todo error"})
    }
}
    

    