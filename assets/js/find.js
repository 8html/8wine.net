$(function(){
  $('#productfilter').isotope({
    itemSelector: '.pfitem'
  });
  $('#typeselector a').click(function(e) {
    var li;
    if ($(this).data('filter')) {
      e.preventDefault();
      li = $(this).parent();
      li.siblings('li').removeClass('active');
      li.addClass('active');
      $('#productfilter').isotope({
        filter: $(this).data('filter')
      });
    }
  });
});
