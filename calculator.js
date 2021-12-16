window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();

      // this will call the update function which will finish the calculation of monthly payment. 
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {
    amount: 10000,
    years: 10,
    rate: 5
  };

const amountInput = document.getElementById("loan-amount");
const yearsInput = document.getElementById("loan-years");
const rateInput = document.getElementById("loan-rate");

amountInput.value = values.amount;
yearsInput.value = values.years;
rateInput.value = values.rate; 

update ();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places. (to do this, use .toFixed(2))
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate/100)/12;
  const n = Math.floor(values.years * 12);
  // monthlyRate = percentage divided by 100 gives a decimal. Divide this value by 12 to get the monthly rate. 
  // n is total number of payments (years x 12)

  return ((monthlyRate * values.amount)/ (1 - Math.pow((1 + monthlyRate), -n))).toFixed(2);
}
 // refer to the formula to calculate monthly loan payments
  // we use Math.pow (base, exponent) for exponents

  // values.amount = amount of principal
  // monthlyRate = interest rate




// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly; 
}
// the monthlyUI variable will show the result of the calculation
// the value passed in to the updateMonthly function, will be calculated by (calculateMonthlyPayment(getCurrentValues())).
