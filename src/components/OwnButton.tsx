import React, { useState } from "react"
import { createUseStyles } from "react-jss"

const buttonColor = "#d99b02"

const basePrimary = {
  border: `2px solid ${buttonColor}`,
    borderRadius: "15px",
    color: buttonColor,
    padding: "0.3em",
    background: "#ffffff",
}

const useStyles = createUseStyles({
  primaryButton: {
    ...basePrimary,
  },
  secondaryButton: {

  },
  highlightedButton: {
    ...basePrimary,
    background: "#ffebc4"
  }
})

const OwnButton: React.FC<{ primary?: boolean } & React.ComponentPropsWithoutRef<"button">> = ({ children, primary=false, ...props }) => {
  const classes = useStyles()
  const defaultClass = primary ? classes.primaryButton : classes.secondaryButton
  const [className, setClassName] = useState(defaultClass)

  return (
    <button
      onMouseEnter={() => setClassName(classes.highlightedButton)}
      {...props}
      className={className}
      onMouseLeave={() => setClassName(defaultClass)}
    >
      {children}
    </button>
  )
}

export default OwnButton