import React, { useState } from "react"
import { Form, Card } from "react-bootstrap"
import { ProductSearch } from "../../store/products/types"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { getSearchResult } from "../../store/products/productReducer"
import Button from "../Button";


const ProductSearchForm = () => {
  const [productSearchObjs, setProductSearchObjs] = useState<ProductSearch[]>([{
    desc: "",
    id: 0,
  }])

  // TODO: VALIDATE THE FORM, CURRENTSTORE CANNOT BE NULL

  const currentStore = useSelector((state: RootState) => state.system.currentStore)
  const dispatch = useDispatch()

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(getSearchResult({
      storeID: currentStore ? currentStore.id : 0,
      productSearches: productSearchObjs.map(pso => ({ desc: pso.desc })),
    }))
  }

  const addNewProductSearch = () => {
    setProductSearchObjs(productSearchObjs.concat({
      desc: "",
      id: Math.max(...productSearchObjs.map(pso => pso.id ? pso.id : 0)) + 1
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
      <Button primary onClick={addNewProductSearch}>Lisää tuote</Button>
      <Button primary type="submit">Hae ostoslistaa</Button>
    </Form>
  )
}

export default ProductSearchForm