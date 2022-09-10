'use strict';

const possibleTips = document.querySelectorAll('.tips-percentage');
const customTipInput = document.querySelector('.custom');
const numOfPeopleInput = document.querySelector('#num-of-people');
const billInput = document.querySelector('#bill');
const tipsPercentageBtns = document.querySelectorAll('.tips-percentage');
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
  return +bill;
}

// numOfPeopleInput.addEventListener('input', getNumofPeople);
function getNumOfPeople() {
  const numOfPeople = numOfPeopleInput.value;
  // values.numOfPeopleNum = numOfPeople;

  // console.log(values);
  return +numOfPeople;
}

function getCustomTipPercentage() {
  const customTipPercentage = customTipInput.value;
  return +customTipPercentage;
}

function calculate(bill, numOfPeople, customTip) {
  let tipPerPerson = document.querySelector('.tip-per-person');
  let totalPerPerson = document.querySelector('.total-per-person');
  if (bill && numOfPeople && customTip) {
    console.log(bill);
    console.log(numOfPeople);
    console.log(customTip);

    tipPerPerson.innerHTML = (((customTip / 100) * bill) / numOfPeople).toFixed(
      2
    );
    totalPerPerson.innerHTML = (
      ((customTip / 100) * bill + bill) /
      numOfPeople
    ).toFixed(2);
  } else {
    console.log('ugh');
  }
}
function callCalculateWithCustom() {
  calculate(getBillValue(), getNumOfPeople(), getCustomTipPercentage());
}

// Tips percentage buttons

function callCalculateWithFixed(fixedTipPercentage) {
  calculate(getBillValue(), getNumOfPeople(), fixedTipPercentage);
}

///////// Event Listeners
// Tips percentage btns
tipsPercentageBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    callCalculateWithFixed(btn.innerHTML.slice(0, -1));
  });
});
// bill-input
billInput.addEventListener('input', () => {
  callCalculateWithCustom(), callCalculateWithFixed();
});
// customtip-input
customTipInput.addEventListener('input', () => {
  callCalculateWithCustom();
});
//  num-of-people sharing-input
numOfPeopleInput.addEventListener('input', () => {
  callCalculateWithCustom();
  callCalculateWithFixed();
});
