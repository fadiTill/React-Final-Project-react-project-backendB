import React from 'react'
import {connect} from 'react-redux'
import {addGuest} from '../actions/addGuest'


// t.string "name"
// t.string "phone_number"
// t.string "guest_address"
// t.string "email"
// t.string "time_line"
// t.string "comment"


class GuestInput extends React.Component {

  state = {
    name:'',
    phone_number:'',
    guest_address:'',
    time_line:'long term',
    email:'',
    comment:''

}


handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value

})
}
handleSubmit = (event) => {
  event.preventDefault()
    this.props.addGuest(this.state,this.props.house.id)
   this.setState ({
    name:'',
    phone_number:'',
    guest_address:'',
    time_line:'long term',
    email:'',
    comment:''
   })
}

render() {
  return (
<div>
  <form onSubmit={this.handleSubmit}>
    <label>Timeline:</label>
    <select name="time_line" value={this.state.time_line} onChange={this.handleChange}>
      <option>year</option>
      <option>6 months</option>
      <option>now</option>
      <option>long term</option>
    </select>

    <label>name:</label>
  <input type="string" name="name" value={this.state.name} onChange={this.handleChange}/>
    <label>phone number:</label>
    <input type="string" name="phone_number" value={this.state.phone_number}onChange={this.handleChange}/>
    <label>guest address:</label>
    <input type="string"name="guest_address"value={this.state.guest_address}onChange={this.handleChange}/>
    <label>email:</label>
    <input type="string"name="email"value={this.state.email}onChange={this.handleChange}/>
    <label>comment:</label>
    <input type="string"name="comment"value={this.state.comment}onChange={this.handleChange}/>
    <input type="submit"/>
  </form>
</div>
  )  
}

}

// export default connect(null)(GuestInput)
export default connect(null,{addGuest})(GuestInput)
