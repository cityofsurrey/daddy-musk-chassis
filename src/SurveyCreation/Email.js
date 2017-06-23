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

const Email = props => (
  <FlatCard style={styles.root}>
    <div>
      <div>Enter your email to receive your poll</div>
      <TextField
        name="email"
        placeholder="emojis@polltal.com"
        inputStyle={styles.inputStyle}
      />
    </div>
  </FlatCard>
)

Email.propTypes = {}
Email.defaultProps = {}

export default Radium(Email)
