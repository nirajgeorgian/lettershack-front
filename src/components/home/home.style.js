export const styles = {
	root: {
		flexGrow: 1,

	},
	container: {
		paddingTop: '2rem',
		paddingLeft: '3rem',
		paddingRight:'3rem',
position: 'absolute',
    width: '100%',
    left: 0,

    background: "#f2f4f7"
	},
	subtitle:{
		opacity:'0.85',
		marginBottom: '1rem'
	},
	tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: '#aaf3f5',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: 500,
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
      fontWeight: 500,
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
		paddingTop: '0.7rem',
		fontSize: '14px',
		opacity: 0.8
	}
}
