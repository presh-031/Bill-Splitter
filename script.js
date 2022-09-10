'use strict';

const possibleTips = document.querySelectorAll('.tips-percentage');
const customTipInput = document.querySelector('.custom');
const numOfPeopleInput = document.querySelector('#num-of-people');
const billInput = document.querySelector('#bill');

// const values = {
//   billNum: 0,
//   numOfPeopleNum: 0,
// };

// billInput.addEventListener('input', getBillValue);
function getBillValue() {
  const bill = billInput.value;
  // console.log(bill);
  // values.billNum = bill;
  // console.log(values);
  // console.log(bill);
  return bill;
}

// numOfPeopleInput.addEventListener('input', getNumofPeople);
function getNumOfPeople() {
  const numOfPeople = numOfPeopleInput.value;
  // values.numOfPeopleNum = numOfPeople;

  // console.log(values);
  return numOfPeople;
}

function getCustomTipPercentage() {
  const customTipPercentage = customTipInput.value;
  return customTipPercentage;
}

function calculate(bill, numOfPeople, customTip) {
  let tipPerPerson = document.querySelector('.tip-per-person');
  let totalPerPerson = document.querySelector('.total-per-person');
  if (bill && numOfPeople && customTip) {
    console.log(bill);
    console.log(numOfPeople);
    console.log(customTip);

    tipPerPerson.innerHTML = ((customTip / 100) * bill) / numOfPeople;
    totalPerPerson.innerHTML = ((customTip / 100) * bill + +bill) / numOfPeople;
  }
}
function callCalculate() {
  calculate(getBillValue(), getNumOfPeople(), getCustomTipPercentage());
}
