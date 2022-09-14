'use strict';
const possibleTips = document.querySelectorAll('.tips-percentage');
const customTipInput = document.querySelector('.custom');
const numOfPeopleInput = document.querySelector('#num-of-people');
const billInput = document.querySelector('#bill');
const tipsPercentageBtns = document.querySelectorAll('.tips-percentage');

let fixedTip;

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
  } // else {
  //   tipPerPerson.innerHTML = '00.00';
  //   totalPerPerson.innerHTML = '00.00';
  // }
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
// //Tips percentage btns
// Get fixed tip percentage
// let btnClicked;
// tipsPercentageBtns.forEach(btn => {
//   btn.addEventListener('mousedown', () => {
//     btnClicked = btn.innerHTML.slice(0, -1);
//     callCalculateWithFixedTip(btnClicked);

//     // one-liner solving the 'pressing on button at a time styles' issue.
//     tipsPercentageBtns.forEach(btn => btn.classList.remove('active'));
//     btn.classList.add('active');
//   });
// });
// let btns = [];
// for (let i = 0; i < tipsPercentageBtns.length; i++) {
//   tipsPercentageBtns[i].addEventListener('click', () => {
//     customTipInput.value = '';
//     // console.log(tipsPercentageBtns[i].innerHTML.slice(0, -1));
//     btns.push(tipsPercentageBtns[i].innerHTML.slice(0, -1));
//     // console.log(btns[btns.length - 1]);
//     called();
//   });
// }

tipsPercentageBtns.forEach(btn => {
  btn.addEventListener('click', handleClick);
});

function handleClick(event) {
  tipsPercentageBtns.forEach(btn => {
    btn.classList.remove('active');
    if (event.target.innerHTML === btn.innerHTML) {
      btn.classList.add('active');
      fixedTip = parseFloat(btn.innerHTML);
      // console.log(buttonVal)
      // making the innerHTML of a button to be a string,
      // then divide by 100 to make a percent because parsefloat cannot read % in integer.
      console.log(fixedTip);
    }
  });
  customTipInput.value = '';
  callCalculateWithFixedTip(fixedTip);
}

// customtip-input
customTipInput.addEventListener('input', () => {
  callCalculateWithCustomTip();
});
//  numofpeople sharing-input
numOfPeopleInput.addEventListener('input', () => {
  callCalculateWithCustomTip();
  callCalculateWithFixedTip();
});

// let trial = 0;

// function setTrial() {
//   trial = 1;
// }
// setTrial();
// console.log(trial);
