$(document).ready(function () { //initialize
    console.log("Ready!");

    $('.navbar-collapse a').click(function () { //COLLAPSE OR EXPAND THE NAVBAR
        $(".navbar-collapse").collapse('hide');
    });

    /* WOW.js init */ //MDB FEATURE FOR FADES
    new WOW().init();

var scene2 = document.getElementById('quote'); // CREATES PARALLAX EFFECT FOR QUOTE
var parallaxInstance = new Parallax(scene2);


}); // DO NOT TOUCH. END.



    //FEATURES FOR LATER//ICEBOX
    //FEATURES FOR LATER//ICEBOX
    //FEATURES FOR LATER//ICEBOX
    //FEATURES FOR LATER//ICEBOX
    //FEATURES FOR LATER//ICEBOX
    /**********************PAUSE BUTTON *************************/
    /*
        //var pauseButton = document.querySelector("#polina button");
        var pauseButton = $("#pauseButton");
    
        if (window.matchMedia('(prefers-reduced-motion)').matches) {
            $("#bgvid").removeAttribute("autoplay");
            $("#bgvid").pause();
            pauseButton.innerHTML = "Paused";
        }
    
        function vidFade() {
            $("#bgvid").classList.add("stopfade");
        }
    
        $("#bgvid").on('ended', function () {
            // only functional if "loop" is removed 
            $("#bgvid").pause();
            // to capture IE10
            vidFade();
        });
    
    
        pauseButton.on("click", function () {
            $("#bgvid").toggleClass("stopfade");
            if ($("#bgvid").paused) {
                $("#bgvid").play();
                pauseButton.innerHTML = "Pause";
            } else {
                $("#bgvid").pause();
                pauseButton.innerHTML = "Paused";
            }
        })
    
    
    
    $('#home').click(function() {
        console.log("clicked");
        this.paused ? this.get(0).play() : this.get(0).pause();
    });
    
    
   $("video").trigger('play');

    $(".playing").click(function playVid() {
        $("video").trigger('pause');
        $( "div" ).removeClass( "playing" ).addClass( "paused" );
    });

    $(".paused").click(function playVid() {
        $("video").trigger('play');
        $( "div" ).removeClass( "paused" ).addClass( "playing" );
    });

    $("video").trigger('play');
 
*/
//var scene1 = document.getElementById('home');
//var parallaxInstance = new Parallax(scene1);

    //PREMIUM FEATURE; FOR LATER
    // initialize lightbox
    //$(function () {
    //   $("#mdb-lightbox-ui").load("../mdb-addons/mdb-lightbox-ui.html");
    //}); 
    
    
    
    // initialize scrollspy
    //$('body').scrollspy({
      //  target: '.dotted-scrollspy'
    //});