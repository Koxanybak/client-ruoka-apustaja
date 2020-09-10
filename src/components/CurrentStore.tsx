import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../store"
import { getDefaultStore } from "../store/stores/storeReducer"

const CurrentStore = () => {
  const currentStore = useSelector((state: RootState) => state.stores.currentStore)
  const dispatch = useDispatch()

  // initializes the store
  useEffect(() => {
    console.log("Switching to default store")
    dispatch(getDefaultStore())
  }, [dispatch])

  return (
    <h5>
      <strong>{currentStore ? currentStore.name : null}</strong>
    </h5>
  )
}

export default CurrentStore