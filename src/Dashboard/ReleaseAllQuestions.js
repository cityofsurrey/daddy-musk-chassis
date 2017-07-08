import React from 'react'
import PropTypes from 'prop-types'

import PrimaryButton from 'components/Buttons/PrimaryButton'

const styles = {
  root: {
    margin: '40px 0 20px',
  },
  releaseBtn: {
    margin: '20px 0',
  },
}

const ReleaseAllQuestions = props => (
  <div style={styles.root}>
    <div>
      Questions are currently not visible to your audience. You can release them all at once or individually.
    </div>
    <PrimaryButton style={styles.releaseBtn} label="Release All Questions" />
  </div>
)

ReleaseAllQuestions.propTypes = {}
ReleaseAllQuestions.defaultProps = {}

export default ReleaseAllQuestions
