import './App.css';
import React from 'react';
import axios from 'axios';
import Search from './Search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      locationName: ""
    }
  }
  getLocation = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;
    const response = await axios.get(url);
    console.log("Response from axios", response.data[0].display_name);
    this.setState({ locationName: response.data[0]});
  }

  changeHandler = (e) => {
    this.setState({
      searchQuery: e.target.value
    })
  }

render() {
  console.log("this.state in App.js: ", this.state);
  return (
    <div className="App">
      <h1>Welcome to City Explorer</h1>
      <Search changeHandler={this.changeHandler} getLocation={this.getLocation}/>
      
      {this.state.locationName &&
        <h2>The city you searched for is {this.state.locationName.display_name} Longitute{this.state.longitude} Latitude {this.state.latitude}</h2>
      }
    </div>
  );
}
}

export default App;
