import React from 'react';
// import MyHeader from './components/MyHeader';
import Photo from './components/Photo';
import HousesContainer from './containers/HousesContainer'
// import Button from './components/Button';

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
      <header className="App-header">
      <HousesContainer/>
      </header>
      <br></br>
      <Photo /> 
    </div>
  );
}
}


{/* <img src="images/architecture-1836070_1920.jpg"></img> */}
// export default connect()(App);
export default App;
