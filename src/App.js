// @flow
import * as React from 'react';
import axios from 'axios';
import './App.css';
import MainPage from './components/MainPage';

type State ={
  data:any,
  value:string
};
type Props ={/**/};

class App extends React.Component<Props, State> {
  constructor(props:any) {
    super(props);
    this.state = {data:'', value:'var001'} ;

    (this:any).handleChange = this.handleChange.bind(this);
  }

  handleChange(event:any) {
  this.setState({value: event.target.value});
}

componentDidMount() {
  axios.get(`/api/variablist`)
   .then(res =>this.setState({data:res.data.data}) )
  }

  render() {
    let selectOption,chartData;
    if (this.state.data) {
      selectOption = this.state.data.map(option => <option key={option._id} value={option.name}>{option.name}</option>);
      chartData =  this.state.data.find(option => option.name === this.state.value);
    }
    return (
      <div className="container-fluid App">
      <div >
        <label className="field-properties">
         <p>Please select the variable</p>
          <select className="form-control" value={this.state.value} onChange={this.handleChange}>
            {selectOption}
          </select>
          </label>
          </div>
         <div>
          <MainPage chartData={chartData}/>
        </div>
      </div>
    );
  }
}

export default App;
