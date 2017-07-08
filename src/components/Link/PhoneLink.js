import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'

/**
 * Link for phone number that will trigger a calling
 */
const PhoneLink = ({ to, children }) => {
  const phone = to.replace(/[- ]/g, '')

  return (
    <Link to={`tel:+1${phone}`}>{children}</Link>
  )
}

PhoneLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default PhoneLink
