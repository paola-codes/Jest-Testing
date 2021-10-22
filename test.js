/*// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);
    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
*/

test("One euro should be 1.2 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3);

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3 * 1.2; 
    
    // this is the comparison for the unit test
    expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});

test("One dollar should be 109.67 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(3);

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3 * ((1 / oneEuroIs.USD) * oneEuroIs.JPY);
    
    // this is the comparison for the unit test
    expect(yen).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});

test("One yen should be 0.0066 pounds", function(){
    //import the function from app.js
    const { fromYenToPound, oneEuroIs } = require('./app.js')

    // use the function like its suppoed to be used
    const pound = fromYenToPound(3);

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected =(3 / oneEuroIs.JPY) * oneEuroIs.GBP; 
    
    // this is the comparison for the unit test
    expect(pound).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});