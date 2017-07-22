import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import images from 'utils/images'
import theme from 'theme'

import Bar from './Bar'

const styles = {
  root: {
    margin: '25px 0',
  },
  image: {
    width: 30,
    height: 30,
    margin: '0 17px 0 0',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    margin: '16px 0',
  },
  measurement: {
    display: 'flex',
    alignItems: 'center',
  },
  percent: {
    color: theme.color.blue.primary,
    margin: '0 5px',
  },
}

const calculatePercentage = (value, length) => (value / length ? value / length : 0)

const Responses = ({ length, responseValues }) => (
  <div style={styles.root}>
    {
      images.map(({ src, label, value }) => (
        <div style={styles.row} key={value}>
          <img style={styles.image} src={src} alt={label} />
          <div style={styles.measurement}>
            <Bar percentage={calculatePercentage(responseValues[value], length)} />
            <div style={styles.percent}>
              {calculatePercentage(responseValues[value], length) * 100}%
            </div>
          </div>
        </div>
      ))
    }
  </div>
)

Responses.propTypes = {}
Responses.defaultProps = {}

export default Radium(Responses)
