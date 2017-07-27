import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import images from 'utils/images'

import theme from 'theme'

const styles = {
  root: {
    '@media (min-width: 1150px)': {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  responses: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '10px 20px',
    margin: '0 -20px',
    '@media (min-width: 1150px)': {
      flexDirection: 'column',
      margin: 0,
      width: 200,
      height: 200,
      padding: '10px 0',
    },
  },
  image: {
    width: 40,
    height: 40,
    margin: '0 30px 0 0',
    '@media (min-width: 1150px)': {
      width: 70,
      height: 70,
      margin: '20px auto',
    },
  },
  imageLabel: {
    '@media (min-width: 1150px)': {
      fontSize: 24,
    },
  },
  separator: {
    ...theme.lineSeparator,
    margin: 0,
    '@media (min-width: 1150px)': {
      display: 'none',
    },
  },
  selected: {
    backgroundColor: theme.color.grey.dirtySock,
    border: theme.border.accentThick,
    margin: '-2px -20px',
    '@media (min-width: 1150px)': {
      margin: '-2px 0',
      borderRadius: 8,
    },
  },
}

const Response = ({ selected, onSelect, id }) => (
  <div style={styles.root}>
    {
      images.map(({ src, label, value }, index) => (
        <div key={src} onClick={() => onSelect(id, value)} >
          <div style={[styles.responses, (selected === value) && styles.selected]}>
            <img style={styles.image} src={src} alt={label} />
            <div style={styles.imageLabel}>{label}</div>
          </div>
          {
            !(selected === value) ?
              <div style={index + 1 !== images.length ? styles.separator : null} /> :
              null
          }
        </div>
      ))
    }
  </div>
)

Response.propTypes = {
  selected: PropTypes.string,
}
Response.defaultProps = {
  selected: '',
}

export default Radium(Response)
