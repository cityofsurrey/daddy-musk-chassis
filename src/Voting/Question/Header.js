import React from 'react'
import PropTypes from 'prop-types'

import theme from 'theme'

const styles = {
  root: {
    textAlign: 'left',
  },
  label: {
    color: theme.color.grey.faded,
  },
  question: {
    margin: '10px 0',
    fontSize: 20,
    fontFamily: theme.fontFamily.bold,
  },
}

const Header = ({ number, question: { id, question } }) => (
  <div style={styles.root}>
    <div>
      <div style={styles.label}>Question {number}</div>
    </div>
    <div style={styles.question}>{question}</div>
  </div>
)

Header.propTypes = {}
Header.defaultProps = {}

export default Header
