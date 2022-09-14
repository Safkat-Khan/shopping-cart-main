// Increasing Value
document.getElementById('phnPlus').addEventListener('click',function(){
    const prv_Value = document.getElementById('phnInputNumber');
    const prv_Valueout = prv_Value.value;
    const the_Value = parseInt(prv_Valueout);
    const new_Value = the_Value + 1;
    prv_Value.value = new_Value;
})
// Discreasing Value
document.getElementById('phn-neg').addEventListener('click',function(){
    const onevalue = document.getElementById('phnInputNumber');
    const onevalueString = onevalue.value;
    const onevalueInt = parseInt(onevalueString);
    const newvalue = onevalueInt - 1;
    onevalue.value = newvalue;
})

//const onePhonePrice = document.getElementById('phn-price');

document.getElementById('casePlus').addEventListener('click',function(){
    const caseValue = document.getElementById('caseValue');
    const caseString = caseValue.value;
    const caseInt = parseInt(caseString);
    const upValue = caseInt + 1;
    caseValue.value = upValue;
})

document.getElementById('downCase').addEventListener('click',function(){
    const caseValueDown = document.getElementById('caseValue');
    const caseDownString = caseValueDown.value;
    const caseDownInt = parseInt(caseDownString);
    const downCase = caseDownInt - 1;
    caseValueDown.value = downCase;
})

    const phnPrice = document.getElementById('phn-price');
    const phnPriceString = phnPrice.value;
    const phnInt = parseInt(phnPriceString);
    const upPrice = phnInt + 1219;


console.log();