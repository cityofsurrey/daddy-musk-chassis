import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import Header from 'components/Header'
import theme from 'theme'

const styles = {
  root: {
    padding: 15,
    textAlign: 'center',
  },
  backgroundHeader: {
    position: 'absolute',
    height: 60,
    width: '100%',
    top: 0,
    left: 0,
    zIndex: -1,
    transform: 'scaleX(1.1)',
    backgroundColor: theme.color.blue.primary,
    borderBottomLeftRadius: '50%',
    borderBottomRightRadius: '50%',
  },
}

class Voting extends Component {
  state = {}

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.backgroundHeader} />
        <Header title="Polltal" />
      </div>
    )
  }
}

Voting.propTypes = {}
Voting.defaultProps = {}

export default Radium(Voting)
