import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import theme from 'theme'

const styles = {
  position: 'relative',
  backgroundColor: 'white',
  padding: '30px 25px',
  border: 'none',
  width: '100%',
  margin: '15px auto',
  borderRadius: 10,
  boxShadow: theme.shadow.regular,
  '@media print': {
    border: 'none !important',
  },
}

const FlatCard = (props) => {
  const { style, children } = props

  return (
    <div style={[styles, style]}>
      {children}
    </div>
  )
}

FlatCard.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
}

FlatCard.defaultProps = {
  style: {},
  children: [],
}

export default Radium(FlatCard)
