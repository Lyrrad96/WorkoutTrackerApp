import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import store from '../Redux/Store'



const Answer = () => {
    let navigate = useNavigate()
    const params = useParams()
    console.log(params)
    const OnSubmit = (event) => {
        store.dispatch({
            type: 'REPLY',
            payload: [event.target[0].value, params.ind]
        })
        navigate('/forums')
        console.log(store.getState(), event.target[0].value, "lkj")
    }
    return (
        <div>
            <form onSubmit={(event) => OnSubmit(event)}>
            <textarea className='textarea' type={'textarea'} placeholder='post'/>
            <input type={'submit'} value='Post'/>
            </form>
        </div>
    )
}

export default Answer