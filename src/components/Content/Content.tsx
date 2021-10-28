import React, { FC } from 'react'
import HeaderTop from "../HeaderTop/HeaderTop"
import Header from "../Header/Header"
import CardList from "../Card/CardList/CardList"
import Basket from "../Basket/Basket"
import { Route, Switch } from "react-router-dom"

const Content: FC = () => {
    return (
        <div>
            <HeaderTop/>
            <Header/>

            <div className="content">
                <Switch>
                    <Route exact path="/"
                           component={ () => <CardList/> }/>

                    <Route path="/basket"
                           component={ () => <Basket/> }/>
                </Switch>
            </div>
        </div>
    )
}

export default Content