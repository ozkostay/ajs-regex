export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const regx1 = /^[a-zA-Z]{1}(\w|-)*[a-zA-Z]{1}$/;
    const regx2 = /\d{4,}/;
    return regx1.test(this.name) && !regx2.test(this.name);
  }
}
