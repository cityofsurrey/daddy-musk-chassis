import React from 'react'
import PropTypes from 'prop-types'

import FlatCard from 'components/FlatCard'
import verySatisfied from '../../public/assets/images/verySatisfied.png'
import satisfied from '../../public/assets/images/satisfied.png'
import indifferent from '../../public/assets/images/indifferent.png'
import unsatisfied from '../../public/assets/images/unsatisfied.png'
import veryUnsatisfied from '../../public/assets/images/veryUnsatisfied.png'

const styles = {
  root: {
    textAlign: 'center',
    color: 'white',
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
  faces: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  face: {
    width: 36,
    height: 36,
  },
}

const images = [
  verySatisfied,
  satisfied,
  indifferent,
  unsatisfied,
  veryUnsatisfied,
]

const Header = props => (
  <div style={styles.root}>
    <div style={styles.name}>Polltal</div>
    <div style={styles.slogan}>Create your poll now</div>
    <div style={styles.desc}>Respondents will tell you how they feel on a scale of </div>
    <FlatCard style={styles.facesCard}>
      <div style={styles.faces}>
        { images.map(i => <img key={i} src={i} alt={i} style={styles.face} />) }
      </div>
    </FlatCard>
  </div>
)

Header.propTypes = {}
Header.defaultProps = {}

export default Header
