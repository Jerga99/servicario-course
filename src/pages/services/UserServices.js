


import React from 'react'
import withAuthorization from 'components/hoc/withAuthorization'

import { fetchUserServices } from 'actions'

class UserServices extends React.Component {

  componentDidMount() {
    const { auth: { user } } = this.props

    fetchUserServices(user.uid).then(services => {
      alert(JSON.stringify(services))
    })
  }


  render() {
    return (
      <div className="container">
        <div className="content-wrapper">
          <div className="columns">
            I am UserServices PAGE!
          </div>
        </div>
      </div>
    )
  }
}


export default withAuthorization(UserServices)