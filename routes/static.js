module.exports = function(app, products, configs) {

  app.get('/about', function(req, res){
    res.render('about');
  });

});
