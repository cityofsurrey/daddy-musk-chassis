import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import FlatCard from 'components/FlatCard'
import TextField from 'components/TextField'

const styles = {
  root: {
    padding: 20,
    '@media (min-width: 1024px)': {
      padding: '50px 60px',
    },
  },
  card: {
    margin: '40px 0 15px',
    padding: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    '@media (min-width: 1024px)': {
      fontSize: 22,
      textAlign: 'left',
      margin: '0 0 10px',
    },
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
  <FlatCard style={styles.card}>
    <div style={styles.root}>
      <div style={styles.title}>Enter your email to receive links to your poll</div>
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
