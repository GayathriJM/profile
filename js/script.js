$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    Header.classList.remove('toggle');
}
