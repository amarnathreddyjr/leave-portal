let mongoose=require('mongoose');
let Schema=mongoose.Schema;
usersSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['employee','admin'],
        default:'employee'
    },
    leaveBalance:{
        casual:{
            type:Number,
            default:10
        },
        sick:{
            type:Number,
            default:5
        },
        paid:{
            type:Number,
            default:15
        },
    },
});
module.exports=mongoose.model('users',usersSchema);
