import React, { useState } from "react"
import { Form, Card } from "react-bootstrap"
import { ProductSearch } from "../store/products/types"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import OwnButton from "./OwnButton";
import qs from "qs"
import { useHistory } from "react-router"


const ProductSearchForm = () => {
  const [productSearchObjs, setProductSearchObjs] = useState<ProductSearch[]>([{
    desc: "",
    id: 0,
  }])
  const history = useHistory()

  // TODO: VALIDATE THE FORM, CURRENTSTORE CANNOT BE NULL

  const currentStore = useSelector((state: RootState) => state.system.currentStore)

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    history.push(`/search${qs.stringify(
    {
      storeID: currentStore ? currentStore.id : 0,
      productSearches: productSearchObjs.map(pso => ({ desc: pso.desc })),
    },
    {
      addQueryPrefix: true,
    })}`)
  }

  const addNewProductSearch = () => {
    setProductSearchObjs(productSearchObjs.concat({
      desc: "",
      id: Math.max(...productSearchObjs.map(pso => pso.id ? pso.id : 0)) + 1,
    }))
  }

  return (
    <Form onSubmit={handleSubmit}>
      {
        productSearchObjs.map((pso, i) => {
          return (
            <Card key={pso.id}>
              <Card.Body>
                <Form.Group controlId="product-desc">
                  <Form.Label>Hakusanat</Form.Label>
                  <Form.Control
                    placeholder="Esim. 'kurkku suomi'"
                    value={pso.desc}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      const newDesc = event.target.value
                      setProductSearchObjs(
                        (crntSearches) => crntSearches.map(p => p.id === pso.id ? { ...p, desc: newDesc } : p)
                      )
                    }}
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          )
        })
      }
      <OwnButton primary type="button" onClick={addNewProductSearch}>Lisää tuote</OwnButton>
      <OwnButton primary type="submit">Hae ostoslistaa</OwnButton>
    </Form>
  )
}

export default ProductSearchForm