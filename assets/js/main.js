
//chiedo nome
var nome = prompt ("Come ti chiami?");

//stampo nome
document.getElementById('saluto') .innerHTML = "Ciao " + nome;

//chiedo cognome
var cognome = prompt ("Qual è il tuo cognome?");

//stampo cognome
document.getElementById('cognome') .innerHTML = "Il tuo cognome è " + cognome;

//chiedo il colore preferito
var colore = prompt ("il tuo colore preferito?");

document.getElementById('colore') .innerHTML = "Il tuo colore preferito è " + colore;

var password = nome + cognome + colore + "21";

//calcolo password
document.getElementById('password') .innerHTML = "Ecco la tua sicurissima password: " + password;