var mongoose = require('mongoose');
var conString = process.env.DATABASE_URL;
//console.log(conString);
mongoose.connect(conString,{ useNewUrlParser: true ,useFindAndModify:false});

//mongoose.connect('mongodb://localhost:27017/user',{ useNewUrlParser: true });
const Libro = mongoose.model(
    'Libros',
    {
        isbn: String,
        titulo:String,
        autor:String
    }
);

module.exports = Libro;
