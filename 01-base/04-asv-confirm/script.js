/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// Ask three questions to the user: his/her Age, Gender, and the Town where he/she lives. 
// Display the collected responses in a dialog box and ask to confirm. 
// If not confirmed, re-run the process.
let confirmation;

function question() {

    let age = prompt("What is your age? ");
    let gender = prompt("What is your gender? ");
    let live = prompt("Where do you live? ");

    alert(age+ " " + gender + " " + live);
    confirmation = confirm("please confirm");
}

question();

if (confirmation == false) {
	question();
}
