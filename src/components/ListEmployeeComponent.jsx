import React from 'react';

/**
 * ListEmployeeComponent
 * @returns {React.JSX.Element}
 * @constructor
 */
const ListEmployeeComponent = () => {
    const placeholderData = [
        {
            "id": 1,
            "firstName": "John",
            "lastName": "Doe",
            "email": "johndoe@gmail.com",
            "phone": "123-456-7890"

        },
        {
            "id": 2,
            "firstName": "Jane",
            "lastName": "Doe",
            "email": "janedoe@gmail.com",
            "phone": "246-810-1214"

        },
        {
            "id": 3,
            "firstName": "Timmy",
            "lastName": "Tough-Knuckles",
            "email": "timmyalpha67@gmail.com",
            "phone": "369-121-5182"

        },
        {
            "id": 4,
            "firstName": "Reisa",
            "lastName": "Uzawa",
            "email": "uzawareisa67@gmail.com",
            "phone": "481-216-2432"

        }
    ];
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
                    placeholderData.map(
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