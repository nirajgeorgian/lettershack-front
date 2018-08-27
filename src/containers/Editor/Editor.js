import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createToolbarPlugin from 'draft-js-static-toolbar-plugin';
import editorStyles from './editorStyles.css';
import { withStyles } from '@material-ui/core/styles';
import './plugin.css';

const staticToolbarPlugin = createToolbarPlugin();
const { Toolbar } = staticToolbarPlugin;
const plugins = [staticToolbarPlugin];
const text = 'The toolbar above the editor can be used for formatting text, as in conventional static editors  …';
const styles = {
editor :{
 boxSizing: 'border-box',
 border: '1px solid #ddd',
 cursor: 'text',
 padding: '16px',
 borderRadius: '2px',
 marginTop: '2em',
 //box-shadow: inset 0px 1px 8px -3px #ABABAB,
 background:'#fefefe'
}
};

class SimpleEditor extends Component {



  state = {
    editorState: createEditorStateWithText(text),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
		const {classes} = this.props;
    return (
      <div>
        <div className={classes.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => { this.editor = element; }}
          />
          <Toolbar />
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(SimpleEditor);
