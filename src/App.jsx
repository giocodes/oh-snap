import React, { Component } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import './App.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
// let ResponsiveReactGridLayout = ReactGridLayout.Responsive;

import Form from './Form'
import Chart from './Chart'
import Table from './Table'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'A',
      lock: true
    };
    this.layout = [
      {
        i: 'a',
        x: 0,
        y: 0,
        w: 12,
        h: 3,
        minW: 12,
        maxW: 12,
        static: this.state.lock
      },
      {
        i: 'b',
        x: 0,
        y: 0,
        w: 1,
        h: 6,
        minH: 2,
        isDraggable: !this.state.lock,
        isResizable: !this.state.lock
      },
      {
        i: 'c',
        x: 1,
        y: 1,
        w: 11,
        h: 6,
        isDraggable: !this.state.lock,
        isResizable: !this.state.lock
      },
      {
        i: 'd',
        x: 1,
        y: 0,
        w: 3,
        h: 10,
        isDraggable: !this.state.lock,
        isResizable: !this.state.lock
      },
      {
        i: 'e',
        x: 5,
        y: 0,
        w: 8,
        h: 10,
        isDraggable: !this.state.lock,
        isResizable: !this.state.lock
      }


    ];
    this.layouts = {
      lg: this.layout
    }
  }
  componentWillUpdate(nextProps,nextState) {
    this.layout.map(item => {
      item.isDraggable = this.state.lock;
      item.isResizable = this.state.lock;
      return null
    });
    this.layouts = {
      lg: this.layout
    }

  }
  updateLayoutItem(layout){
    this.layout = layout;
    // console.log(layout);
    // console.log('layout');
  }
  updateDisplay(str) {
    this.setState({
      display: str
    })
  }
  toggleLock() {
    this.setState((prevState, props) => {
      return {lock: !prevState.lock}
    })
    // console.log("was " + this.state.lock)
  }

  render() {
    // layout is an array of objects, see the demo for more complete usage
    
    return (
      <div className={!this.state.lock ? "App hasBorder" : "App"}>
        <ResponsiveReactGridLayout 
        className={!this.state.lock ? "layout hasBorder" : "layout"} layouts={ this.layouts } 
        breakpoints={ { lg: 1200 } } rowHeight={ 24 } margin={ [6, 6] }
          cols={ { lg: 12 } } 
          onLayoutChange={(currentLayout) => this.updateLayoutItem(currentLayout)}>
          <div className={!this.state.lock ? "hasBorder" : ""} key={ "a" }>
            <span className="float right margin-right" onClick={() => this.toggleLock()}>
              {!this.state.lock ? "Lock" : "Unlock"}
            </span>
            <h1 className="float left margin-left">Header</h1>
          </div>
          <div className={!this.state.lock ? "hasBorder" : "gray"} key={ "b" }>
            <ul className="isNavbar">
              <li><strong>Navbar</strong></li>
              <li onClick={ () => this.updateDisplay("A") }>Entity A</li>
              <li onClick={ () => this.updateDisplay("B") }>Entity B</li>
            </ul>
          </div>
          <div className={!this.state.lock ? "hasBorder" : ""} key={ "c" }>
            <Table/>
          </div>
          <div className={!this.state.lock ? "hasBorder" : ""} key={ "d" }>
            <Form/>
          </div>
          <div className={!this.state.lock ? "hasBorder" : ""} key={ "e" }>
            <Chart/>
          </div>
          <div className={!this.state.lock ? "hasBorder" : "purple"} key={ "f" }
          data-grid={{x: 0, y: 0, w: 1, h: 1,isDraggable: !this.state.lock,
        isResizable: !this.state.lock}}>F</div>
          <div className={!this.state.lock ? "hasBorder" : "purple"} key={ "g" }
          data-grid={{x: 0, y: 0, w: 1, h: 1,isDraggable: !this.state.lock,
        isResizable: !this.state.lock}}>G</div>
        </ResponsiveReactGridLayout>
      </div>
      );
  }
}

export default App;
