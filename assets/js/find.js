$(function(){
  if ($('#typeselector').length === 1) {
    $('.filtered').isotope({
      itemSelector: '.filtered_item',
      onLayout: function() {
        $(window).trigger('scroll');
        var total = $('.filtered_item').length;
        var hidden = $('.isotope-hidden').length;
        if (hidden === 0) {
          $('#typeselector .all_listed').removeClass('hidden');
          $('#typeselector .not_all_listed').addClass('hidden');
          $('#typeselector a.showall').hide();
        } else {
          $('#typeselector .all_listed').addClass('hidden');
          $('#typeselector .not_all_listed').removeClass('hidden');
          $('#typeselector a.showall').show();
        }
        $('#typeselector .total_items').text(total);
        $('#typeselector .visible_items').text(total - hidden);
      }
    });
    $('#typeselector a').click(function(e) {
      e.preventDefault();
      if (!$(this).data('filter')) {
        $('#typeselector a[data-filter]').removeClass('active');
        $('#typeselector .valtd').each(function() {
          $(this).find('a[data-filter]:first').addClass('active');
        });
      } else {
        if (!$(this).hasClass('active')) {
          $(this).siblings().removeClass('active');
          $(this).addClass('active');
        }
      }
      var filter = '';
      $('#typeselector a.active').each(function(){
        var f=$(this).data('filter');
        if (filter.indexOf(f)===-1) filter+=f;
      });
      $('.filtered').isotope({
        filter: filter
      });
    });
    $('#productfilter img').unveil();
  }
});
