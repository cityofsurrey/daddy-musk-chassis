import React from 'react'
import PropTypes from 'prop-types'

import FlatCard from 'components/FlatCard'

const styles = {
  root: {
    textAlign: 'center',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  slogan: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: '0 0 20px',
  },
  desc: {
    fontSize: 12,
  },
  facesCard: {
    padding: 5,
    borderRadius: 100,
  },
}

const Header = props => (
  <div style={styles.root}>
    <div style={styles.name}>Polltal</div>
    <div style={styles.slogan}>Create your poll now</div>
    <div style={styles.desc}>Respondents will tell you how they feel on a scale of </div>
    <FlatCard style={styles.facesCard}>FACES</FlatCard>
  </div>
)

Header.propTypes = {}
Header.defaultProps = {}

export default Header
