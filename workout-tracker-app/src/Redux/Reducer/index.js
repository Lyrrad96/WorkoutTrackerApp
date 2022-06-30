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
                // if(pay.cat > 0)
                state.cycle = pay.cycle
                console.log(state.cycle, pay.cycle)
                return {
                    ...state
                }
            }
        case 'CAT':
            {
                // if(pay.cat.length > 0)
                state.cat = pay.cat
                // state.schedule.currentUser = state.schedule.currentUser.concat([{cat: pay.cat}])
                return {
                    ...state
                }
            }
        case 'DAY':
            {
                console.log(action, pay, "dddd", state.day, state.schedule)
                if(!state.day.exercise)
                    state.day.exercise = [pay.exercise]
                else
                state.day.exercise = [...state.day.exercise, pay.exercise]
                state.day.cat = pay.cat
                console.log(state, state.day)
                return {
                    ...state
                }
            }
        case 'SCHEDULE':
            {
                console.log(action, pay.user, state.schedule[pay.user], state.day, "ssss", state, Object.keys(pay).length, Object.keys(pay).length != 0)
                //     state.schedule[0] = state.day
                // else
                if(Object.keys(state.day).length!=0)
                {
                    console.log(state, "inn", !state.schedule[pay.user], state.schedule[pay.user])
                    if(!state.schedule[pay.user]) 
                    {
                        console.log(state, "hehe")
                        state.schedule[pay.user] = [{
                            cat: state.day.cat,
                            ex: [state.day.exercise]
                        }]
                        // state.schedule[pay].concat([state.day])
                    }
                    else
                    {
                        console.log(state.schedule[pay.user], "ookl", pay, pay.user)
                        state.schedule[pay.user] = [...state.schedule[pay.user],{
                            cat: state.day.cat,
                            ex: state.day.exercise
                        }]
                        // state.schedule[pay.user] = [...state.schedule[pay.user],{
                        //     cat: state.day.cat,
                        //     ex: [state.day.exercise]
                        // }]
                    }
                        // ["cat"] = state.day.cat //state.schedule.push(state.day) //[[...state.schedule], [...state.day]]
                        // state.schedule[pay.user]["ex"] = state.schedule[pay.user]["ex"].concat([state.day.exercise]) //state.schedule.push(state.day) //[[...state.schedule], [...state.day]]
                }
                    
                state.day = {}
                console.log(state)
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