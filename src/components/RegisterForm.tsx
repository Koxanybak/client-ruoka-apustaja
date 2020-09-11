import { Formik, Field, Form as FForm } from "formik"
import React from "react"
import { Button, Form } from "react-bootstrap"
import * as yup from "yup"

interface LoginValues {
  username: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().required("Anna käyttäjänimi").max(20, "joo").min(4, "tää :D").trim().strict(true),
  password: yup.string().required("Anna salasana").max(50, "tää :D").min(9, "tää :D").trim().strict(true),
})

const RegisterForm = () => {
  const initial_values: LoginValues = { username: "", password: "" }

  return (
    <div>
      <h3>Luo käyttäjä</h3>
      <Formik
        initialValues={initial_values}
        onSubmit={async (values) => {
          
        }}
        validationSchema={schema}
        validateOnChange
      >
        {({ isSubmitting, errors, touched, values }) => (
          <FForm>
            <Form.Label>Käyttäjänimi</Form.Label>
            <Field
              name="username"
              placeholder="Käyttäjänimi"
              as={Form.Control}
            />
            {errors.username && touched.username ? (
              <Form.Control.Feedback>
                Käyttäjänimen pitään olla 4-20 merkkiä.
              </Form.Control.Feedback>
            ) : null}
            <Form.Label>Salasana</Form.Label>
            <Field
              name="password"
              placeholder="Salasana"
              type="password"
              as={Form.Control}
            />
            {errors.password && touched.password ? (
              <Form.Control.Feedback>
                Salasanan pitää olla 9-50 merkkiä.
              </Form.Control.Feedback>
            ) : null}
            <Button variant="primary" type="submit" disabled={isSubmitting}>Luo käyttäjä</Button>
            {JSON.stringify(values, null, 2)}
            {console.log(errors, touched)}
          </FForm>
        )}
      </Formik>
    </div>
  )
}

export default RegisterForm