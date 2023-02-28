
const pdf = require('html-pdf')
const Payslip = require('../model/payslip')
const pdfTemplete = require('../../document/pdfTemplete')
const path = require('path');
const moment = require('moment')


   
exports.createPdf = async(req,res,next)=>{
  
  try {
    
      const pdfData = {
          name:req.body.employee?.personal?.full_name,
          Net_Salary :req.body.Net_Salary,
          Gross_Salary:req.body.employee?.salary?.gross_salary,
          Basic:req.body.employee?.salary?.basic,
          DA:req.body.employee?.salary?.da,
          HRA:req.body.employee?.salary?.hra,
          designation:req.body.employee?.employee?.designation,
          professional_tax:req.body.employee?.salary?.professional_tax,
          deductions_LOP:req.body.deductions_LOP,
          deductions_WFH:req.body.deductions_WFH,
          conveyance:req.body.employee?.salary?.conveyance,
          month:moment(req.body.month).format('MMMM YYYY'),
      }

      console.log(pdfData);
      await pdf.create(pdfTemplete(pdfData), {}).toFile('templet.pdf', (err) => {
        if(err) {
            console.log(err);
            res.send(Promise.reject());
        }
        res.status(201).json({msg:" created successfully"})

    })

  
}
  catch (error) {
      console.log(error);
      res.status(401).json({msg:"something went wrong !"}) 

  }
}

exports.fetchTempletPdf = async(req,res)=>{
  try {
    console.log("testing???");
        res.sendFile(path.join(__dirname,'../../templet.pdf'))
       
  } catch (error) {
    console.log(error);
      res.status(401).json({msg:"something went wrong..!"}) 

  }
}



