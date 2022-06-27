import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import DisplayBlock from './DisplayBlock'

// const exercises = {
//     push: {
//         push1 : [1, 2, 3],
//         push2 : [2, 2, 3],
//         push3 : [3, 2, 2],
//     },
//     pull: {
//         pull1 : [5, 2, 3],
//         pull2 : [6, 2, 3],
//         pull3 : [7, 2, 2],   
//     },
//     legs: {
//         legs1 : [8, 2, 3],
//         legs2 : [9, 2, 3],
//         legs3 : [10, 2, 2],
//     }
// }

import store from '../Redux/Store'
console.log(store.getState())
const Display = () => {
    const { exercises } = store.getState()
    const categories = Object.keys(exercises)
    console.log(exercises['push'], 'cat', categories)
    return (
        <div>
            {/* <DisplayBlock data={exercises}/> */}
            <ul>
                {categories.map((cat)=> {
                    return <li className='oblock'> <h3> Category: {cat} </h3>
                    <ul>
                        {Object.keys(exercises[cat]).map((ex)=><li className='iblock'>
                            {ex} <br/>
                            Focus: <ul className='hlist'>
                                {exercises[cat][ex].map((foc)=><li>{foc}</li>)}
                            </ul>
                            </li>)}
                    </ul> 
                </li>
                })}
            </ul>
            {/* <ul>
                {categories.map((ex)=> {
                    return (
                    <li  className='block' onClick={() => add(ex)}>{ex} <br/>
                            Focus: <ul className='hlist'>
                                {exercises[cat][ex].map((foc)=><li>{foc}</li>)}
                    </ul> 
                </li>
              )
            }
        )
      }
    </ul> */}
        </div>
    )
}

export default class Options extends Component {
  render() {
    return (
    <div>
    <h1>Exercises</h1>
    <Display/>
    <Link to={'../a'}>Back</Link>
    </div>
    )
  }
}
