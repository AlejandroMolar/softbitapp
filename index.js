const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended:false}));
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => console.log(app.get('port')));

app.use(require('./routes/index'));



mongoose.connect("mongodb+srv://danny0602:4drjavp9MUQaDlhz@cluster0.1ijjy.mongodb.net/softbit", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err, res) => {
    if (err) throw new Error('Error al conectar la base de datos', err);
    console.log('Base de datos conectada correctamente');
});