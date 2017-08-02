import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import FlatCard from 'components/FlatCard'
import TextField from 'components/TextField'
import PrimaryButton from 'components/Buttons/PrimaryButton'

import theme from 'theme'

const styles = {
  content: {
    '@media (min-width: 1150px)': {
      padding: '0 60px',
    },
  },
  title: {
    color: theme.color.purple.regular,
  },
  congratsMsg: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: '5px 0',
  },
  link: {
    '@media (min-width: 1150px)': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  input: {
    margin: '10px 0 20px',
    '@media (min-width: 1150px)': {
      margin: '10px 20px',
      flex: 1,
    },
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
    <div style={styles.content}>
      <div style={[styles.congratsMsg, styles.title]}>Congratulations!</div>
      <div style={styles.title}>Your poll has been created.</div>
      <div style={styles.link}>
        <div style={styles.input}>
          <TextField
            id="pollLink"
            inputStyle={styles.inputStyle}
            value={`${process.env.POLLTAL_APP}/voting/${id}`}
          />
        </div>
        <PrimaryButton onClick={copyToClipboard} label="Copy Poll Link" />
      </div>
    </div>
  </FlatCard>
)

PollLink.propTypes = {
  id: PropTypes.string,
}
PollLink.defaultProps = {
  id: '',
}

export default Radium(PollLink)
