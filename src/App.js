import './App.css';
import React from 'react';
import axios from 'axios';
import Search from './Search';
import Map from './Map';
import Error from './Error';
import Weather from './Weather';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      locationName: "",
      errorMessage: "",
      weatherData: []
    }
  }
  getLocation = async (e) => {
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;
      const response = await axios.get(url);
      console.log("Response from axios", response.data[0].display_name);
      this.setState({
        locationName: response.data[0],
        errorMessage:""
      });
    } catch (err) {
      console.log(err.message);
      this.errorHandler(err);
    }
    this.getWeather();
  }


  getWeather = async (e) => {
    try {
      const url = `http://localhost:3001/weather?type=${this.state.searchQuery}`;
      const response = await axios.get(url);
      console.log("Response from axios", response.data);
      this.setState({
        weatherData: response.data,
        errorMessage:""
      });
    } catch (err) {
      console.log(err.message);
      this.errorHandler(err);
    }
  }

  changeHandler = (e) => {
    this.setState({
      searchQuery: e.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    this.getLocation();
  }
  errorHandler = (err) => {
    this.setState({
      errorMessage: err.message,
      locationName: ""
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to City Explorer</h1>
        <Search changeHandler={this.changeHandler} handleClick={this.handleClick} />

        {this.state.locationName &&
          <>
            <h2>The city you searched for is {this.state.locationName.display_name} Longitute{this.state.locationName.lon} Latitude {this.state.locationName.lat}</h2>
            <Map locationName={this.state.locationName} />
            <Weather weatherData={this.state.weatherData} />
          </>
        }
        {this.state.errorMessage &&
          <>
            <Error errorMessage={this.state.errorMessage}></Error>
          </>}
      </div>
    );
  }
}

export default App;
