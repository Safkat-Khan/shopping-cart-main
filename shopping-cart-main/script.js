function UpdatePhoneNumber(isIncrease){
        const prv_Value = document.getElementById('phnInputNumber');
        const prv_Valueout = prv_Value.value;
        const the_Value = parseInt(prv_Valueout);

        let newphnnumber;

        if(isIncrease === true){
            newphnnumber = the_Value + 1;
        }
        else{
            newphnnumber = the_Value - 1; 
        }
        prv_Value.value = newphnnumber;
    }

document.getElementById('phnPlus').addEventListener('click',function(){
    UpdatePhoneNumber(true);
})

document.getElementById('phn-neg').addEventListener('click',function(){
    UpdatePhoneNumber(false);
})

//const onePhonePrice = document.getElementById('phn-price');

function CaseValue(IsIncrease){
    const caseValue = document.getElementById('caseValue');
    const caseString = caseValue.value;
    const caseInt = parseInt(caseString);

    let newCaseNumber ;

    if(IsIncrease === true){
        newCaseNumber = caseInt + 1;
    }
    else{
        newCaseNumber = caseInt - 1;
    }
    caseValue.value = newCaseNumber;

    return newCaseNumber
}
    document.getElementById('casePlus').addEventListener('click',function(){
       const newCaseNumber =  CaseValue( true);

       const caseTotalPrice = newCaseNumber * 59;
       const caseTotslElement = document.getElementById('caseTotal');
       caseTotslElement.innerText = caseTotalPrice

    })

    document.getElementById('downCase').addEventListener('click',function(){
    
        const caseTotalPrice = newCaseNumber * 59;
        const caseTotslElement = document.getElementById('caseTotal');
        caseTotslElement.innerText = caseTotalPrice
    })







         console.log();
