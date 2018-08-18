export const styles = {
	root: {
		flexGrow: 1,
		backgroundColor: 'white',
	},
	container: {
		marginTop: '2rem'
	},
	tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
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
  typography: {
    padding: '1rem',
  },
	avatar: {
		marginLeft: "5px",
		marginRight: "1rem",
		display: 'inline-block',
		float: 'left'
	},
	iconTitle: {
		display: 'inline-block',
		paddingTop: '0.7rem'
	}
}
