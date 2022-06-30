import React, { Component, useState } from 'react'
import { Route, Routes, Link, Outlet, useParams } from 'react-router-dom'

import store from '../Redux/Store'

let { posts } = store.getState()
// const posts = [
//     {
//         name: 'sdfa',
//         post: 'asdfo;ash',
//         time: '1212'
//     },
//     {
//         name: 'sdf',
//         post: 'fo;ash',
//         time: '12sd12'
//     },
//     {
//         name: 'sdfas',
//         post: 'asash',
//         time: '1ds212'
//     },
// ]

const Display = (props) => {
  const params = useParams()

console.log(store.getState(), posts, store.getState().currentUser, "forum", props.props[0], params)
// console.log(props, "prr", props.props, props.props[0].replies, props.props[0].replies.indexOf(props.props[0].replies[1]))
    return (
        <div className='post'>
            {props.props[0].post} <br/>
            -{props.props[0].name}{ ' ' }
            {props.props[0].time} <Link className='link' id='ans' to={`answer/${props.props[1]}`}>Reply</Link> {/*<Link className='link' to={'answer'}>Answer</Link>*/}
            <div className='reply'>
            {
              props.props[0].replies ? props.props[0].replies.map((r)=> <Display className='reply' props={[r, props.props[0].replies.indexOf(r)]}/>) : ''
            }
            </div>
            {/* { != 0 ? <Display props={props.props[props.props[1]]}/> : ''} */}
        </div>
    )
}

const Forum = () => {

   let [filter, setFilter] = useState('')
   let params = useParams()
    const OnChangeFilter = (event) => {
        event.preventDefault()
        setFilter(event.target.value)
    }
    // let 
    return (
    <div>
    <h1>Forums</h1>
    <input onChange={(event) => OnChangeFilter(event)} placeholder='filter'/>
    <Link className='link' to={'../create'}>Create</Link>
    
    <h2>Unanswered</h2>
    {posts.map((p)=> {
      if(p.replies.length == 0)
      {
        console.log(p, "pppp", posts.indexOf(p), params)
      if(p.post.toLowerCase().includes(filter.toLowerCase())) {return (
        <div>
      <Display props={[p, posts.indexOf(p)]} />
      {params.ind == posts.indexOf(p) ? <Outlet/> : console.log(params)}
      </div>
      )
    }
    }
  }
)}

<h2>Answered</h2>
{posts.map((p)=> {
      if(p.replies.length != 0)
      {
        console.log(p, "pppp", posts.indexOf(p), params)
      if(p.post.toLowerCase().includes(filter.toLowerCase())) {return (
        <div>
      <Display props={[p, posts.indexOf(p)]} />
      {params.ind == posts.indexOf(p) ? <Outlet/> : console.log(params)}
      </div>
      )
    }
    }
  }
)}

{/*    <Link to={'../a'}>Back</Link>
*/}    {/* <Create/> */}
    {/* <Routes>
        <Route path='create' element={<Create/>}/>
    </Routes> */}
    </div>
    )
  }
export default Forum