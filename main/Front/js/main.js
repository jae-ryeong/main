const text = document.querySelector('.backImg .text');

window.onload = function(){
    text.classList.add('event');
}

const video_text = document.querySelector('.videoList_section .text');
const small_img = document.querySelector('.point_img_small');
const big_img = document.querySelector('.point_img_big');
setInterval(() => {
    small_img.classList.toggle('    ');
}, 1000);
setInterval(() => {
    big_img.classList.toggle('event');
}, 1500);
// 스크롤 이벤트
window.addEventListener('scroll', function(){
    let scrollLocation = document.documentElement.scrollTop;
    console.log(scrollLocation);
    if(scrollLocation < 500){
        video_text.classList.add('event');
    }
})
