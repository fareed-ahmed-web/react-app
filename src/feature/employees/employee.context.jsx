import { createContext, useEffect } from "react";
import { useState } from "react";
import http from "../../services/http.service";


const API_URL = "http://localhost:8080/employees";

export const EmployeeContext = createContext();


export const EmployeeProvider = ({ children }) => {
    const [employeeList, setEmployeeList] = useState([]);

    const fetchEmployee = async () => {
        const response = await http.get(API_URL);
        setEmployeeList(response);
    }

    const addEmployee = async (employee) => {
        const response = await http.post(API_URL, employee);
        setEmployeeList([...employeeList, response]);
    }

    const updateEmployee = async (employee) => {
        const response = await http.put(`${API_URL}/${employee.employeeId}`, employee);
        setEmployeeList(employeeList.map(emp => emp.employeeId === employee.employeeId ? response : emp));
    }

    const deleteEmployee = async (employeeId) => {
        const response = await http.delete(`${API_URL}/${employeeId}`);
        setEmployeeList(employeeList.filter(emp => emp.employeeId !== employeeId));
    }

    useEffect(() => {
        fetchEmployee();
    }, []);

    return (
        <EmployeeContext.Provider value={{ employeeList, setEmployeeList, fetchEmployee, addEmployee, updateEmployee, deleteEmployee }}>
            {children}
        </EmployeeContext.Provider>
    );
}
