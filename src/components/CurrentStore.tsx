import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store"

const CurrentStore = () => {
  const currentStore = useSelector((state: RootState) => state.system.currentStore)

  return (
    <h5>
      <strong>{currentStore ? currentStore.name : null}</strong>
    </h5>
  )
}

export default CurrentStore