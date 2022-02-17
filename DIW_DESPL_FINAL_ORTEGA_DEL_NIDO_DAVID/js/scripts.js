$(document).ready(function(){

    function comprar(){
        var cantidad = $("body > .container > #main > .product").length;
        $("header .user-utils #shopping-cart > span").text(cantidad);
        if(cantidad==0){
            $("#main").text("No se encuentra ningun juego en el carrito");
            $("#main").css({"margin-left": "25%", "margin-bottom": "10%", "margin-top": "10%", "font-size": "36px"});

        }
    }

    function sumar(){
        var suma = 0;
        $(".precio").each(function(){
            suma+=parseFloat($(this).text());
            $(".total").text(suma);
            
        })
    }

    comprar();
    sumar();

    $("#basura_1").on("click", function() {
        $("#juego_1").remove();
        comprar();
        sumar();
    });

    $("#basura_2").on("click", function() {
        $("#juego_2").remove();
        comprar();
        sumar();
    });

    $("#basura_3").on("click", function() {
        $("#juego_3").remove();
        comprar();
        sumar();
    });

    $(document).scroll(function() {

        if($(this).scrollTop() > 30){          
          $('#totop').fadeIn(500);
    
        }else{          
          $('#totop').fadeOut(500);
        }
      });
    
      $('#totop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
    }); 
});