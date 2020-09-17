import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../store"
import { getDefaultStore } from "../store/stores/storeReducer"
import ErrorComponent from "./ErrorComponent"

const CurrentStore = () => {
  const currentStore = useSelector((state: RootState) => state.stores.currentStore)
  const error = useSelector((state: RootState) => state.stores.errors.current)
  const dispatch = useDispatch()

  // initializes the store
  useEffect(() => {
    if (!currentStore) {
      dispatch(getDefaultStore())
    }
  }, [dispatch, currentStore])

  return !error ? (
    <h5>
      <strong>{currentStore ? currentStore.name : null}</strong>
    </h5>
  ) : <ErrorComponent message="Oletuskauppaa ei voitu ladata" retry_func={() => dispatch(getDefaultStore)} />
}

export default CurrentStore