import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import './App.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

class App extends Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2},
      {i: 'd', x: 2, y: 0, w: 1, h: 2}
    ];
    return (
      <div className="App hasBorder">
          
    
      <ReactGridLayout className="layout" 
        layout={layout} cols={12} rowHeight={50} width={1400}>
        <div className="hasBorder" key={'a'}>a</div>
        <div className="hasBorder" key={'b'}>b</div>
        <div className="hasBorder" key={'c'}>c</div>
        <div className="hasBorder" key={'d'}>d</div>
        <div className="hasBorder" key={'e'}>e</div>
      </ReactGridLayout>
    
  

      </div>
    );
  }
}

export default App;
