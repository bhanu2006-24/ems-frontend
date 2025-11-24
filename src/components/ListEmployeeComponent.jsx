import React, { useEffect, useState } from 'react';
import { deleteEmployee, listEmployees } from '../services/EmployeeService.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ConfirmModal from './ConfirmModal.jsx';

function ListEmployeeComponent() {

    // Dummy data for preview (commented out - uncomment if backend is not available)
    // const dummyEmployees = [
    //     { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phone: '555-0101' },
    //     { id: 2, firstName: 'Sarah', lastName: 'Smith', email: 'sarah.smith@example.com', phone: '555-0102' },
    //     { id: 3, firstName: 'Michael', lastName: 'Johnson', email: 'michael.j@example.com', phone: '555-0103' }
    // ];

    // State to hold the list of employees
    const [employees, setEmployees] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [employeeToDelete, setEmployeeToDelete] = useState(null);

    // Hook to navigate between pages
    const navigator = useNavigate();

    // Function to fetch all employees from the backend.
    // Must go before useEffect so ESLint doesn't complain
    function getAllEmployees() {
        listEmployees().then((response) => {
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
    const addNewEmployee = () => {
        navigator('/add-employee')
    }

    // Function to view employee details
    const viewEmployee = (id) => {
        navigator(`/ view - employee / ${id} `);
    }

    // Function to update an employee
    const updateEmployee = (id) => {
        navigator(`/ edit - employee / ${id} `);
    }

    // Open confirmation modal
    const confirmDelete = (id) => {
        const employee = employees.find(emp => emp.id === id);
        setEmployeeToDelete(employee);
        setIsModalOpen(true);
    }

    // Actually delete the employee
    function removeEmployee() {
        if (!employeeToDelete) return;

        const id = employeeToDelete.id;
        console.log("Removing employee with ID: ", id);
        deleteEmployee(id).then((response) => {
            console.log("Employee removed successfully. Status: ", response.status);
            toast.success('Employee deleted successfully!');
            getAllEmployees();
            setIsModalOpen(false); // Close modal on success
            setEmployeeToDelete(null); // Clear employee to delete
        }).catch((error) => {
            console.error("Error removing employee: ", error);
            toast.error('Failed to delete employee');
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
                                            onClick={() => confirmDelete(employee.id)}>Delete
                                        </button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>

            {/* Confirmation Modal */}
            <ConfirmModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={removeEmployee}
                title="Delete Employee"
                message={
                    employeeToDelete
                        ? `Are you sure you want to delete ${employeeToDelete.firstName} ${employeeToDelete.lastName}? This action cannot be undone.`
                        : 'Are you sure you want to delete this employee?'
                }
                confirmText="Delete"
                cancelText="Cancel"
            />
        </div>
    )
}

export default ListEmployeeComponent;