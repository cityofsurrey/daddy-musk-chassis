import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'

/**
 * Link to use for internal purposes, e.g. openning a modal
 */
const InternalLink = ({ children, onClick, style }) => (
  <Link
    onClick={(event) => {
      event.preventDefault()
      onClick()
    }}
    style={style}
  >{children}</Link>
)

InternalLink.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.string),
}

InternalLink.defaultProps = {
  children: '',
  onClick: () => {},
  style: {},
}

export default InternalLink
