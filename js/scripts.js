$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });

    $("#loginButton").click(function(){
        $("#loginModal").modal("show");
    });

    $("#loginCloseButton").click(function(){
        $("#loginModal").modal("hide")
    });

    $("#loginCancelButton").click(function(){
        $("#loginModal").modal("hide")
    });

    $("#reserveTableButton").click(function(){
        $("#reservationModal").modal("show");
    });

    $("#reservationCancelButton").click(function(){
        $("#reservationModal").modal("hide");
    });

    $("#reservationDismissButton").click(function(){
        $("#reservationModal").modal("hide");
    });
});