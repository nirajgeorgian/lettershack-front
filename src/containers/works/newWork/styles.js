export default theme => ({
    heroUnit: {
      backgroundColor: 'inherit'
    },
    heroContent: {
      maxWidth: '600',
      margin: '0 auto',
      padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
      
    text:{
      paddingBottom:20,
      
  },
  divider:{
      marginTop:10,
      marginBottom:10
  },
  bootstrapRoot: {
      padding: 0,
      'label + &': {
        marginTop: theme.spacing.unit * 3,
      },
            
  },
    bootstrapInput: {
      borderRadius: 4,
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
    FormLabel: {
      fontSize: 20,
      fontWeight: 500,
      color:'black'
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    image:{
     height:250,
     widht:250,
     padding:'0 30'
    },
    imageUpload:{
      display: 'none'
    },
    button: {
      margin: theme.spacing.unit,
    },
    chip: {
      margin: theme.spacing.unit / 2,
    },
  });
   