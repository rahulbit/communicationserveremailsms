const mongoose = require('mongoose'),
 Schema = mongoose.Schema;

const otpSchema = new Schema({
    
    number :{
        type:'String',
        default:''
    },

    messageid:{
        type:'String',
        default:'',
        unique:'true'
    },

    sentTime:{
        type:"Date",
        default:''
    },

    msg:{
     type:'String',
     default:''
    }


})

mongoose.model('sms', otpSchema);