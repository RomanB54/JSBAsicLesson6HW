const user = {
  name: 'John',
};
export let admin = {};

//exercise 1
export function addAgeByPrompt() {
  const input = window.prompt('Enter age');
  user.age = input;
  return user;
}

//exercise 2
export function assignRole() {
  addAgeByPrompt();
  admin = Object.assign({}, user, { role: 'admin' });
  return admin;
}

//exercise 3
export function saveObjectKeyToVariables() {
  const { name, age, role } = admin;
  return console.log(name, age, role);
}
