$(document).ready(function() {
    let fullName = $("#fullName"),
        position = $("#position"),
        lineManager = $("#lineManager"),
        reason = $("#reason"),
        startDate = $("#start-date-input"),
        endDate = $("#end-date-input");
        
    $("#upload-img").attr("src" ,"./images/cloud-computing.png");
    $("#speed-test-img").attr("src" ,"./images/speed-test.png");
    $("#aog-logo").attr("src" ,"./images/AOG.png");

    $('.first').on("click", function(e){
        let container = $(".container"),
            sliderOneContainer = $(".slider-ctr .slider .slider-one");
            sliderTwoContainer = $(".slider-ctr .slider .slider-two");
        container.addClass("center slider-two-active").removeClass("full slider-one-active");
        $(".line-progress").css("width", "50%");
        sliderOneContainer.addClass("hidden");
        sliderTwoContainer.removeClass("hidden");
        e.preventDefault();
    });
        
    $(".second.next").on("click", function(e){
        let sliderTwoContainer = $(".slider-ctr .slider .slider-two");
            sliderThreeContainer = $(".slider-ctr .slider .slider-three");
            container = $(".container");
        container.addClass("full slider-three-active").removeClass("center slider-two-active slider-one-active");
        $(".line-progress").css("width", "100%");
        sliderTwoContainer.addClass("hidden");
        sliderThreeContainer.removeClass("hidden");

        // for review details
        $(".date").html(`<b>${startDate.val()}</b> ${startDate.val() && 'until'} <b>${endDate.val()}</b>`);
        $(".full-name").text(fullName.val());
        $(".position").text(position.val());
        $(".line-manager").text(lineManager.val());
        $(".reason").text(reason.val());
        // name = name.val();
        // if(name == "") {
        //     yourname.html("Anonymous!");
        // }
        // else { yourname.html(name+"!"); }
    
        e.preventDefault();
    });
    
    $(".second.previous").on("click", function(e){
        let container = $(".container"),
            sliderOneContainer = $(".slider-ctr .slider .slider-one");
            sliderTwoContainer = $(".slider-ctr .slider .slider-two");
    
        container.addClass("slider-one-active").removeClass("full center slider-two-active");
        $(".line-progress").css("width", "0%");
        sliderOneContainer.removeClass("hidden");
        sliderTwoContainer.addClass("hidden");
        e.preventDefault();
    });
    
    $(".third.previous").on("click", function(e){
        let container = $(".container"),
            sliderTwoContainer = $(".slider-ctr .slider .slider-two");
            sliderThreeContainer = $(".slider-ctr .slider .slider-three");
    
        container.addClass("center slider-two-active").removeClass("full slider-three-active");
        $(".line-progress").css("width", "50%");
        sliderTwoContainer.removeClass("hidden");
        sliderThreeContainer.addClass("hidden");
        e.preventDefault();
    });
});