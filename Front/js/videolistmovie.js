const modal = document.getElementById('myModal');
        // Get the button that opens the modal
        // const btn = document.querySelector('.Video .thumbnail')
        [...document.querySelectorAll('.Video .thumbnail')].forEach(function(item){
            item.addEventListener('click', function(){
                modal.style.display = "block",
                modal.style.position = "fixed"
            });
        })
        modal.addEventListener('click',function(){
            modal.style.display = "none";
        })