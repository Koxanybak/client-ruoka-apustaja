import React from "react"
import { createUseStyles } from "react-jss"
import { useSelector } from "react-redux"
import { RootState } from "../store"

const useStyles = createUseStyles({
  hidden: {
    display: "none",
  },
})

const ShoppingLists: React.FC<{ show: boolean }> = ({ show }) => {
  const classes = useStyles()
  const shopping_lists = useSelector((state: RootState) => state.shopping_lists.shopping_lists)

  return (
    <div className={show ? undefined : classes.hidden}>
      {shopping_lists 
        ?
          <ul>
            {shopping_lists.map(sl => (
              <div key={sl.id}>
                {sl.name}
              </div>
            ))}
          </ul>
        :
          <div>
            Ladataan...
          </div>
      }
    </div>
  )
}

export default ShoppingLists