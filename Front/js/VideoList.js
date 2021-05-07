
 // var newDiv = document.createElement("div");
    // newDiv.innerHTML = "유튜브 썸네일";
    // newDiv.setAttribute("id","myDiv");
    // newDiv.style.backgroundColor="yellow";
    
    // var p =document.getElementById("Contents");
    // p.appendChild(newDiv);

    // element.appendChild(document.createTextNode("비디오1"));
    // element.style.backgroundColor="yellow";
    // document.getElementById('Contents').appendChild(element);


$.fn.divcreate = function(){
    for(var i=1; i<10; i++){
    var video = document.createElement("div"); 
    video.id = 'video'+i;
    video.style.width='350px';
    video.style.height='250px';
    video.style.float="left";
    video.style.margin="100px";
    video.style.backgroundColor="yellow";
    $("#Contents").append(video);
    }
}

$('#Contents').divcreate();
