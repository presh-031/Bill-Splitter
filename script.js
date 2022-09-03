'use strict';

getBill();
getTipPercentage();
getCustomTip();
getNumOfPeople();

function getTipPercentage() {
  const possibleTips = document.querySelectorAll('.tips-percentage');
  for (let i = 0; i < possibleTips.length; i++) {
    possibleTips[i].addEventListener('click', e => {
      calculateTipPerPerson(e.target.innerHTML);
    });
  }
}

function getCustomTip() {
  const customTipInput = document.querySelector('.custom');
  customTipInput.addEventListener('input', calculateTipPerPerson);
}

function getNumOfPeople() {
  const numOfPeopleInput = document.querySelector('#num-of-people');
  numOfPeopleInput.addEventListener('input', calculateTipPerPerson);
}

function getBill() {
  const billInput = document.querySelector('#bill');
  billInput.addEventListener('input', calculateTipPerPerson);
}

function calculateTipPerPerson(selectedTip) {
  const bill = +document.querySelector('#bill').value;
  const numOfPeople = +document.querySelector('#num-of-people').value;
  const customTip = +document.querySelector('.custom').value;
  // console.log(bill);
  // console.log(numOfPeople);
  // console.log(customTip);

  // console.log(selectedTip);

  if (customTip && bill && numOfPeople) {
    const tipPerPerson = ((customTip / 100) * bill) / numOfPeople;
    const totalPerPerson = ((customTip / 100) * bill + bill) / numOfPeople;
    // console.log(tipPerPerson);
    // console.log(totalPerPerson);
    document.querySelector('.tip-per-person').innerHTML = tipPerPerson;
    document.querySelector('.total-per-person').innerHTML = totalPerPerson;
  }
}

// When reset is clicked, all fields should return to default
document.querySelector('.reset').addEventListener('click', () => {
  document.querySelector('#bill').value = '';
  document.querySelector('#num-of-people').value = '';
  document.querySelector('.custom').value = '';
});
