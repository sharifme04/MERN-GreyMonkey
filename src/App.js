import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import MainPage from './components/MainPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data:'', value:'var001'} ;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
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
