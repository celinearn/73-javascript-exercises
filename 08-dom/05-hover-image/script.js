/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// When hovering over the image, 
// change its source attribute to the value specified in the "data-hover" attribute.

(function() {

	document.images[0].addEventListener("mouseover", function() {

		let b = document.querySelector("img"); 
		b.setAttribute("src", "data-hover");

	});

})();
