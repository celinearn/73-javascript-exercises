/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// Ask the user if he wants some cake. 
// If yes, congratulate him/her; for any other response, say: More cake for me then :p !

(function() {
	let cake = window.prompt("Do you want some cake ");

    if (cake==="yes") {
    	alert("Congrats");
    }else if (cake==="Yes") {alert("Congrats");
}else {
		alert("More cake for me then");
		}

})();

