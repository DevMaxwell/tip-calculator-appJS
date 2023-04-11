const bill = document.querySelector('.bill')
const people = document.querySelector('.person')
const custom = document.querySelector('.customInput')
const cust1 = document.querySelector('.cust1')
const cust2 = document.querySelector('.cust2')
const cust3 = document.querySelector('.cust3')
const cust4 = document.querySelector('.cust4')
const cust5 = document.querySelector('.cust5')
const reset = document.querySelector('.reset')
const splitTip = document.querySelector('.splitTip')
const splitAmt = document.querySelector('.splitAmt')

let realTip = 0
let realTipShare = 0
let realAmountShare = 0
let billValue = 0
let persons = 0
people.value = 0
bill.value = 0

bill.addEventListener('change', (e)=>{
    console.log('bill change!')
    billValue = parseFloat(bill.value);
    console.log(billValue)
    setTipAmount()
    setTotalAmount()
})
people.addEventListener('change', (e)=>{
    console.log('people change!')
    persons = parseFloat(people.value);
    console.log(persons)
    setTipAmount()
    setTotalAmount()
})
custom.addEventListener('change', (e)=> {
    const customTip = parseFloat(custom.value)
    console.log('customy')
    console.log(customTip)
    getTip(customTip)
})
cust1.addEventListener('click', (e)=>{
    console.log('we got here')
    getTip(cust1.value);
})
cust2.addEventListener('click', (e)=>{
    console.log('we got here')
    getTip(cust2.value);
})
cust3.addEventListener('click', (e)=>{
    console.log('we got here')
    getTip(cust3.value);
})
cust4.addEventListener('click', (e)=>{
    console.log('we got here')
    getTip(cust4.value);
})
cust5.addEventListener('click', (e)=>{
    console.log('we got here')
    getTip(cust5.value);
})

function getTip(tip){
    console.log('we got here too')
    realTip = parseFloat(tip);
    console.log('real tip is ' + realTip)
    setTipAmount()
    setTotalAmount()
    return parseFloat(tip)
};

function setTipAmount(){
    console.log('tipsy!')
    //const tipPerPerson = billValue + (billValue * (realTip/100))
    const tipTotal = billValue * (realTip/100)
    realTipShare = Math.trunc((tipTotal / persons)*100)/100
    // if (Number.isInfinite(realTipShare) || isNaN(realTipShare)){
    //     splitTip.innerHTML = '$0.00'
    // }
    splitTip.innerHTML = '$' + realTipShare.toFixed(2)
    console.log('tip per person is ' + realTipShare)
}

function setTotalAmount(){
    const totalAmount = billValue + (billValue * (realTip/100))
    realAmountShare = totalAmount / persons
    // if (Number.isInfinite(realAmountShare)){
    //     splitAmt.innerHTML = '$0.00'
    // }
    splitAmt.innerHTML = '$' + realAmountShare.toFixed(2)
}
reset.addEventListener('click', (e)=>{
    console.log('reset button clicked')
    splitTip.innerHTML = '$0.00'
    splitAmt.innerHTML = '$0.00'
})