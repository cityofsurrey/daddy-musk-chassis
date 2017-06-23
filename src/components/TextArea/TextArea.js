import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import theme from 'theme'

const styles = {
  labelBox: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    display: 'flex',
    alignItems: 'center',
  },
  hint: {
    marginLeft: 12,
    padding: 0,
    background: 'none',
    border: 'none',
  },
  hintIcon: {
    fontSize: 14,
  },
  link: {
    textDecoration: 'underline',
    color: theme.color.green.primary,
    cursor: 'pointer',
  },
  input: {
    width: '100%',
    border: theme.border.regular,
    borderRadius: theme.borderRadius.regular,
    padding: 20,
    textAlign: 'left',
    resize: 'none',
  },
  optional: {
    fontSize: 12,
    color: theme.color.grey.regular,
  },
  inputError: {
    border: theme.border.error,
  },
  error: {
    color: 'red',
    display: 'block',
    fontSize: 12,
    paddingTop: 8,
  },
}

const TextArea = (props) => {
  const {
    label, name, placeholder, value,
    rows, cols,
    hasHint, optional,
    link,
    tabIndex,
    errors,
    showError,
    type,
    disabled,
    step,
    inputStyle,
    onChange, onBlur, onHintClick,
  } = props

  return (
    <div>
      <div style={styles.labelBox}>
        <div style={styles.label}>
          <span>
            {label}
            {optional ? <span style={styles.optional}> - <i>optional</i></span> : null}
          </span>
          {hasHint ? <button style={styles.hint} onClick={onHintClick} tabIndex="-1"><i style={styles.hintIcon} className="icon-help" /></button> : null}
        </div>
        {link ? <a href style={styles.link} onClick={link} tabIndex="-1">{link}</a> : null}
      </div>
      <textarea
        style={[styles.input, inputStyle, errors[name] ? styles.inputError : null]}
        type={type}
        name={name}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        tabIndex={tabIndex}
        step={step}
      />
      {
        showError ? <div style={styles.error}>{errors[name]}</div> : null
      }
    </div>
  )
}

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  disabled: PropTypes.bool,
  hasHint: PropTypes.bool,
  optional: PropTypes.bool,
  showError: PropTypes.bool,
  link: PropTypes.string,
  tabIndex: PropTypes.number,
  errors: PropTypes.objectOf(PropTypes.string),
  type: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onHintClick: PropTypes.func,
  inputStyle: PropTypes.objectOf(PropTypes.node),
  step: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  rows: PropTypes.number,
  cols: PropTypes.number,
}

TextArea.defaultProps = {
  label: '',
  name: '',
  placeholder: '',
  value: '',
  disabled: false,
  hasHint: false,
  optional: false,
  showError: true,
  link: '',
  tabIndex: 0,
  rows: 4,
  cols: 10,
  errors: {},
  type: 'text',
  step: 'any',
  inputStyle: {},
  onChange: () => {},
  onBlur: () => {},
  onHintClick: () => {},
}

export default Radium(TextArea)
