import React from 'react'
import { Offcanvas } from 'react-bootstrap'

export const Panel = props => {
  const { show, onClose } = props

  return (
    <>
      <Offcanvas show={show} onHide={onClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>props.name</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            Real life you can have the elements you have chosen.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
