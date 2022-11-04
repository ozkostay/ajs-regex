export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return /^[a-zA-Z]{1}[\d]{0,3}[a-zA-Z\-_]*[a-zA-Z]{1}$/.test(this.name);
  }
}
