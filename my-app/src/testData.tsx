import {Doctor, Mage, Warrior} from "./implementation/Characters";
import {CombatPhase} from "./implementation/Game";
import {AppState} from "./index";

export class TestData {
    public exampleData: AppState = {
    characters: [
      new Warrior("Conan", 0),
      new Doctor("Doctor Who", 1),
      new Mage("Merlin", 2),
    ],
    currentCharacter: 0,
    currentCombatPhase: CombatPhase.attack,
        // tslint:disable-next-line:max-line-length
    interactions_instruction: {"Conan": {interacts_with: 1}, "Merlin": {interacts_with: 0}, "Doctor Who": {interacts_with: 0}},
    log: ["Game Start", "-", "-", "-"],
    view: "menu",
  };
}
export let testData: TestData = new TestData();
