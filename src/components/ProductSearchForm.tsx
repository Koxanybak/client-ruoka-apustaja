import React, { useState } from "react"
import { Form, Card, Button } from "react-bootstrap"
import { ProductSearch } from "../store/products/types"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { getSearchResult } from "../store/products/productReducer"

const ProductSearchForm = () => {
  const [productSearchObjs, setProductSearchObjs] = useState<ProductSearch[]>([{
    desc: ""
  }])

  // TODO: VALIDATE THE FORM, CURRENTSTORE CANNOT BE NULL

  const currentStore = useSelector((state: RootState) => state.system.currentStore)
  const dispatch = useDispatch()

  const ProductSearchCard: React.FC<{ productSearch: ProductSearch; index: number; }> = ({ productSearch, index }) => {
    const changeProductSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newList = productSearchObjs.slice(0, productSearchObjs.length)
      newList[index] = { ...newList[index], desc: event.target.value }
      setProductSearchObjs(newList)
    }

    return (
      <Card>
        <Card.Body>
          <Form.Group controlId="product-desc">
            <Form.Label>Hakusanat</Form.Label>
            <Form.Control placeholder="Esim. 'kurkku suomi'" value={productSearchObjs[index].desc} onChange={changeProductSearch} />
          </Form.Group>
        </Card.Body>
      </Card>
    )
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(getSearchResult({ storeID: currentStore ? currentStore.id : 0, productSearches: productSearchObjs, }))
  }

  const addNewProductSearch = () => {
    setProductSearchObjs(productSearchObjs.concat({ desc: "" }))
  }

  return (
    <Form onSubmit={handleSubmit}>
      {
        productSearchObjs.map((pso, i) => {
          return (
            <ProductSearchCard key={i} productSearch={pso} index={i} />
          )
        })
      }
      <Button onClick={addNewProductSearch}>Lisää tuote</Button>
      <Button type="submit">Hae ostoslistaa</Button>
    </Form>
  )
}

export default ProductSearchForm