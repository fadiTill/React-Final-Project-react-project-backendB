import React from 'react'
import {connect} from 'react-redux'
import {fetchHouses } from '../actions/fetchHouses'
import {Route} from 'react-router-dom'
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
    <Route path='/houses/new' components={HouseInput}/>
 {/* <HouseInput/> <br></br> */}
    <Route path='/houses/:id'render={(...routerProps)=> <Houses houses={this.props.Houses}/>}/>
     <Route exact path='/houses' render={(...routerProps)=> <Houses houses={this.props.Houses}/>} />
 {/* <Houses houses={this.props.houses}/> */}
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