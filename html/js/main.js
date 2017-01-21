$('.sidebar-search')
  .mouseover(function () {
    $(this).attr('src', 'images/searchhover.png');
  })
  .mouseout(function () {
    $(this).attr('src', 'images/search.png');
  });

