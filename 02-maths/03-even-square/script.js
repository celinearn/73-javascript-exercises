/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// On click on the button, calculate and display the square numbers between 1 and 21.



(function() {

    document.getElementById("run").addEventListener("click", function() {

        for(let i = 2; i <= 21; i += 2){ 
        	let carré = Math.pow(i, 2);
			alert(carré);
			} 

    });

})();
