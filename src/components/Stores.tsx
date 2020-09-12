import React, { useEffect, } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getAllStores } from "../store/stores/storeReducer"
import { RootState } from "../store";
import { Row, Container, Modal, Nav } from "react-bootstrap";
import { setCurrentStore } from "../store/system/systemReducer";
import ErrorComponent from "./ErrorComponent";

const StoreContainer = () => {
  const stores = useSelector((state: RootState) => state.stores.all)
  const error = useSelector((state: RootState) => state.stores.errors.all)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllStores())
  }, [dispatch])

  return !error ? (
    <Container>
      {
        stores.map(store => {
          return (
            <Row key={store.id}>
              <Nav.Link onClick={() => dispatch(setCurrentStore(store))}>
                {`${store.name}, ${store.city}`}
              </Nav.Link>
            </Row>
          )
        })
      }
    </Container>
  ) : <ErrorComponent resource="Kauppoja" retry_func={() => dispatch(getAllStores)} />
}

const Stores: React.FC<{ show: boolean; onHide: React.Dispatch<React.SetStateAction<void>> }> = (props) => {

  return (
    <Modal
      {...props}
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