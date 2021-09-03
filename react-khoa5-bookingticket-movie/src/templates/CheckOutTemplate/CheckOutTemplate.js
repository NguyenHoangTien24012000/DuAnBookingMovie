import { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";


export const CheckOutTemplate = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    const { Component, ...restProps } = props;

  

 


    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>

            <Component {...propsRoute} />

        </Fragment>
    }} />

}