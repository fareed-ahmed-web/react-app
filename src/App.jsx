import "./App.css";
import Login from "./feature/auth/login/login";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./feature/auth/register/register";
import ForgotPassword from "./feature/auth/forgot-password/fogot-password";
import Layout from "./feature/layout/layout";
import Dashboard from "./feature/dashboard/dashboard";
import Employee from "./feature/employees/employee";
import Task from "./feature/task/task";
import { EmployeeProvider } from "./feature/employees/employee.context";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot" element={<ForgotPassword />} />
        <Route path="" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="employee" element={<EmployeeProvider>  <Employee /></EmployeeProvider>} />
          <Route path="task" element={<Task />} />
          <Route path="" element={<Navigate to="dashboard" replace />} />
          <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="login" replace />} />
      </Routes>
    </>
  );
}

export default App;
