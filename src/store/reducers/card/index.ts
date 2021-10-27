import { CardAction, CardActionEnum, CardState } from "./types"


const initialState: CardState = {
    cards: []
}

export default function authReducer(state = initialState, action: CardAction) {
    switch (action.type) {
        case CardActionEnum.GET_CARDS:
            return {...state, cards: action.payload}
        default:
            return state;
    }
}
