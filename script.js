function glassIt() { 

    var g = $(".glass");
    var c = g.parent();
    var w = c.width();
    var h = c.height();
    var ext = ["-webkit-", "-moz-", "-o-", "-ms-"];
    var angle = "rotate("+(-1 * ((Math.atan(h/w))/(2*Math.PI))*360)+"deg)";
    
    g.width(Math.sqrt(Math.pow(w,2)+Math.pow(h,2)));
    
    for(i = 0; i <= ext.length; i++) {
        if(i < ext.length) {
            g.css(ext[i]+"transform", angle);
        } 
        else {
            g.css("transform", angle);
        }
    }
}

var resizeTimer;
$(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(glassIt, 100);
});

$(document).ready(function() {
  glassIt();
});
