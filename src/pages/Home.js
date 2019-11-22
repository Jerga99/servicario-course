


import React, { useState, useEffect } from 'react'
import Counter from '../components/Counter'
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

  state = {
    message: 'I am just a message'
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({message: 'I am updated Message!!!!!!'})
    }, 1000)
  }

  displayMessage = (type, count) => {
    if (type === 'increment') {
      alert(`Your number was increment! Current value: ${count}`)
      return
    }

    alert(`Your number was decremented! Current value: ${count}`)
  }

  render() {
    const { message } = this.state
    return (
      <div className="container">
        <h1>I am Home Page</h1>
        <p>{message}</p>
        <Counter 
          onChange={this.displayMessage}
          title={'I am counter Component!'}/>
      </div>
    )
  }
}





export default Home



