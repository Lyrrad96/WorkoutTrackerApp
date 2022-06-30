import React, { Component } from 'react'
import { Link, Route, Routes, BrowserRouter, useNavigate, Outlet } from 'react-router-dom'
import { useParams } from 'react-router'
import Options from './1Options'
import AddOwn from './2AddOwn'
import AddSchedule from './3AddSchedule'
import View from './4View'
import Forums from './5Forums'
import Create from './CreatePost'
import Answer from './Answer'
import Calendar from './Calendar'

import '../App.css'

import store from '../Redux/Store'

console.log(store, "home")

const Headbar = () => {
  const name = useParams()
  console.log(name, "name")
    return (
        <div className='headbar'>
            <Link className='link' to={'/home'} >Home</Link>
            <Link className='link' to={`/options`} >Browse Exercises</Link>
            <Link className='link' to={'/own'} >Create Exercise</Link>
            <Link className='link' to={'/sch'} >Create Schedule</Link>
            <Link className='link' to={'/view'} >View Schedules</Link>
            <Link className='link' to={'/forums'} >Forums</Link>
            <Link className='link' to={'../'} >Logout</Link>
        </div>
    )
}

const Login = () => {
  const { users } = store.getState()
  // const [state, dispatch] = useReducer(rootReducer, initialState)
  const navigate = useNavigate()
  const onSubmit = (event) => {
    event.preventDefault()
    let username = event.target[0].value
    let password = event.target[1].value
    console.log(username, password, store.getState(), users)
      store.dispatch({
          type: 'LOGIN',
          payload: {
              user: event.target[0].value,
          }
      })
      //     console.log(event.target[0].value)
      let obj = users.find(o => o.username === username);
      console.log(obj, "obj")
  if(!obj) alert("User not found")
  else if(obj.password === password) navigate(`../home`)
  else alert("incorrect password")

  }
  // store.subscribe((a)=>console.log(store.getState(), store.type))
  // console.log(store.getState(), "stee")
  return (
      <div>
          <form className='form' onSubmit={(event) => onSubmit(event)}>
              <label htmlFor='user'>Username:</label>
              <input id='user' placeholder='Username'/> <br />
              <label htmlFor='pass'>Password:</label>
              <input id='pass' type='password' placeholder='Password' /> <br />
              <input type='submit' className='submit' value={'Log in'}/>
          </form>
          <Link className='link' to='../signup'>SignUp</Link>
          {/* <Link className='link' to='../forgot'>Forgor💀</Link> */}
      </div>
  )
}

const SignUp = () => {
  const navigate = useNavigate()
  // const [state, dispatch] = useReducer(rootReducer, initialState)
  const onSubmit = (event) => {
    event.preventDefault()
      // let uid = Math.floor(Math.random() * 1000)
      store.dispatch({
          type: 'SIGNUP',
          payload: {
              // uid: uid,
              username: event.target[0].value,
              fname: event.target[1].value,
              lname: event.target[2].value,
              password: event.target[3].value
          }
      })
      console.log(event.target[0].value)
      navigate(`../login`)
  }
  return (
      <div>
          <form className='form' onSubmit={(event) => onSubmit(event)}>
              <label htmlFor='user'>Username:</label>
              <input id='user' placeholder='Username'/> <br />
              <label htmlFor='fname'>First Name:</label>
              <input id='fname' placeholder='First Name'/> <br />
              <label htmlFor='lname'>Last Name:</label>
              <input id='lname' placeholder='Last Name'/> <br />
              <label htmlFor='crp'>Create Password:</label>
              <input id='crp' type='password' placeholder='Password'/> <br />
              <label htmlFor='cop'>Confirm Password:</label>
              <input id='cop' type='password' placeholder='Password'/>  <br />
              <input type='submit' className='submit' value={'Sign up'}/>
          </form>
          <Link className='link' to='../login'>Login</Link>
          {/* <Link className='link' to='../forgot'>Forgor💀</Link> */}
      </div>
  )
}

const HomePage = () => {
  console.log(useParams(), "paea")
  return (
    <div>
      <h4>Homepage</h4>
      <Link className='link' to={'login'}>Login</Link>
      <Link className='link' to={'signup'}>Signup</Link>
      <Login/>
    </div>
  )
}

export default class Home extends Component {
  render() {
    console.log(store.getState().currentUser, "nyess")
    return (
      <div>
        <Headbar/>
        {/* <h1>Home</h1> */}
            {/* <BrowserRouter> */}
            <Outlet/>
            
        <Routes>
            <Route path='' element={<HomePage/>}/>
            <Route path='home' element={<Calendar/>} />
            <Route path='login' element={<Login/>} />
            <Route path='signup' element={<SignUp/>} />
            {/* <Route path=':name' element={<HomePage/>}> */}
              <Route path='options' element={<Options/>} />
              <Route path='own' element={<AddOwn/>} />
              <Route path='sch' element={<AddSchedule/>} />
              <Route path='view' element={<View/>} />
              <Route path='forums' element={<Forums/>} >
                <Route path='answer/:ind' element={<Answer/>}>
                <Route path=':rep' element={<Answer/>}/>
                  </Route>
              </Route>
              <Route path='create' element={<Create/>} />
            {/* </Route> */}
            {/* <Route path='' element={<Home/>} />
            <Route path='' element={<Home/>} /> */}
        </Routes>
            {/* </BrowserRouter> */}
      </div>
    )
  }
}
