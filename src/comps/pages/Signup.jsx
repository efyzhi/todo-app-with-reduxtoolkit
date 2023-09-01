import { useDispatch, useSelector } from "react-redux"
import { updateLoginField, resetForm } from "../features/formSlice"
import { signupUser } from "../features/authSlice"


const Signup = () => {


const dispatch = useDispatch()
const { email, password } = useSelector((state) => state.form.login)

const handleSignup = async (e) => {
  e.preventDefault();
  dispatch(signupUser({ email, password }))
};

const handleEmail = (e) => {
  dispatch(updateLoginField({ field: 'email', value: e.target.value }))
};

const handlePassword = (e) => {
  dispatch(updateLoginField({ field: 'password', value: e.target.value }))
}

// const handleRepeatPassword = (e) => {
//   dispatch(updateLoginField({ field: 'repeatPassword', value: e.target.value }))
// }

    return (
    <>
     <form onSubmit={handleSignup}>
       <div>
         <label> Email: </label>
         <input type="email" value={email} onChange={handleEmail}/>
       </div>
       <div>
         <label> Password: </label>
         <input type="password" value={password} onChange={handlePassword}/>
       </div>
       {/* <div>
         <label> Repeat Password: </label>
         <input type="password" value={repeatPassword} onChange={handleRepeatPassword}/>
       </div> */}
       <div>
        <button> Signup </button>
       </div>
     </form>
      
    </>
   )
  }
  
  export default Signup