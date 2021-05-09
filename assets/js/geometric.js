/*
 * Make dollar sign symbol behave like jQuery.
 */
var $ = function(id) {
  return document.getElementById(id);
} //$

/*
 * Create and inserts random shape tags into document. Assigns parallax motion value.
 *
 * @param number of shapes to creates, must match with $shape-count value of CSS
 * else they will not be formatted.
 */
var createShapes = function(number) {

  let html = '';
  let parallax = 2;

  for (var i = 1; i <= 50; i ++) {
    html += '<div class="shape-container--'+i+'"><div data-parallax="5" class="random-shape"></div></div>';
  }

  document.querySelector('.shape').innerHTML += html;

  var $allShapes = $("[class*='shape-container--']");
} //createShapes

/*
 * Function for creating parallax effect EventListener on the geometric background
 * random shapes.
 *
 * @param e
 * @param target
 * @param movement
 */
function parallaxize(e, target, movement) {

  var container = $('landing');
  var relX = e.pageY - container.offset().left;
  var relY = e.pageX - container.offset().top;

} //parallaxize


/*
 * Load functions/variables/listeners when window loads.
 */
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
}; //window.onload
