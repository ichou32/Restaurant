
        $(document).ready(function(){
            $("#mycarousel").carousel({ interval:2000});
                $("#carouselButton").click(function(){
                    if($("#carouselButton").children("span").hasClass('fa-pause')) {
                        $("#mycarousel").carousel('pause');
                        $("#carouselButton").children("span").removeClass('fa-pause');
                        $("#carouselButton").children("span").addClass('fa-play');
                    }
                    else if($("#carouselButton").children("span").hasClass('fa-play')){
                        $("#mycarousel").carousel('cycle');
                        $("#carouselButton").children("span").removeClass('fa-play');
                        $("#carouselButton").children("span").addClass('fa-pause');                    
                    }
                });
            
                $("#reverseTable").click(function(){
                    $("#tableModal").modal('show');
                })
                $("#coloseTable").click(function(){
                    $("#tableModal").modal('hide');
                })
                $("#login").click(function(){
                    $("#loginModal").modal('show');
                })
                $("#closeLogin").click(function(){
                    $("#loginModal").modal('hide');
                })
        });