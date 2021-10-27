import React, { FC } from 'react'
import HeaderTop from "../HeaderTop/HeaderTop"
import Header from "../Header/Header"
import CardList from "../Card/CardList/CardList"

const Content: FC = () => {
    return (
        <div>
            <HeaderTop/>
            <Header/>
            <CardList/>
        </div>
    )
}

export default Content