import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'

/**
 * Link to external resouce that will be open in a new browser tab
 */
const ExternalLink = ({ to, children }) => (
  <Link
    to={to}
    target="_blank"
    rel="noreferrer noopener"
  >{children}</Link>
)

ExternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default ExternalLink
