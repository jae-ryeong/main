function colorChan(bg_color, font_color){
    document.bgColor=bg_color;
    document.fgColor=font_color;
}
// 다크모드 버튼
document.querySelector(".dark_button").addEventListener("click",function(){
    document.querySelector(".navbar").style.backgroundColor = "dimgray";
});
document.querySelector(".white_button").addEventListener("click",function(){
    document.querySelector(".navbar").style.backgroundColor = "#9ACD32";
});
// 슬라이드 버튼 
document.querySelector(".버튼1").addEventListener("click",function(){
    document.querySelector(".container").style.transform = "translate(0vw)"
});
document.querySelector(".버튼2").addEventListener("click",function(){
    document.querySelector(".container").style.transform = "translate(-100vw)"
});
document.querySelector(".버튼3").addEventListener("click",function(){
    document.querySelector(".container").style.transform = "translate(-200vw)"
});
// 그림 안에 text 표시
