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
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux'
import { styles } from './styles'; 
import { getOneBook } from '../../../actions/actionCreator/books/books.action';
class BookDetails extends React.Component{
  constructor(props){ 
    super(props);
    this.state={
      chapter:undefined
    }
   }
   getAuthor(id){
    const user = this.props.users.data.filter((user)=> user._id == id);
    return user[0].name;
    console.log(user);
  }
  handleChapter=(chapter)=>{
   this.setState(()=>({chapter}))
  }
  componentDidUpdate(){
    if(this.props.book){
      if(this.props.book[0].chapters){
        const chapter = this.props.book[0].chapters[0];
        if(!this.state.chapter){
        this.setState(()=>({chapter}));
        }
      }
    }
  }
   render(){
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
    let author;
    if(this.props.book && this.props.users){
      author = this.getAuthor(this.props.book[0].author);
    }
       return(
            <React.Fragment>
              <CssBaseline />
               <main>
              <div  className={classes.heroUnit}>
                <div className={classes.heroContent}>
               <Grid container>
                 <Grid item xs={12} md={3} lg={3} sm 
                 className={classNames(classes.mainContentElements,classes.image)}>
                   <img src="https://picsum.photos/200/300"/>
                 </Grid>
                 <Grid item xs={12} md={5} lg={5} sm className={classes.mainContentElements}>
                     <Typography className={classes.title} align="left" variant="display1">
                     {this.props.book?(this.props.book[0].title):('')} {starComponent}
                     </Typography>
                     <Typography className={classes.subtitle} align="left">
                       By <span style={{fontWeight:1000}}>{author}</span>
                     </Typography>
                     <Typography className={classes.subtitle} align="left">
                       Genre <span style={{fontWeight:1000}}>
                       {this.props.book?(this.props.book[0].genre):('')}
                       </span>
                     </Typography>
                     <Typography className={classes.title} align="left" variant="title">
                      {this.state.chapter?(this.state.chapter.title):('')}
                     </Typography>
                     <Typography className={classes.details} align="left">
                     {this.state.chapter?(this.state.chapter.content):('')}
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
                   <Typography align="center">
                     Comments
                   </Typography>
                 </Grid>
                 <Grid item sm={3} className={classes.mainContentElements}>
                 <div className={classes.sideBar}>
                 <Typography>
                    Table of contents
                 </Typography>
                 {this.props.book?(this.props.book[0].chapters.map((chapter)=>{                   
                   return(
                   <div>
                  <Button
                  onClick={()=>{this.handleChapter(chapter)}}
                  >
                    {chapter.title}
                  </Button>
                  </div>
                   ); 
                 })       
                ):('')}
                                   
                    </div>            
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
      console.log(state);
      const book = state.book.books;

    if(book){
     const oneBook = book.filter((book)=>{
       return book._id == props.match.params.id
    })
      if(oneBook){ 
      return{
        book: oneBook,
        users: state.user.data
       }
     }else {
      getOneBook(props.match.params.id);
   }
   }else {
         getOneBook(props.match.params.id);
      }
    
    };
export default connect(mapStateToProps)(withStyles(styles)(BookDetails))
 