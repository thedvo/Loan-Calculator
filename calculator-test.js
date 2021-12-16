
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 250000,
    years: 15,
    rate: 4.5
  };

  expect(calculateMonthlyPayment(values)).toEqual('1912.48');
});


it("should return a result with 2 decimal places", function() {
const values = {
    amount: 100000,
    years: 10,
    rate: 7
  };

  expect(calculateMonthlyPayment(values)).toEqual('1161.08');
});


// it('should result in NaN if non numerical values passed in', function() {
//   const values = {
//     amount: 10a,
//     years: 10,
//     rate: 15
//     };

//     expect(calculateMonthlyPayment(values)).toEqual('NaN'); 
// });
/// etc

it("should be able to handle large input values", function(){
  const values = {
    amount: 1000000,
    years: 500,
    rate: 14
  };
  expect(calculateMonthlyPayment(values)).toEqual('11666.67'); 
});


it ("should be able to calculate negative values", function(){
  const values = {
    amount: -10000,
    years: 10,
    rate: 5,
  };
  expect(calculateMonthlyPayment(values)).toEqual('-106.07'); 
});
