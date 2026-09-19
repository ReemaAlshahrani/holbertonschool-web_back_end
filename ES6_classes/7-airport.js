export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Override the default string description using Symbol.toStringTag
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
