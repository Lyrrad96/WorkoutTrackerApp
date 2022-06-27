import { useNavigate } from "react-router-dom"
import store from "../Redux/Store"

const Create = () => {
    console.log("create")
    let navigate = useNavigate()
    const OnSubmit = (event) => {
        store.dispatch({
            type: 'POST',
            payload: event.target[0].value
        })
        navigate('../../forums')
        console.log(store.getState(), event.target[0].value, "lkj")
    }
    return (
        <div>
            Create
            <form onSubmit={(event) => OnSubmit(event)}>
            <textarea className='textarea' type={'textarea'} placeholder='post'/>
            <input type={'submit'} value='Post'/>
            </form>
        </div>
    )
}

export default Create