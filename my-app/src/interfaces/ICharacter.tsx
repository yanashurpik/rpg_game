export type CharacterClassName = "Warrior" | "Doctor" | "Mage";

export interface ICharacter {
    name: string;
    health: number;
    damage?: number;
    heal?: number;
    classname(): CharacterClassName;
}
