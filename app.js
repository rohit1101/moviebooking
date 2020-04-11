const btn = document.querySelectorAll('button');
const seatEl = document.querySelector('.seats');
const nameEl = document.querySelector('.name');
// console.log(nameEl.value);
let count = 0;

function handleClick(e) {
  e.preventDefault();
  const nameEl = document.querySelector('.name');

  const seat_Value = parseInt(seatEl.value);
  if (isNaN(seat_Value)) {
    alert('Select the required field');
  }
  count++;
  if (count <= seat_Value) {
    e.currentTarget.setAttribute('data-val', count);
    e.currentTarget.classList.add('sel');
  }
  dis(count, seat_Value, nameEl.value);
}
function dis(c, sV, nameV) {
  console.log(c);
  btn.forEach(item => {
    if (!item.dataset.val && c === sV) {
      item.disabled = true;
      bill(sV, nameV);
    }
  });
}

const billEl = document.createElement('p');

function bill(seat, cost) {
  const val = cost.split('$');
  billEl.classList.add('bill');
  billEl.innerHTML = `You have booked ${seat} tickets and the total cost is $${seat *
    parseInt(val[1])}`;
}
nameEl.insertAdjacentElement('afterend', billEl);

btn.forEach(item => {
  item.addEventListener('click', handleClick);
});
