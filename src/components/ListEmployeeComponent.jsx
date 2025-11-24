import React, { useEffect, useState } from 'react';
import { deleteEmployee, listEmployees } from "../services/EmployeeService.js";
import { useNavigate } from "react-router-dom";

/**
 * ListEmployeeComponent
 * @returns {React.JSX.Element}
 * @constructor
 */
const ListEmployeeComponent = () => {

    // Dummy employees for testing
    const dummyEmployees = [
        { id: 1, firstName: "John", lastName: "Doe", email: "john.doe@example.com", phone: "555-0101" },
        { id: 2, firstName: "Sarah", lastName: "Smith", email: "sarah.smith@example.com", phone: "555-0102" },
        { id: 3, firstName: "Michael", lastName: "Johnson", email: "michael.j@example.com", phone: "555-0103" }
    ];

    // State to hold the list of employees
    const [employees, setEmployees] = useState(dummyEmployees);

    // Hook to navigate between pages
    const navigator = useNavigate();

    // Function to fetch all employees from the backend.
    // Must go before useEffect so ESLint doesn't complain
    function getAllEmployees() {
        listEmployees().then((response) => {
            console.log("Employees fetched successfully: ", response.data);
            setEmployees(response.data)
        }).catch((error) => {
            console.error("Error fetching employees: ", error);
            // Keep dummy data if backend fails
        });
    }

    // Fetch employees when the component mounts
    useEffect(() => {
        getAllEmployees();
    }, []);

    // Function to add a new employee
    function addNewEmployee() {
        navigator('/add-employee'); // Navigate to the add employee page
    }

    // Function to view employee details
    function viewEmployee(id) {
        navigator(`/view-employee/${id}`);
    }

    // Function to update an employee
    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`);
    }

    function removeEmployee(id) {
        console.log("Removing employee with ID: ", id);
        deleteEmployee(id).then((response) => {
            console.log("Employee removed successfully. Status: ", response.status);
            getAllEmployees();
        }).catch((error) => {
            console.error("Error removing employee: ", error);
        });
    }

    return (
        <div className={"container"}>
            <h2 className={"text-center"}>List of Employees</h2>
            <button className={"btn btn-primary mb-2"} onClick={addNewEmployee}>
                Add Employee
            </button>
            <table className={"table table-striped table-bordered"}>
                <thead>
                    <tr>
                        <th style={{ width: '10%' }}>Employee ID</th>
                        <th style={{ width: '15%' }}>First Name</th>
                        <th style={{ width: '15%' }}>Last Name</th>
                        <th style={{ width: '25%' }}>Email</th>
                        <th style={{ width: '15%' }}>Phone</th>
                        <th style={{ width: '20%' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(
                            (employee) =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td style={{ wordBreak: 'break-word' }}>{employee.email}</td>
                                    <td>{employee.phone}</td>
                                    <td>
                                        <button className={"btn btn-info btn-sm me-1"}
                                            onClick={() => viewEmployee(employee.id)}>View
                                        </button>
                                        <button className={"btn btn-warning btn-sm me-1"}
                                            onClick={() => updateEmployee(employee.id)}>Edit
                                        </button>
                                        <button className={"btn btn-danger btn-sm"}
                                            onClick={() => removeEmployee(employee.id)}>Delete
                                        </button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListEmployeeComponent;