import React, { FC } from 'react'
import './Basket.scss'
import { NavLink } from "react-router-dom"
import { useTypedSelector } from "../../hooks/useTypedSelector"

const Basket: FC = () => {

    const { basketCards } = useTypedSelector(state => state.cards)

    return (
        <div>
            Basket here
            <NavLink to={'/'}>Go to the main page</NavLink>
            {basketCards.map(item => <div key={item.id}>{ item.model } - {}</div>)}
        </div>
    )
}

export default Basket