

import React from 'react'
import { connect } from 'react-redux'
import { getMessages } from 'reducers'
import { Link } from 'react-router-dom'

const ReceivedMessages = ({dispatch, messages}) => {


  const renderMessages = messages => 
    <div>
      <div className="from-user">
        <span>From: </span>Filip Jerga
      </div>
      <hr />
      <div className="navbar-item navbar-item-message">
        <div>
          Hello Filip Jerga, I would like to collaborate with you
        </div>
        <Link onClick={() => {}} to='/collaborations/dsada99786967'>
          <div className="button is-success">Join</div>
        </Link>
        <button
          onClick={() => {}}
          className="button is-warning">Later</button>
      </div>
    </div>


  return renderMessages(messages)
}


const mapStateToProps = (state) => ({messages: getMessages(state)})

export default connect(mapStateToProps)(ReceivedMessages)