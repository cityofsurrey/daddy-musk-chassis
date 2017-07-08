import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import theme from 'theme'

const styles = {
  root: {
    padding: '15px 20px',
    fontSize: theme.fontSize.regular,
    fontFamily: theme.fontFamily.bold,
    textAlign: 'center',
    border: '1px solid transparent',
    borderRadius: theme.borderRadius.medium,
    cursor: 'pointer',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    userSelect: 'none',
    outline: 'none',
    boxShadow: theme.shadow.blue,
  },
  disabled: {
    backgroundColor: theme.color.grey.mediumLight,
    boxShadow: 'none',
    color: '#5e6a71',
    border: theme.border.regular,
  },
}


const Button = (props) => {
  const {
    label,
    disabled,
    focusable,
    customStyles,
    onClick,
    name = '',
    value = '',
  } = props

  return (
    <div>
      <button
        style={disabled ? [styles.root, styles.disabled] : [styles.root, ...customStyles]}
        disabled={disabled}
        name={name}
        value={value}
        onClick={e => onClick(e)}
        tabIndex={focusable ? '0' : '-1'}
      >
        {label}
      </button>
    </div>
  )
}

Button.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  disabled: PropTypes.bool,
  focusable: PropTypes.bool,
  customStyles: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
}

Button.defaultProps = {
  disabled: false,
  focusable: true,
  customStyles: [],
  onClick: () => {},
  name: '',
  value: '',
}

export default Radium(Button)
