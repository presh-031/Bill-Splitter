'use strict';
const possibleTips = document.querySelectorAll('.tips-percentage');
const customTipInput = document.querySelector('.custom');
const numOfPeopleInput = document.querySelector('#num-of-people');
const billInput = document.querySelector('#bill');
const tipsPercentageBtns = document.querySelectorAll('.tips-percentage');

function getBillValue() {
  const bill = billInput.value;
  return +bill;
}

function getNumOfPeople() {
  const numOfPeople = numOfPeopleInput.value;
  return +numOfPeople;
}

function getCustomTipPercentage() {
  const customTipPercentage = customTipInput.value;
  return +customTipPercentage;
}

function callCalculateWithCustomTip() {
  calculate(getBillValue(), getNumOfPeople(), getCustomTipPercentage());
}

function calculate(bill, numOfPeople, tip) {
  let tipPerPerson = document.querySelector('.tip-per-person');
  let totalPerPerson = document.querySelector('.total-per-person');
  if (bill && numOfPeople && tip) {
    tipPerPerson.innerHTML = (((tip / 100) * bill) / numOfPeople).toFixed(2);
    totalPerPerson.innerHTML = (
      ((tip / 100) * bill + bill) /
      numOfPeople
    ).toFixed(2);
  }
}

// Tips percentage buttons
function callCalculateWithFixedTip(fixedTipPercentage) {
  calculate(getBillValue(), getNumOfPeople(), fixedTipPercentage);
}

///////// Event Listeners
// bill-input
billInput.addEventListener('input', () => {
  callCalculateWithCustomTip();
  callCalculateWithFixedTip();
});
// Tips percentage btns
// Get fixed tip percentage
tipsPercentageBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    callCalculateWithFixedTip(btn.innerHTML.slice(0, -1));

    if (btn.click) {
      console.log(btn.innerHTML);
      // btn.style.backgroundColor = 'red';
    } else {
      console.log(`${btn}`);
      // btn.style.backgroundColor = 'blue';
    }
  });
});
// customtip-input
customTipInput.addEventListener('input', () => {
  callCalculateWithCustomTip();
});
//  numofpeople sharing-input
numOfPeopleInput.addEventListener('input', () => {
  callCalculateWithCustomTip();
  callCalculateWithFixedTip();
});
