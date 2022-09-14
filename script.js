'use strict';
const possibleTips = document.querySelectorAll('.tips-percentage');
const customTipInput = document.querySelector('.custom');
const numOfPeopleInput = document.querySelector('#num-of-people');
const billInput = document.querySelector('#bill');
const tipsPercentageBtns = document.querySelectorAll('.tips-percentage');

let bill = 0;
let people = 0;
let customTip = '';
let fixedTip = '';

billInput.addEventListener('input', getBillValue);
function getBillValue() {
  bill = billInput.value;

  calculate();
}

numOfPeopleInput.addEventListener('input', getNumOfPeople);
function getNumOfPeople() {
  people = numOfPeopleInput.value;
  // console.log(typeof people);

  if (people === '0') {
    alert('cant be zero');
  } else {
    calculate();
  }
}

customTipInput.addEventListener('input', getCustomTipPercentage);
function getCustomTipPercentage() {
  customTip = customTipInput.value;
  fixedTip = '';
  tipsPercentageBtns.forEach(btn => btn.classList.remove('active'));

  calculate();
}

// Tips percentage btns
// Get fixed tip percentage
tipsPercentageBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    fixedTip = btn.innerHTML.slice(0, -1);
    customTip = '';

    tipsPercentageBtns.forEach(btn => btn.classList.remove('active'));
    btn.classList.add('active');

    calculate();
  });
});

function calculate() {
  let tipPerPerson = document.querySelector('.tip-per-person');
  let totalPerPerson = document.querySelector('.total-per-person');

  // console.log(typeof bill);
  // console.log(typeof customTip);
  // console.log(typeof people);
  // console.log(typeof fixedTip);

  const tip = fixedTip ? fixedTip : customTip;

  // console.log(tip);
  if (bill && people && tip) {
    // converted all to number just to be sure they're all not strings, for the calculations
    tipPerPerson.innerHTML = (((+tip / 100) * +bill) / +people).toFixed(2);
    totalPerPerson.innerHTML = (
      ((+tip / 100) * +bill + +bill) /
      +people
    ).toFixed(2);
  }
}

// When reset is clicked, all values should return to initial states
// validation
