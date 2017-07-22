import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import FlatCard from 'components/FlatCard'
import TextField from 'components/TextField'
import PrimaryButton from 'components/Buttons/PrimaryButton'

import theme from 'theme'

const styles = {
  title: {
    color: theme.color.purple.regular,
  },
  congratsMsg: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: '5px 0',
  },
  link: {
    margin: '10px 0 20px',
  },
  inputStyle: {
    borderRadius: 100,
    padding: '10px 20px',
  },
}

const copyToClipboard = () => {
  document.querySelector('#pollLink').select()
  document.execCommand('copy')
}

const PollLink = ({ id }) => (
  <FlatCard>
    <div style={[styles.congratsMsg, styles.title]}>Congratulations!</div>
    <div style={styles.title}>Your poll has been created.</div>
    <div style={styles.link}>
      <TextField
        id="pollLink"
        inputStyle={styles.inputStyle}
        value={`http://localhost:8090/voting/${id}`}
      />
    </div>
    <PrimaryButton onClick={copyToClipboard} label="Copy Poll Link" />
  </FlatCard>
)

PollLink.propTypes = {
  id: PropTypes.string,
}
PollLink.defaultProps = {
  id: '',
}

export default Radium(PollLink)
