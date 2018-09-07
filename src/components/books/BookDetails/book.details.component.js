import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Star from '@material-ui/icons/Star'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { styles } from './styles'; 
import { getOneBook } from '../../../actions/actionCreator/books/books.action';
class BookDetails extends React.Component{
  constructor(props){ 
    super(props);
   }
   render(){
     if(this.props.book){
      const book = this.props.book
     }
      console.log(this.props);
      
      const { classes } = this.props;
      const rating=3;
      let stars = []
		for(let i = 0; i < 5; i++) {
			if(i < rating) {
				stars.push(<Star className={classes.stars} key={i} />)
			} else {
				stars.push(<Star key={i} />)
			}
		}
		const starComponent = stars.map(star => {
			return star
    })
       return(
            <React.Fragment>
              <CssBaseline />
               <main>
              <div  className={classes.heroUnit}>
                <div className={classes.heroContent}>
               <Grid container>
                 <Grid item xs={12} md={3} lg={3} sm className={classNames(classes.mainContentElements,classes.image)}>
                   <img src="https://picsum.photos/200/300"/>
                 </Grid>
                 <Grid item xs={12} md={5} lg={5} sm className={classes.mainContentElements}>
                     <Typography className={classes.title} align="left" variant="display1">
                     {this.props.book?(this.props.book[0].title):('')} {starComponent}
                     </Typography>
                     <Typography className={classes.subtitle} align="left">
                       By <span style={{fontWeight:1000}}>Jhumpa Lahiri</span>
                     </Typography>
                     <Typography className={classes.details} align="left">
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type
                     specimen book. It has survived not only five centuries, but also the leap into
                     electronic typesetting, remaining essentially unchanged. It was popularised in
                     the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                     and more recently with desktop publishing software like Aldus PageMaker including
                     versions of Lorem Ipsum
                   </Typography>
                   <Typography align="left"><a>Read More</a></Typography>
                   <Divider className={classes.divider}/>
                 
                   <Grid container>
                     <Grid item sm>
                     <Typography style={{fontWeight:'bold'}}>Original Title</Typography>
                     </Grid>
                     <Grid item sm>
                     <Typography>
                     {this.props.book?(this.props.book[0].title):('')}
                     </Typography>
                     </Grid>
                   </Grid>

                   <Grid container>
                     <Grid item sm>
                     <Typography style={{fontWeight:'bold'}}>ISBN</Typography>
                     </Grid>
                     <Grid item sm>
                     <Typography>9999 8888888</Typography>
                     </Grid>
                   </Grid>
                   <Grid container>
                     <Grid item sm>
                     <Typography style={{fontWeight:'bold'}}>Edition Language</Typography>
                     </Grid>
                     <Grid item sm>
                     <Typography>English</Typography>
                     </Grid>
                   </Grid>
                   <Grid container>
                     <Grid item sm>
                     <Typography style={{fontWeight:'bold'}}>URL</Typography>
                     </Grid>
                     <Grid item sm>
                     <Typography>http:www.asassdds.com</Typography>
                     </Grid>
                   </Grid>
                   <Grid container>
                     <Grid item sm>
                     <Typography style={{fontWeight:'bold'}}>Characters</Typography>
                     </Grid>
                     <Grid item sm>
                     <Typography>random names</Typography>
                     </Grid>
                   </Grid>
                   <Divider className={classes.divider}/>
                   <Typography>
                     Comments

                   </Typography>
                 </Grid>
                 <Grid container item xs={12} md={4} lg={4} sm className={classes.sidebar}>
                 <Grid item sm>
                 <div>
                 <img className={classes.sideImages} src="https://picsum.photos/200/300"/>
                 </div>
                 <div>
                 <img className={classes.sideImages} src="https://picsum.photos/200/300"/>
                  </div>
                  <div>
                 <img className={classes.sideImages} src="https://picsum.photos/200/300"/>
                  </div>
                  </Grid>
                  <Grid item sm>
                     <div>
                     <Typography  className={classes.sidebarTitle}>
                      Book Name
                     </Typography>
                     <Typography className={classes.sidebarDescription}>
                     by <span style={{fontWeight:1000}}>Author Name</span>
                     </Typography>
                     </div>
                     <div className={classes.sideContent}>
                     <Typography className={classes.sidebarTitle} >Book Name</Typography>
                     <Typography className={classes.sidebarDescription}>
                     by <span style={{fontWeight:1000}}>Author Name</span>
                     </Typography>
                    </div>
                    <div className={classes.sideContent}>
                     <Typography className={classes.sidebarTitle} >Book Name</Typography>
                     <Typography className={classes.sidebarDescription}>
                     by <span style={{fontWeight:1000}}>Author Name</span>
                     </Typography>
                    </div>
                  </Grid>
                </Grid>
                </Grid>
               </div> 
              </div> 
             </main> 
            </React.Fragment>
       );
     }
  }
    const mapStateToProps = (state,props) =>{   
      const book = state.book.books;
    if(book){
     const oneBook = book.filter((book)=>{
       return book._id == props.match.params.id
    })
      if(oneBook){ 
      return{
        book: oneBook
       }
     }else {
      getOneBook(props.match.params.id);
   }
   }else {
         getOneBook(props.match.params.id);
      }
    
    };
export default connect(mapStateToProps)(withStyles(styles)(BookDetails))
