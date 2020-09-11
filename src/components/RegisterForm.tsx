import { Formik, Field, Form as FForm } from "formik"
import React from "react"
import { Button, Form } from "react-bootstrap"
import { useHistory } from "react-router"
import * as yup from "yup"
import { createUser } from "../services/users"

interface LoginValues {
  username: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().required("Anna käyttäjänimi").max(20, "joo").min(4, "tää :D").trim().strict(true),
  password: yup.string().required("Anna salasana").max(50, "tää :D").min(9, "tää :D").trim().strict(true),
})

const RegisterForm = () => {
  const history = useHistory()
  const initial_values: LoginValues = { username: "", password: "" }

  return (
    <div>
      <h3>Luo käyttäjä</h3>
      <Formik
        initialValues={initial_values}
        onSubmit={async (values) => {
          createUser(values)
            .then(() => {
              history.push("/")
            })
            .catch(err => {
              console.log({...err})
            })
        }}
        validationSchema={schema}
        validateOnChange
      >
        {(
          {
            isSubmitting,
            errors,
            touched,
            values, 
            handleChange,
          }
        ) => (
          <FForm>
            <Form.Group>
              <Form.Label>Käyttäjänimi</Form.Label>
              <Form.Control
                onChange={handleChange}
                placeholder="Käyttäjänimi"
                name="username"
                isInvalid={!!errors.username && !!touched.username}
              />
              <Form.Control.Feedback type="invalid">
                Käyttäjänimen pitää olla 4-20 merkkiä.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Salasana</Form.Label>
              <Form.Control
                onChange={handleChange}
                placeholder="Salasana"
                type="password"
                name="password"
                isInvalid={!!errors.password && !!touched.password}
              />
              <Form.Control.Feedback type="invalid">
                Salasanan pitää olla 9-50 merkkiä.
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" disabled={isSubmitting}>Luo käyttäjä</Button>
            {JSON.stringify(values, null, 2)}
          </FForm>
        )}
      </Formik>
    </div>
  )
}

export default RegisterForm