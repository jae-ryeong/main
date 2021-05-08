
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
    video.id = 'video';
    video.style.width='350px';
    video.style.height='250px';
    video.style.float="left";
    video.style.margin="100px";
    video.style.backgroundColor="yellow";
    video.style.cursor="pointer";
    
    
    $("#Contents").append(video);
    var pop = document.createElement("div"); 
    pop.id = "element_to_pop_up";
    video.append(pop);
    }
}

$('#Contents').divcreate();

//
//



(function($) {
        // DOM Ready
       $(function() {
           // Binding a click event
           // From jQuery v.1.7.0 use .on() instead of .bind()
           $('#video').bind('click', function(e) {
       var self = $(this) //button
       , content = $('.content'); 
       $('element_to_pop_up').bPopup({
           onOpen: function() {
               content.html(self.data('bpopup') || '');
           },
           onClose: function() {
               content.empty();
           }
       });
               // Prevents the default action to be triggered. 
               e.preventDefault();
               // Triggering bPopup when click event is fired
               $('#element_to_pop_up').bPopup();
           });
       });
   })(jQuery);