import React, { Component, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import Options from './1Options'
import store from '../Redux/Store'


const pageReducer = (state, action) => {
  // console.log(state, "pagered", action, store.getState().schedule, store)
  switch(action.type) {
      case "UPDATE_NAME":
      return {
          ...state,
          fname: "fname"
      }
      case "PREV":
          if(state != 0)
          return {
              ...state,
              page: state.page - 1
          }
          else return {
              ...state,
              page: state.page
          }
      case "NEXT":
        // if(store.getState().cat == 'rest') {
        //   // alert("Rest")
        //   return {
        //     ...state,
        //     page: 1,
        //     day: state.day + 1
        // }
        // }
          if(state.page == 2) {
            store.dispatch({
              type: 'SCHEDULE',
              payload: {
                user: store.getState().currentUser
              }
            })
            return {
              ...state,
              page: 1,
              day: state.day + 1
          }
          }
          
          else 
          return {
            ...state,
            page: state.page + 1
          }
  }
}

const Cycle = () => {
  const onChange = (event) => {
    event.preventDefault()
    store.dispatch({
      type: 'CYCLE',
      payload: {
        cycle: event.target.value
      }
    })
  }
  return (
    <div>
      <label>Enter length of cycle (in days):</label>
      <input type={'number'} placeholder='' onChange={(event) => onChange(event)}/> <br/>
    </div>
  )
}

const Category = () => {
  const onChange = (event) => {
    console.log(event.target.value)
    event.preventDefault()
    store.dispatch({
      type: 'CAT',
      payload: {
        cat: event.target.value
      }
    })
  }
  return (
    <div>
      <label>Enter Category: </label>
      <select onChange={(event) => onChange(event)}>
        <option>choose category</option>
        <option>push</option>
        <option>pull</option>
        <option>legs</option>
        {/* <option>rest</option> */}
      </select>
      {/* <input type={'text'} placeholder='Category' onChange={(event) => onChange(event)} /> <br/> */}
    </div>
  )
}

const Display = (props) => {
  console.log(store, store.getState().currentUser, "forum")
  console.log(props)
      return (
          <div className='post'>
              {props.props.name} <br/>
              {props.props.post} <br/>
              {props.props.time} <br/>
          </div>
      )
  }

const Exercise = () => {
    // const [state, dispatch] = useReducer(pageReducer, 0)

    const { exercises, posts, cycle, cat } = store.getState()
  
    const categories = Object.keys(exercises[cat])
    
    console.log(exercises[cat], 'cat', categories, cycle, cat)
    
    let [filtered, useFiltered] = useState('')
   const OnChangeFilter = (event) => {
      event.preventDefault()
      useFiltered(event.target.value)
      console.log(filtered)
  }
  const add = (ex) => {
    alert(`${ex} added`)
    if(cat == 'rest') ex = []
    console.log("add", ex)
    store.dispatch({
      type: 'DAY',
      payload: {
        exercise: ex,
        cat: cat
      }
    })
  }
    return (
        <div>
         
          <h2>{cat} exercises</h2>

          <input onChange={(event) => OnChangeFilter(event)} placeholder='filter'/> <br></br>
            <ul>
                {categories.map((ex)=> {
                  console.log(filtered, ex.toLowerCase(), "fil", ex.includes(filtered))
                  if(ex.toLowerCase().includes(filtered)) {
                    return (
                    <li  className='block' id='click' onClick={() => add(ex)}>{ex} <br/>
                            Target Muscles: <ul className='hlist'>
                            {exercises[cat][ex].map((foc)=><li>{foc}</li>)}
                    </ul> 
                </li>
              )
            }
          }
        )
      }
    </ul>
  </div>
)}

let initialstate = {
  page: 0,
  cPage: [Cycle, Category, Exercise, <Link to={'home'}>View</Link>],
  day: 0,
  exercise: ''
}
const Day = (props) => {
  const [state, dispatch] = useReducer(pageReducer, initialstate)
  let page = state.cPage[state.page]
  const Current = page
  // console.log(props.cycle)
  return (
    <div>

                <div className='buttons'>
                    <button className='link' onClick={() => dispatch({type: 'PREV'})} disabled={page==Cycle}>prev</button>
                    <button className='link' onClick={() => dispatch({type: 'NEXT', payload: store.getState().schedule})}>next</button>
                </div>           
                {state.page != 0 && state.day < store.getState().cycle ? <h2>Day {state.day + 1}</h2> : <div><br/><br/><br/><br/></div>}
                <div className='steps'>
                    {/* <Current/> */}
            {state.day == store.getState().cycle ? <Link className='link' to={'../home'}>View</Link>: <Current/>}

                </div>
                {console.log(state.day, store.getState().cat)}
            {/* {state.day == store.getState().cycle ? <Link to={'home'}>View</Link>: ''} */}

      {/* <label>Category:</label>
      <input type={'text'} placeholder='Category' /> <br/>
      <label>Exercise:</label>
      <Options/>
      <input type={'text'} placeholder='Category' /> <br/>
      {count>=0 ? } */}
    </div>
  )
}

export default class Schedule extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cycle: 0,
       count: 0
    }
  }
  onChange = (event) => {
    event.preventDefault()
    this.setState({cycle: event.target.value})
  }
  render() {
    return (
    <div>
    <h1>Schedule</h1>
    
    {/* {!isNaN(this.state.cycle) ? this.state.cycle : 'invalid'} */}
    <Day count={this.state.cycle}/>
    {/* <Link to={'../'}>Back</Link>   */}
    </div>
    )
  }
}
