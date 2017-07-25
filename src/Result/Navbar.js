import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Radium from 'radium'

import theme from 'theme'

const styles = {
  icon: {
    color: theme.color.grey.faded,
  },
  links: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    color: theme.color.blue.primary,
  },
}

const Navbar = ({ dashboardId }) => (
  <div style={styles.links}>
    <div><i style={styles.icon} className="fa fa-arrow-left" aria-hidden="true" /> <Link style={styles.link} to={`/dashboard/${dashboardId}`}>Questions</Link></div>
    <div><i style={styles.icon} className="fa fa-plus" aria-hidden="true" /> <Link style={styles.link} to="/">New Poll</Link></div>
  </div>
)

Navbar.propTypes = {
  dashboardId: PropTypes.string,
}
Navbar.defaultProps = {
  dashboardId: '',
}

export default Radium(Navbar)
