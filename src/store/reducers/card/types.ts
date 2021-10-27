import { ICard } from "../../../models/ICard"


export interface CardState {
    cards: ICard[];
}

export enum CardActionEnum {
    GET_CARDS = "GET_CARDS"
}

export interface SetCardAction {
    type: CardActionEnum.GET_CARDS;
    payload: any[];
}

export type CardAction =
    SetCardAction