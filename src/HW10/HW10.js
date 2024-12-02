export function defineType() {
  const input = prompt('Please enter your phone number or email or date');
  const regexpDate =
    /[0-9]{1,4}[\/\.\-\s]{1}[a-zA-Z0-9]+[\/\.\-\s]{1}[0-9]{1,4}/;
  const regexpPhone = /[\+]?[0-9\-]{10}/;
  const regexpEmail = /[a-zA-Z_\.0-9]+@[a-zA-Z]+\.[a-z]{2,5}/;

  if (regexpDate.test(input)) {
    return console.log('Your input is a date');
  } else {
    if (regexpPhone.test(input)) {
      return console.log('Your input is a phone number');
    } else {
      if (regexpEmail.test(input)) {
        return console.log('Your input is a email address');
      } else {
        return console.log(
          'Please input a correct phone number or email or date',
        );
      }
    }
  }
}
