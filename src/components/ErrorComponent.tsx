import React from "react"
import { Alert, Button } from "react-bootstrap"

const ErrorComponent: React.FC<{ resource: string, retry_func: any }> = ({ resource, retry_func }) => {
  return (
    <Alert show={true} variant="secondary">
      <p>{resource} ei voitu ladata. <Button onClick={retry_func} variant="link">Yritä uudelleen</Button></p>
    </Alert>
  )
}

export default ErrorComponent