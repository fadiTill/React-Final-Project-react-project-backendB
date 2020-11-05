import React from 'react'
import {connect} from 'react-redux'
import {fetchHouses } from '../actions/fetchHouses'
import {Route, Switch} from 'react-router-dom'
import Houses from '../components/Houses'
import House from '../components/House'
import HouseInput from '../components/HouseInput'



class HousesContainer extends React.Component {

    componentDidMount() {
       this.props.fetchHouses() 
    }

render() {

    return (
    <div> 
      <Switch>
      <Route path='/houses/new' component={HouseInput}/>
      <Route path='/houses/:id'render={(routerProps)=> <House {...routerProps} houses={this.props.houses}/>}/>
      <Route path='/houses' render={(routerProps)=> <Houses  {...routerProps} houses={this.props.houses}/>} />
      </Switch>  
    </div>

    )

}

}

const mapStateToProps = state => {
    return {
        houses: state.houses    
 }
}

export default connect(mapStateToProps,{fetchHouses})(HousesContainer)