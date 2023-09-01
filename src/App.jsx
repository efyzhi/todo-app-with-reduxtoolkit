import "./App.css";
import Todo from "./comps/pages/Todo";
import Navbar from "./comps/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import { redirect } from "react-router-dom";
import Login from "./comps/pages/Login.jsx";
import Signup from "./comps/pages/Signup.jsx";
import { useFirebaseAuth } from "./comps/hooks/useFirebaseAuth";
import { useSelector } from "react-redux";

export default function App() {
  useFirebaseAuth();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <main>
      <Navbar />
      {/* <Todo /> */}
      <Routes>
        <Route
          index
          element={isAuthenticated ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/signup"
          element={
            !isAuthenticated ? <Signup /> : <Navigate to="/login" />
          }
        />
        <Route path="/home" element={<Todo />} />
      </Routes>
    </main>
  );
}
