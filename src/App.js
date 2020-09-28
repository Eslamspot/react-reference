import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
// The below line use to import data from file, We don't need it because we used API
// import { robots } from "./components/robots";
import CardList from "./components/cardlist";
import SearchBox from "./components/SearchBox";
import { setSearchField, requestRobots } from "./actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
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

  // We didn't use this function because we moved to redux
  // Function to catch search field in html
  // onSearchChange = (event) => {
  //   this.setState({ searchField: event.target.value });
  // };

  componentDidMount() {
    this.props.onRequestRobots();
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) => this.setState({ robots: users }));
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase().trim());
    });
    return (
      <div className="tc">
        <h1>This is app page</h1>
        <SearchBox searchChange={onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
