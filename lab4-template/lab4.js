// method to get value by selector
const $ = selector => document.querySelector(selector);
const isInvalidValue = val => isNaN(val) || val <= 0;
const taxRate = .0975; // 9.75

let tall = 0;
let grande = 0;
let venti = 0;
let price = 0;
let tax = 0;
let totalAmount = 0;
let totalVolume = 0;


const doAddTallCup = () => {
	tall++;
	$('#tall-number').value = tall;
	doOrder();
};

const doRemoveTallCup = () => {
	if (tall > 0) {
		tall--;
		doOrder();
	}
};

const doAddGrandeCup = () => {
	grande++;
	$('#grande-number').value = grande;
	doOrder();
};

const doRemoveGrandeCup = () => {
	if (grande > 0) {
		grande--;
		doOrder();
	}
};

const doAddVentiCup = () => {
	venti++;
	$('#venti-number').value = venti;
	doOrder();
};

const doRemoveVentiCup = () => {
	if (venti > 0) {
		venti--;
		doOrder();
	}
};

const doClearAll = () => {
	tall = 0;
	grande = 0;
	venti = 0;
	price = 0;
  tax = 0;
  totalAmount = 0;
	totalVolume = 0;
	doOrder();
	doCompleteOrder ();
};

const doOrder = () => {
	price = (tall * 3.99) + (grande * 4.50) + (venti * 5.99);
	tax = price * taxRate;
	totalAmount = price + tax;
	totalVolume = (tall * 9) + (grande * 12) + (venti * 15);
	$('#tall-number').value = tall;
  $('#grande-number').value = grande;
  $('#venti-number').value = venti;
	$('#price').value = '$' + price.toFixed(2);
	$('#tax-rate').value = '$' + tax.toFixed(2);
	$('#total-amount').value = '$' + totalAmount.toFixed(2);
	$ ('#total-volume').value = totalVolume + 'oz';
};

const doCompleteOrder = () => {
  if (totalAmount > 0) {
    const message = `Order completed! Total Amount: $${totalAmount.toFixed(2)}`;
    $('#order-message').textContent = message;
  } else {
    $('#order-message').textContent = "No items in the order.";
  }
};


document.addEventListener("DOMContentLoaded", () => {
	// TODO: addEventListener for these methods
	$('#my-directions').addEventListener('click', () => {
		let textElement = $('#how-to');
		if (textElement.innerHTML === "") {
			textElement.innerHTML = "Press + button to add cup <br> press - button to remove a cup";
		} else {
			textElement.innerHTML = "";
		}

	});
	$('#add-tall').addEventListener('click', doAddTallCup);
	$('#remove-tall').addEventListener('click', doRemoveTallCup);
	$('#add-grande').addEventListener('click', doAddGrandeCup);
	$('#remove-grande').addEventListener('click', doRemoveGrandeCup);
	$('#add-venti').addEventListener('click', doAddVentiCup);
	$('#remove-venti').addEventListener('click', doRemoveVentiCup);
  
	$('#clear-button').addEventListener('click', doClearAll);
	$('#complete-order').addEventListener('click', doOrder);
	$('#complete-order').addEventListener('click', doCompleteOrder);
	$('#tax-rate').value = tax;
	$('#price').value = '$' + price;
	$('#total-amount').value = totalAmount
	$('#tall-number').value = tall;
	$('#grande-number').value = grande;
	$('#venti-number').value = venti;
	$ ('#total-volume').value = totalVolume + 'oz';
});