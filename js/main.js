$('.icon-container')
  .mouseover(function () {
    const img = $(this).children('img');
    const newSrc = img.attr('src').replace('.png','hover.png');
    img.attr('src', newSrc);
    const text = $(this).children('p');
    text.css('color', '#DFE0E6');
  })
  .mouseout(function () {
    const img = $(this).children('img');
    const newSrc = img.attr('src').replace('hover.png','.png');
    img.attr('src', newSrc);
    const text = $(this).children('p');
    text.css('color', '#88898C')
  });

