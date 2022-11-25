import {AppState} from "../index";
import {IActions, isDamage, isHeal} from "../interfaces/IActions";
import { CharacterClassName, ICharacter} from "../interfaces/ICharacter";
import {CombatPhase} from "./Game";

export class BaseActions implements ICharacter {

    public get health() {
        return this._health;
    }

    public set health(theHealth: number) {
        if (theHealth <= 0) {
            this.isAlive = false;
            theHealth = 0;
        }
        if (theHealth > 1000) {
            theHealth = 1000;
        }
        this._health = theHealth;
    }

    public get level() {
        return this._level;
    }

    public set level(theHealth: number) {
        if (theHealth <= 0) {
            throw new Error("Level is starting from 1");
        }
    }
    public name: string = "";
    public isAlive: boolean = true;
    public heal?: IActions["heal"] | undefined;
    public damage?: IActions["damage"] | undefined;
    // tslint:disable-next-line:variable-name
    private _level: number = 1;
    // tslint:disable-next-line:variable-name
    private _health: number = 1000;

    public classname(): CharacterClassName {
        throw new Error("Method not implemented.");
    }

    public attack(characterToAttack: BaseActions, state: AppState): AppState {
        let newLog: string;
        if (this.isAlive && characterToAttack.isAlive) {
            if (isDamage(this)) {
                characterToAttack.health -= this.damage;
                newLog = `${this.name} attacks ${characterToAttack.name}. And ${characterToAttack.name} bleeds`;
                } else {
                newLog = `${this.name} does not attack`;
                }} else {
            if (this.health === 0) {newLog = `${this.name} is DEAD. He can't attack`; } else {newLog = `${characterToAttack.name} is DEAD. He can't be attacked`; }}
        return {
            log: [newLog, state.log[0], state.log[1], state.log[2]],
            // tslint:disable-next-line:object-literal-sort-keys
             currentCombatPhase: CombatPhase.heal,
             currentCharacter: state.currentCharacter,
             interactions_instruction: state.interactions_instruction,
             view: state.view,
             characters: state.characters,
         };
    }
    public healing(characterToHeal: BaseActions, state: AppState): AppState {
        let newLog: string;
        if (isHeal(this)) {
            if (this.isAlive && characterToHeal.isAlive) {
            characterToHeal.health += this.heal;
            newLog = `${this.name} heals ${characterToHeal.name}. And ${characterToHeal.name} gets HP`;
        } else {
            if (this.health === 0) {newLog = `${this.name} is already DEAD. He can't heal anybody`; } else {newLog = `${characterToHeal.name} is already DEAD. He can't be healed`; }
        }} else {
                newLog = `${this.name} does not heal`;
            }
        const nextCharI =
        state.currentCharacter + 1 === state.characters.length
          ? 0
          : state.currentCharacter + 1;
        return {
          interactions_instruction: state.interactions_instruction,
          log: [newLog, state.log[0], state.log[1], state.log[2]],
            // tslint:disable-next-line:object-literal-sort-keys
          currentCombatPhase: CombatPhase.attack,
          currentCharacter: nextCharI,
          view: state.view,
          characters: state.characters,
      };
}}
