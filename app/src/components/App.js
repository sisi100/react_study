import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  
  handleClick(){
    let newCount = this.state.count + 1
    this.setState({count:newCount})
  }
  
  render() {
    return (
    	<div>
        <h1>押してください。</h1>
        <p>{this.state.count}回押しました！</p>
        <button onClick={() => {this.handleClick()}}>押す</button>
      </div>
    );
  }
}

export default App;
