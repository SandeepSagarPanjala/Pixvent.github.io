$(document).ready(function() {
    $('#clockFlat').countdown("2021/02/01 00:00:00").on('update.countdown', function(event) {
      var $this = $(this).html(event.strftime(''
	+ '<div class="clockCard px-1"> <span>%m</span> <br> <p class="bg-amber clockFormat lead px-1 black"> Month%!m </p> </div>'
        + '<div class="clockCard px-1"> <span>%n</span> <br> <p class="bg-amber clockFormat lead px-1 black"> Day%!n </p> </div>'
        + '<div class="clockCard px-1"> <span>%H</span> <br> <p class="bg-amber clockFormat lead px-1 black"> Hour%!H </p> </div>'
        + '<div class="clockCard px-1"> <span>%M</span> <br> <p class="bg-amber clockFormat lead px-1 black"> Minute%!M </p> </div>'
        + '<div class="clockCard px-1"> <span>%S</span> <br> <p class="bg-amber clockFormat lead px-1 black"> Second%!S </p> </div>'))
    });


});
