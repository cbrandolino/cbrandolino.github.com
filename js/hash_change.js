$(function(){
  window.onhashchange = function(){
    $('.nav li').removeClass('active')
    $('.nav li a[href="'+window.location.hash+'"]').parent().addClass('active')
  }
})
