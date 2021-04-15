$(function(){
  const swiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 2000
    },
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true
  });
  new Swiper('.swiper-container1', {
    autoplay: {
      delay: 2000
    },
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true
  });


  //nav
  $('#toggle_menu').on('click',function(){
    $('.nav_menu').toggleClass('active')
  });
  

  //a 속성 제거
  $('a[href="#"]').on('click',function(e){
    e.preventDefault();
  });

});