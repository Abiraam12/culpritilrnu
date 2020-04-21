import React, { Component } from 'react'
import {BrowserRouter as Route} from 'react-router-dom';
import TrainerSearch from '../components/trainerSearch/TrainerSearch'

export default class TrainerSearchRoutes extends Component {
    render() {
        return (
            <>
                <Route path="/searchtrainer" component={TrainerSearch} />
            </>
        )
    }
}
