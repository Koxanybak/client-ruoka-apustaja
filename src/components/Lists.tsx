import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  hidden: {
    display: "none",
  },
})

const Lists: React.FC<{ show: boolean }> = ({ show }) => {
  const classes = useStyles()
  return (
    <div className={show ? undefined : classes.hidden}>
      
    </div>
  )
}

export default Lists