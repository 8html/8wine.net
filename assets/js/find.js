$(function(){
  if ($('#typeselector').length === 1) {
    $('#productfilter').isotope({
      itemSelector: '.pfitem'
    });
    $('#typeselector a[data-filter]').click(function(e) {
      e.preventDefault();
      if ($(this).data('filter') == '*') {
        $('#typeselector a[data-filter]').removeClass('active');
      } else {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
        } else {
          $(this).siblings().removeClass('active');
          $(this).addClass('active');
        }
      }
      var filter = '';
      $('#typeselector a.active').each(function(){
        var f=$(this).data('filter');
        if (filter.indexOf(f)===-1) filter+=f;
      });
      if (!filter) {
        filter = '*';
        $('#typeselector a.showall').hide();
      } else {
        $('#typeselector a.showall').show();
      }
      $('#productfilter').isotope({
        filter: filter
      });
    });
    $('#productfilter img').lazyload();
  }
});
