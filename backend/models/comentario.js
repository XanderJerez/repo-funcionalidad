const mongoose = require('mongoose');
const acta = require('./acta');
const Schema = mongoose.Schema;
const ComentarioSchema = new Schema({
        autor:{
            type:String,
            required:true
        },
        fecha:{
            type: Date,
            require: true   
        },
        descripcion:{
            type: String,
            require:true
        },
       
})

module.exports=mongoose.model('comentario', ComentarioSchema);

