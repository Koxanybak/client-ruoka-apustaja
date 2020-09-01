import React from "react"
import { Form, Card, Button } from "react-bootstrap"

const ListForm = () => {
  const [listState, setListState] = React.useState([{
    field1: "",
    field2: "",
  }])

  // The input element
  interface CardProps {
    index: number;
    updateField1: (newField1: string, index: number) => void;
  }
  const ListElemInput: React.FC<CardProps> = React.memo(({ index, updateField1 }) => {
    const changeListState = (event: React.ChangeEvent<HTMLInputElement>) => {
      updateField1(event.target.value, index)
    }
    // this gets logged when a letter is typed into the input and then it gets deselected
    console.log("ListElemInput rendered")

    return (
      <Card>
        <Card.Body>
          <Form.Group controlId="eleminput">
            <Form.Label>Hakusanat</Form.Label>
            <Form.Control
              placeholder="placeholder"
              value={listState[index].field1}
              onChange={changeListState}
            />
          </Form.Group>
        </Card.Body>
      </Card>
    )
  })

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    // submit stuff
  }

  // Method that updates the field1 of the indexed object in the list state
  const updateField1 = React.useCallback((newField1: string, index: number) => {
    const newList = listState.slice(0, listState.length)
    newList[index] = { ...newList[index], field1: newField1 }
    setListState(newList)
  }, [])

  // adds a new element to the list
  const addNewListElem = () => {
    setListState(listState.concat({ field1: "", field2: "" }))
  }

  return (
    <Form onSubmit={handleSubmit}>
      {
        listState.map((pso, i) => {
          return (
            <ListElemInput key={i} index={i} updateField1={updateField1} />
          )
        })
      }
      <Button onClick={addNewListElem}>New list elem</Button>
      <Button type="submit">Submit</Button>
    </Form>
  )
}