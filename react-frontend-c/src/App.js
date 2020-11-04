import React from 'react';
// import {connect} from 'react-redux'
//  import {fetchHouses } from './actions/fetchHouses';
import HousesContainer from './containers/HousesContainer'


class  App extends React.Component {

// componentDidMount() {
//   this.props.fetchHouses({type: 'FETCH_HOUSES', payload: {address:'testaddress' }})
// fetch('http://localhost:3000/api/v1/houses', {
//   method: 'GET'
// })
// .then(response => response.json())
// .then(data => console.log(data))
// }


  render() {
  return (
    <div className="App">
      <HousesContainer/>
    </div>
  );
}
}



// export default connect()(App);
export default App;
