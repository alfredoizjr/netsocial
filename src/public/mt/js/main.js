document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});



$( document ).ready(function() {
  $('#btn-like').on('click',function(e) {
    let imagid = $(this).data('id');
    console.log(imagid);
    $.post('/image/'+ imagid + '/like')
      .done( data => {
        $('#likes-count').text(data.likes);
      })
  })
});