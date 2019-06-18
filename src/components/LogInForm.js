import React from 'react'
import { Form, Button } from 'react-bootstrap'

function LogInForm(props) {
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Text>Username:</Form.Text>
                <Form.Control type="email" placeholder="default user JessJelly" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
  </Button>
        </Form>
    )
}

export default LogInForm