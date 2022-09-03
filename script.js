'use strict';
getTipPercentage();
getCustomTip();
getNumOfPeople();
getBill();

function getTipPercentage() {
  const possibleTips = document.querySelectorAll('.tips-percentage');
  let selectedTip = '';

  for (let i = 0; i < possibleTips.length; i++) {
    possibleTips[i].addEventListener('click', e => {
      selectedTip = e.target.innerHTML;
      console.log(selectedTip);
    });
  }
}
function getCustomTip() {
  let customTipInput = document.querySelector('.custom');
  let customTip = '';
  customTipInput.addEventListener('change', () => {
    customTip = customTipInput.value;
    console.log(customTip);
  });
}

function getNumOfPeople() {
  const numOfPeopleInput = document.querySelector('#num-of-people');
  let numOfPeople = '';
  numOfPeopleInput.addEventListener('change', () => {
    numOfPeople = numOfPeopleInput.value;
    console.log(numOfPeople);
  });
}

function getBill() {
  const billInput = document.querySelector('#bill');
  let bill = '';
  billInput.addEventListener('change', () => {
    bill = billInput.value;
    console.log(bill);
  });
}
