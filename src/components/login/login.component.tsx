import React, { Component } from 'react'
// Relative Imports
import './login.styles.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
    }
  }

  handleChange = (event) => {
    const user = event.target.value

    event.preventDefault()

    this.setState(() => ({
      user
    }))
  }

  handleSubmit = (event) => {
  }

  render () {
    return (
      <div className="container center">
        <h1>Login</h1>
        <form
          onSubmit={this.handleSubmit}
        >
          { users.length === 0 &&
            'Loading...'
          }
          { users.length > 0 && (
              <div className="center login-select">
                <select
                  ref={this.userToLogIn}
                  onChange={this.handleChange}
                >
                  <option value="default">Select an user</option>
                  {users.map(user => (
                    <option
                      key={user.id}
                      value={user.id}
                    >
                      {user.name}
                    </option>
                  ))}
                </select>
                <button className="btn login-button">
                  Login
                </button>
              </div>
            )
          }
        </form>
      </div>
    )
  }
}

export default Login
