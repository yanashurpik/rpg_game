import { IActions } from "../interfaces/IActions";
import { CharacterClassName } from "../interfaces/ICharacter";
import { BaseActions } from "./BaseCharacter";

export class Warrior extends BaseActions {
  public damage: IActions["damage"] = 300;
  constructor(public name: string, public key: number) {
    super(); }
  public classname(): CharacterClassName {
    return "Warrior";
  }
}

// tslint:disable-next-line:max-classes-per-file
export class Doctor extends BaseActions {
  public heal: IActions["heal"] = 100;
  constructor(public name: string, public key: number) {
    super(); }
  public classname(): CharacterClassName {
    return "Doctor";
  }
}

// tslint:disable-next-line:max-classes-per-file
export class Mage extends BaseActions {
  public damage: IActions["damage"] = 200;
  constructor(public name: string, public key: number) {
    super(); }

  public classname(): CharacterClassName {
    return "Mage";
  }
}
