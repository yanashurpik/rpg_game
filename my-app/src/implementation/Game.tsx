import React from "react";
import { AppState } from "..";

export enum CombatPhase {
  attack,
  heal,
}

export function GameTick(state: AppState): Pick<AppState, keyof AppState> | undefined {
  switch (state.view) {
    case "menu":
      return undefined;
  }
  const activeCharacter = state.characters[state.currentCharacter];

  switch (state.currentCombatPhase) {
    case CombatPhase.attack: {
      const currentCharacterInstruction = state.interactions_instruction[state.characters[state.currentCharacter].name];
      const characterToAttack = state.characters[currentCharacterInstruction.interacts_with];
      return activeCharacter.attack(characterToAttack, state);
    }

    case CombatPhase.heal: {
      const currentCharacterInstruction = state.interactions_instruction[state.characters[state.currentCharacter].name];
      const characterToHeal = state.characters[currentCharacterInstruction.interacts_with];
      return activeCharacter.healing(characterToHeal, state);
    }
  }}
