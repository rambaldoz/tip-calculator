// var total = (billAmt * serviceQual) / numOfPeople;

var calculateBtn = document.getElementById('calculateTip');
var totalResult = document.getElementById('total-result');

calculateBtn.addEventListener('click', calculateTip);

function calculateTip(billAmount, serviceQuality, numOfPeople) {
	var amount = document.getElementById('amount');
	var people = document.getElementById('people');
	var service = document.getElementById('service');

	// validate bill amount if has value
	if (amount.value == '') {
		alert('no value');
	} else {
		billAmount = amount.value;
		console.log(billAmount);
	}

	// validate no of people
	if (people.value == '') {
		alert('no people');
	} else {
		numOfPeople = people.value;
		console.log(numOfPeople);
	}

	// check select option
	var select = service.options[service.selectedIndex].value;
	serviceQuality = select;

	var result = (billAmount * serviceQuality) / numOfPeople;

	totalResult.innerHTML = result;
}
