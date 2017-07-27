import React from 'react'
import PropTypes from 'prop-types'

import Pagination from 'components/Pagination'
import theme from 'theme'

const styles = {
  root: {
    textAlign: 'left',
    '@media (min-width: 1150px)': {
      margin: '20px 0 50px',
    },
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  label: {
    color: theme.color.grey.faded,
    '@media (min-width: 1150px)': {
      fontSize: 24,
    },
  },
  question: {
    margin: '10px 0',
    fontSize: 20,
    fontFamily: theme.fontFamily.bold,
    '@media (min-width: 1150px)': {
      fontSize: 34,
    },
  },
}

const Header = ({ length, index, question }) => (
  <div style={styles.root}>
    <div style={styles.headerRow}>
      <div style={styles.label}>Question {index + 1}</div>
      <Pagination length={length} index={index} />
    </div>
    <div style={styles.question}>{question}</div>
  </div>
)

Header.propTypes = {}
Header.defaultProps = {}

export default Header
