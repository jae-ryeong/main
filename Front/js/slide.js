// /* 버튼 2를 누르면  transform: translate(-100vw); 이 동작하게 만들 예정
//  transform, margin을 쓴 이유 : 나중에 애니메이션 줄 땐 마진보다  transform이 더 빠르고 스무스하게 동작한다.*/
//  document.querySelector('.button2').addEventListener('click', function(){
//     document.querySelector('.container').style.transform = 'translate(-100vw)';
//  })
//  /* 버튼 2라는 요소를 찾고, 클릭이 일어나면 안에있는 코드(함수)를 실행해주세요. */
document.querySelector('.button2').addEventListener('click',function(){
    document.querySelector('.container').style.transform = 'translate(-100vw)';
});
document.querySelector('.버튼3').addEventListener('click',function(){
    document.querySelector('.container').style.transform = 'translate(-200vw)';
});
document.querySelector('.버튼1').addEventListener('click',function(){
    document.querySelector('.container').style.transform = 'translate(0vw)';
});