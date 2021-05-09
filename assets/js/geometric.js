const DEBUG = false;



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

  //now decide custom parallax movement range for each shape to be stored in data-parallax attribute
  let parallaxBase = 10; //max amount of parallax
  let parallaxVariation = 5; //amount of variation in parallaxSpeed
  let oppositeChance = .2; //probability shape will flow against normal flow

  /* for each shape */
  for (var i = 1; i <= number; i ++) {
    let direction = Math.random() < oppositeChance ? -1 : 1;
    let parallaxSpeed = (Math.random(parallaxVariation) + parallaxBase) * direction;
    html += `<div class="shape-container--${i}"><div data-parallax="${parallaxSpeed}" class="random-shape"></div></div>`;
  } //for

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

  //run calculations to make the translation relative to difference from middle of screen
  let width = screen.width;
  let height = screen.height;

  let mouseX = e.clientX;
  let mouseY = e.clientY;

  let diffX = mouseX - (width / 2);
  let diffY = mouseY - (height / 2);

  let shapes = document.querySelectorAll('.random-shape');
  shapes.forEach((shape) => {

    let movement = shape.dataset.parallax;
    let relX = diffX / movement;
    let relY = diffY / movement;

    shape.style.transform = `translateX(${relX}px) translateY(${relY}px)`;
  });

} //parallaxize


/*
 * Load functions/variables/listeners when window loads.
 */
window.onload = function() {
    createShapes(50); //number must match that within style sheet

    //add parallax listener to the landing area
    $('landing').addEventListener("mousemove",
      function(e) {

        let mouseX = e.clientX;
        let mouseY = e.clientY;

        if (DEBUG) {
          $('console').innerHTML = `mouseX:${mouseX}, mouseY:${mouseY}`
        }

        let shapes = document.querySelectorAll('.random-shape');
        shapes.forEach((shape) => {

          let movement = shape.dataset.parallax;
          let relX = mouseX / movement;
          let relY = mouseY / movement;

          //shape.draggable();

          shape.style.transform = `translateX(${relX}px) translateY(${relY}px)`;
        });

    });
}; //window.onload
