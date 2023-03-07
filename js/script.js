// VARIABLES

let firstName;
let surname;
let favouriteColor;
const currentYear = "23"

// GIVE INSTRUCTION TO THE USER 
alert("Compila i campi per generare la tua password personalizzata");

// ASK USER FOR HIS DATA

firstName = prompt("Qual è il tuo nome?");
surname = prompt("Qual è il tuo cognome?");
favouriteColor = prompt("Qual è il tuo colore preferito?");

// CHECK IF USER COMPLETED ALL THE INPUT AND IF HE DID NOT ENTER ANY NUMBERS 

// IF SO WRITE THE DATA IN generated-pwd
if (isNaN(firstName) && isNaN(surname) && isNaN(favouriteColor) && firstName && surname && favouriteColor) {
    document.getElementById("generated-pwd").innerHTML = firstName + surname + favouriteColor + currentYear;
}

// OTHERWISE SHOW AN ALERT AND RELOAD THE PAGE
else {
    alert("Non hai completato uno dei 3 campi o hai inserito dei numeri, riprova!");
    location.reload();
}

