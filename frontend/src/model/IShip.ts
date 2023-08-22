export interface IShip {
  /**
   * Defines how many of these ship type can be placed
   */
  readonly amount: number;
  readonly color: string;
  readonly id: number;
  readonly name: string;

  /**
   * Defines the length of this ship (e.g. 4 elements long)
   */
  readonly size: number;
}
