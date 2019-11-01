import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TrainList from './components/TrainList'

//const dotenv = require('dotenv');
//dotenv.config();
const APIURL = process.env.REACT_APP_APIURL || 'https://secure-rhh-ace-node-dashboard-server-rhh-ace.bpsaz.ldcloud.com.au/'



class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {
        all: [{
          aimed_departure_time: '',
          destination_name: 'Loading...',
          platform: '',
          expected_departure_time: ''
        }]
      }
    }
  }

  componentDidMount () {
    var component = this
    var apiUrl = APIURL

    setInterval(() => {
      fetch(apiUrl)
      .then((resp) => resp.json())
      .then((data) => {
        component.setState({
          data: data.departures
        })
      })
    }, 1000)
  }

  render () {
    return (
      <div className='App'>
        <TrainList data={this.state.data} />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))

export default App
