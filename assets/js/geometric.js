var $ = function(id) {
  return document.getElementById(id);
} //$

var createShapes = function() {

  let html = '';
  let parallax = 2;

  for (var i = 1; i <= 50; i ++) {
    html += '<div class="shape-container--'+i+'"><div data-parallax="5" class="random-shape"></div></div>';
  }

  document.querySelector('.shape').innerHTML += html;

  var $allShapes = $("[class*='shape-container--']");
} //createShapes

var addParallaxEffect = function(event) {



  let speed = 25;

  document.querySelector('.random-shape').forEach((shape) => {
    const x = (window.innerWidth - event.pageX*speed);
    const y = (window.innerHeight - event.pageY*speed);

     shape.style.transform = `translateX(${x}px) translateY(${y}px)`;

  });
  //
  //
  //
  // });

}

window.onload = function() {
    createShapes();

    //add parallax listener to the landing area
    $('landing').addEventListener("mousemove",
      function(e) {

        let movementRange = 5; //could be random for each shape and also randomly negative or positive

        let mouseX = e.clientX / -5;
        let mouseY = e.clientY / 5;

        let shapes = document.querySelectorAll('.random-shape');
        shapes.forEach((shape) => {

          shape.style.transform = `translateX(${mouseX}px) translateY(${mouseY}px)`;

        });

    });
};

function parallaxize(e, target, movement) {

  var container = $('landing');
  var relX = e.pageY - container.offset().left;
  var relY = e.pageX - container.offset().top;

}
