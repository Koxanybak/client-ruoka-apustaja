import { Form as FForm, Formik } from "formik"
import React, { useState } from "react"
import { Form } from "react-bootstrap"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import { create_shopping_list } from "../store/shoppinglists/shoppinglistReducer"
import { User } from "../store/system/types"
import OwnButton from "./OwnButton"


type Props = {
  user: User,
}

const NewShoppingList: React.FC<Props> = ({ user }) => {
  // show the new shopping list from
  const [show_form, set_show_form] = useState(false)
  const current_store = useSelector((state: RootState) => state.stores.currentStore)

  if (!current_store) return null

  return (
    <div>
      {show_form
        ?
          <Formik
            initialValues={{ name: "" }}
            onSubmit={async ({ name }) => {
              set_show_form(false)
              await create_shopping_list(user, current_store.id, {
                name: name ? name : undefined
              })
            }}
          >
            {({ handleChange, values }) => (
              <FForm>
                <Form.Group>
                  <Form.Label>Ostoslistan nimi</Form.Label>
                  <Form.Control
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <OwnButton primary type="submit">Luo</OwnButton>
              </FForm>
            )}
          </Formik>
        :
          <OwnButton
            onClick={() => set_show_form(true)}
            primary
          >
            Uusi ostoslista
          </OwnButton>
      }
    </div>
  )
}

export default NewShoppingList