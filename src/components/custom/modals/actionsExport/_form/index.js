import React from 'react'
import {
  CardBody, Col, Row, Button,
} from 'reactstrap'
import { Download } from 'react-feather'

import { Formik, Form } from 'formik'
import { FormGroup, FormSubmit } from '../../..'
import { actionSchema } from './_validation'
import { initialValues } from './_initialValues'
import { configForm, areas } from './_config'

const FormUI = (props) => {
  const {
    handleSubmit, placeholder, title, options, onClose, items, user,
  } = props
  const config = (user.role !== 'chief_of_area') ? configForm.concat([areas]) : configForm
  const handleDownload = (link) => {
    document.getElementById('form-actions-export').reset()
    document.body.appendChild(link)
    link.click()
  }
  return (

    <CardBody>
      <Formik
        initialValues={placeholder || initialValues}
        validationSchema={actionSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {() => (
          <Form id="form-actions-export">
            {
              config.map((row) => (
                <Row key={row[0].key}>
                  {
                    row.map((item) => {
                      if (options && item.options) {
                        Object.assign(item, { ...item, options })
                      }
                      return (
                        <Col sm={item.grid} key={item.key}>
                          <FormGroup {...item} />
                        </Col>
                      )
                    })
                  }
                </Row>
              ))
            }
            <Row>
              <Col>
                {
                  items && (
                    <Button color="primary" onClick={() => handleDownload(items)}>
                      <Download size={14} />
                        &nbsp;Descargar
                    </Button>
                  )
                }
              </Col>
            </Row>
            <FormSubmit onClose={onClose} title={title} />
          </Form>
        )}
      </Formik>
    </CardBody>

  )
}

export default FormUI
