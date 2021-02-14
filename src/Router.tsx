import React from 'react'
import  ColorToValue  from './ColorToValue'
import  ValueToColor  from './ValueToColor'
import {BrowserRouter, Route} from 'react-router-dom'

const Router = () => {
    return(
        <BrowserRouter>
            <Route exact path="/" component={ColorToValue}  />
            <Route exact path="/input" component={ValueToColor}  />
        </BrowserRouter>
    )
}

export default Router