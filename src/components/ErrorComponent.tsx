import React from "react"
import { Alert, Button } from "react-bootstrap"

const ErrorComponent: React.FC<{ message: string, retry_func: any, status?: number; }> = ({ message, retry_func, status }) => {
  return (
    <Alert show={true} variant="secondary">
      <p>{status} {message} <Button onClick={retry_func} variant="link">Yritä uudelleen</Button></p>
    </Alert>
  )
}

export default ErrorComponent