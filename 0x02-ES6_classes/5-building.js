export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (!Object.prototype.hasOwnProperty.call(this.constructor.prototype, 'evacuationWarningMessage')) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
