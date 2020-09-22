import React from "react"
import { Alert } from "react-bootstrap"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  notification: {
    position: "fixed",
    top: "90%",
    left: "50%",
    zIndex: 2147483647,
  }
})

const Notification = () => {
  const feedback = useSelector((state: RootState) => state.system.feedback)
  const classes = useStyles()

  if (feedback === null) return null

  return (
    <Alert show={true} variant={feedback.variant} className={classes.notification}>
      <p>{feedback.message ? feedback.message : "Jotain meni vikaan :("}</p>
    </Alert>
  )
}

export default Notification