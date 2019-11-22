


import React, { useState, useEffect } from 'react'
import './Home.css'


// const Home = () => {

//   const [message, setMessage] = useState('Super Message!!!')
//   const [count, setCount] = useState(0)
//   // const [test, setTest] = useState(0)

//   useEffect(() => {
//     setTimeout(() => {
//       setMessage('I am updated Message!!!!!!')
//     }, 1000)
//   }, [])

//   const increment = () => {
//     // setTest(test + 1)
//     setCount(count + 1)
//   }

//   const decrement = () => {
//     setCount(count - 1)
//   }

//   return (
//     <div className="container">
//       <h1>I am Home Page</h1>
//       <p>{message}</p>
//       <button onClick={increment}>Increment</button>
//        <div className="counter"> {count} </div>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   )
// }


class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      message: 'Super Message!!!!',
      count: 0
    }

    this.decrement = this.decrement.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({message: 'I am updated Message!!!!!!'})
    }, 1000)
  }

  increment = () => {
    const { count } = this.state
    this.setState({count: count + 1})
  }

  decrement() {
    const { count } = this.state
    this.setState({count: count - 1})
  }

  // lifecycle function
  render() {
    const { message, count } = this.state
    return (
      <div className="container">
        <h1>I am Home Page</h1>
        <p>{message}</p>
        <button onClick={this.increment}>Increment</button>
         <div className="counter"> {count} </div>
        { /* <button onClick={() => this.decrement()}>Decrement</button> */ }
        { /* <button onClick={this.decrement.bind(this)}>Decrement</button> */ }
         <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}





export default Home



