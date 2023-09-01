import "../App.css"
import { Link } from "react-router-dom"

const Navbar = () => {
 return (
 <>
  <nav>
  <div>
    Todo
  </div>
  <ul>
    <li> 
  <Link to="/">
      Login
  </Link>
   </li>
   <li>
   <Link to="/signup">
     Signup
  </Link>
  </li>
  </ul>
  </nav>
 </>
)
}

export default Navbar