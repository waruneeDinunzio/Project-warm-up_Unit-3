/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Form Input Validation - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2020
 */

"use strict";


/* Variable to store form inputs - You'll use these in the functions below' */
const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const framework = document.querySelector("#framework");
const languagesContainer = document.querySelector("#radio-wrapper");
const languagesInputs = document.querySelectorAll("#languages input");
console.log(languagesContainer);
console.log(languagesInputs);
// YOUR CODE GOES HERE!!! Do the steps in the functions below to complete this challenge

/* Helper function to validate name input */
const nameValidator = () => {

  // 1. Create a variable to store the `.value` of the `name` input and log it out
  let nameValid = name.value;
  console.log.nameValid;
  if (nameValid.length > 0) {
    name.style.borderColor = 'white';
    return true;
  } else {
    name.style.borderColor = 'red';
    return false;
  }
  // 2. Call this `nameValidator` function in the submit listener below
    // To test it, type something in the name field on the form and click the submit button

  // 3. Create an if/else statement
    // If the name value.length is greater than zero, set the name input's border to white and return true
    // Else, set the name input's border to red and return false

}


/* Helper function to validate email input */
const emailValidator = () => {

  // 1. Create a variable to store the `.value` of the `email` input and log it out
  let emailValue = email.value;
  console.log(emailValue);
  // 2. Call this `emailValidator` function in the submit listener below 
    // To test it, type something in the email field on the form and click the submit button

  // 3. Create a variable to store the .indexOf of the `@` in the email value
  let emailAt = emailValue.indexOf('@');
  let emailD = emailValue.lastIndexOf('.');
  console.log(emailAt);
  console.log(emailD);
  // 4. Create a variable to store the .lastIndexOf of the `.` in the email value
  // 5. Log out the two variables above
  if (emailAt > 1 && emailD > (emailAt+1)) {
    email.style.borderColor = 'white';
    return true;
  } else {
    email.style.borderColor = 'red';
    return false;
  }
  // 5. Create an if/else statement
    // If the `@` index is greater than one AND the `.` last index is greater than the `@` index + 1, 
      // Set the email's border to white and return true
    // Else, set the email's border to red and return false

}


/* Helper function to validate framework element */
const frameworkValidator = () => {
  let frameworkValue = framework.value;
  console.log('frameworkValue');
  if (frameworkValue != 'Choose framework') {
    framework.style.borderColor = 'white';
    return true;
  } else {
    framework.style.borderColor = 'red';
    return false;
  }
  // 1. Create a variable to store the `.value` of the `framework` element and log it out
  // 2. Call this `frameworkValidator` function in the submit listener below 
    // And then click the submit button to test it

  // 3. Create an if/else statement
    // If the framework work value does not equal the default value of 'Choose framework', 
      // Set the framework element's border to white and return true
    // Else, set the framework element's border to red and return false

}


/* Helper function to validate language section */
const languageValidator = () => {
  console.log(languagesContainer);
  console.log(languagesInputs);
  for (let i=0; i< languagesInputs.length; i ++) {
    if (languagesInputs[i].checked) {
      languagesContainer.style.borderColor = 'white';
      return true;
    } else {
      languagesContainer.style.borderColor = 'red';
      return false;
    }
  }
  
  // 1. Log out the `languagesContainer` and `languagesInputs` variables from above
  // 2. Call this `languageValidator` function in the submit listener below 
    // And then click the submit button to test it

  // 3. Loop over the languagesInputs
    // Create an if statement
      // If `(languagesInputs[i].checked)`, set the languagesContainer section's border to white and return true

  // 4. After the loop, set the border to red and return false
    // Note that this code after the loop will only run if the loop concludes without finding a clicked language

}


/* Real time validation */
// To add real time validation, use the .addEventListener() method on the form elements/sections
// Use events like `keyup`, `blur` and/or `mouseout`
// As the callback, use the validation functions above, but remember, 
// Don't use parens when passing a reference to a function as a callback  
form.addEventListener('keyup', (e) => {
nameValidator();
emailValidator();

});

/* Submit listener on the form element */
form.addEventListener('submit', (e) => {

  // 1. Create an if statement
    if (!nameValidator()) {
      e.preventDefault();
      // And log out a message saying this validator prevented submission
      console.log('this validator prevented submission');
    }
    if (!emailValidator()) {
      e.preventDefault();
    }
    if (!frameworkValidator()) {
      e.preventDefault();
    }
    if (!languageValidator()) {
      e.preventDefault();
    }
    
  // 2. Repeat the above step for the rest of your validation functions

  // And feel free to comment out or delete any log statements from the validation functions above


  // Submit handler test log - Feel free to delete this or comment it out
  console.log('Submit handler is functional!');
});