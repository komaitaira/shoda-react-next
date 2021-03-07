import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Hello",
      counter: 0,
      flg: true,
    };
    this.doAction = this.doAction.bind(this);

    // let timer = setInterval(() => {
    //   this.setState({
    //     count: this.state.count + 1,
    //     msg: `count: ${this.state.count}`
    //   });
    // }, 1000);
  }

  doAction(event) {
    this.setState({
      counter: this.state.counter + 1,
      msg: `*** count: ${this.state.counter} ***`,
      flg: !this.state.flg,
    });
  };

  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <p className="subtitle">Count Number</p>
        {this.state.flg ?
          <div className="alert alert-primary text-center">
            <p className="h5 mb-5">{this.state.msg}</p>
            <button className="btn btn-primary" onClick={this.doAction}>Click</button>
          </div>
          :
          <div className="alert alert-danger text-center">
            <p className="h5 mb-5">{this.state.msg}</p>
            <button className="btn btn-primary" onClick={this.doAction}>Click</button>
          </div>
        }
      </div>
    </div>
  }
}
export default App;
