$(document).ready(function () {

    $(window).scroll(function (){

        $('div#header').css('position','fixed');
        $('div#header').css('opacity','0.6');

    })

    $(window).resize(function () {

        $('nav#menu-completo').css("left", "-19rem");
        console.log($('nav#menu-completo').css("left"));
    });


    $("label#container-hamburguer-icon").on({
        mouseenter: function(){
            $('ul#lista-icono-menu li img').css("background-color", "lightgray");
        },
        mouseleave: function(){
            $('ul#lista-icono-menu li img').css("background", "none");
        },
        click: function(){
            if ($('div#header > nav#menu-hamburguesa > nav#menu-completo').css("left") == 0) {
                $('div#header > nav#menu-hamburguesa > nav#menu-completo').css("left", "-19rem");
                console.log("Entra en el if");
            }else{
                $('div#header > nav#menu-hamburguesa > nav#menu-completo').css("left", "0");
                console.log("Entra en el else");
            }
        }
    });

})