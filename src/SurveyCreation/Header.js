import React from 'react'
import Radium from 'radium'

import FlatCard from 'components/FlatCard'
import images from 'utils/images'

const styles = {
  root: {
    textAlign: 'center',
    color: 'white',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    '@media (min-width: 768px)': {
      fontSize: 48,
    },
  },
  slogan: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: '0 0 20px',
  },
  desc: {
    fontSize: 12,
    '@media (min-width: 768px)': {
      fontSize: 18,
    },
  },
  facesCard: {
    padding: 5,
    borderRadius: 100,
    '@media (min-width: 768px)': {
      padding: '10px 15px',
    },
  },
  faces: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  face: {
    width: 35,
    height: 35,
    '@media (min-width: 768px)': {
      width: 60,
      height: 60,
    },
    '@media (min-width: 1024px)': {
      width: 80,
      height: 80,
    },
  },
}

const Header = () => (
  <div style={styles.root}>
    <div style={styles.name}>Polltal</div>
    <div style={styles.slogan}>Create your poll now</div>
    <div style={styles.desc}>Respondents will tell you how they feel on a scale of </div>
    <FlatCard style={styles.facesCard}>
      <div style={styles.faces}>
        { images.map(({ src }) => <img key={src} src={src} alt={src} style={styles.face} />) }
      </div>
    </FlatCard>
  </div>
)

export default Radium(Header)
