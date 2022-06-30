import React from 'react'

export default function DisplayBlock(props) {
    console.log(props)
        let keys = Object.keys(props.data)
        let parent = props.data
        
        const obj = (keys, parent) => {
            console.log(arg, "arg")
        let keys = Object.keys(arg)
        console.log(keys, arg[keys[0]], "block", arg)
        return (
            keys.map((k)=>{
                return (
                   <li>{k} {[k]}</li> 
                    )
            })
        )
    }
    console.log(typeof(props.data), props, typeof(props.data) === 'object')
  return (
      <div>
        {keys.map((d) => typeof(d) !== 'object' ? <div> {obj(d, parent)} </div> : 'asd')
                //     return <li>{d}
                //     <ul>
                //         {Object.keys(exercises[cat]).map((ex)=><li>
                //             {ex} <br/>
                //             Target Muscles: <ul>
                //                 {exercises[cat][ex].map((foc)=><li>{foc}</li>)}
                //             </ul>
                //             </li>)}
                //     </ul> 
                // </li>
                // })}
  }
        {/* <ul>
                {keys.map((d) => {
                    return <li>{d}
                    <ul>
                        {Object.keys(exercises[cat]).map((ex)=><li>
                            {ex} <br/>
                            Target Muscles: <ul>
                                {exercises[cat][ex].map((foc)=><li>{foc}</li>)}
                            </ul>
                            </li>)}
                    </ul> 
                </li>
                })}
            </ul> */}
    </div>
  )
}