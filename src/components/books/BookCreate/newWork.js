import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import { withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import placeholder from '../../../img/Placeholder.jpg';
import { genre, language, copyright } from './data';
import styles from './styles';

class NewWork extends Component{
    constructor(props){
      super(props)
      this.state = {
        title:'',
        image:'',
        description:'',
        genre:'',
        language:'',
        error:'',
        tagItem:'',
        tags:[],
        author:''
      }
    }
    componentDidMount=()=>{
      if(this.props.author){
       this.setState(()=>({author:this.props.author}))
      }
    }
    onSubmit = (e) =>{
      e.preventDefault();
      if(!this.state.description || !this.state.title){
        this.setState(()=>({error:'please provide title and description'}));
    }else{
      this.props.onFormSubmit(this.state)
     }
    }

    onTitleChange = (e) => {
      const title = e.target.value;
      this.setState(()=>({title}));
    }
    onDescriptionChange =(e)=>{
      const description = e.target.value;
      this.setState(()=>({ description }));
    }

    onGenreChange = (e) =>{
      const genre = e.target.value;
      this.setState(()=>({genre}));
    }

    onLanguageChange = (e) =>{
      const language = e.target.value;
      this.setState(()=>({language}));
    }
    
    onCopyrightChange = (e) =>{
      const copyright = e.target.value;
      this.setState(()=>({copyright}));
    } 

    onTagsChange = (e) =>{
      const tag = e.target.value;
       if(tag.indexOf(' ') >= 0){
        this.setState(() => {
        return {
           tags: [...this.state.tags, tag.trim()]
        };
        });
        console.log(this.state.tags);
      }
      if(tag.indexOf(' ') >= 0){
        this.setState(()=>({tagItem:''}));
      }else{
      this.setState(()=>({tagItem:tag}));
      console.log(tag);
      }
    }
    handleDelete = data => () => {
        this.setState(state => {
        const tags = [...state.tags];
        const tagToDelete = tags.indexOf(data);
        tags.splice(tagToDelete, 1);
        return { tags };
      });
    };
    
     
    
    handleCancel = () =>{
      return this.props.history.push('/component')
    }
    render(){
     
      const {classes} = this.props;
    return(
        <React.Fragment>
          <CssBaseline />
          <main>
            <div className={classes.heroUnit}>
              <div className={classes.heroContent}>
                 <Grid container>
                 <Grid item sm={3}>
                 <label for="file-input">
                 <img className={classes.image} src={placeholder}/>
                </label>
              <input className={classes.imageUpload} id="file-input" type="file"/>
            </Grid>
            <Grid item sm={9}>
              <Card>
                <CardContent>
                {this.state.error && <p>{this.state.error}</p>}
                  <form onSubmit={this.onSubmit}>
                  <Typography>Story Details</Typography>
                  <Divider className={classes.divider}/>
                  <TextField
                   className={classes.text}
                   fullWidth={true}
                   autoFocus={true}
                   defaultValue="My first Story"
                   value={this.state.title}
                   onChange={this.onTitleChange}
                   label="Title"
                   id="bootstrap-input"
                   InputProps={{
                   disableUnderline: true,
                   classes: {
                   root: classes.bootstrapRoot,
                   input: classes.bootstrapInput,
                     },
                     }}
                   InputLabelProps={{
                   shrink: true,
                   className: classes.FormLabel,
                   }}
                 />
                 <Typography></Typography>

                  <TextField
                  className={classes.text}
                  fullWidth={true}
                  label="Description"
                  id="bootstrap-input"
                  InputProps={{
                  disableUnderline: true,
                  classes: {
                  root: classes.bootstrapRoot,
                  input: classes.bootstrapInput,
                     },
                    }}
                  InputLabelProps={{
                  shrink: true,
                  className: classes.FormLabel,
                 }}
                   defaultValue="random description"
                   value={this.state.description}
                   onChange={this.onDescriptionChange}
                   multiline={true}
                   rows="5"
                  />
                  <TextField
                   className={classes.text}
                   fullWidth={false}
                   onChange={this.onTagsChange}
                   label="Tags"
                   value={this.state.tagItem}
                   placeholder="Seperate tags with a space"
                   id="bootstrap-input"
                   InputProps={{
                   disableUnderline: true,
                   classes: {
                   root: classes.bootstrapRoot,
                   input: classes.bootstrapInput,
                     },
                     }}
                   InputLabelProps={{
                   shrink: true,
                   className: classes.FormLabel,
                   }}
                 />
                  {this.state.tags.map(data => {
                   return (
                  <Chip
                  key={data.indexOf()}
                  label={data}
                  onDelete={this.handleDelete(data)}
                  className={classes.chip}
                  />);
                  })}

                  <Divider className={classes.divider}/>
                  <FormControl
                  className={classes.formControl}
                  >
                  <InputLabel className={classes.FormLabel} htmlFor="add-genre">Genre</InputLabel>
                   <Select
                   value={this.state.genre}
                   onChange={this.onGenreChange}
                   input={<Input 
                    disableUnderline={true} 
                    name="genre" 
                    id="add-genre"    
                   />} 
                   displayEmpty
                   name="genre"
                   className={classes.selectEmpty} 
                 >
                  
                 {genre.map(data =>{
                   return(
                     <MenuItem
                     value={data}
                     >
                     {data}
                     </MenuItem>
                   );
                 })}
                 </Select>
                </FormControl>
                <Divider className={classes.divider}/>
                 <Grid Container className={classes.root}>
                   <Grid item sm>
                   <FormControl 
                     className={classes.formControl}
                   >
                  <InputLabel className={classes.FormLabel} htmlFor="add-language">Language</InputLabel>
                  <Select
                  onChange={this.onLanguageChange}
                  value={this.state.language}
                  input={<Input disableUnderline={true} name="language" id="add-language" />}
                  displayEmpty
                  name="language"
                  className={classes.selectEmpty} 
                 >
                {language.map(data =>{
                   return(
                     <MenuItem
                     value={data}
                     >
                     {data}
                     </MenuItem>
                   );
                 })}
                 </Select>
                </FormControl>
                   </Grid>
                   <Grid item sm>
                   <FormControl 
                     className={classes.formControl}
                   >
                  <InputLabel className={classes.FormLabel} htmlFor="add-copyright">Copyright</InputLabel>
                  <Select
                  onChange={this.onCopyrightChange}
                  value={this.state.copyright}
                  input={<Input disableUnderline={true} name="copyright" id="copyright" />}
                  displayEmpty
                  name="copyright"
                  className={classes.selectEmpty} 
                 >
                {copyright.map(data =>{
                   return(
                     <MenuItem
                     value={data}
                     >
                     {data}
                     </MenuItem>
                   );
                 })}
                 </Select>
                </FormControl>
                   </Grid>
                 </Grid>  
                 <Button 
                 variant="contained" 
                 color="secondary" 
                 className={classes.button}
                 onClick={this.handleCancel}
                 >
                  Cancel
                 </Button>
                 <Button 
                 variant="contained" 
                 color="primary" 
                 className={classes.button}
                 onClick={this.onSubmit}
                 >
                  Next
                 </Button>
                 </form>
                </CardContent>
              </Card>
             </Grid>
            </Grid>
             </div>
           </div>
           </main>
         </React.Fragment>
    );
}
}

NewWork.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) =>{
	if(state.login.user){
    return{
      author: state.login.user._id
    }
   }else{
     return{
         author: localStorage.getItem('userId').replace(/['"]+/g, '')
     }
   }
  }

export default connect(mapStateToProps)(withRouter(withStyles(styles)(NewWork)))
