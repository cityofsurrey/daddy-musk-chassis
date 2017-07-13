import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import theme from 'theme'

const styles = {
  root: {
    display: 'flex',
  },
  indicator: {
    height: 12,
    width: 12,
    margin: '0 0 0 15px',
    borderRadius: '50%',
    backgroundColor: theme.color.grey.cleanSock,
  },
  selected: {
    backgroundColor: theme.color.blue.primary,
  },
}

const Pagination = ({ length, index }) => (
  <div style={styles.root}>
    {
      new Array(length).fill(0).map((value, i) => (
        <div key={`page-${i}`} style={[styles.indicator, i <= index ? styles.selected : null]} />
      ))
    }
  </div>
)

Pagination.propTypes = {}
Pagination.defaultProps = {}

export default Radium(Pagination)
