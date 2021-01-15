const express = require('express');

const route = express.Router();
const Usuario = require('../models/Usuarios')

route.get('/gym',async(req, res) => {
    const usuarios = await Usuario.find({});
    res.json({
        ok: true,
        usuarios
    })
    
});

route.post('/gym',(req, res) => {
    const body = req.body;
    console.log(body)
     let usuario = new Usuario({
      nombre: body.nombre,
     matricula: body.matricula,
      email: body.email,
      password: body.password
     })

     usuario.save((err, usuarioDB) => {
      if (err) {
          return res.status(400).json({
              ok: false,
              err
          });
      }

      res.json({
          ok: true,
          usuario: usuarioDB
      })
    }); 
});

module.exports=route