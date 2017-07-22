import React from 'react'
import PropTypes from 'prop-types'

import theme from 'theme'

const styles = {
  root: {
    textAlign: 'left',
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
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

const Header = ({ number, question, voteCount }) => (
  <div style={styles.root}>
    <div style={styles.headerRow}>
      <div style={styles.label}>Question {number + 1}</div>
      <div style={styles.label}>{voteCount} voted</div>
    </div>
    <div style={styles.question}>{question.question}</div>
  </div>
)

Header.propTypes = {}
Header.defaultProps = {}

export default Header
