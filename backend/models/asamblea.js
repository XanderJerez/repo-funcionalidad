const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AsambleaSchema = new Schema({
    sede:{
        type:String,
        required:true,
    },
    direccion:{
        type:String,
        required:true,
    },
    tema:{
        type:String,
        required:true,
    },
    descripcion:{
        type:String,
        required:true,
    },
    fecha:{
        type:String,
        required:true,
    },
    hora_inicio:{
        type: String,
        required:true,
    }


})
module.exports=mongoose.model('asamblea', AsambleaSchema);
