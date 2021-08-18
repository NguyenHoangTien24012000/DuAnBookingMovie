import { Fragment } from "react";
import { Route } from "react-router";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import Header from "./Layout/Header/Header";





export const HomeTemplate = (props) => {
    const { Component, ...restProps } = props;

    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <Header {...propsRoute}  />
            <HomeCarousel {...propsRoute}/>
            <Component {...propsRoute} />
        </Fragment>
    }} />
}