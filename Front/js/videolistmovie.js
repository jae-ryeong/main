
// Get the modal

var modal= []; var btn = []; var span = [];
for(var i=1; i<10; i++){
    modal.push(document.getElementById('myModal'+i));
    // btn.push(document.getElementById('Video'+i));
    // span.push(document.getElementsByClassName("close")[i-1]);

    
    // btn[i-1].onclick = function(){
    //     modal[i-1].style.display = "block";
    //     console.log("열림");
    
}

//Get the button that opens the modal
var btn1 = document.getElementById("Video1");
var btn2 = document.getElementById("Video2");
var btn3 = document.getElementById("Video3");
var btn4 = document.getElementById("Video4");
var btn5 = document.getElementById("Video5");
var btn6 = document.getElementById("Video6");
var btn7 = document.getElementById("Video7");
var btn8 = document.getElementById("Video8");
var btn9 = document.getElementById("Video9");

//Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
var span5 = document.getElementsByClassName("close")[4];
var span6 = document.getElementsByClassName("close")[5];
var span7 = document.getElementsByClassName("close")[6];
var span8 = document.getElementsByClassName("close")[7];
var span9 = document.getElementsByClassName("close")[8];

// When the user clicks on the button, open the modal 

btn1.onclick = function() {
    modal[0].style.display = "block";
    modal[0].style.position = "fixed"
    console.log("열림");
}
btn2.onclick = function() {
    modal[1].style.display = "block";
}
btn3.onclick = function() {
    modal[2].style.display = "block";
}
btn4.onclick = function() {
    modal[3].style.display = "block";
}
btn5.onclick = function() {
    modal[4].style.display = "block";
}
btn6.onclick = function() {
    modal[5].style.display = "block";
}
btn7.onclick = function() {
    modal[6].style.display = "block";
}
btn8.onclick = function() {
    modal[7].style.display = "block";
}
btn9.onclick = function() {
    modal[8].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal[0].style.display = "none";
    console.log("닫힘");
}
span2.onclick = function() {
    modal[1].style.display = "none";
}
span3.onclick = function() {
    modal[2].style.display = "none";
}
span4.onclick = function() {
    modal[3].style.display = "none";
}
span5.onclick = function() {
    modal[4].style.display = "none";
}
span6.onclick = function() {
    modal[5].style.display = "none";
}
span7.onclick = function() {
    modal[6].style.display = "none";
}
span8.onclick = function() {
    modal[7].style.display = "none";
}
span9.onclick = function() {
    modal[8].style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal[0]) {
        modal[0].style.display = "none";
        console.log("닫혔냐??");
    } else if (event.target == modal[1]){
        modal[1].style.display = "none";
    } else if (event.target == modal[2]){
        modal[2].style.display = "none";
    } else if (event.target == modal[3]){
        modal[3].style.display = "none";
    } else if (event.target == modal[4]){
        modal[4].style.display = "none";
    } else if (event.target == modal[5]){
        modal[5].style.display = "none";
    } else if (event.target == modal[6]){
        modal[6].style.display = "none";
    } else if (event.target == modal[7]){
        modal[7].style.display = "none";
    } else if (event.target == modal[8]){
        modal[8].style.display = "none";
    }
}

// // 카테고리 별로 나오는 동영상 다르게 하기
window.onload = function(){
    Containers[0].classList.add('event');
}

const foods = document.querySelectorAll('.food_v');
var Containers = document.querySelectorAll('.Container');
for(var i = 0; i <= foods.length; i++){
    foods[0].addEventListener('click', function(){
        Containers[0].classList.add('event');
        Containers[1].classList.remove('event');
        Containers[2].classList.remove('event');
        Containers[3].classList.remove('event');
        Containers[4].classList.remove('event');
        Containers[5].classList.remove('event');
        Containers[6].classList.remove('event');
        Containers[7].classList.remove('event');
        Containers[8].classList.remove('event');
        Containers[9].classList.remove('event');
    })
    foods[1].addEventListener('click', function(){
        Containers[0].classList.remove('event');
        Containers[1].classList.add('event');
        Containers[2].classList.remove('event');
        Containers[3].classList.remove('event');
        Containers[4].classList.remove('event');
        Containers[5].classList.remove('event');
        Containers[6].classList.remove('event');
        Containers[7].classList.remove('event');
        Containers[8].classList.remove('event');
        Containers[9].classList.remove('event');
    })
    foods[2].addEventListener('click', function(){
        Containers[0].classList.remove('event');
        Containers[1].classList.remove('event');
        Containers[2].classList.add('event');
        Containers[3].classList.remove('event');
        Containers[4].classList.remove('event');
        Containers[5].classList.remove('event');
        Containers[6].classList.remove('event');
        Containers[7].classList.remove('event');
        Containers[8].classList.remove('event');
        Containers[9].classList.remove('event');
    })
    foods[3].addEventListener('click', function(){
        Containers[0].classList.remove('event');
        Containers[1].classList.remove('event');
        Containers[2].classList.remove('event');
        Containers[3].classList.add('event');
        Containers[4].classList.remove('event');
        Containers[5].classList.remove('event');
        Containers[6].classList.remove('event');
        Containers[7].classList.remove('event');
        Containers[8].classList.remove('event');
        Containers[9].classList.remove('event');
    })
    foods[4].addEventListener('click', function(){
        Containers[0].classList.remove('event');
        Containers[1].classList.remove('event');
        Containers[2].classList.remove('event');
        Containers[3].classList.remove('event');
        Containers[4].classList.add('event');
        Containers[5].classList.remove('event');
        Containers[6].classList.remove('event');
        Containers[7].classList.remove('event');
        Containers[8].classList.remove('event');
        Containers[9].classList.remove('event');
    })
    foods[5].addEventListener('click', function(){
        Containers[0].classList.remove('event');
        Containers[1].classList.remove('event');
        Containers[2].classList.remove('event');
        Containers[3].classList.remove('event');
        Containers[4].classList.remove('event');
        Containers[5].classList.add('event');
        Containers[6].classList.remove('event');
        Containers[7].classList.remove('event');
        Containers[8].classList.remove('event');
        Containers[9].classList.remove('event');
    })
    foods[6].addEventListener('click', function(){
        Containers[0].classList.remove('event');
        Containers[1].classList.remove('event');
        Containers[2].classList.remove('event');
        Containers[3].classList.remove('event');
        Containers[4].classList.remove('event');
        Containers[5].classList.remove('event');
        Containers[6].classList.add('event');
        Containers[7].classList.remove('event');
        Containers[8].classList.remove('event');
        Containers[9].classList.remove('event');
    })
    foods[7].addEventListener('click', function(){
        Containers[0].classList.remove('event');
        Containers[1].classList.remove('event');
        Containers[2].classList.remove('event');
        Containers[3].classList.remove('event');
        Containers[4].classList.remove('event');
        Containers[5].classList.remove('event');
        Containers[6].classList.remove('event');
        Containers[7].classList.add('event');
        Containers[8].classList.remove('event');
        Containers[9].classList.remove('event');
    })
    foods[8].addEventListener('click', function(){
        Containers[0].classList.remove('event');
        Containers[1].classList.remove('event');
        Containers[2].classList.remove('event');
        Containers[3].classList.remove('event');
        Containers[4].classList.remove('event');
        Containers[5].classList.remove('event');
        Containers[6].classList.remove('event');
        Containers[7].classList.remove('event');
        Containers[8].classList.add('event');
        Containers[9].classList.remove('event');
    })
    foods[9].addEventListener('click', function(){
        Containers[0].classList.remove('event');
        Containers[1].classList.remove('event');
        Containers[2].classList.remove('event');
        Containers[3].classList.remove('event');
        Containers[4].classList.remove('event');
        Containers[5].classList.remove('event');
        Containers[6].classList.remove('event');
        Containers[7].classList.remove('event');
        Containers[8].classList.remove('event');
        Containers[9].classList.add('event');
    })
}
// [...document.querySelectorAll('.food').forEach(function(item){
//     item.addEventListener('click',function(){
//         for(var i = 0; i < Containers.length; i++){
            
//         }
//     })
// })]