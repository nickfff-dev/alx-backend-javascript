import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get sqft() {
    return super.sqft; // Use the getter from the parent class
  }

  get floors() {
    return this._floors; // Return the floors attribute
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors.`; // Override the method to return a specific string
  }
}
