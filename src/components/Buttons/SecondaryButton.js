import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Button from 'components/Buttons'
import theme from 'theme'

const styles = {
  backgroundColor: theme.color.white,
  color: theme.color.purple.regular,
  border: theme.border.accentThick,
  borderRadius: 100,
  ':hover': {
    backgroundColor: theme.color.purple.regular,
    color: theme.color.white,
  },
  ':active': {
    boxShadow: 'none',
  },
  // TODO: disabled green
}

const SecondaryButton = (props) => {
  const {
    disabled,
    to,
    style,
    ...other
  } = props

  if (to.length) {
    return (
      <Link to={to}>
        <Button
          {...other}
          customStyles={[styles, style]}
          disabled={disabled}
        />
      </Link>
    )
  }

  return (
    <Button
      {...other}
      customStyles={[styles, style]}
      disabled={disabled}
    />
  )
}

SecondaryButton.propTypes = {
  disabled: PropTypes.bool,
  to: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
}

SecondaryButton.defaultProps = {
  disabled: false,
  to: '',
  style: {},
}

export default SecondaryButton
