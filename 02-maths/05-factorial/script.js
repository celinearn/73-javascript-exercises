/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


// When you click the button, get the number in the input, and show its factorial.

let number;
let f;
(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {
    	number=document.getElementById("number").value;
    	f=1;
    	for(let i=1;i<=number;i++){
    		f=f*i;
    	}
    	alert(f);
    });
 
})();