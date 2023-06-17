import { Form, useNavigate } from "react-router-dom"

import './register.styles.css'

const Register = () => {
    const nav = useNavigate()

    return <div>
        <Form<CreateUserData>
            initialState={{
                name: "",
                username: "",
                password: "",
            }}
            schema={CreateSchema}
            onSubmit={(data) => {
                UserService
                    .register(data)
                    .then()
                    .catch((error) => {
                        console.log(error)
                    })
            }}
            cleanOnChange
        >
            <Input id="name" label="Name"/>
            <Input id="username" label="Username"/>
            <Input id="password" label="Password" type="password"/>
            <Field.Connect>
                {({ submit }) => <button onClick={(event) => {
                    event.preventDefault();
                    submit()
                }}>Register</button>}
            </Field.Connect>
        </Form>
    </div>
}

export default Register;