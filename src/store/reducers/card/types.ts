import { ICard } from "../../../models/ICard"


export interface CardState {
    cards: ICard[];
    basketCards: any[]
}

export enum CardActionEnum {
    GET_CARDS = "GET_CARDS",
    ADD_CARD_IN_BASKET = "ADD_CARD_IN_BASKET"
}

export interface SetCardAction {
    type: CardActionEnum.GET_CARDS;
    payload: any[];
}

export interface AddCardInBasketAction {
    type: CardActionEnum.ADD_CARD_IN_BASKET;
    payload: any[];
}

export type CardAction =
    SetCardAction | AddCardInBasketAction