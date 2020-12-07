import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchHouses } from '../actions/fetchHouses'
import Houses from '../components/Houses'
import House from '../components/House'
import HouseInput from '../components/HouseInput'
import NavBarB from '../components/NavBarB'




class HousesContainer extends React.Component {

    componentDidMount() {
       this.props.fetchHouses() 
    }

render() {

    return (
    <div  class="split left"> 
     <NavBarB/>
      <Switch>
      <Route path='/houses/new' component={HouseInput}/>
      <Route path='/houses/:id'render={(routerProps)=> <House {...routerProps} houses={this.props.houses}/>}/>
      <Route  path='/houses'render={(routerProps)=> <Houses  {...routerProps} houses={this.props.houses}/>}/>
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