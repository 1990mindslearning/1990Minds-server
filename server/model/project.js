const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    
    company:{
        type:Schema.Types.ObjectId,
        ref:'Client'
    },
    department:String,
    service_type:String,
    
    members:[{

        member_name:String,
    
        member_role:String,
    }],

    project_name:String,
    project_type:String,
  
    company_name:String,
    company_logo:String,
    start_date:Date,

    logo:{
         
        duration:Number,
        design_detail:String,
        description:String,
        logo_type:String,
        tag_line:String,
        color_scheme:String,
        purpose:String,
        additional_requirement:String,
    },
    brochure:{
       
        b_duration:Number,
        brochure_details:String,
        no_of_pages:String,
        brochure_color:String,
        brochure_size:String,
        brochure_purpose:String,
        brochure_additional_requirement:String,

    },
    flyer:{
       
        b_duration:Number,
        brochure_details:String,
        no_of_pages:String,
        brochure_color:String,
        brochure_size:String,
        brochure_purpose:String,
        brochure_additional_requirement:String,

    },
    catalogue:{
         
        c_duration:Number,
        catalogue_details:String,
        no_of_products:String,
        catalogue_color:String,
        catalogue_size:String,
        catalogue_purpose:String,
        catalogue_additional_requirement:String,
    },
    package_design:{
         
        pd_duration:Number,
        package_details:String,
        package_size:String,
        package_type:String,
        package_purpose:String,
        package_content:String,
        package_additional_requirement:String,
    },
   social_media:{
    
    media:String,
    periodic:Number,
   },

   website:{
    website_type:String,
    need_hosting:String,
    website_color:String,
    budget:Number,
    website_address:String,
    website_pages:Number,
    target_audience:String,
    additional_web_requirement:String,
    comments:String

   },


    attachements:[String],


},{timestamps:true})

module.exports = mongoose.model('Project',projectSchema)