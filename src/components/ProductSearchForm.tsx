import React, { useState } from "react"
import { Form, Card, Button } from "react-bootstrap"
import { ProductSearch } from "../../store/products/types"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { getSearchResult } from "../../store/products/productReducer"

const ProductSearchForm = () => {
  const [productSearchObjs, setProductSearchObjs] = useState<ProductSearch[]>([{
    desc: ""
  }])

  // TODO: VALIDATE THE FORM, CURRENTSTORE CANNOT BE NULL

  const currentStore = useSelector((state: RootState) => state.system.currentStore)
  const dispatch = useDispatch()

  interface CardProps {
    productSearch?: ProductSearch;
    index: number;
    updateDesc: (newDesc: string, index: number) => void;
  }
  const ProductSearchCard: React.FC<CardProps> = React.memo(({ index, updateDesc }) => {
    const changeProductSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      updateDesc(event.target.value, index)
    }
    console.log("ProductSearchCrad rendered")

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
  })

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(getSearchResult({ storeID: currentStore ? currentStore.id : 0, productSearches: productSearchObjs, }))
  }

  const updateDesc = React.useCallback((newDesc: string, index: number) => {
    const newList = productSearchObjs.slice(0, productSearchObjs.length)
    newList[index] = { ...newList[index], desc: newDesc }
    setProductSearchObjs(newList)
  }, [])

  const addNewProductSearch = () => {
    setProductSearchObjs(productSearchObjs.concat({ desc: "" }))
  }

  return (
    <Form onSubmit={handleSubmit}>
      {
        productSearchObjs.map((pso, i) => {
          return (
            <ProductSearchCard key={i} index={i} updateDesc={updateDesc} />
          )
        })
      }
      <Button onClick={addNewProductSearch}>Lisää tuote</Button>
      <Button type="submit">Hae ostoslistaa</Button>
    </Form>
  )
}

export default ProductSearchForm