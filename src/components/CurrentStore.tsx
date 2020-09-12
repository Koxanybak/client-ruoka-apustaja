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
    console.log("Switching to default store")
    dispatch(getDefaultStore())
  }, [dispatch])

  return !error ? (
    <h5>
      <strong>{currentStore ? currentStore.name : null}</strong>
    </h5>
  ) : <ErrorComponent resource="Oletuskauppaa" retry_func={() => dispatch(getDefaultStore)} />
}

export default CurrentStore