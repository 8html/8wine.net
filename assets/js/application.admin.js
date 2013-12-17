$(function(){
  $('#adminlogout').click(function(){
    $.post('/SysAdmin/logout', { _csrf: window.csrf_token }).done(function(){
      window.location.reload();
    }).error(function(){
      window.location.href = '/SysAdmin';
    });
  });
  $('.customizable-select').change(function(){
    if ($(this).val() == '') {
      var prompt = window.prompt('请输入自定' + $(this).data('property') + '：', '');
      var selected = $(this).find('option:selected');
      $(this).find('option').prop('selected', false);
      if (prompt != null) {
        if (prompt && $(this).find('option[value="'+prompt+'"]').length > 0) {
          $(this).find('option[value="'+prompt+'"]').prop('selected', true);
        } else {
          $('<option value="'+prompt+'">'+(prompt||'(空)')+'</option>').insertBefore(selected).prop('selected', true);
        }
      } else {
        $(this).find('option[data-original]').prop('selected', true);
      }
    }
  });
  $('.need_confirm').change(function(){
    var nc = $(this).find('option:selected:first');
    if (nc.data('confirm') && !confirm(nc.data('confirm'))) {
      $(this).find('option').prop('selected', false);
      $(this).find('option:not([data-confirm]):first').prop('selected', true);
    }
  });
});
