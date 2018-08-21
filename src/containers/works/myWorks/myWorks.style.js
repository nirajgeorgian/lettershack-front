export const styles = {
	container: {
		marginTop: "2rem"
	},
	root: {
		flexGrow: 1
	},
	tabsIndicator: {
    backgroundColor: 'black',
		width: '100%'
  },
	tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: 300,
    marginRight: "1rem",
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: 400,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  tabSelected: {},
}
