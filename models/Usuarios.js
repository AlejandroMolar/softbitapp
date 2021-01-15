const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let usuariostable = new Schema({

    nombre:{
        type:String,
        required: [true,'Es necesario el nombre']
    },
    matricula:{
        type:String,
        required: [true,'Es necesario la matricula'],
        unique: true
    },
    email:{
        type:String,
        required: [true,'Es necesario el E-mail']
    },
    password:{
        type:String,
        required: [true,'Es necesario una contraseña']
    },

});

module.exports = mongoose.model('usuarios',usuariostable);