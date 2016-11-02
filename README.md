Website Performance Optimization portfolio project

My project can viewed at http://archis99.github.io/web-opt/



Shortening the CRP for index.html

a. added async attribute to the google analytics script & made it inline
b. added async attribute to perfmatters.js script
c. added media="print" to the css/print link 
d. minified and inlined the styles from style.css file
e. removed the google font link
f. minified the index.html

Improvement of frame rate & computational efficiency of pizza.html through views/js/main.js

a. applied requestAnimationFrame implementation found at Paul Lewis's article://https://www.html5rocks.com/en/tutorials/speed/animations/
b. for-loop in updatePositions() is optimized
c. changed the items[i].style.left to transform and transalte to improve FPS: http://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/
d. relocated the items variable before calling updatePositions()
e. elem & movingPizzas variables are declared outside for-loop
f. for slider Optimization, pizzaSize and pizzaLength variables are declared outside of the for loop
g. changePizzaSizes() is defined with case-statement and for-loop is optimized

GRUNT

a. set up grunt task to uglify the perfmatters.js file in js/ and saved as a new file called js/minified-js/perfmatters.min.js
b. linked the uglified perfmatters.min.js file to the index.html
c. set up grunt task to cssmin the print.css file in css/ and saved as a new file called css/minified-css/print.min.css
d. linked the minified print.min.css file to the index.html
e. set up grunt task to apply responsive_image to Archisman.jpg, frogger.png, kittens.jpg, panda.jpg files in img/ and saved as new files in img/minified-img/
f. linked the 4 images to the index.html
g. set up grunt task to htmlmin the index.html file in src/ and saved as a new file called /index.html in the primary folder

