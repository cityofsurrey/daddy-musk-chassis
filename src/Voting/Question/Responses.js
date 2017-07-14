import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import images from 'utils/images'

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
    margin: '-2px -20px',
  },
}

const Responses = ({ selected, onSelect, id }) => (
  <div>
    {
      images.map(({ src, label, value }, index) => (
        <div key={src} onClick={() => onSelect(id, value)} >
          <div style={[styles.responses, (selected === value) && styles.selected]}>
            <img style={styles.image} src={src} alt={label} />
            <div>{label}</div>
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

Responses.propTypes = {
  selected: PropTypes.string,
}
Responses.defaultProps = {
  selected: '',
}

export default Radium(Responses)
