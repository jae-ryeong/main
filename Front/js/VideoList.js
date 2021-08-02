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
<<<<<<< HEAD
change_Title(3, "참~쉬운 찜닭! 집에서 이건 꼭 한번 해보세요. ㅣ 백종원의 백종원레시피");
=======
change_Title(3, "참~쉬운 찜닭! 집에서 이건 꼭 한번 해보세요. ㅣ 백종원의 백종원레시피");

>>>>>>> 7bed2618165b2c2e7b5386524f19c03c7fccae0e
