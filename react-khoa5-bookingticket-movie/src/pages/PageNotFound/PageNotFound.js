import { transform } from 'lodash'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PageNotFound(props) {
    return (
        <div className="relative w-full min-h-screen">
          <div className="absolute top-1/2 text-center w-full" >
              <p className="text-2xl font-bold">Page Not Found</p>
              <NavLink to="/home" className="text-xl">Back To Home</NavLink>
          </div>
        </div>
    )
}
