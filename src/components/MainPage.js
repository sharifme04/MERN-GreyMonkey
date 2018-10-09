import React, { Component } from 'react';
import {ScatterplotChart} from 'react-easy-chart';

class MainPage extends Component {
constructor(props) {
  super(props);
  this.state ={ width:900, height:500};

  this.handleResize     = this.handleResize.bind(this);
}

componentDidMount() {
  window.addEventListener('resize', this.handleResize);
  this.handleResize();
}

componentWillUnmount() {
  window.removeEventListener('resize', this.handleResize);
}

handleResize() {
  this.setState({
    width: window.innerWidth*.65,
    height: window.innerWidth*0.35
  });
}
  render() {
    var graph ,x;
      if (this.props.chartData) {
         var chartData = this.props.chartData.data.map((data,y)=>{
           if (isNaN(data)) {
              x=0;
           }else{
             x= data;
          }
          return {x:y, y:x};
        });
          graph =
          <ScatterplotChart
           data={chartData}
           axes
           axisLabels={{x: 'value of x variable ---->', y: 'value of y index ---->'}}
           width={this.state.width}
           height={this.state.height}
           style={{ '.label': { fill: 'black' } }}
         />
    }

   console.log(chartData);
    return (
      <div>{graph}</div>
    );
  }

}

export default MainPage;
