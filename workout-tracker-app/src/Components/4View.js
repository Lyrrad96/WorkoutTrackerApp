import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Calendar from './Calendar'
import store from '../Redux/Store'

const View = () => {
  let { schedule } = store.getState()
    return (
    <div>
    <h1>View</h1>
    {
      Object.keys(schedule).map((user)=> {
        let d = 0
        return (
      <ul className='hlist' id='day'> <div id='day'> username: {user} </div> <br/> {schedule[user].map((day)=>{
        
      return (
        <li className='day'>Day { d = d + 1 }{day["ex"].map((ex)=>{
          
        return <li>{ex}</li>
        }
        )}</li>
      )
    })
    }</ul>)
  })
}

    {/* <Calendar props={'asd'}/> */}
    <Link to={'../a'}>Back</Link>
    </div>
    )
}
export default View