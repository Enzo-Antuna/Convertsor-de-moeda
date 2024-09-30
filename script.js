let usdinput = document.querySelector("#usd")
let brlinput = document.querySelector("#brl")
let dolar = 5.4



usdinput.addEventListener("keyup", () =>{
    
    convert("usd-brl")
    
}
)
brlinput.addEventListener("keyup", () =>{
   
    
    convert("brl-usd")
}
)

usdinput.value = "1000,00"
convert("usd-brl")




function formatar(value){
    let fixedvalue = fixvalue(value)
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    let formatado = new Intl.NumberFormat("pt-BR", options)
    return formatado.format(fixedvalue)

}

function fixvalue(value){
    let fixedvalue = value.replace(",",".")
    let floatvalue = parseFloat(fixedvalue)
    if (isNaN(floatvalue)){
        floatvalue = 0;
    }
    
    
    return floatvalue
}

function convert(type){
if(type=="usd-brl"){
    let fixedvalue = fixvalue(usdinput.value)
    let conversao = fixedvalue * dolar
    conversao = conversao.toFixed(2)
     brlinput.value = formatar(conversao)
}
if(type=="brl-usd"){
    let fixedvalue = fixvalue(brlinput.value)
    let conversao = fixedvalue/dolar
    conversao = conversao.toFixed(2)
   usdinput.value = formatar(conversao)
} }