export const styles = (theme) => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: 'inherit'
  },
  heroContent: {
    maxWidth: '600',
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  name: {
		fontSize: "2rem",
		opacity: "0.80",
		textTransform: "capitalize"
  },
  title: {
		fontSize: "1rem",
		opacity: "0.80",
		textTransform: "capitalize"
  },
  para: {
		color: "grey",
		opacity: "1",
		wordSpacing: "2.5px",
		letterSpacing: "1.2px",
		fontSize: "1rem",
    fontWeight: 330,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  follow: {
    margin:'1.4rem 0 0 1.5rem',
    
  },
  followStyle: {
    color: "grey",
		opacity: "1",
    marginTop:'1rem',
    wordSpacing: "2.5px",
		letterSpacing: "1.2px",
    fontSize: "1rem",
    fontWeight: 330,
  },
  content: {
    flex: '1 0 auto',
  },
  image: {
    width:'100%',
    height:'100%',
  },
  card: {
    display: 'flex',
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  cardMedia: {
    display:'flex',
    paddingTop: '56.25%', // 16:9
    margin:'auto',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});
