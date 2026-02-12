import { useState, use, useContext } from "react";
import Modal from "../layout/modal";
import EmployeeDetails from "./employee-details.jsx";
import { EmployeeContext, EmployeeProvider } from "./employee.context.jsx";


function Employee() {

    const { employeeList, deleteEmployee } = useContext(EmployeeContext);
    const [open, setOpen] = useState(false);
    const [employeeId, setEmployeeId] = useState(null);

    const updateEmployeeHandler = (id) => {
        setEmployeeId(id);
        setOpen(true);
    }

    const deleteEmployeeHandler = (id) => {
        deleteEmployee(id);
    }

    return (

        <div className="bg-white p-6 rounded shadow">
            <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                title='Add Emp'
                employeeId={employeeId || null}
            >
                <EmployeeDetails closePopup={() => setOpen(false)} employeeId={employeeId || null} />
            </Modal>

            {/* HEADER */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Employees</h2>
                <button
                    onClick={() => { setEmployeeId(null); setOpen(true) }}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    + Add New
                </button>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Role</th>
                            <th className="px-4 py-2 border">Email</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employeeList.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center py-4">
                                    No employees found
                                </td>
                            </tr>
                        ) : (
                            employeeList.map(emp => (
                                <tr key={emp.employeeId} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border">{emp.firstName + " " + emp.lastName}</td>
                                    <td className="px-4 py-2 border">{emp.role}</td>
                                    <td className="px-4 py-2 border">{emp.workEmail}</td>
                                    <td className="px-4 py-2 border text-right space-x-2">
                                        <button
                                            onClick={() => updateEmployeeHandler(emp.employeeId)}
                                            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => deleteEmployeeHandler(emp.employeeId)}
                                            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Employee;    