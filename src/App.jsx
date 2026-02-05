import "./App.css";
import Login from "./feature/auth/login/login";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./feature/auth/register/register";
import ForgotPassword from "./feature/auth/forgot-password/fogot-password";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot" element={<ForgotPassword />} />
        {/* Not found → redirect to default */}
        <Route path="*" element={<Navigate to="" replace />} />
      </Routes>
    </>
  );
}

export default App;
