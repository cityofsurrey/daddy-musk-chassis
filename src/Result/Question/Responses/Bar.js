import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import theme from 'theme'

const styles = {
  root: percentage => ({
    maxWidth: 150,
    width: 150 * percentage,
    height: 24,
    borderRadius: 100,
    backgroundColor: theme.color.blue.primary,
  }),
}

const Bar = ({ percentage }) => (
  <div style={styles.root(percentage)} />
)

Bar.propTypes = {}
Bar.defaultProps = {}

export default Radium(Bar)
