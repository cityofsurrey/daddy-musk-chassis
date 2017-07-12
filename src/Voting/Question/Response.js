import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import images from 'utils/image'

import theme from 'theme'

const styles = {
  responses: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '10px 20px',
    margin: '0 -20px',
  },
  image: {
    width: 40,
    height: 40,
    margin: '0 30px 0 0',
  },
  separator: {
    ...theme.lineSeparator,
    margin: 0,
  },
  selected: {
    backgroundColor: theme.color.grey.dirtySock,
    border: theme.border.accentThick,
    marginBottom: -2,
  },
}

const Response = ({ selected }) => (
  <div>
    {
      images.map(({ src, label }, index) => (
        <div key={src}>
          <div style={[styles.responses, selected && styles.selected]}>
            <img style={styles.image} src={src} alt={label} />
            <div>{label}</div>
          </div>
          {
            !selected ?
              <div style={index + 1 !== images.length ? styles.separator : null} /> :
              null
          }
        </div>
      ))
    }
  </div>
)

Response.propTypes = {
  selected: PropTypes.bool,
}
Response.defaultProps = {
  selected: false,
}

export default Radium(Response)
