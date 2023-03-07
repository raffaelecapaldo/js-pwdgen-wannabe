// non abbiamo ancora spiegato le funzioni
// VARIABLES
let firstName;
let surname;
let favouriteColor;
let password;
const currentYear = "23"
// GIVE INSTRUCTION TO THE USER 
alert("Compila i campi per generare la tua password personalizzata");
// CHECK STEP-BY-STEP IF USER COMPLETED ALL THE INPUT AND IF HE DID NOT ENTER ANY NUMBERS 
// ASK INPUT
firstName = prompt("Qual è il tuo nome?");
// CHECK INPUT
if (isNaN(firstName) && firstName) {
    // ASK INPUT
    surname = prompt("Qual è il tuo cognome?");
    // CHECK INPUT
    if (isNaN(surname) && surname) {
        //ASK INPUT
        favouriteColor = prompt("Qual è il tuo colore preferito?");
        //CHECK INPUT
        if (isNaN(favouriteColor && favouriteColor)) {
            //ALL CHECK PASSED, SET VARIABLE WITH ALL THE INFO
            password = firstName + surname + favouriteColor + currentYear;
            //REMOVE ALL THE SPACES FROM THE VARIABLE (passwords have no spaces)
            password = password.replace(/ /g, '');
            //WRITE VARIABLE IN HTML
            document.getElementById("generated-pwd").innerHTML = password;
        }
        else {
            //CHECK FAILED
            alert("Non hai inserito nulla, oppure hai inserito un numero.");
            location.reload();
        }
    }
    else {
        //CHECK FAILED
        alert("Non hai inserito nulla, oppure hai inserito un numero.");
        location.reload();
    }
}
else {
    //CHECK FAILED
    alert("Non hai inserito nulla, oppure hai inserito un numero.");
    location.reload();
}