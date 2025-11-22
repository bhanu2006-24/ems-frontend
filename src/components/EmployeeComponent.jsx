import React, {useState} from 'react';
import {createEmployee} from "../services/EmployeeService.js";
import {useNavigate} from "react-router-dom";

/**
 * EmployeeComponent
 * @returns {React.JSX.Element}
 * @constructor
 */
const EmployeeComponent = () => {

    // State variables to hold the employee details
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    // Hook to navigate between pages
    const navigator = useNavigate();

    // Function to save the employee details and send POST request to the backend
    const saveEmployee = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Create an employee object with the entered details
        const employee = {firstName, lastName, email, phone};
        console.log("Saving employee with below details");
        console.log(employee); // Log the employee object to the console

        // Send POST request to the backend to save the employee
        createEmployee(employee).then((response) => {
            console.log("Employee saved successfully: ", response.data);
            navigator('/employees'); // Navigate back to the list of employees
        }).catch((error) => {
            console.error("Error saving employee: ", error);
        });
    }

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"card col-md-6 offset-md-3 mt-5"}>
                    <div className={"card-header"}>
                        <h2 className={"text-center"}>Add Employee</h2>
                    </div>
                    <div className={"card-body"}>
                        <form>
                            <div className={"form-group mb-2"}>
                                <label className={"form-label"}>First Name</label>
                                <input
                                    type={"text"}
                                    className={"form-control"}
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <label className={"form-label"}>Last Name</label>
                                <input
                                    type={"text"}
                                    className={"form-control"}
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                <label className={"form-label"}>Email</label>
                                <input
                                    type={"text"}
                                    className={"form-control"}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label className={"form-label"}>Phone</label>
                                <input
                                    type={"text"}
                                    className={"form-control"}
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <button type={"submit"} className={"btn btn-success"}
                                    onClick={saveEmployee}>Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeComponent;