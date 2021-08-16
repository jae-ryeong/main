
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
// [...document.querySelectorAll('.food').forEach(function(item){
//     item.addEventListener('click',function(){
//         for(var i = 0; i < Containers.length; i++){
            
//         }
//     })
// })]

// VideoList.js
function addDiv(){
    for (var i=1; i<10; i++){
        var modal = document.createElement("div");
        modal.id = 'myModal' + i;
        modal.classList.add('modal');
        document.getElementById("modalContainer").append(modal);
        
        var modalContent = document.createElement("div");
        modalContent.classList.add('modal-content');
        modal.append(modalContent);

        var close = document.createElement("span");
        close.classList.add('close');
        var closeText = document.createTextNode("x");
        close.append(closeText);

        var video_iframe = document.createElement("iframe");
        video_iframe.id = "iframeID"+i; video_iframe.classList.add("iframeClass");
        video_iframe.setAttribute("allowfullscreen","true");
        video_iframe.src = "http://www.youtube.com/embed/pPb2lIap6Es?rel=0";

        modalContent.append(close);
        modalContent.append(video_iframe);
        // http://www.youtube.com/embed/pPb2lIap6Es?rel=0
    }
}
var number, src_address;    // number: 썸네일 순서, src_address: iframe의 src주소
function change_src(number, src_address){   // iframe 변경
    if(number == 1){
        document.getElementById("iframeID1").src = src_address;
    }else if(number == 2){
        document.getElementById("iframeID2").src = src_address;
    }else if(number == 3){
        document.getElementById("iframeID3").src = src_address;
    }else if(number == 4){
        document.getElementById("iframeID4").src = src_address;
    }else if(number == 5){
        document.getElementById("iframeID5").src = src_address;
    }else if(number == 6){
        document.getElementById("iframeID6").src = src_address;
    }else if(number == 7){
        document.getElementById("iframeID7").src = src_address;
    }else if(number == 8){
        document.getElementById("iframeID8").src = src_address;
    }else if(number == 9){
        document.getElementById("iframeID9").src = src_address;
    }
}

var img_address;    // 썸네일 이미지 src주소
function change_img(number, img_address){   // 썸네일 이미지 변경
    if(number == 1){
        document.getElementsByClassName("img")[0].src = img_address;
    }else if(number == 2){
        document.getElementsByClassName("img")[1].src = img_address;
    }else if(number == 3){
        document.getElementsByClassName("img")[2].src = img_address;
    }else if(number == 4){
        document.getElementsByClassName("img")[3].src = img_address;
    }else if(number == 5){
        document.getElementsByClassName("img")[4].src = img_address;
    }else if(number == 6){
        document.getElementsByClassName("img")[5].src = img_address;
    }else if(number == 7){
        document.getElementsByClassName("img")[6].src = img_address;
    }else if(number == 8){
        document.getElementsByClassName("img")[7].src = img_address;
    }else if(number == 9){
        document.getElementsByClassName("img")[8].src = img_address;
    }
}

var Title;
function change_Title(number, Title){   // 썸네일 제목 변경
    if(number == 1){
        document.getElementsByClassName("Title")[0].innerText = Title;
    }else if(number == 2){
        document.getElementsByClassName("Title")[1].innerText = Title;
    }else if(number == 3){
        document.getElementsByClassName("Title")[2].innerText = Title;
    }else if(number == 4){
        document.getElementsByClassName("Title")[3].innerText = Title;
    }else if(number == 5){
        document.getElementsByClassName("Title")[4].innerText = Title;
    }else if(number == 6){
        document.getElementsByClassName("Title")[5].innerText = Title;
    }else if(number == 7){
        document.getElementsByClassName("Title")[6].innerText = Title;
    }else if(number == 8){
        document.getElementsByClassName("Title")[7].innerText = Title;
    }else if(number == 9){
        document.getElementsByClassName("Title")[8].innerText = Title;
    }
}

addDiv();

change_img(3,"https://i.ytimg.com/vi/kfGi3rTct8c/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLA5dN_PMPz7icl72CJSeo4GI8mpBQ");
change_src(3,"https://www.youtube.com/embed/kfGi3rTct8c");
change_Title(3, "참~쉬운 찜닭! 집에서 이건 꼭 한번 해보세요. ㅣ 백종원의 백종원레시피");

