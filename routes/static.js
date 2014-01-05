module.exports = function(app, products, configs) {

  app.get('/:static(about|contact|advantage)', function(req, res){
    res.render('static/' + req.params.static, { belongs_to: req.params.static });
  });

  app.get('/:find(wine|assortment|gift)', function(req, res) {
    res.render('static/find_' + req.params.find, { products: products, belongs_to: req.params.find });
  });

  app.get('/:list(grand-cru)', function(req, res) {
    var list = req.params.list;
    var lists = require('../lists');
    res.render('static/list', { products: products, lists: lists[list], belongs_to: list });
  });

};
