import { useDispatch, useSelector } from "react-redux";
import { updateLoginField, resetForm } from "../features/formSlice";
import { loginUser } from "../features/authSlice";


const Login = () => {

  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.form.login);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    dispatch(resetForm("login"));
  };

  const handleEmail = (e) => {
    dispatch(updateLoginField({ field: "email", value: e.target.value }));
  };

  const handlePassword = (e) => {
    dispatch(updateLoginField({ field: "password", value: e.target.value }));
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <div>
          <label> Email: </label>
          <input type="email" value={email} onChange={handleEmail} />
        </div>
        <div>
          <label> Password: </label>
          <input type="password" value={password} onChange={handlePassword} />
        </div>
        <div>
          <button type="submit"> Log in </button>
        </div>
      </form>
    </>
  );
};

export default Login;
