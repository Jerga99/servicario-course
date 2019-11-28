

import React from 'react'



const withAuthorization = Component => {

  class WithAuthorization extends React.Component {

    state = {
      secretData: 'Hello World SECRET!!!!',
      secretNumber: 98777967
    }

    someSuperFunctionality() {
      alert('I AM SUPER')
    }

    render() {
      return (
        <Component 
          {...this.state}
          someSuperFunctionality={this.someSuperFunctionality} />
      )
    }
  }

  return WithAuthorization
}


export default withAuthorization





