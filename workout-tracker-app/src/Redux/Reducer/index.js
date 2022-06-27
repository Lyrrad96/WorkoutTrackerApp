// let fs = require('fs');

const initialState = require('../../Components/DB.json')

const rootReducer = (state = initialState, action) => {
    let pay = action.payload
    console.log(state.schedule["asd"], pay)
    // console.log(state, action, action.payload, "red", state.users, pay, state.exercises)
    switch(action.type){
        case 'SIGNUP':
            {
                state.users = [...state.users, pay]
                return {
                    ...state
                }
            }
        case 'EXERCISE':
            {
                let focus = pay.focus.split(',')
                console.log(focus)
                if(Object.keys(state.exercises).includes(pay.cat)) {
                    state.exercises[pay.cat][pay.name] = focus
                }
                return {
                    ...state
                }
            }
        case 'LOGIN':
            {
                state.currentUser = pay.user
                return {
                    ...state
                }
            }
        case 'CYCLE':
            {
                state.addExercise[0] = pay.cycle
                return {
                    ...state
                }
            }
        case 'CAT':
            {
                state.addExercise[1] = pay.cat
                return {
                    ...state
                }
            }
        case 'DAY':
            {
                // console.log(action, pay)
                state.day = [...state.day, pay.exercise]
                return {
                    ...state
                }
            }
        case 'SCHEDULE':
            {
                console.log(action, pay, state.schedule, state.day)
                //     state.schedule[0] = state.day
                // else
                if(state.day.length!=0)
                    if(!state.schedule[pay]) 
                    {
                        state.schedule[pay] = [state.day]
                        // state.schedule[pay].concat([state.day])
                    }
                    else
                        state.schedule[pay] = state.schedule[pay].concat([state.day]) //state.schedule.push(state.day) //[[...state.schedule], [...state.day]]
                state.day = []
                return {
                    ...state
                }
            }
        case 'POST':
            {
                console.log("pst")
                let len = state.posts.length
                let date = new Date()
                state.posts.unshift({
                    name : state.currentUser,
                    post: pay,
                    time: date.getDate().toString() + '/' + date.getMonth().toString() + '/' + date.getFullYear().toString()
                })
                return {
                    ...state
                }
                 
            }
        case 'REPLY':
            {
                console.log("replyi")
                let len = state.posts.length
                let date = new Date()
                // if(state.posts.replies.length == 0) state.posts.replies = 
                console.log(state.posts.replies, "spr", state.posts)
                state.posts[pay[1]].replies.unshift({
                    name : state.currentUser,
                    post: pay[0],
                    time: date.getDate().toString() + '/' + date.getMonth().toString() + '/' + date.getFullYear().toString()
                })
                return {
                    ...state
                }
            }
        // let json = JSON.stringify(state);
        // fs.writeFile('DB.json', json, 'utf8', () => console.log("sent to DB"));
        default:
        return {
            ...state
        }
    }   
}

export default rootReducer