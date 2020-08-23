import React from "react"
import { Form, Card } from "react-bootstrap"

const ProductSearchForm = () => {
  return (
    <Form>
      <Card>
        <Card.Body>
          <Form.Group controlId="product-desc">
            <Form.Label>Hakusanat</Form.Label>
            <Form.Control placeholder="Esim. 'kurkku suomi'" />
          </Form.Group>
        </Card.Body>
      </Card>
    </Form>
  )
}

export default ProductSearchForm