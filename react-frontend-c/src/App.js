import React from 'react';


class  App extends React.Component {

componentDidMount() {
fetch('http://localhost:3000/api/v1/houses', {
  method: 'GET'
})
.then(response => response.json())
.then(data => console.log(data))
}


  render() {
  return (
    <div className="App">
      Open House App
    </div>
  );
}
}


export default App;