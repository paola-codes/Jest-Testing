let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

//fromEuroToDollar
const fromEuroToDollar = function(valueInEuro){
    
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

//fromDollarToYen
const fromDollarToYen = function(valueInDollar){

    let valueInYen = valueInDollar * ((1 / oneEuroIs.USD) * oneEuroIs.JPY);
    return valueInYen;
}

//fromYenToPound
const fromYenToPound = function(valueInYen){

    let valueInPound = (valueInYen / oneEuroIs.JPY) * oneEuroIs.GBP;
    return valueInPound;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs};

/*
// // import the function sum from the app.js file
// const { sum } = require('./app.js');

// // start your first test
// test('adds 14 + 9 to equal 23', () => {
//     //inside the test we call our sum function with 2 numbers
//     let total = sum(14, 9);

//     // we expect the sum of those 2 numbers to be 23
//     expect(total).toBe(23);
// });

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});


test("One dollar should be 106.58 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(3)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3 * 106.58; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3)).toBe(319.75); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});


test("One yen should be 0.0066", function(){
    //import the function from app.js
    const { fromYenToPound, oneEuroIs } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromYenToPound(3)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected =(3/oneEuroIs.JPY)*oneEuroIs.GBP; 
    
    // this is the comparison for the unit test
     expect(yen).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});






let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

console.log()
//fromDollarToYen
const fromDollarToYen = function(dollar){

    let valueInYen = dollar * ((1/oneEuroIs.USD)*oneEuroIs.JPY);
    return valueInYen;
}
console.log(fromDollarToYen(3));

//fromYenToPound
const fromYenToPound = function(yen){

    let valueInPound = (yen/oneEuroIs.JPY)*oneEuroIs.GBP;
    return valueInPound;
}

console.log(fromYenToPound(1));


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs};


*/