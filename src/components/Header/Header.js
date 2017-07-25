import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

const styles = {
  root: {
    textAlign: 'center',
    margin: '5px 0 40px',
    '@media (min-width: 1024px)': {
      margin: '5px 0 100px',
    },
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
}

const Header = ({ title }) => (
  <div style={styles.root}>
    <div style={styles.name}>{title}</div>
  </div>
)

Header.propTypes = {
  title: PropTypes.string,
}
Header.defaultProps = {
  title: '',
}

export default Radium(Header)
