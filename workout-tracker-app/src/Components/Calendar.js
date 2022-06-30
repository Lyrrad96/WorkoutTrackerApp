import React, { Component } from 'react'

import store from '../Redux/Store'

// destructure store
// const cycle = store.getState().cycle
// console.log(cycle, store.getState().currentUser, store.getState().cycle, currentUser, "caklen")

console.log("calendar")

const Calendar = () => {
    // let user = currentUser
    // console.log(Object.keys(props).length, "namesdeing", !props, props, user)
    // if(Object.keys(props).length)
    const { currentUser, schedule, cycle, cat } = store.getState()
    let user = currentUser
    console.log(schedule[user], "poi", user, cycle, schedule["asd"])
    if(!schedule[user])
        return (
            <h1>No Schedule Created</h1>
        )

    console.log("calendaries", user, schedule, schedule[user])
    const week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    // get current date
    let today = new Date()
    let start_day = today.getDay() + 1
    let date_today = today.getDate()
    console.log(today, start_day, date_today, today.getDay(), week.indexOf("Sat")+1 == start_day)
    var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
        // array to store all the data to be printed in the calendar
        var allData = []
        for(let i = -7; i <= 7; i++) {
            console.log(store.getState(), schedule, cycle, user, schedule[user], (i + 7)%cycle, "hoya")

            let currentDate = new Date()
            currentDate.setDate(currentDate.getDate() + i)
            // allData.concat([currentDate.getDate()])
            allData.push({
                month: monthShortNames[currentDate.getMonth()],
                date: currentDate.getDate(),
                day: currentDate.getDay(),
                cat: schedule[user][(i + 7)%cycle]["cat"],
                sch: schedule[user][(i + 7)%cycle]["ex"]
            })
            console.log(currentDate.getDate(), allData)
        }
        console.log(allData.day, "day", cycle)

        // add empty entries from sunday till start day
        let end = allData[7].day
        for(let i = 0; i < end; i++) {
            allData.unshift([{
                month: "",
                date: "",
                day: "",
                cat: "",
                sch: ""
            }])
            console.log(allData, "alldata")
        }
        console.log(allData, "asdin", allData.sch, allData[0].day)
    
console.log(week)

let first = 0
let last = 7
let four = [1, 2, 3]
    return (
      <div>
        <h1>Calendar</h1>
        <table>
            <thead>
               <tr>{week.map((day)=><td>{day}</td>)}</tr>
            </thead>
            <tbody>
             
{
    // display 3 weeks
    four.map((n)=>{
        // store 7 entries in an array
    let oneweek = allData.slice(first, last)
    console.log(oneweek)
    first = last
    last = last + 7
    let today = 't'
    return (

        <tr>
        {
            
        oneweek.map((val)=>{
        let { month, date, cat, sch } = val
        console.log(date, date_today, today, date == date_today)
        if(date == date_today) today = 'today'
        else today = 't'
        console.log(val, month, date, cat, sch, oneweek)
        {
                    return (
                        month ? <td className={`${today}`}> {month} {date} <br/> {cat} {sch ? sch.map((ex)=><li className='ex'> {ex} </li>) : '0'} </td> : <td></td>
                    )
            }
        })
    }
        </tr>
        
)
    })
}
            </tbody>
        </table>
      </div>
    )
  }
export default Calendar

// const getRow = () => {
    //     let day = 1
    //     // fortnight.map((m)=>console.log(m))
    //     return (
    //             // <div>
    //             // <tr>

    //             <tbody>  
    //             {/* {week.map((m)=> week.indexOf(m)+1 <= allData[0].day ?<td>'1'</td> : '')} */}
    //                 {

    //                 allData.map((day)=>{
    //                     let { month, date, cat, sch } = day
    //                     return (
    //                         <tr>
    //                             {
    //                                 week.map((m)=> {
    //                                     return (
    //                                         <td>
    //                                         {month} {date} {cat} {sch ? sch.map((ex)=><li>{ex}</li>) : ''}
    //                                         </td>
    //                                     )
    //                                 })
    //                             }
    //                         </tr>
    //                 )
    //                 })
    //             }
                
    //             {/* {block()} */}
    //             {/* {date_today} */}
    //             {/* </div> */}
    //             {/* {getEle()} */}
    //                           </tbody>  
                    
    //             // </tr>
    //     )
//     }
//     const getEle = () => {
//         var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
//   "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
// ];

//         let allData = []
//         for(let i = -7; i <= 7; i++) {
//             console.log(store.getState(), schedule, cycle, user, schedule[user])
//             let currentDate = new Date()
//             currentDate.setDate(currentDate.getDate() + i)
//             // allData.concat([currentDate.getDate()])
//             allData.push({
//                 month: monthShortNames[currentDate.getMonth()],
//                 date: currentDate.getDate(),
//                 day: currentDate.getDay(),
//                 cat: cat,
//                 sch: schedule[user][(i + 7)%cycle]
//             })
//             console.log(currentDate.getDate(), allData)
//         }
//         console.log(allData, "asd", allData.sch, allData[0].day)
//         let weekBefore = date_today - 7
//         let dayofweek = 0
//         // console.log(month, date, cat, sch)
//         return (
//             // date_today + 21
//             <tbody>
//                 {/* <tr> */}
//                 {week.map((m)=> week.indexOf(m)+1 <= allData[0].day ? <td></td> : '')}
//                 {/* </tr> */}
//                 {/* {week.map((n) =>  week.indexOf(n)+1 == start_day ? <td>{ */}
//                     {allData.map((day)=>{
//                     let { month, date, cat, sch } = day
//                     dayofweek += 1
//                     return (
//                         <div>
//                         {/* {dayofweek%7 == 0 ? <tr> : ''} */}
//                         <td>
//                         {`${month} ${date} \n ${cat} \n`} {sch.map((ex)=><li>{ex}</li>)}
//                         </td>
//                         {/* {dayofweek%7 == 0 ? </tr> : ''} */}
//                         </div>
//                     )
                    
                    
//                 })
//             //{/* }</td> : <td></td> )} */}
                
//             }
//             </tbody>
//             // allData.map((a)=><p>a</p>)
//         )
//     }
// // {
// document.write("<td align=center width=35 bgcolor=lightblue><b>"+day_name+"</b></td>");
// }
// const fill_table = (month,month_len) =>
// {
// day=1;
// document.write("<table border=1 cellspacing=3 cellpadding=3%>");
// document.write("<tr><td colspan=7 align=center bgcolor=red><b>"+month+" "+year+"</b></td></tr>");

// document.write("</tr><tr>");
// for(var i=1; i<start_day;i++)
// {
// document.write("<td>");
// }
// for(var i=start_day; i<=7;i++)
// {
// document.write("<td align=center bgcolor=silver>"+day+"</td>");
// day++;
// }
// document.write("<tr>");
// while(day<=month_len)
// {
// for(var i=1; i<=7 && day<=month_len;i++)
// {
// document.write("<td align=center bgcolor=silver>"+day+"</td>");
// day++;
// }
// document.write("<tr>");
// start_day=i;
// }
// document.write("</tr></table>");
// return (

// )
// }
// year=prompt("enter 4 digit year ",2021);
// today=new Date("January 1, "+year);
// start_day=today.getDay()+1;
// fill_table("January", 31);
// if (year%4==0)
// fill_table("February", 29);
// else
// fill_table("February", 28);
// fill_table("March", 31);
// fill_table("April", 30);
// fill_table("May", 31);
// fill_table("June", 30);
// fill_table("July", 31);
// fill_table("August", 31);
// fill_table("September", 30);
// fill_table("October", 31);
// fill_table("November", 30);
// fill_table("December", 31);