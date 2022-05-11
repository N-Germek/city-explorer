import './App.css';
// import { render } from '@testing-library/react';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      locationName: ""
    }
  }
  getLocation = async () => {
    const url = `https://us1.locationiq.com/v1/seatch.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;
    const response = await axios.get(url);
    console.log("Response from axios", response.date[0].display_name);
    this.setState({ locationName: response.data[0].display_name });
  }


render() {
  console.log("this.state in App.js: ", this.state);
  return (
    <div className="App">
      <h1>Welcome to City Explorer</h1>
      <input onChange={(event) => this.setState({ searchQuery: event.target.value })}
        placeholder="search for a city!"
      />
      <button onClick={this.getLocation}>Explore!</button>
      {this.state.locationName &&
        <h2>The city you searched for is{this.state.locationName}</h2>
      }
    </div>
  );
}
}

export default App;
