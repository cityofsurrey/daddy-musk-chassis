const theme = {
  fontSize: {
    regular: 14,
  },
  fontFamily: {
    regular: "'UniversLTStd', Helvetica, Arial, sans-serif",
    light: "'Univers LT W01 45 Light', Helvetica Neue, Helvetica, Arial, sans-serif",
    lightOblique: "'UniversLTW01-45LightObl', Helvetica Neue, Helvetica, Arial, sans-serif",
    oblique: "'UniversLTW01-55Oblique', Helvetica Neue, Helvetica, Arial, sans-serif",
    bold: "'Univers LT W01 65 Bold', Helvetica Neue, Helvetica, Arial, sans-serif",
    boldOblique: "'UniversLTW01-65BoldObli', Helvetica Neue, Helvetica, Arial, sans-serif",
    roman: "'Univers LT W02 55 Roman', Helvetica Neue, Helvetica, Arial, sans-serif",
  },
  color: {
    white: '#ffffff',
    grey: {
      light: '#e8e8e8',
      regular: '#aaaaaa',
      medium: '#cecaca',
      dark: '#808080',
      faded: '#808b92',
    },
    red: {
      regular: '#ff4d4d',
      dark: '#b71c1c',
    },
    green: {
      dark: '#4f6e18',
      primary: '#77a22f',
      hover: '#485a0f',
      disable: '#9ebe73',
    },
    blue: {
      regular: '#286b8e',
      primary: '#3b2eb7',
    },
    purple: {
      regular: '#3b2eb7',
    },
    error: '#fba2a2',
  },
  border: {
    regular: '1px solid rgba(128, 139, 146, 0.25)',
    accent: '1px solid #3b2eb7',
    accentThick: '2px solid #3b2eb7',
  },
  borderRadius: {
    regular: 10,
    heavy: 15,
  },
  shadow: {
    regular: '0 2px 10px 0 rgba(155, 155, 155, 0.5)',
    blue: '0 3px 5px 0 rgba(60, 47, 183, 0.5)',
  },
  lineSeparator: {
    margin: '30px 0',
    height: 1,
    background: 'rgba(128, 139, 146, 0.25)',
  },
  mobileShow(size, display = 'initial') {
    const media = `@media (max-width: ${size}px)`
    return {
      display: 'none',
      [media]: {
        display,
      },
    }
  },
  mobileHide(size, display = 'initial') {
    const media = `@media (max-width: ${size}px)`
    return {
      display,
      [media]: {
        display: 'none',
      },
    }
  },
}

export default theme
