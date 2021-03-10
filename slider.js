$(document).ready(function () {

    var SliderModule = (function () {
        var pb = {};
        pb.elslider = $('#slider');


        pb.items = {
            panels: pb.elslider.find('.slider-wrapper > li'),
        }


        var SliderInterval,
            currentSlider = 0,
            nextSlider = 1,
            lengthSlider = pb.items.panels.length;


        pb.init = function (settings) {

            var loscontroles = '';
            //console.log("Inicializado");
            SliderInit();

            for (var i = 0; i < lengthSlider; i++) {
                if (i == 0) {
                    loscontroles += '<li class="active"></li>'
                } else {
                    loscontroles += '<li></li>';
                }
            }

            $('#control-buttons').html(loscontroles);

            $('#control-buttons li').click(function () {
                if (currentSlider !== $(this).index()) {
                    cambiarPanel($(this).index());
                }
            })
        }


        var SliderInit = function () {

            SliderInterval = setInterval(pb.startSlider, 3000);
        }


        pb.startSlider = function () {
            var paneles = pb.items.panels;
            var controles = $('#control-buttons li');
            //console.log("Mensaje");
            if (nextSlider >= lengthSlider) {
                nextSlider = 0;
                currentSlider = lengthSlider - 1;
            }

            controles.removeClass('active');
            controles.eq(nextSlider).addClass('active');

            paneles.eq(currentSlider).fadeOut('slow');
            paneles.eq(nextSlider).fadeIn('slow');

            console.log(nextSlider);
            currentSlider = nextSlider;
            nextSlider += 1;
        }

        var cambiarPanel = function (indice) {

            clearInterval(SliderInterval);
            var paneles = pb.items.panels;
            var controles = $('#control-buttons li');

            if (indice >= lengthSlider) {
                indice = 0;
            } else if (indice < 0) {
                indice = lengthSlider - 1;
            }

            controles.removeClass('active');
            controles.eq(nextSlider).addClass('active');

            paneles.eq(currentSlider).fadeOut('slow');
            paneles.eq(nextSlider).fadeIn('slow');

            currentSlider = indice;
            nextSlider = indice + 1;

            SliderInit();
        }

        return pb;

    }());

    SliderModule.init();

});