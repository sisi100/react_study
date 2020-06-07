import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    let msg = e.target.value
    this.setState({ value: msg })
  }

  render() {
    return (
      <div>
        <p>入力値：{this.state.value}</p>
        <textarea value={this.state.value} onChange={this.handleChange} cols="30" rows="5"/>
      </div>
    )
  }
}

export default App;

