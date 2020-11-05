import React from 'react'
import {connect} from 'react-redux'
import {addHouse} from '../actions/addHouse'
class HouseInput extends React.Component {

state = {
    house_address:''
}

handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value

    })
}

handleSubmit = (event) => {
    event.preventDefault()
    this.props.addHouse(this.state)
}

render() {
    return (
    <div> 
     <form onSubmit={this.handleSubmit}>
         <label>house address: </label>
         <input type="string" placeholder='house_address' value={this.state.house_address} name="house_address" onChange={this.handleChange}/>
         <input type="submit"/>
     </form>   
    </div>
   
       )
   
   }
   
   }
   
   export default connect(null,{addHouse})(HouseInput)
