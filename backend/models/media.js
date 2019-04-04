var mongoose= require('./conection');
//mongoose.connect('mongodb://localhost:27017/user',{ useNewUrlParser: true });
const Media = mongoose.model(
    'Media',
    {
        isbn: String,
        titulo:String,
        autor:String
    }
);

module.exports = Media;
