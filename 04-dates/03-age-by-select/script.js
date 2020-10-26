/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

	document.getElementById("run").addEventListener("click",function() {

		let jour = document.getElementById("dob-day");
		let day = jour.options[jour.selectedIndex].value;

		let mois = document.getElementById("dob-month");
		let month = mois.options[mois.selectedIndex].value;

		let annee = document.getElementById("dob-year");
		let year = annee.options[annee.selectedIndex].value;


 		function getAge(date) { 
        var diff = Date.now() - date.getTime();
        var age = new Date(diff); 
        return Math.abs(age.getUTCFullYear() - 1970);
    }
    alert("Your age is " + getAge(new Date(year, month, day))); //Date(année, mois, jour)

 	})

})();
