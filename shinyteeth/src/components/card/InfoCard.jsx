// Imports from React library
import React from 'react'

// Imports from other librarys
import PropTypes from 'prop-types'

// Import components from React-Boostrap
import { Card } from 'react-bootstrap'

export const InfoCard = props => {
  const { name, description, image } = props
  return (
    <Card>
        <Card.Img variant="top" src={ image } />
        <Card.Body>
            <Card.Title>{ name }</Card.Title>
            <Card.Text>{ description }</Card.Text>
        </Card.Body>
    </Card>
  )
}

// Use PropTypes for type checking
InfoCard.propTypes = {
  // key is the name of the prop andvalue is the PropType
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
}
