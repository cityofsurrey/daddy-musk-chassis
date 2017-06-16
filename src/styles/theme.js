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
    },
    red: {
      regular: '#ff4d4d',
      dark: '#b71c1c',
    },
    green: {
      dark: '#4f6e18',
      primary: '#538300',
      hover: '#485a0f',
      disable: '#9ebe73',
    },
    blue: {
      regular: '#286b8e',
    },
    error: '#fba2a2',
  },
  border: {
    regular: '1px solid #d1d4db',
  },
  borderRadius: {
    regular: 6,
    heavy: 15,
  },
  shadow: {
    regular: '0 2px 4px 0 rgba(68, 68, 68, 0.35)',
  },
  lineSeparator: {
    margin: '10px 0',
    height: 1,
    background: '#d1d4db',
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
