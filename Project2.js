/**
 *  @author Delaney, Tayler (delaneyt@student.ncmich.edu)
 *  @version 0.0.1
 *  @summary CIS104 A Project 2 Tayler Delaney
 */

"use strict";
const PROMPT = require('readline-sync');

let policyNum, birthYear, premiumDue, accidentNum, age, premiumTotal;
let firstName, lastName;

/**
 * @method
 * @desc The dispatch method
 * @returns {null}
 */
function main() {
    setIdentity();
    setPolicyNum();
    setBirthYear();
    setPremiumDue();
    setAccidentNum();
    calcPremium();
    outputPremiumTotal();
}

main();

/**
 * @method
 * @desc Sets customer first and last name
 * @returns {null}
 */
function setIdentity() {
    firstName = PROMPT.question(`Please enter your first name: `);
    lastName = PROMPT.question(`\nPlease enter your last name: `);
}

/**
 * @method
 * @desc Sets the customer policy number
 * @returns {null}
 */
function setPolicyNum () {
    policyNum = PROMPT.questionInt(`\nPlease enter the policy number for "${firstName} ${lastName}" : `);
}

/**
 * @method
 * @desc Sets year the customer was born
 * @returns {null}
 */
function setBirthYear() {
    const CURRENT_YEAR = 2018;
    birthYear = PROMPT.questionInt(`\nPlease enter the year you were born(yyyy): `);
    age = CURRENT_YEAR - birthYear;
    if (age < 15 || age > 123) {
        console.log(`\nThat is an invalid age. Please enter a different birth year.`);
        return setBirthYear();
    }
}

/**
 * @method
 * @desc Sets the premium due date
 * @returns {null}
 */
function setPremiumDue() {
    premiumDue = PROMPT.question(`\nPlease enter your premium due date(mm/dd/yyyy): `);
}

/**
 * @method
 * @desc Sets the number of at-fault driver accidents
 * @returns {null}
 */
function setAccidentNum() {
    accidentNum = PROMPT.questionInt(`\nPlease enter the number of at-fault driver accidents in the last three years: `);
    if (accidentNum < 0) {
        console.log(`\nThat is an invalid number of accidents`);
        return setAccidentNum();
    }
}

/**
 * @method
 * @desc Calculates the premium based on age/number of accidents
 * @returns {null}
 */
function calcPremium() {
    const BASE_PRICE = 100;
    let faultCost = accidentNum * 50;
    if (age >= 30 && age < 45) {
        premiumTotal = BASE_PRICE + faultCost + 10;
    } else if(age >= 45 && age < 60) {
        premiumTotal = BASE_PRICE + faultCost;
    } else if(age >= 60) {
        premiumTotal = BASE_PRICE + faultCost + 30;
    } else {
        premiumTotal = BASE_PRICE + faultCost + 20;
        /*if age doesn't meet any of the checks above, they are between 15 and 30 because
        if age is < 15 or > 123 the user cannot get to this point. */
    }
}

/**
 * @method
 * @desc Outputs the calculated premium
 * @returns {null}
 */
function outputPremiumTotal() {
    process.stdout.write(`\x1Bc`);
    console.log(`The monthly insurance premium for a ${age} year old with ${accidentNum} at-fault driver accidents in the last three years is \$${premiumTotal}.`);
}

/*
The Drive-Rite Insurance Company provides automobile insurance policies for drivers. Code the following:
A program that accepts insurance policy data, including a policy number, customer last name, customer first name,
birth date, premium due date (month, day, and year), and number of at-fault driver accidents in the last three
years. Calculate customer age and set monthly insurance premium using the following criteria:

Base price = $100

Age >15 && < 30 = + $20

Age >= 30 && < 45 +10

Age >=60 +30

Each at-fault accident = + 50

Use proper recursion looping and input validation/sanitization.

 */