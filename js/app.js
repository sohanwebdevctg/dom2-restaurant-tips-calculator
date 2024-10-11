// get person
const person = document.getElementById('person');

// person value
let personValue = 1;

//increment function
const incBtn = () => {

    if(personValue < 15){
      personValue += 1;
      person.innerHTML = personValue;
    }
    else{
      alert('only for 15 person')
    }

}

//decrement function
const decBtn = () => {

  if(1 < personValue){
    personValue -= 1;
    person.innerHTML = personValue;
  }
  else{
    alert('only for 1 person')
  }

}



// get calculated function
const calculateBtn = () => {

  // totalBillData
  let totalBillData = document.getElementById('totalBillData').value;
  let totalBillValue = Number(totalBillData);
  // tipsData
  let tipsData = document.getElementById('tipsData').value;
  let tipsValue = Number(tipsData);

  // totalBill
  let totalBill = document.getElementById('totalBill');

  // tips
  let tips = document.getElementById('tips');
  let tipsPercent = (totalBillValue * tipsValue) / 100;

  // tax
  let tax = document.getElementById('tax');
  let taxPercent = (totalBillValue + 5) / 100;

  // total amount
  let total = document.getElementById('total');
  let totalValue = (totalBillValue + tipsPercent + taxPercent) / personValue;

  if(totalBillData !== "" && tipsValue !== ""){

    // all calculate data
    totalBill.innerText = parseInt(totalBillValue);
    tips.innerText = parseInt(tipsPercent);
    tax.innerText = parseInt(taxPercent);
    total.innerText = parseInt(totalValue);

    totalBillData.value = "";
    tipsData.value = "";

  }else{
    alert('please enter amount and tips')
  }

  
}