// function black(){
//         if(document.querySelector("#body").style.backgroundColor == ""){
//             document.querySelector("#body").style.backgroundColor = "pink"
//         }else if(document.querySelector("#body").style.backgroundColor == "pink"){
//             document.querySelector("#body").style.backgroundColor = ""
//         }
// }

let valorCookie = 1
let cookieUp = 1
const bablo_up = document.querySelector(".babloC")
const gatoFoda_up = document.querySelector(".gatoFodaC")
const rafafa_up = document.querySelector(".rafafaC")
const final_up = document.querySelector("#final")
const contador = document.querySelector("#contador")
const cpc = document.querySelector("#cpc")
let preco_bablo = 50
let preco_gato = 100
let preco_rafa = 150
let quantBablo = 0
let quantGato = 0
let quantRafa = 0
let finalVal = false

function cookiePlus(){
    document.querySelector("#contador").innerHTML = valorCookie
    valorCookie = valorCookie + cookieUp
}

function bablo(){
    if(quantBablo < 10 && valorCookie > 50){
        bablo_up.innerHTML += `<img class="bablo" src="./IMG's/bablo.jpeg" alt="">`
    }
    if(valorCookie >= 50 && quantBablo < 10){
        valorCookie = valorCookie - preco_bablo
        document.querySelector("#contador").innerHTML = valorCookie
        quantBablo++
        cookieUp += 5
        preco_bablo += 10
        cpc.innerHTML = cookieUp
    }
    document.querySelector(".precoBablo").innerHTML = preco_bablo
}

function gatoFoda(){
    if(quantGato < 10 && valorCookie > 100){
        gatoFoda_up.innerHTML += `<img class="bablo" src="./IMG's/gatoFoda.jpeg" alt="">`
    }
    if(valorCookie >= 100 && quantGato < 10){
        valorCookie = valorCookie - preco_gato
        document.querySelector("#contador").innerHTML = valorCookie
        quantGato++
        cookieUp += 10
        preco_gato += 10
        cpc.innerHTML = cookieUp
    }else if(quantGato >= 10){
        return 0
    }
    document.querySelector(".precoGato").innerHTML = preco_gato
}

function rafafa(){
    if(quantRafa < 10 && valorCookie > 150){
        rafafa_up.innerHTML += `<img class="bablo" src="./IMG's/rafafa.jpeg" alt="">`
    }
    if(valorCookie >= 150 && quantRafa < 10){
        valorCookie = valorCookie - preco_rafa
        document.querySelector("#contador").innerHTML = valorCookie
        quantRafa++
        cookieUp += 15
        preco_rafa += 10
        cpc.innerHTML = cookieUp
    }else if(quantRafa >= 10){
        return 0
    }
    document.querySelector(".precoRafafa").innerHTML = preco_rafa
}

function final(){
    if(finalVal == false && valorCookie >= 10000){
        final_up.innerHTML += `<img id="lucas" src="./IMG's/Lucas.jpeg" alt="">`
        finalVal = true
    }
}