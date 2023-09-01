import { logoutUser } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'

const Todo = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignout = async () => {
    try {
      await dispatch(logoutUser())
      navigate('/', { replace: true })
    } catch (error) {
      console.error('Logout error:', error.message)
    }
  }
    return (
    <>
      <h1> Todo App </h1>
      <div>
         <label> Add Task </label>
         <input />
      </div>
      <section className="task"> 
         <div>
           Task
        </div>
        <div>
           Date
        </div>
        <div>
          Status
        </div>
      </section>
      <button onClick={handleSignout}>Sign out </button>
    </>
   )
   }
   
   export default Todo;