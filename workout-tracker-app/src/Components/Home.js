import React, { Component } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Options from './1Options'
import AddOwn from './2AddOwn'
import AddSchedule from './3AddSchedule'
import View from './4View'
import Forums from './5Forums'

const Headbar = () => {
    return (
        <div className='headbar'>
            <Link to={''} >Home</Link>
            <Link to={'../options'} >Options</Link>
            <Link to={'../own'} >own</Link>
            <Link to={'../sch'} >sch</Link>
            <Link to={'../view'} >view</Link>
            <Link to={'../forums'} >forums</Link>
        </div>
    )
}

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Routes>
            <Route path='' element={<Home/>} />
            <Route path='/a' element={<Headbar/>} />
            <Route path='/options' element={<Options/>} />
            <Route path='/own' element={<Options/>} />
            <Route path='/sch' element={<Options/>} />
            <Route path='/view' element={<Options/>} />
            <Route path='/forums' element={<Options/>} />
            {/* <Route path='' element={<Home/>} />
            <Route path='' element={<Home/>} /> */}
        </Routes>
      </div>
    )
  }
}
