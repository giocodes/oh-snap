import React, { Component } from 'react';
import ReactGridLayout, {Responsive, WidthProvider} from 'react-grid-layout';
import './App.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
// let ResponsiveReactGridLayout = ReactGridLayout.Responsive;

class App extends Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    let layout = [
      {i: 'a', x: 0, y: 0, w: 12, h: 1, static: true},
      {i: 'b', x: 1, y: 0, w: 8, h: 8, minW: 2, maxW: 10}
      // {i: 'c', x: 4, y: 0, w: 1, h: 2},
      // {i: 'd', x: 2, y: 0, w: 1, h: 2}
    ];
    let layouts = {
      lg : layout
    }
    return (
      <div className="App hasBorder">
          
    
      <ReactGridLayout className="layout hasBorder" 
        layout={layout} cols={12} rowHeight={50} width={940}
        margin={[6,6]}
        >
        <div className="hasBorder" key={'a'}>a</div>
        <div className="hasBorder" key={'b'}>b</div>
        <div className="hasBorder" key={'c'}>c</div>
        <div className="hasBorder" key={'d'}>d</div>
        <div className="hasBorder" key={'e'}>e</div>
      </ReactGridLayout>

      <ResponsiveReactGridLayout className="layout hasBorder" layouts={layouts}
      breakpoints={{lg: 1200}} rowHeight={20} margin={[6,6]}
      cols={{lg: 12}} >
      <div className="hasBorder" key={"a"}>1</div>
      <div className="hasBorder hasScroll" key={"b"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae rutrum justo. In placerat est vel tellus blandit maximus. Cras eros augue, auctor a tincidunt ut, ullamcorper molestie diam. Nunc gravida convallis lacinia. Vestibulum eget vestibulum enim, non convallis nibh. Fusce feugiat, est at luctus lacinia, dolor velit maximus tortor, et euismod libero urna a justo. Suspendisse at mollis diam, tincidunt maximus eros. Sed accumsan ullamcorper sapien, vitae vestibulum dui molestie ut. Donec eu lacinia enim, sit amet tincidunt odio. Aliquam accumsan magna eu varius cursus. Praesent tristique ut felis nec viverra. Vivamus sit amet magna suscipit, ultricies orci tincidunt, faucibus tortor. Ut sagittis lectus quis nulla dignissim, non commodo ex sagittis. Pellentesque posuere commodo metus, at fringilla sem consectetur at.
      </div>
      <div className="hasBorder" key={"c"}>3</div>
    </ResponsiveReactGridLayout>
    
  

      </div>
    );
  }
}

export default App;
