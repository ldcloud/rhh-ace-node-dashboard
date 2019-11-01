import React, { Component } from 'react'
import Train from './Train'

export class TrainList extends Component {
  render () {
    return (
      <div className='section-general w-container'>
        <div className='board-div'>
          <h1 className='h1'>Melbourne Airport - Tullamarine</h1>
          <div className='titles w-clearfix'>
          	<div className='title_airline'>Airline</div>
          	<div className='title_code'>Code</div>
            <div className='title_time'>Scheduled</div>
            <div className='title_destination'>Destination</div>
            <div className='title_expected'>Expected</div>
            <div className='title_terminal'>Terminal</div>
            <div className='title_plat'>Gate</div>
            <div className='title_status'>Status</div>
          </div>
          <ul className='w-list-unstyled'>
            { this.props.data.all.map((train) => {
              return <Train train={train} />
            }
          )}
          </ul>
        </div>
      </div>
    )
  }
}

export default TrainList
