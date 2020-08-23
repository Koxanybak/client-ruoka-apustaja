import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getAllStores } from "../store/store/storeReducer"
import { RootState } from "../store";
import { Row, Card, Container, Modal, Nav } from "react-bootstrap";
import { setCurrentStore } from "../store/system/systemReducer";

const StoreContainer = () => {
  const stores = useSelector((state: RootState) => state.stores)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllStores())
  }, [dispatch])

  return (
    <Container>
      {
        stores.map(store => {
          return (
            <Row key={store.id}>
              <Nav.Link onClick={() => dispatch(setCurrentStore(store))}>
                {`${store.name}, ${store.city}`}
              </Nav.Link>
              {/* <Card>
                <Card.Body>
                  <Card.Title>{store.name}</Card.Title>
                  <Card.Subtitle>{store.city}</Card.Subtitle>
                </Card.Body>
              </Card> */}
            </Row>
          )
        })
      }
    </Container>
  )
}

const Stores: React.FC<{ show: boolean; onHide: React.Dispatch<React.SetStateAction<void>> }> = (props) => {

  return (
    <Modal {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Valitse kauppa
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <StoreContainer />
      </Modal.Body>
    </Modal>
  )
}

export default Stores