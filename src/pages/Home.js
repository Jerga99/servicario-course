


import React, { useState, useEffect } from 'react'
import './Home.css'


const Home = () => {

  const [message, setMessage] = useState('Super Message!!!')
  const [count, setCount] = useState(0)
  // const [test, setTest] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setMessage('I am updated Message!!!!!!')
    }, 1000)
  }, [])

  const increment = () => {
    // setTest(test + 1)
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="container">
      <h1>I am Home Page</h1>
      <p>{message}</p>
      <button onClick={increment}>Increment</button>
       <div className="counter"> {count} </div>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

// 1. Larger components, container components
// 2. Easier to handle lots of state
// 3. More boilerplate
// 4. Access to lifecycle functions

// class Home extends React.Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       message: 'Super Message!!!!'
//     }
//   }

//   // state = {
//   //   message: 'Super Message!!!!'
//   // }

//   // lifecycle function
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({message: 'I am updated Message!!!!!!'})
//     }, 1000)
//   }

//   // lifecycle function
//   render() {
//     const { message } = this.state
//     return (
//       <div className="container">
//         <h1>I am Home Class Page</h1>
//         <p>{message}</p>
//       </div>
//     )
//   }
// }





export default Home



