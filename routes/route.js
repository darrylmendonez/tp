var epilogue = require('epilogue');
var controller = require('../controllers/controller.js');

module.exports.routes = function(app) {

  app.get('*', function(req, res) {
    res.sendFile(process.cwd() + '/public/views/index.html');
  });

}; // end module.exports.routes