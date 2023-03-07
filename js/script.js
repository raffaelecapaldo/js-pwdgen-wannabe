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

// WRITE DATA IN THE generated-pwd SPAN 

document.getElementById("generated-pwd").innerHTML = firstname + surname + favouritecolor + currentyear;