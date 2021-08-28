import React from 'react'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
export default function Loading(props) {
    const { isLoading } = useSelector(state => state.LoadingReducer)
    return (
        <Fragment>
            {isLoading ? <div style={{
                position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: "rgba(0,0,0,0.5)", display: 'flex', justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img  src={require("../../assets/img/loadingImage.gif").default}></img>
            </div> : ''}
        </Fragment>
    )
}
