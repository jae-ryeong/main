
// SEARCH AUTO BUTTON
const searchEl = document.querySelector('.search')
const searchInputEl = document.querySelector('input');
searchEl.addEventListener('click', function(){
    searchInputEl.focus();
})
searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
})
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
})
// slide choice
const btn1 = document.querySelector('.btn:nth-child(1)');
const btn2 = document.querySelector('.btn:nth-child(2)');

const slide_action1 = document.querySelector('.notice .promotion .swiper-container');

const slide_action2 = document.querySelector('.notice .best-food .swiper-container');

btn1.addEventListener('click', function(){
    slide_action1.style.opacity = 1,
    slide_action2.style.opacity = 0,
    slide_action1.style.zIndex = 1,
    slide_action2.style.zIndex = 0
})
btn2.addEventListener('click', function(){
    slide_action1.style.opacity = 0,
    slide_action2.style.opacity = 1,
    slide_action1.style.zIndex = 0,
    slide_action2.style.zIndex = 1
})
// SWIPER new Swiper('선택자', '옵션')
new Swiper('.notice .promotion .swiper-container', {
    // direction: 'horizontal'기본 값이라서 따로 지정하지 않아도 된다.  
    slidesPerView: 3, // 한번에 보옂루 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 처음에 보여질 슬라이드가 왼쪽이 아니라 가운데에 보여지도록 하기.
    loop: true, // 슬라이드가 반복적으로 보여지도록 해줌.
    // autoplay: true 슬라이드가 자동으로 널어가짐.
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: ".swiper-pagination", // el(HEML 안의 클래스 지정)
        clickable: true // 원 모양 클릭하면 해당 순서로 이동
    }
})
// SWIPER new Swiper('선택자', '옵션')
new Swiper('.notice .best-food .swiper-container', {
    // direction: 'horizontal'기본 값이라서 따로 지정하지 않아도 된다.
    slidesPerView: 3, // 한번에 보여주는 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 처음에 보여질 슬라이드가 왼쪽이 아니라 가운데에 보여지도록 하기.
    loop: true, // 슬라이드가 반복적으로 보여지도록 해줌.
    // autoplay: true 슬라이드가 자동으로 널어가짐.
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: ".swiper-pagination", // el(HEML 안의 클래스 지정)
        clickable: true // 원 모양 클릭하면 해당 순서로 이동
    }
})
new Swiper('.notice-text .swiper-container', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000
    },
    direction: "vertical"
})


