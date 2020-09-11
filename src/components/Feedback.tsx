import React from "react"
import { Alert } from "react-bootstrap"
import { useSelector } from "react-redux"
import { RootState } from "../store"

const Feedback = () => {
  const feedback = useSelector((state: RootState) => state.system.feedback)

  if (feedback === null) return null

  return (
    <Alert show={true} variant={feedback.variant}>
      <p>{feedback.message}</p>
    </Alert>
  )
}