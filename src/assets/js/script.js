
	$('#myCarousel').carousel({
        interval: 0
        })
        
        $('#myCarousel').on('slid.bs.carousel', function() {
            alert("slid");
        });
        