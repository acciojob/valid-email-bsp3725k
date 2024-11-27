function validEmail(str) {
  //your JS code here.
  const emailRegex = /^[A-Za-z0-9]+(?:[.-][A-Za-z0-9]+)*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  // Test the email string against the regular expression
  return emailRegex.test(str);}
// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
