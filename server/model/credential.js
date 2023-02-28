const mongoose = require('mongoose')
const Schema = mongoose.Schema

const credentialManagement = new Schema({

    company_name:{
        type: Schema.Types.ObjectId,
        ref: 'Client',
    },
    service_type:{
        type:String,
        required:[true,'Service type is required']
    },
    logo:{
        type: Schema.Types.ObjectId,
        ref: 'Client',
    },
    //if digital marketing
    digitalMarketing:{
        media_type:String,
        link:String,
        username:String,
        password:String,
        recovery_phn:Number,
    },
    // if web App
    webApp:{
        server_type:String,
        webapp_hosting:String,
     
        frontEnd:{
            front_hosting:String,
            front_lib:String,
            front_username:String,
            front_password:String,
        },
        server:{
            server_hosting:String,
            server_lib:String,
            server_username:String,
            server_password:String,
        },
        database:{
            db_hosting:String,
            db_lib:String,
            db_username:String,
            db_password:String,
        },
    },
    // if website
    Website:{
        website_type:String,
        hosting:{
            website_hosting:String,
            hosting_username:String,
            hosting_password:String,
            hosting_expiry_date:Date,
            hosting_account:Number,
            hosting_renewal_amount:Number,
            hosting_recovery_no:String,
        },
        domain:{
            domain_details:String,
            domain_username:String,
            domain_password:String,
            domain_expiry_date:String,
            domain_account:Number,
            domain_renewal_amount:Number,
            domain_recovery_no:Number,
        },
        frontEnd:{
            frontend_hosting:String,
            frontend_lib:String,
            frontend_username:String,
            frontend_password:String,
        },
    },
},{timestamps:true})

module.exports = mongoose.model('Credential',credentialManagement)