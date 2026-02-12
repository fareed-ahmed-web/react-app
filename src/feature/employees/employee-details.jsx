import { useState, use, useEffect } from "react";
import { EmployeeContext } from "./employee.context";

const empForm = {
    firstName: "",
    middleName: "",
    lastName: "",
    role: "",
    workEmail: "",
    password: "",
    mobileNumber: "",
    alternatePhoneNumber: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    maritalStatus: "",
    bloodGroup: "",
    currentAddress: "",
    permanentAddress: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    jobTitle: "",
    department: "",
    workMode: "",
    employmentType: "",
    employeeStatus: "",
    dateOfJoining: "",
    officeLocation: "",
    shiftTiming: "",
    performanceRating: "",
    appraisalHistory: "",
    skills: "",
    education: "",
    projects: "",
    languagesKnown: "",
    salary: "",
    bonusAmount: "",
    leaveBalance: "",
    photoPath: "",
    resumePath: "",
    aadhaarNumber: ""
}
function EmployeeDetails({ closePopup, employeeId }) {
    const { addEmployee, updateEmployee, employeeList } = use(EmployeeContext);
    const [employeeFrom, setEmployeeFrom] = useState({});

    useEffect(() => {
        if (employeeId) {
            const emp = employeeList.find(emp => emp.employeeId === employeeId);
            if (emp) {
                setEmployeeFrom({ ...emp });
            }
        } else {
            setEmployeeFrom({ ...empForm });
        }
    }, [employeeId, employeeList]);

    const handleSubmitForm = async (event) => {
        event.preventDefault();
        const payload = {
            ...employeeFrom,
            mobileNumber: "1234658930",
            alternatePhoneNumber: "58745679",
            dateOfBirth: "1997-08-21",
            gender: "Male",
            nationality: "US",
            maritalStatus: "Single",
            bloodGroup: "A+",
            currentAddress: "Whitefield, Mumbai",
            permanentAddress: "Mumbai",
            emergencyContactName: " Mehta",
            emergencyContactNumber: "5798989898",
            jobTitle: "Backend Developer",
            department: "Engineering",
            workMode: "OFFICE",
            employmentType: "FULL_TIME",
            employeeStatus: "ACTIVE",
            dateOfJoining: "2024-02-01",
            officeLocation: "Mumbai",
            shiftTiming: "11AM-8PM",
            performanceRating: 4.4,
            appraisalHistory: "Good performance",
            skills: "Java,Spring Boot,Hibernate",
            education: "B.E Computer Engineering",
            projects: "Internal HR System",
            languagesKnown: "English, Hindi, Gujarati",
            salary: 78000,
            bonusAmount: 4000,
            leaveBalance: 20,
            photoPath: null,
            resumePath: null,
            active: true
        }
        if (employeeFrom.employeeId) {
            updateEmployee(payload);
        } else {
            addEmployee(payload);
        }
        closePopup();
    }

    const changeHandler = (event) => {
        setEmployeeFrom({
            ...employeeFrom,
            [event.target.name]: event.target.value
        })
    };

    return (
        <>
            <div className="w-full max-w-full bg-white rounded-xl p-8">

                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Employee Details
                    </h2>
                    <p className="text-sm text-gray-500">
                        Fill in the employee information below
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-12 scroll-smooth" onSubmit={handleSubmitForm} >

                    {/* Grid Section */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                        {/* First Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                First Name
                            </label>
                            <input
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={employeeFrom.firstName}
                                onChange={changeHandler}
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                            {/* Error */}
                            {/* <p className="text-xs text-red-500 mt-1">Required</p> */}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Middle Name
                            </label>
                            <input
                                type="text"
                                placeholder="Middle Name"
                                name="middleName"
                                value={employeeFrom.middleName}
                                onChange={changeHandler}
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Last Name
                            </label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={employeeFrom.lastName}
                                onChange={changeHandler}
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                placeholder="example@exmaple.com"
                                name="workEmail"
                                value={employeeFrom.workEmail}
                                onChange={changeHandler}
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                placeholder="+91 9876543210"
                                name="mobileNumber"
                                value={employeeFrom.mobileNumber}
                                onChange={changeHandler}
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Alternet Number
                            </label>
                            <input
                                type="text"
                                name="alternatePhoneNumber"
                                value={employeeFrom.alternatePhoneNumber}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>

                        {/* Department */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Role
                            </label>
                            <select
                                name="role"
                                value={employeeFrom.role}
                                onChange={changeHandler}
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none">
                                <option value=''>Select Role</option>
                                <option value='ADMIN'>Admin</option>
                                <option value='MANAGER'>Manager</option>
                                <option value='EMPLOYEE'>Employee</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Aadhar Number
                            </label>
                            <input
                                type="text"
                                name="aadhaarNumber"
                                value={employeeFrom.aadhaarNumber}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>

                        {/* Role */}
                        {/* <div>
                            <label className="block text-sm font-medium text-gray-700">
                                DOB
                            </label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                value={employeeFrom.dateOfBirth}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Gender
                            </label>
                            <input
                                type="text"
                                name="gender"
                                value={employeeFrom.gender}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Nationality
                            </label>
                            <input
                                type="text"
                                name="nationality"
                                value={employeeFrom.nationality}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Marital Status
                            </label>
                            <input
                                type="text"
                                name="maritalStatus"
                                value={employeeFrom.maritalStatus}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Blood Group
                            </label>
                            <input
                                type="text"
                                name="bloodGroup"
                                value={employeeFrom.bloodGroup}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Current Address
                            </label>
                            <input
                                type="text"
                                name="currentAddress"
                                value={employeeFrom.currentAddress}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Permanent Address
                            </label>
                            <input
                                type="text"
                                name="permanentAddress"
                                value={employeeFrom.permanentAddress}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Emergency Contact Name
                            </label>
                            <input
                                type="text"
                                name="emergencyContactName"
                                value={employeeFrom.emergencyContactName}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Emergency Conatct Number
                            </label>
                            <input
                                type="text"
                                name="emergencyContactNumber"
                                value={employeeFrom.emergencyContactNumber}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Job Title
                            </label>
                            <input
                                type="text"
                                name="jobTitle"
                                value={employeeFrom.jobTitle}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Department
                            </label>
                            <input
                                type="text"
                                name="department"
                                value={employeeFrom.department}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Work Mode
                            </label>
                            <input
                                type="text"
                                name="workMode"
                                value={employeeFrom.workMode}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Employee Type
                            </label>
                            <input
                                type="text"
                                name="employmentType"
                                value={employeeFrom.employmentType}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Employee Status
                            </label>
                            <input
                                type="text"
                                name="employeeStatus"
                                value={employeeFrom.employeeStatus}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Date of Joining
                            </label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                value={employeeFrom.dateOfJoining}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Location
                            </label>
                            <input
                                type="text"
                                name="officeLocation"
                                value={employeeFrom.officeLocation}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Shit
                            </label>
                            <input
                                type="text"
                                name="shiftTiming"
                                value={employeeFrom.shiftTiming}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Performance Rating
                            </label>
                            <input
                                type="text"
                                name="performanceRating"
                                value={employeeFrom.performanceRating}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Appraisal History
                            </label>
                            <input
                                type="text"
                                name="appraisalHistory"
                                value={employeeFrom.appraisalHistory}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Skills
                            </label>
                            <input
                                type="text"
                                name="skills"
                                value={employeeFrom.skills}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Education
                            </label>
                            <input
                                type="text"
                                name="education"
                                value={employeeFrom.education}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Project
                            </label>
                            <input
                                type="text"
                                name="projects"
                                value={employeeFrom.projects}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Language
                            </label>
                            <input
                                type="text"
                                name="languagesKnown"
                                value={employeeFrom.languagesKnown}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Salary
                            </label>
                            <input
                                type="text"
                                name="salary"
                                value={employeeFrom.salary}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Bounce Ammount
                            </label>
                            <input
                                type="text"
                                name="bonusAmount"
                                value={employeeFrom.bonusAmount}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Leave Balance
                            </label>
                            <input
                                type="date"
                                name="leaveBalance"
                                value={employeeFrom.leaveBalance}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Profile
                            </label>
                            <input
                                type="text"
                                name="photoPath"
                                value={employeeFrom.photoPath}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Resume
                            </label>
                            <input
                                type="text"
                                name="resumePath"
                                value={employeeFrom.resumePath}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Aadhar Number
                            </label>
                            <input
                                type="text"
                                name="aadhaarNumber"
                                value={employeeFrom.aadhaarNumber}
                                onChange={changeHandler}
                                placeholder="Frontend Developer"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            />
                        </div> */}
                    </div>

                    {/* Status */}
                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            name="active"
                            value={employeeFrom.active}
                            onChange={changeHandler}
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                            Active Employee
                        </span>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-4 pt-4 border-t">
                        <button
                            type="button"
                            onClick={closePopup}
                            className="px-5 py-2 text-sm rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                        >
                            {employeeId ? "Update Employee" : "Add Employee"}
                        </button>
                    </div>

                </form>
            </div>
        </>
    )


}

export default EmployeeDetails;