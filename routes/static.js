module.exports = function(app, products, configs) {

  app.get('/:static(about|contact)', function(req, res){
    res.render('static/' + req.params.static);
  });

  app.get('/find', function(req, res) {
    res.render('static/find', { products: products });
  });

};
