'use strict';
const possibleTips = document.querySelectorAll('.tips-percentage');
const customTipInput = document.querySelector('.custom');
const numOfPeopleInput = document.querySelector('#num-of-people');
const billInput = document.querySelector('#bill');
const tipsPercentageBtns = document.querySelectorAll('.tips-percentage');
const resetBtn = document.querySelector('.reset');
const errorMsg = document.querySelector('.error-msg');

let tipPerPerson = document.querySelector('.tip-per-person');
let totalPerPerson = document.querySelector('.total-per-person');

let bill = 0;
let people = 0;
let customTip = '';
let fixedTip = '';

styleResetBtn();

billInput.addEventListener('input', getBillValue);
function getBillValue() {
  bill = billInput.value;

  // remove outline from numOfPeopleInput
  numOfPeopleInput.style.outline = 'none';

  calculate();
}

numOfPeopleInput.addEventListener('input', getNumOfPeople);
function getNumOfPeople() {
  people = numOfPeopleInput.value;
  // console.log(typeof people);

  if (+people === 0) {
    errorMsg.style.display = 'block';
    numOfPeopleInput.style.outline = '1px solid rgb(234, 105, 105)';
  } else {
    // if the input is valid, the error message should be gone and the input field should be outlined
    //  Outline is removed when user focuses on anything else
    errorMsg.style.display = 'none';
    numOfPeopleInput.style.outline = '1px solid hsl(172, 67%, 45%)'; //'none'; //'1px solid hsl(172, 67%, 45%)'

    calculate();
  }
}

customTipInput.addEventListener('input', getCustomTipPercentage);
function getCustomTipPercentage() {
  customTip = customTipInput.value;
  fixedTip = '';

  tipsPercentageBtns.forEach(btn => btn.classList.remove('active'));

  // remove outline from numOfPeopleInput
  numOfPeopleInput.style.outline = 'none';

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

    // remove outline from numOfPeopleInput
    numOfPeopleInput.style.outline = 'none';
    calculate();
  });
});

function calculate() {
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

  styleResetBtn();
}

////// Reset btn
function styleResetBtn() {
  if (!bill && !people && !customTip && !fixedTip) {
    resetBtn.style.backgroundColor = 'hsl(180, 68%, 24%)';
    resetBtn.style.color = 'hsl(186, 14%, 43%)';
  } else {
    resetBtn.style.backgroundColor = ' hsl(172, 67%, 45%)';
    resetBtn.style.color = 'hsl(183, 100%, 15%)';
  }
}
resetBtn.addEventListener('click', reset);
function reset() {
  // resetBtn.style.backgroundColor = 'hsl(185, 41%, 84%)';

  //RESETTING BOTH THE VARIABLES AND DOM

  tipPerPerson.innerHTML = '00.00';
  totalPerPerson.innerHTML = '00.00';

  bill = billInput.value = '';
  customTip = customTipInput.value = '';
  people = numOfPeopleInput.value = '';
  fixedTip = '';

  tipsPercentageBtns.forEach(btn => btn.classList.remove('active'));
  numOfPeopleInput.style.outline = 'none';
  errorMsg.style.display = 'none';

  if (!bill || !people || !customTip || !fixedTip) {
    // resetBtn.style.backgroundColor = 'hsl(180, 68%, 24%)';
  }
}
// reset btn
// readme
// hosting
