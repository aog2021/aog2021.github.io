window.onload = function () {
    document.getElementById("upload-img").src="./images/cloud-computing.png";
    document.getElementById("speed-test-img").src="./images/speed-test.png";
}

$(document).on("click", ".first", function(e){
    let container = $(".container"),
        sliderOneContainer = $(".slider-ctr .slider .slider-one");
        sliderTwoContainer = $(".slider-ctr .slider .slider-two");
    container.addClass("center slider-two-active").removeClass("full slider-one-active");
    sliderOneContainer.addClass("hidden");
    sliderTwoContainer.removeClass("hidden");
    e.preventDefault();
});
    
$(document).on("click", ".second.next", function(e){
    let name = $(".name"),
        yourname = $(".yourname"),
        sliderTwoContainer = $(".slider-ctr .slider .slider-two");
        sliderThreeContainer = $(".slider-ctr .slider .slider-three");
        container = $(".container");
    container.addClass("full slider-three-active").removeClass("center slider-two-active slider-one-active");
    sliderTwoContainer.addClass("hidden");
    sliderThreeContainer.removeClass("hidden");
    name = name.val();
    if(name == "") {
        yourname.html("Anonymous!");
    }
    else { yourname.html(name+"!"); }

    e.preventDefault();
});

$(document).on("click", ".second.previous", function(e){
    let container = $(".container"),
        sliderOneContainer = $(".slider-ctr .slider .slider-one");
        sliderTwoContainer = $(".slider-ctr .slider .slider-two");

    container.addClass("slider-one-active").removeClass("full center slider-two-active");
    sliderOneContainer.removeClass("hidden");
    sliderTwoContainer.addClass("hidden");
    e.preventDefault();
});

$(document).on("click", ".third.previous", function(e){
    let container = $(".container"),
        sliderTwoContainer = $(".slider-ctr .slider .slider-two");
        sliderThreeContainer = $(".slider-ctr .slider .slider-three");

    container.addClass("center slider-two-active").removeClass("full slider-three-active");
    sliderTwoContainer.removeClass("hidden");
    sliderThreeContainer.addClass("hidden");
    e.preventDefault();
});
