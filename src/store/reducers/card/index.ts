import { CardAction, CardActionEnum, CardState } from "./types"


const initialState: CardState = {
    cards: [],
    basketCards: []
}

export default function authReducer(state = initialState, action: CardAction) {
    switch (action.type) {
        case CardActionEnum.GET_CARDS:
            return {...state, cards: action.payload}
        case CardActionEnum.ADD_CARD_IN_BASKET:
            return {...state, basketCards: [...state.basketCards, action.payload]}
        default:
            return state;
    }
}
