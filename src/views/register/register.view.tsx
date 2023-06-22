import { useNavigate } from "react-router-dom"

import { User as UserService } from '../../services';
import './register.styles.css'

const Register = () => {
  const nav = useNavigate()

  const handleSubmit = (username: string, password: string) => {
    UserService
      .register({ username: "", password: "", name: "", balance: 0 })
      .then((user) => {
        console.info(user)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return /** 
    <div className="container center">
      <h1>Register</h1>
      <form
        onSubmit={handleSubmit}
      >
        <label for="name" label="name">Name</label>
        <input id="name" type="text">

        <label for="username" label="username">Username</label>
        <input id="username" type="text">

        <label for="password" label="password">Password</label>
        <input id="username" type="password">

        <label for="balance" label="balance">Balance</label>
        <input id="balance" type="number">

        <button className="btn register-button">Register</button>

      </form>
    </div>*/
}

export default Register;