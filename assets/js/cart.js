$(function(){
  $('#cartac').typeahead({
    name: 'products',
    prefetch: '/search',
    remote: '/search/%QUERY',
    valueKey: 'name',
    limit: 10
  }).bind('typeahead:selected', function(event, object, name) {
    $.getJSON(object.path, function(product){
      simpleCart.add({ 
        name: product.name,
        category: product.category,
        model: product.model,
        price: product.price,
        path: product.path,
        image: product.image,
        quantity: 1
      });
      $('#cartac').typeahead('setQuery', '');
      toastr['success']('成功添加商品到购物车。');
    });
  });
  $('.checkout_button').click(function(e){
    e.preventDefault();
    var selected_delivery = $('input[name=delivery]:enabled:checked');
    if (selected_delivery.length === 1) {
      simpleCart.checkout();
    } else {
      toastr['error']('请选择一种配送方式。');
    }
  })
});
