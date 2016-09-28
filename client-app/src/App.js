import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link } from 'react-router'

class App extends React.Component {
  constructor(props) {
    super(props);

    // Set an empty set of calendar items
    this.state = { calendar: { items: [] } }

    // If we have a token in the query
    if (this.props.location.query.token)
    {
      // Save away the JWT token
      this.state.token = this.props.location.query.token

      // Fetch the calendars
      window.fetch('http://localhost:3000/calendar', {
        headers: {
          // JSON
          'Content-Type': 'application/json',
          // Set the access token
          'Authorization': 'Bearer ' + this.state.token
        }
      })
      .then((response) => response.json())
      .then((data) => {
        // Set the calendar data
        this.setState({calendar: data})
      })
    }
  }

  render() {
    return (
      <div>
        <p>Calendar has {this.state.calendar.items.length} items</p>
        <ul>
          <li><a href="http://localhost:3000/oauth2authorize">Login</a></li>
        </ul>
      </div>
    )
  }
}

export default App;
