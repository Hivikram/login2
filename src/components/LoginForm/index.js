// Write your JS code here
import './index.css'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
const LoginForm = () => {
  const [input_Name, setInput_Name] = useState({})
  const [input_Password, setInput_Password] = useState({})

  const name_Input = event => {
    console.log(event.target.value)
    setInput_Name(event.target.value)
  }
  const password_Input = event => {
    console.log(event.target.value)
    setInput_Password(event.target.value)
  }
  const user_details = {input_Name, input_Password}
  const submit = async event => {
    event.preventDefault()

    const url = 'https://apis.ccbp.in/login'
    const obj = {
      method: 'POST',
      headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify(user_details),
    }

    const res = await fetch(url, obj)
    const rel = await res.json()
    console.log(rel)
  }

  return (
    // <Link to="/">
    <div className="bg">
      <div className="LoginForm_bg">
        <img
          className="loginform_img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        />
        <div className="form_div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="form_img"
          />
          <form onSubmit={submit}>
            <lable For="input" className="input_name">
              Name
            </lable>
            <br />

            <input
              id="input"
              onChange={name_Input}
              className="input"
              type="input"
            />
            <br />
            <br />
            <lable For="input2" className="input_name">
              Password
            </lable>
            <br />

            <input
              id="input2"
              onChange={password_Input}
              className="input"
              type="password"
            />

            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
    // </Link>
  )
}
export default LoginForm
//   return (
//     <div className="bg">
//       <form>
//         <button>Submit</button>
//       </form>
//     </div>
//   )

// const [st, setSt] = useState({})
//   const [st1, setSt1] = useState({})
//   const Name_input = event => {
//     const name_input = event.target.value
//     setSt(name_input)
//   }
//   const Password_input = event => {
//     const password_input = event.target.value
//     setSt1(password_input)
//   }
//   const user_n$p = {st, st1}
//   const subtn = async event => {
//     event.preventDefault()
//     // event.preventDefault()
//     const url = 'https://apis.ccbp.in/login'
//     const obj = {
//       method: 'POST',
//       body: JSON.stringify(user_n$p),
//     }
//     const res = await fetch(url, obj)
//     const rel = await res.json()
//     console.log(rel)
//   }
//   console.log(st)

//   console.log(st1)

//   return (
// <Link to="/">
//   <div className="bg">
//     <div className="LoginForm_bg">
//       <img
//         className="loginform_img"
//         src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
//       />
//       <div className="form_div">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
//           className="form_img"
//         />
//       </div>
//     </div>
//   </div>
// </Link>
//   )

//             <form onSubmit={subtn}>
//               <lable className="input_name">Name</lable>
//               <br />

//               <input onChange={Name_input} className="input" type="input" />
//               <br />
//               <br />
//               <lable className="input_name">Password</lable>
//               <br />

//               <input
//                 onChange={Password_input}
//                 className="input"
//                 type="password"
//               />
//               <button type="submit" className="btn">
//                 Submit
//               </button>
//             </form>
