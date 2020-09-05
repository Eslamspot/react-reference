import React, { Component } from "react";
import "./App.css";
// import { robots } from "./components/robots";
import CardList from "./components/cardlist";
import SearchBox from "./components/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  // Function to catch search field in html
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase().trim());
    });
    return (
      <div className="tc">
        <h1>This is app page</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
