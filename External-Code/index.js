$("button").slideUp(800).slideDown()
setInterval(() => {
    $("button").addClass("green-bg");
}, 1000);
setInterval(() => {
    $("button").removeClass("green-bg");
}, 2000);
setInterval(() => {
    $("button").addClass("blue-bg");
}, 2300);
setInterval(() => {
    $("button").removeClass("blue-bg");
}, 3000);
setInterval(() => {
    $("button").addClass("red-bg");
}, 1030);
setInterval(() => {
    $("button").removeClass("red-bg");
},1800);
setInterval(() => {
    $("button").addClass("yellow-bg");
}, 3200);
setInterval(() => {
    $("button").removeClass("yellow-bg");
}, 4000);


$(window).keydown(function () {

    // Checks Which Key Was Pressed
    var keyPressed = event.key;

    console.log(keyPressed + " was pressed on the keyboard.");

    // Button Animation
    switch (keyPressed) {
        
        case "1":

            $(".1").addClass("pressed-button");
            setInterval(() => {
                $(".1").removeClass("pressed-button")
            }, 600);
            $(".1").slideUp(100).slideDown(100);
           

              
            break;

        case "2":

            $(".2").addClass("pressed-button");
            setInterval(() => {
                $(".2").removeClass("pressed-button")
            }, 600);
            $(".2").slideUp(100).slideDown(100);
          

            break;

        case "3":

            $(".3").addClass("pressed-button");
            setInterval(() => {
                $(".3").removeClass("pressed-button")
            }, 600);
            $(".3").slideUp(100).slideDown(100);

            break;

        case "4":

            $(".4").addClass("pressed-button");
            setInterval(() => {
                $(".4").removeClass("pressed-button")
            }, 600);
            $(".4").slideUp(100).slideDown(100);


            break;

        case "5":

            $(".5").addClass("pressed-button");
            setInterval(() => {
                $(".5").removeClass("pressed-button")
            }, 600);
            $(".5").slideUp(100).slideDown(100);

            break;

        case "6":

            $(".6").addClass("pressed-button");
            setInterval(() => {
                $(".6").removeClass("pressed-button")
            }, 600);
            $(".6").slideUp(100).slideDown(100);


            break;

        case "7":

            $(".7").addClass("pressed-button");
            setInterval(() => {
                $(".7").removeClass("pressed-button")
            }, 600);
            $(".7").slideUp(100).slideDown(100);


            break;

        case "8":

            $(".8").addClass("pressed-button");
            setInterval(() => {
                $(".8").removeClass("pressed-button")
            }, 600);
            $(".8").slideUp(100).slideDown(100);


            break;

        case "9":

            $(".9").addClass("pressed-button");
            setInterval(() => {
                $(".9").removeClass("pressed-button")
            }, 600);
            $(".9").slideUp(100).slideDown(100);

            break;

        case "0":

            $(".0").addClass("pressed-button");
            setInterval(() => {
                $(".0").removeClass("pressed-button")
            }, 600);4
            $(".0").slideUp(100).slideDown(100);
            break;

        default:

            console.log("Error!");

            break;
    }

});
