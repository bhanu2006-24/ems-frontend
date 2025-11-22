import React, {useEffect, useState} from 'react';
import {deleteEmployee, listEmployees} from "../services/EmployeeService.js";
import {useNavigate} from "react-router-dom";

/**
 * ListEmployeeComponent
 * @returns {React.JSX.Element}
 * @constructor
 */
const ListEmployeeComponent = () => {

    // State to hold the list of employees
    const [employees, setEmployees] = useState([]);

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
                    <th>Employee ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
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
                                <td>{employee.email}</td>
                                <td>{employee.phone}</td>
                                <td>
                                    <button className={"btn btn-info"}
                                            onClick={() => updateEmployee(employee.id)}>Update
                                    </button>
                                    <button className={"btn btn-danger"}
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