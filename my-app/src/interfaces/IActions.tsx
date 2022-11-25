export interface IActions {
  damage: number;
  heal: number;
}

export function isDamage(obj: any): obj is IActions {
    return obj?.damage !== undefined;
}

export function isHeal(obj: any): obj is IActions {
    return obj?.heal !== undefined;
}
