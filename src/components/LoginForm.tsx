import React from "react"
import { Modal, Form, Button } from "react-bootstrap"
import { Formik, Field, Form as FForm } from "formik"
import { login } from "../services/users"
import { useDispatch } from "react-redux"
import { set_feedback, set_logged_user } from "../store/system/systemReducer"

interface LoginValues {
  username: string;
  password: string;
}

const LoginForm: React.FC<{ show: boolean, onHide: React.Dispatch<React.SetStateAction<void>> }> = ({ show, onHide }) => {
  const initial_values: LoginValues = { username: "", password: "" }
  const dispatch = useDispatch()

  const handleLogin = (values: LoginValues) => {
    login(values)
      .then(data => {
        dispatch(set_logged_user(data))
        set_feedback("Kirjautuminen onnistui.", "success")
        onHide()
      })
      .catch(err => {
        console.log({...err})
        dispatch(set_feedback(err.response?.data?.error, "danger"))
      })
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Kirjaudu sisään</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={initial_values}
          onSubmit={async ( values, actions) => {
            await handleLogin(values)
          }}
        >
          {({ isSubmitting }) => (
            <FForm>
              <Form.Label>Käyttäjänimi</Form.Label>
              <Field
                name="username"
                placeholder="Käyttäjänimi"
                as={Form.Control}
              />
              <Form.Label>Salasana</Form.Label>
              <Field
                name="password"
                placeholder="Salasana"
                type="password"
                as={Form.Control}
              />
              <Modal.Footer>
                <Button variant="primary" type="submit" disabled={isSubmitting}>Kirjaudu</Button>
                {/* <Button variant="link" onClick={() => history.push("/register")}>Tai rekisteröidy</Button> */}
                <a href="/register">Tai rekisteröidy</a>
              </Modal.Footer>
            </FForm>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  )
}

export default LoginForm