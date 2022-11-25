// import { assert } from "chai";
// import { binding, given, then, when} from "cucumber-tsflow";
// import {AppState} from "../../src";
// import {Doctor, Mage, Warrior} from "../../src/implementation/Characters";
// import {CombatPhase} from "../../src/implementation/Game";
// import { testData} from "../../src/testData";
//
// // const test: AppState = {
// //     characters: [
// //         new Warrior("Conan", 0),
// //         new Doctor("Doctor Who", 1),
// //     ],
// //     currentCharacter: 0,
// //     currentCombatPhase: CombatPhase.attack,
// //     interactions_instruction: {
// //         "Conan": {interacts_with: 1},
// //         // tslint:disable-next-line:object-literal-sort-keys
// //         "Doctor Who": {interacts_with: 0},
// //     },
// //     log: ["Game Start", "-", "-", "-"],
// //     view: "menu",
// // };
// //
// // testData.exampleData = test;
//
// @binding()
// export class CharacterCreationSteps {
//   private accountBalance: number = 0;
//
//   @given(/Create new characters \$(\d*)/)
//   public steps(amount: number) {
//     this.accountBalance = amount;
//   }
//
//   @when("character is created")
//   // tslint:disable-next-line:no-empty
//   public steps(amount: number) {
//   }
//
//   @then(/charcater has all required properties \$(\d*)/)
//   // tslint:disable-next-line:no-empty
//   public steps(expectedAmount: number) {
//   }
// }
