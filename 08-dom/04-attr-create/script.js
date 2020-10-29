/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// Get the value of the "data-image" attribute from the element with id "source". 
// Create a new image element inside the target element that displays the image referred 
// to by the attribute value. Then remove the original element.

(function() {

	// // let img = document.createElement("img");
 
	// // img.src = "image.png";
	// // let src = document.getElementById("source").value;
	 
	// // src.appendChild(img);

	// // //

 // //    document.getElementById('target').innerHTML = img;


 // let data = document.getElementsByTagName("span")[1].getAttribute("data-image").value;
 // let img = document.createElement(document.getElementsByTagName("span")[1].getAttribute("data-image").value);
 // img.src = "http://www.randomkittengenerator.com/cats/rotator.php";
 // let src = document.getElementsByTagName("span")[1].getAttribute("data-image").value;

 //  document.getElementById('target').innerHTML = img;


let source=document.querySelector("#source");
    let attribut=source.getAttribute("data-image");
    let newImg=document.createElement("img");
    newImg.setAttribute("src",attribut);
    source.appendChild(newImg);


})();
