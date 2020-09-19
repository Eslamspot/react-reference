import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
// import { robots } from "./components/robots";
import CardList from "./components/cardlist";
import SearchBox from "./components/SearchBox";
import { setSearchField } from "./actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  // Function to catch search field in html
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    console.log("this.state.store-----------");
    console.log(this.props.store);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase().trim());
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
