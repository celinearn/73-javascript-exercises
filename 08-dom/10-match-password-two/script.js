/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

document.getElementById("run").addEventListener("click",function() {
				password1 = document.getElementById("pass-one").value; 
                password2 = document.getElementById("pass-two").value;  
                      
                if (password1 != password2) { 
                    let passTwo = document.getElementById("pass-two");
                    passTwo.classList.add("error");
                    return false; 
                } 
  
                else{ 
                    return true; }
	});

})();
