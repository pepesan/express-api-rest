var express = require('express');
var router = express.Router();
var MediaDao= require("../models/media");
// gestor de uploads/forms
const formidable = require('formidable');
/* GET file list. */
router.get('/', function(req, res, next) {
    // TODO: listado de objetos
    res.json({
        ficheros:[]
    });
});
/* POST FILE. */
router.post('/', function(req, res, next) {
    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function (name, file){
        file.path = __dirname + '/../uploads/' + file.name;
    });

    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
        res.json({
            fichero:req.files
        }).end();
    });

});

module.exports = router;
