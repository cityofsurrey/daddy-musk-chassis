import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import theme from 'theme'

const createStyles = props => ({
  textDecoration: 'underline',
  color: theme.color.blue.primary,
  cursor: 'pointer',
  fontFamily: props.bold ? theme.fontFamily.bold : theme.fontFamily.regular,
  ':visited': {
    color: theme.color.blue.primary,
  },
})

/**
 * Base link component
 */
const Link = ({ to, children, style, ...props }) => {
  const styles = createStyles(props)

  return (
    <a
      style={[styles, style]}
      href={to}
      {...props}
    >{children}</a>
  )
}

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.objectOf(PropTypes.string),
}

Link.defaultProps = {
  to: '',
  children: '',
  style: {},
}

export default Radium(Link)
