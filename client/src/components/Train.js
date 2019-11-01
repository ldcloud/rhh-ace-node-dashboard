import React from 'react'

export class Train extends React.Component {
  render () {
    return (
      <li className='train_item w-clearfix' data-ix='upate-on-click'>
        <div className='board_message_container' data-ix='upate-on-click'>
          <div className='_5 board_message'>{this.props.train.airline}</div>
          <div className='_3 board_message'>{this.props.train.code}</div>
          <div className='_2 board_message'>{this.props.train.aimed_departure_time}</div>         
          <div className='_5 board_message'>{this.props.train.destination_name}</div>
          <div className='_2 board_message'>{this.props.train.expected_departure_time}</div>
          <div className='_2 board_message'>{this.props.train.terminal}</div>
          <div className='board_message'>{this.props.train.platform}</div>
          <div className='_4 board_message'>{this.props.train.status}</div>
        </div>
      </li>
    )
  }
}

export default Train
