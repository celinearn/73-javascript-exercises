/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

	let d = new Date();
	let h = d.getHours() + "h" + d.getMinutes();
	let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

	// let date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
	// let hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

	document.getElementById("target").innerHTML =(d.toLocaleDateString('ENG', options) + "," + " " + h);

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

})();
