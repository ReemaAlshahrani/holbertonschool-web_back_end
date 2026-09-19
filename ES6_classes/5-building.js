export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      this._sqft = sqft;
    } else {
      // Check if the extending class implements evacuationWarningMessage method
      if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
      this._sqft = sqft;
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Base evacuationWarningMessage method to be overridden
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
