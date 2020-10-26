/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

	let mois = new Array("Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre");

    document.getElementById("run").addEventListener("click", function() {

        let annee = new Date(document.getElementById("year").value); 
        let treize;

        for (let i = 0; i < 12; i++) { 

            annee.setMonth(i, 13);

            if (annee.getDay() == 5) {
                treize = mois[i];
                alert(`Il y a un vendredi 13 en ${treize}`);
            }
        }

    })

})();
