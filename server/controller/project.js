const Project = require('../model/project')
const Client = require('../model/client')




exports.createProject = async(req,res)=>{
   
    try{
        const project = new Project(req.body);
      const client = await Client.findById({_id:req.body.company})

        project.company = client._id
        await project.save()
        res.status (201).json({msg:"Project registered successfully ", project})

    }
    catch(error){
        console.log(error)
        res.status(401).json({msg:'something went wrong'})
    }
}

exports.getAllProject = async(req,res)=>{
    let filter = req.query.filter 
    
    try{
        if(filter){
            const project = await Project.find({department:filter}).populate('company').exec()
            res.status(201).json({msg:"All Projects fetched successfully",project})

        }
        else{
            const project = await Project.find().populate('company').exec()
            res.status(201).json({msg:"All Projects fetched successfully",project})
        }
    }
    catch(error){
        res.status(401).json({msg:"something went wrong"})
    }
}

exports.getOneProject = async(req,res)=>{
    try{
        const project = await Project.findById(req.params.id)
        res.status(201).json({msg:"One Projects fetched successfully",project})
    }
    catch(error){
        res.status(401).json({msg:"something went wrong"})
    }
}

exports.deleteProject = async(req,res) =>{
    try{
        const project = await Project.findByIdAndDelete({_id:req.params.id},req.body)
        res.status(201).json({msg:"Client deleted Succesfully",project})
    }
    catch(error){
        res.status(401).json({msg:"Something went wrong"})
    }
}

exports.updateProject = async(req,res)=>{
   
    try{
        const project = await Project.updateOne({_id:req.params.id},req.body)
        res.status(201).json({msg:"Project Updated Successfully",project})


    }
    catch(error){
        res.status(401).json({msg:"something went wrong!!!"})
    }
}


