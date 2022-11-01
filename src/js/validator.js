export default class Validator {
  constructor (name,regx) {
    this.name = name;
    this.regx = regx;
  }

  validateUsername() {
    // console.log('Yohohoh!!!', this.name);
    
    //const regx = /[a-zA-Z]\w/;
    return this.regx.test(this.name);
  }
}