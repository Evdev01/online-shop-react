import React, { FC } from 'react'
import './Basket.scss'
import { useTypedSelector } from "../../hooks/useTypedSelector"
import BasketCardItem from "./BasketCardItem/BasketCardItem"

const Basket: FC = () => {

    const { basketCards } = useTypedSelector(state => state.cards)

    return (
        <div>
            {/*<NavLink to={'/'}>Go to the main page</NavLink>*/}
            {basketCards.map(card => <BasketCardItem card={card}/>)}
        </div>
    )
}

export default Basket