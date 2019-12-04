


import React from 'react'

const JoinedPeople = ({users}) => {
  if (users.length > 0) {
    return users.map(user => 
      <div key={user.id}
        className="viewWrapItem">
        <img
            className="viewAvatarItem"
            src={user.avatar}
            alt="icon avatar"
        />
        <div className="viewWrapContentItem">
          <span className="textItem">{user.fullName}
          </span>
          <span className="textItem">{user.state}
          </span>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default JoinedPeople