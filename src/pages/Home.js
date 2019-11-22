


import React from 'react'
import './Home.css'


// 1. Smaller components
// 2. Usualy presentational component
// 3. In most of cases reusable components
// 4. Focus on one responsibility

// const Home = () => {
  // return (
  //   <div className="container">
  //     <h1>I am Home Page</h1>
  //   </div>
  // )
// }

// 1. Larger components, container components
// 2. Easier to handle lots of state
// 3. More boilerplate
// 4. Access to lifecycle functions

class Home extends React.Component {

  constructor(props) {
    super(props)
    
    this.state = {
      message: 'Super Message!!!!'
    }
  }

  // state = {
  //   message: 'Super Message!!!!'
  // }

  // lifecycle function
  componentDidMount() {
    setTimeout(() => {
      this.setState({message: 'I am updated Message!!!!!!'})
    }, 1000)
  }

  // lifecycle function
  render() {
    const { message } = this.state
    return (
      <div className="container">
        <h1>I am Home Class Page</h1>
        <p>{message}</p>
      </div>
    )
  }
}





export default Home



