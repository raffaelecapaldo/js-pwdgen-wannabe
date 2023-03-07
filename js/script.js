// VARIABLES

let firstname;
let surname;
let favouritecolor;
const currentyear = "23"

// GIVE INSTRUCTION TO THE USER 
alert("Compila i campi per generare la tua password personalizzata");

// ASK USER FOR HIS DATA

firstname = prompt("Qual è il tuo nome?");
surname = prompt("Qual è il tuo cognome?");
favouritecolor = prompt("Qual è il tuo colore preferito?");

// CHECK IF USER COMPLETED ALL THE INPUT AND IF HE DID NOT ENTER ANY NUMBERS 

// IF SO WRITE THE DATA IN generated-pwd
if (isNaN(firstname) && isNaN(surname) && isNaN(favouritecolor) && firstname && surname && favouritecolor) {
    document.getElementById("generated-pwd").innerHTML = firstname + surname + favouritecolor + currentyear;
}

// OTHERWISE SHOW AN ALERT AND RELOAD THE PAGE
else {
alert("Non hai completato uno dei 3 campi o hai inserito dei numeri, riprova!");
location.reload();
}

