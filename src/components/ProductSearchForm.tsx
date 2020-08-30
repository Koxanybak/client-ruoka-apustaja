import React, { useState } from "react"
import { Form, Card, Button } from "react-bootstrap"
import { ProductSearch } from "../store/products/types"

const ProductSearchForm = () => {
  const [productSearchObjs, setProductSearchObjs] = useState<ProductSearch[]>([{
    desc: ""
  }])

  const currentStore = useSelector(state => state.system.currentStore)
  const dispatch = useDispatch()

  const ProductSearchCard: React.FC<{ productSearch: ProductSearch; index: number; }> = ({ productSearch, index }) => {
    const changeProductSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newList = productSearchObjs.slice(0, productSearchObjs.length)
      newList[index] = { ...newList[index], desc: event.target.value }
    }

    return (
      <Card>
        <Card.Body>
          <Form.Group controlId="product-desc">
            <Form.Label>Hakusanat</Form.Label>
            <Form.Control placeholder="Esim. 'kurkku suomi'" onChange={changeProductSearch} />
          </Form.Group>
        </Card.Body>
      </Card>
    )
  }

  const handleSubmit = () => {

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