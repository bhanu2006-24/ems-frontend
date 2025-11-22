import React, {useEffect, useState} from 'react';
import {listEmployees} from "../services/EmployeeService.js";

/**
 * ListEmployeeComponent
 * @returns {React.JSX.Element}
 * @constructor
 */
const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        listEmployees().then((response) => {
            console.log("Employees fetched successfully: ", response.data);
            setEmployees(response.data)
        }).catch((error) => {
            console.error("Error fetching employees: ", error);
        });
    }, []);
    return (
        <div className={"container"}>
            <h2 className={"text-center"}>List of Employees</h2>
            <table className={"table table-striped table-bordered"}>
                <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
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
                            </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
};

export default ListEmployeeComponent;