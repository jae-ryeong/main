const text = document.querySelector('.backImg .text');

window.onload = function(){
    text.classList.add('event');
}

const video_text = document.querySelector('.videoList_section .text');
const small_img = document.querySelector('.point_img_small');
const big_img = document.querySelector('.point_img_big');
setInterval(() => {
    small_img.classList.toggle('event');
}, 1000);
setInterval(() => {
    big_img.classList.toggle('event');
}, 1500);
const body = document.querySelector('body');
// 대상객체.addEventListener(이벤트명, 실행할이벤트리스너, 이벤트전파방식)
// 1. 이벤트 명 : 이벤트 리스너를 등록할 이벤트 타입을 문자열로 전달합니다.
// 2. 실행할 이벤트 리스너 : 지정된 이벤트가 발생했을 때 실행할 이벤트 리스너를 전달합니다.
// 3. 이벤트 전파 방식 : false면 버블링(bubbling) 방식으로, true면 캡처링(capturing) 방식으로 이벤트를 전파합니다.
// Capturing은 이벤트가 발생한 target element의 최상위 부모부터 target element까지 순차적으로 내려오면서 이벤트가  전달되는 방식
// Bubbling은 이벤트가 발생한 target element부터 최상위 부모까지 순차적으로 올라가면서 이벤트가 전달되는 방식 (BottomUp 방식?)


document.addEventListener("mousewheel", mouseWheeling, true); // mouseWheeling에 mouseWheel 이벤트가 적용.
document.addEventListener("DOMMouseScroll", mouseWheeling, false); // 파이어폭스
// 마우스 휠 이벤트
function mouseWheeling(e) {
    let scrollDirection;  
    let wheelData = e.wheelDelta; // wheelData는 mouseWheeling 속성이 들어간 값이다. 
    // 파이어폭스에서는 detail, 그 외에서는 wheeDelta이다.
    if (wheelData) {
      scrollDirection = wheelData;
    } else {
      scrollDirection = -1 * wheelData;
    }
  
    if (scrollDirection > 0) {
        body.style.top = "0vh";
        body.style.transition = "1s";
    } else {
        body.style.top = "-100vh";
        body.style.transition = "1s";
        video_text.classList.add('event');
    }
  }

  // menu 버튼 누르면 나오게 하기
  const menu_icon = document.querySelector('.logo_menu .material-icons');
  const menu = document.querySelector('.menu');
  const menu_del = document.querySelector('.backImg');
  menu_icon.addEventListener('click', function(){
      menu.classList.toggle('event');
      menu_icon.style.opacity = 0;
      menu_icon.style.transition = '.7s';
  })
  menu_del.addEventListener('click', function(){
      menu.classList.remove('event');
      menu_icon.style.opacity = 1;
  })
  // // 스크롤 이벤트
// window.addEventListener('scroll', function(){
//     let scrollLocation = document.documentElement.scrollTop;
//     console.log(scrollLocation);
//     if(scrollLocation < 500){
//         video_text.classList.add('event');
//     }
// })
