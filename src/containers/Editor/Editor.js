import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createToolbarPlugin from 'draft-js-static-toolbar-plugin';
import editorStyles from './editorStyles.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import './plugin.css';

const staticToolbarPlugin = createToolbarPlugin();
const { Toolbar } = staticToolbarPlugin;
const plugins = [staticToolbarPlugin];
const title = 'Untitled Part 1';
const body = '';

const styles = theme =>({
  heroUnit: {
    backgroundColor: 'inherit'
  },
  heroContent: {
    maxWidth: '600',
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  button: {
    margin: theme.spacing.unit,
      },
    editorTitle :{
    boxSizing: 'border-box',
    border: '1px solid #ddd',
    cursor: 'text',
    padding: '16px',
    borderRadius: '2px',
    marginTop: '',
    //box-shadow: inset 0px 1px 8px -3px #ABABAB,
    background:'#fefefe'
    },

  editorBody :{
    boxSizing: 'border-box',
    border: '1px solid #ddd',
    cursor: 'text',
    padding: '16px',
    borderRadius: '2px',
    marginTop: '',
    //box-shadow: inset 0px 1px 8px -3px #ABABAB,
    background:'#fefefe',
    height:600
  }
});

class SimpleEditor extends Component {



  state = {
    editorStateTitle: createEditorStateWithText(title),
    editorStateBody: createEditorStateWithText(body)
  };

  onChangeTitle = (editorStateTitle) => {
    this.setState({
      editorStateTitle,
    });
  };

  onChangeBody = (editorStateBody) => {
    this.setState({
      editorStateBody,
    });
  };
  onSave=()=>{

  }
  focus = () => {
    this.editor.focus();
  };

  render() {
		const {classes} = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
           <main>
           <div  className={classes.heroUnit}>
                <div className={classes.heroContent}>
                <Toolbar />    
        <div className={classes.editorTitle} >
          <Editor
            editorState={this.state.editorStateTitle}
            onChange={this.onChangeTitle}
            plugins={plugins}
            textAlignment="center"
            ref={(element) => { this.editor = element; }}
          />
        </div>
        <div className={classes.editorBody}>
          <Editor
            editorState={this.state.editorStateBody}
            onChange={this.onChangeBody}
            plugins={plugins}
            placeholder="Type your text"
            ref={(element) => { this.editor = element; }}
          />    
        </div>
      </div>
      <Button
          variant="contained" 
          color="primary" 
          className={classes.button}
          onClick={this.onSave}
        >
        Save
        </Button>
  
     </div> 
      </main>
     </React.Fragment> 
    );
  }
}
export default withStyles(styles)(SimpleEditor);