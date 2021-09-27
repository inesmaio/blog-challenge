module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
  theme: {
    extend: {
      fontSize: {
        'base': '15px',
        'title': '16px'
      },
      width: {
        '138': '138px',
        '39': '39px',
        '66': '66%',
        'screen': '100vw',
      },
      height: {
        '37': '37px',
        '39': '39px',
        'screen': '100vh',
        '300': '300px'
      },
      fontFamily: {
        'text': ['inter', 'system-ui'],
      },
      inset: {
        '-150': '-150px'
      }
    }
  }
}
