//Esercizio 1

/*function checkSomma (num1, num2) {

    console.log(num1 + num2)

    if(num1 === 50 || num2 === 50) {
        console.log(true) 
    } 
    if (num1 + num2 === 50) {
        console.log(true) 
    }
}

checkSomma(50, 24)*/


//Esercizio 2

/*function stringaModificata (stringa, posizione) {
    let splitatta = stringa.split('')

    splitatta.splice(posizione,1)

    let risultato = splitatta.join('')

    console.log(risultato)

}

stringaModificata('Esercizio', 2)*/


//Esercizio 3

/*function checkNumeri(n1, n2) {

    if((n1 >= 40 && n1 <= 60 || n1 >= 70 && n1 <= 100) && (n2 >= 40 && n2 <= 60 || n2 >= 70 && n2 <= 100)) {
        return true 
    } else {
        return false
    }

}


console.log(checkNumeri(90, 45)); 
console.log(checkNumeri(20, 75));*/


//Esercizio 4 

/*function nomeCitta (citta) {

    if(citta.includes('New') || citta.includes('Los')) {
        return citta
    } else {
        return false
    }

}

console.log(nomeCitta('Alabama'))
console.log(nomeCitta('NewYork'))*/


//Esercizio 5 

/*let numeri =[1,2,3,4,5,6]

let somma = 0

function sommaArray (sommaNumeri) {
    sommaNumeri.forEach(element => {
        somma = element + somma
    });
    return somma
}


console.log(sommaArray(numeri))*/


//Esercizio 6

/*let numeri =[98,2,10,1,5,6]

function checkArray () {

    for(let i = 0; i < numeri.length; i++) {
        if(numeri.includes(1) || numeri.includes(3)) {
            return true
        } else {
            return false
        }
    }
}

console.log(checkArray())*/


//Esercizio 7

/*function angoli (angolo) {

    if(angolo < 90) {
        return 'Acuto'
    } else if (angolo > 90 && angolo < 180) {
        return 'Ottuso'
    } else if (angolo === 90) {
        return 'Retto'
    } else if (angolo === 180) {
        return 'Piatto'
    }

}

console.log(angoli(12))*/


//Esercizio 8

/*function acronimo (frase) {

    let acronimoFinale = ''

    let splitatta = frase.split(' ')

    splitatta.forEach(element => { 
        acronimoFinale += element[0]
    });

    return acronimoFinale
}

console.log(acronimo('Fabrica Italiana Automobili Torino'))*/









