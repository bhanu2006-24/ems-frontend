import React, {useState} from 'react';

/**
 * EmployeeComponent
 * @returns {React.JSX.Element}
 * @constructor
 */
const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    // Function to save the employee details and send POST request to the backend
    const saveEmployee = (e) => {
        e.preventDefault();

        const employee = {firstName, lastName, email, phone};
        console.log("Saving employee with below details");
        console.log(employee);

        //TODO - Send POST request to backend
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