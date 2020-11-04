import React from 'react'
import {connect} from 'react-redux'
import {fetchHouses } from '../actions/fetchHouses'

import Houses from '../components/Houses'
import HouseInput from '../components/HouseInput'



class HousesContainer extends React.Component {

    componentDidMount() {
       this.props.fetchHouses() 
    }

render() {

    return (
    <div> 
<HouseInput/>
 <Houses houses={this.props.houses}/>
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