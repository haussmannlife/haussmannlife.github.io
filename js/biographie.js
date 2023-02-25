$(document).ready(function(){
    $("input.slider").on("input change", function(event) {
        var element = $(this).parents("div.container");
        var pos = event.target.value;
        
        element.find("div.before").css({width: pos + "%"});
        element.find("div.slider-button").css({left: "calc(" + pos + "% - 18px)"});
    });
});



function start_anim_timeline() {
    //'moveline 4s linear forwards';
    
    //alert("ici")
    el = document.getElementById("timeline_id")
    el.classList.add("animation_ligne_timeline")

    el = document.getElementsByClassName("herepicture")[0]
    el.classList.add("secondpicture")

    el_list = document.getElementsByClassName("container_tl");
    delay=1
    for (let i = 0; i < el_list.length; i++) {
        el=el_list[i]
        el.style.animation = 'movedown 1s ' + delay + 's linear forwards';
        el.offsetHeight;
        delay+=1
       // el.style.animation = null;
    }
}
function start_anim_info(){
    el = document.getElementById("grey_bg")
    el.classList.add("apparition_animation_info")
}


find=false
const interval = setInterval(function() {
    var y = window.scrollY;
    el = document.getElementById("timeline_id")
    var window_y = window.screen.height;
    var y_begin = el.offsetTop;

    var scroll_min = y_begin - window_y + 100

    //alert(y + "  " + y_begin + " " + window_y + " " + scroll_min)
    if (y>scroll_min) {
        if (!find) {
            start_anim_timeline();
            find=true
        }
    }
}, 1000);
find2=false
const interval2 = setInterval(function() {
    var y_ = window.scrollY;
    el_ = document.getElementById("grey_bg")
    var window_y_ = window.screen.height;
    var y_begin_ = el_.offsetTop;

    var scroll_min_ = y_begin_ - window_y_ + 100

    //alert(y + "  " + y_begin + " " + window_y + " " + scroll_min)
    if (y_>scroll_min_) {
        if (!find2) {
            start_anim_info();
            find2=true
        }
    }
}, 1000);

//clearInterval(interval);

