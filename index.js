$(function(){
  const swiper = new Swiper('.swiper-container', {
    autoplay: {//자동 슬라이드
      delay: 2000
    },
    slidesPerView: 1,//화면당 이미지
    spaceBetween: 30,//이미지 사이
    loop: true//반복(첫화면으로 자연스럽게 이동) false는 다시 처음으로 되돌아가서 순차적으로 이동
  });
  new Swiper('.swiper-container1', {
    autoplay: {//자동 슬라이드
      delay: 2000
    },
    slidesPerView: 1,//화면당 이미지
    spaceBetween: 5,//이미지 사이
    loop: true//반복(첫화면으로 자연스럽게 이동) false는 다시 처음으로 되돌아가서 순차적으로 이동
  });


  //nav
  $('#toggle_menu').on('click',function(){
    $('.nav_menu').toggleClass('active')
  });


});