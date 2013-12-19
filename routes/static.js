module.exports = function(app, products, configs) {

  app.get('/:static(about|contact)', function(req, res){
    res.render('static/' + req.params.static, { belongs_to: req.params.static });
  });

  app.get('/wine', function(req, res) {
    res.render('static/find_wine', { products: products, belongs_to: 'wine' });
  });

  app.get('/:list(grand-cru)', function(req, res) {
    var list = req.params.list;
    var lists = require('../lists');
    res.render('static/list', { products: products, lists: lists[list], belongs_to: list });
  });

};
