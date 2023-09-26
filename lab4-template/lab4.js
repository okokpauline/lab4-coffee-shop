// method to get value by selector
const $ = selector => document.querySelector(selector);
const taxRate = .0925; // 9.25
let tall = 0;
let grande = 0;
let venti = 0;

const doAddSTallCup = () => {
	// TODO
	doOrder();
};
const doRemoveTallCup = () => {
	// TODO
	doOrder();
};
const doAddGrandeCup = () => {
	// TODO
	doOrder();
};
const doRemoveGrandeCup = () => {
	// TODO
	
	doOrder();
};
const doAddVentiCup = () => {
	// TODO
	doOrder();
};
const doRemoveVentiCup = () => {
	// TODO
	doOrder();
};
const doClearAll = () => {
	// TODO
};
const doOrder = () => {
 	// TODO
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

	$('#add-tall').addEventListener('click', () => {
		// TODO
	});
	$('#remove-tall').addEventListener('click', doRemoveTallCup);
	$('#add-grande').addEventListener('click', doAddGrandeCup);
	$('#remove-grande').addEventListener('click', doRemoveGrandeCup);
	$('#add-venti').addEventListener('click', doAddVentiCup);
	$('#remove-venti').addEventListener('click', doRemoveVentiCup);

	$('#clear-button').addEventListener('click', doClearAll);
	$('#complete-order').addEventListener('click', doOrder);
});