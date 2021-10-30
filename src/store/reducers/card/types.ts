import { ICard } from "../../../models/ICard"


export interface CardState {
    cards: ICard[];
    basketCards: any[]
}

export enum CardActionEnum {
    GET_CARDS = "GET_CARDS",
    GET_CARDS_BASKET = "GET_CARDS_BASKET",
    DELETE_CARDS_BASKET = "DELETE_CARDS_BASKET",
}

export interface SetCardAction {
    type: CardActionEnum.GET_CARDS;
    payload: any[];
}

export interface GetCardInBasketAction {
    type: CardActionEnum.GET_CARDS_BASKET;
    payload: any[];
}

export interface DeleteCardInBasketAction {
    type: CardActionEnum.DELETE_CARDS_BASKET;
    payload: any[];
}

export type CardAction =
    SetCardAction | GetCardInBasketAction | DeleteCardInBasketAction