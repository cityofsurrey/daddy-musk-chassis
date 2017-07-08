import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import FlatCard from 'components/FlatCard'
import TextField from 'components/TextField'

const styles = {
  root: {
    margin: '40px 0 15px',
    padding: 20,
  },
  inputStyle: {
    borderRadius: 100,
    padding: '10px 20px',
  },
}

const Email = ({
  email,
  onChange,
}) => (
  <FlatCard style={styles.root}>
    <div>
      <div>Enter your email to receive your poll</div>
      <TextField
        value={email}
        name="email"
        placeholder="emojis@polltal.com"
        inputStyle={styles.inputStyle}
        onChange={onChange}
      />
    </div>
  </FlatCard>
)

Email.propTypes = {
  email: PropTypes.string,
  onChange: PropTypes.func,
}
Email.defaultProps = {
  email: '',
  onChange: () => {},
}

export default Radium(Email)
