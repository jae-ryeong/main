const text = document.querySelector('.backImg1 .text');

window.onload = function(){
    text.classList.add('event');
}

const video_text = document.querySelector('.backImg2 .text');
const small_img = document.querySelector('.point_img_small');
const big_img = document.querySelector('.point_img_big');
setInterval(() => {
    small_img.classList.toggle('event');
}, 1000);
setInterval(() => {
    big_img.classList.toggle('event');
}, 1500);
const body = document.querySelector('body');

  // menu 버튼 누르면 나오게 하기
const menu_icon = document.querySelector('.logo_menu .material-icons');
const menu = document.querySelector('.menu');
const backImg1 = document.querySelector('.backImg1');
const backImg2 = document.querySelector('.backImg2');
menu_icon.addEventListener('click', function(){
    menu.classList.toggle('event');
    menu_icon.style.opacity = 0;
    menu_icon.style.transition = '.7s';
})
backImg1.addEventListener('click', function(){
    menu.classList.remove('event');
    menu_icon.style.opacity = 1;
})
backImg2.addEventListener('click', function(){
    menu.classList.remove('event');
    menu_icon.style.opacity = 1;
})

// 버튼 클릭 시 지정된 위치로 이동

backImg1.addEventListener('click', function(e){
    e.preventDefault();
    backImg2.scrollIntoView({behavior: "smooth"});
})
backImg2.addEventListener('click', function(e){
    backImg1.scrollIntoView({behavior: "smooth"});
})

