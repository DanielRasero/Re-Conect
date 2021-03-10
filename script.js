$(document).ready(function () {


    //Movimientos en cabecera
    $(document).scroll(function () {

        //Header
        if ($(window).scrollTop() > 0) {

            $("div#header").css({"position": "fixed", "width": "100%", "opacity": "0.9","z-index":"500"});
            $("nav#menu-completo").css({"position": "fixed", "height": "100%", "opacity": "1","z-index":"500"});
            $("div#boton-volver").css({"display": "flex"});

            //volver arriba
            $("div#boton-volver").click(function (event) {
                event.preventDefault();
                $("html").stop().animate({"scrollTop": 0}, 200);

            });


        } else {

            console.log("nohace")
            $("div#header").css({"position": "","opacity":"1"});
            $("nav#menu-completo").css({"position": "","opacity":"1"});
            $("div#boton-volver").css({"display": "none"});
        }

    });

    //Menu desplegable
    $('nav#menu-hamburguesa>div#container-hamburguer-icon').click(function () {

        if ($('nav#menu-completo').position().left == 0) {

            $("nav#menu-completo").animate({"left": "-80rem"},50);


        } else {

            $("nav#menu-completo").animate({"left": "0"},200);
        }


        var angulo = $(this).getRotateAngle();
        if (angulo == 0) {
            $(this).rotate({
                animateTo:-90,center: ["70%", "50%"]
            })
            angulo = 0;
        } else {
            $(this).rotate({
                animateTo:0,center: ["70%", "50%"],
            })
            angulo = 0;
            angulo = 0;
        }

    });

    //Mostrar subapartados del menu
    $("ul#menu li").click(function () {

        $(this).children().fadeIn(500);
        $(this).siblings().children("ul").css("display","flex").css("width","100%");
        $(this).siblings().children("ul").fadeOut(200);



    });


    //cambiar ventana de tamaño
    $(window).resize(function () {

        $("nav#menu-completo").animate({"left": "-80rem"});
        $('nav#menu-hamburguesa>div#container-hamburguer-icon').rotate({
            animateTo:0,center: ["70%", "50%"],
        });
    });

    //mensaje vacío en campos de formulario
    $("div#form-login > input").blur(function () {

        if ($(this).val().length == 0) {
            $(this).prev("p.mensaje-error").css({display: "flex"});
        } else {
            $(this).prev("p.mensaje-error").css("display", "none");
        }
    });


    $("div.boton").mouseenter(function () {

   $(this).css("background-color","black");

    }).mouseleave(function () {

        $(this).css("background-color","#7C7C81");

    })

})