import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import store from '../Redux/Store'

const AddOwn = () => {
  const navigate = useNavigate()
  const onSubmit = (event) => {
    event.preventDefault()
    store.dispatch({
      type: 'EXERCISE',
      payload: {
          name: event.target[0].value,
          cat: event.target[1].value,
          focus: event.target[2].value,
      }
  })
  navigate('/options')
  }
    return (
    <div>
    <h1>Create Exercise</h1>
    <form onSubmit={(event) => onSubmit(event)}>
      <label htmlFor='name'>Name:</label>
      <input id='name'/> <br/>
      <label htmlFor='cat'>Category:</label>
      <select>
        <option>choose category</option>
        <option>push</option>
        <option>pull</option>
        <option>legs</option>
      </select> <br/>
      {/* <input id='cat' value={'push'} /> <br/> */}
      <label htmlFor='focus'>Target Muscles:</label>
      <input id='focus'/> <br/>
      <input type='submit' className='submit' value={'Create'}/>
    </form>
{/*    <Link to={'../a'}>Back</Link>
*/}    </div>
    )
}

export default AddOwn