import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import Header from 'components/Header'
import theme from 'theme'

import { icons } from 'utils/images'

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
  thankYou: {
    margin: '120px 0 0',
  },
  icon: {
    width: 100,
    height: 100,
  },
  thankYouText: {
    margin: '30px 70px',
  },
  thankYouTitle: {
    fontWeight: 'bolder',
    fontSize: 22,
    paddingBottom: 5,
  },
}

const Thanks = () => (
  <div style={styles.root}>
    <div style={styles.backgroundHeader} />
    <Header title="Polltal" />
    <div style={styles.thankYou}>
      <img style={styles.icon} src={icons.verySatisfied} alt="Thank You" />
      <div style={styles.thankYouText}>
        <div style={styles.thankYouTitle}>Thank You!</div>
        <div>You have completed your poll.</div>
      </div>
    </div>
  </div>
)

Thanks.propTypes = {}
Thanks.defaultProps = {}

export default Radium(Thanks)
