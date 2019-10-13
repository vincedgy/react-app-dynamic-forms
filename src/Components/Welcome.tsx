import React from 'react'
import { Container, Button } from 'semantic-ui-react'
import Form from 'react-jsonschema-form'
import { JSONSchema6 } from 'json-schema'

const schemaForm: JSONSchema6 = {
  title: 'Please fill the form',
  definitions: {
    address: {
      type: 'object',
      properties: {
        street_address: { type: 'string' },
        city: { type: 'string' },
        state: { type: 'string' }
      },
      required: ['street_address', 'city', 'state']
    }
  },
  type: 'object',
  required: ['title'],
  properties: {
    title: { type: 'string', title: 'Title', default: 'A new task' },
    done: { type: 'boolean', title: 'Done?', default: false },
    'Billing address': { $ref: '#/definitions/address' },
    'Shipping address': { $ref: '#/definitions/address' }
  }
}

const formData: any = {
  title: 'First task',
  done: true
}

const doSubmit: any = ({ formData }: any) => {
  console.log(formData)
}

const Welcome = (props: any) => {
  return (
    <>
      <Container>
        <h1>Let's know each other !</h1>
        <Form
          schema={schemaForm}
          onChange={() => console.log('changed')}
          onSubmit={doSubmit}
          onError={() => console.log('errors')}
          formData={formData}
        >
          <>
            <Button type='submit' primary>
              Submit
            </Button>
            <Button type='button'>Cancel</Button>
          </>
        </Form>
      </Container>
    </>
  )
}

export default Welcome
