const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});

$(function () {
  'use strict';
  (function autoChange() {
    $('.notes .note_list li.active').each(function () {
      if (! $(this).is(':last-of-type')) {
        $(this).delay(1000).fadeOut(1000, function () {
          $(this).removeClass('active').next().addClass('active').fadeIn(1000);
          autoChange();
        });
      } else {
        $(this).delay(1000).fadeOut(1000, function () {
          $(this).removeClass('active').parent('.note_list').find('li:eq(0)').addClass('active').fadeIn(1000);
          autoChange();
        });
      }
    });
  })();
});