const binElement = document.querySelector("#inputNumberBoxBin")
const decElement = document.querySelector("#inputNumberBoxDec") 


const Convert = () => {
    if(binElement.value !== ''){
        decElement.value = returnDec(binElement.value)
    }else if (decElement.value !== '' && binElement.value === ''){
        binElement.value = returnBin(decElement.value)
    }else{
        alert("TYPE SOMETHING!")
    }
}

const returnDec = bin => {
    let binArray = bin.split("")
    let sizeBinArray = binArray.length - 1
    let dec = 0
    for (let i in binArray){
    let binInt = parseInt(binArray[i])
    dec += binInt * Math.pow(2, sizeBinArray)
    sizeBinArray--
    } return dec 
}  

const returnBin = decInput => {
    let dec = parseInt(decInput) 
    let bin = ""
    while(Math.round(dec/2) != 0){
        bin += dec%2
        dec = Math.floor(dec/2)
    }
    let binReverse = String(bin).split("").reverse()
    let res = ""
    for (const i in binReverse) {
        res += binReverse[i]
    } return res
}