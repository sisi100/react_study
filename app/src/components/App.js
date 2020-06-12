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
        <ul>
          <li>Twitter向け文字カウンター</li>
          <li>{this.state.value.length}/280</li>
        </ul>

        <textarea value={this.state.value} onChange={this.handleChange} cols="30" rows="10"/>
      </div>
    )
  }
}

export default App;

