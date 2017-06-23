import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Button from 'components/Buttons'
import theme from 'theme'

const styles = {
  backgroundColor: theme.color.purple.regular,
  color: theme.color.white,
  ':hover': {
    backgroundColor: theme.color.purple.regular,
  },
  ':active': {
    boxShadow: 'none',
  },
  borderRadius: 100,
}

const PrimaryButton = (props) => {
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
          customStyles={[style, styles]}
          disabled={disabled}
        />
      </Link>
    )
  }

  return (
    <Button
      {...other}
      customStyles={[style, styles]}
      disabled={disabled}
    />
  )
}

PrimaryButton.propTypes = {
  disabled: PropTypes.bool,
  to: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
}

PrimaryButton.defaultProps = {
  disabled: false,
  to: '',
  style: {},
}

export default PrimaryButton
