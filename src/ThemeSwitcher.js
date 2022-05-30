import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

class ThemeSwitcher extends Component {

  state = { theme: null }
  
  chooseTheme = (theme, evt) => {
    evt.preventDefault();
    if (theme.toLowerCase() === 'reset') { theme = null }
    this.setState({ theme });
  }
  
  render() {
  
    const { theme } = this.state;
    const themeClass = theme ? theme.toLowerCase() : 'default';
    
    const parentContainerStyles = {
      position: 'absolute',
      height: '100%',
      width: '100%',
      display: 'table'
    };
    
    const subContainerStyles = {
      position: 'relative',
      height: '100%',
      width: '100%',
      display: 'table-cell',
      verticalAlign: 'middle'
    };
    
    return (
      <div style={parentContainerStyles}>
        <div style={subContainerStyles}>
        
          <span className={`h1 center-block text-center text-${theme ? themeClass : 'muted'}`} style={{ marginBottom: 25 }}>{theme || 'Default'}</span>
          
        <div className="center-block text-center">
            <Button bsSize="large" bsStyle={themeClass} title={`${theme || 'Default'} Theme`}>
              <ListGroup.Item eventKey="Primary" onSelect={this.chooseTheme}>Primary Theme</ListGroup.Item>
              <ListGroup.Item eventKey="Danger" onSelect={this.chooseTheme}>Danger Theme</ListGroup.Item>
              <ListGroup.Item eventKey="Success" onSelect={this.chooseTheme}>Success Theme</ListGroup.Item>
              <ListGroup.Item divider />
              <ListGroup.Item eventKey="Reset" onSelect={this.chooseTheme}>Default Theme</ListGroup.Item>
            </Button>
        </div>
          
        </div>
      </div>
    );
  }
}