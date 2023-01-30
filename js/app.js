// 0. Definisci la variabile della password
const titleElement = document.getElementById('password');

//primo metodo

// 1. Definisci le variabili delle informazioni richieste
// let nome
// let cognome
// let colore
// let numero
// 2. Chiedi all'utente il suo nome
// nome = prompt ("Digita il tuo nome?");
// console.log("la variabile nome è =", nome)
// 3. Chiedi all'utente il suo cognome
// cognome = prompt ("Digita il tuo cognome");
// console.log("la variabile cognome è =", cognome)
// 4. Chiedi all'utente il suo colore preferito
// colore = prompt ("Digita il tuo colore preferito");
// console.log("la variabile colore è =", colore)
// 5. Chiedi all'utente un numero 
// numero = prompt ("Digita un numero");
// console.log("la variabile numero è =", numero)

//secondo metodo

// 2. Chiedi all'utente il suo nome
const nome = prompt ("Digita il tuo nome?");
console.log("la variabile nome è =", nome)
// 3. Chiedi all'utente il suo cognome
const cognome = prompt ("Digita il tuo cognome");
console.log("la variabile cognome è =", cognome)
// 4. Chiedi all'utente il suo colore preferito
const colore = prompt ("Digita il tuo colore preferito");
console.log("la variabile colore è =", colore)
// 5. Chiedi all'utente un numero 
const numero = prompt ("Digita un numero");
console.log("la variabile numero è =", numero)


// 6. Genera password
password.innerHTML = nome + cognome + colore + numero
