import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEmployee, deleteEmployee } from '../services/EmployeeService.js';

const EmployeeDetailsComponent = () => {
    const { id } = useParams();
    const navigator = useNavigate();
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            getEmployee(id)
                .then((response) => {
                    setEmployee(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching employee:", error);
                    setLoading(false);
                });
        }
    }, [id]);

    function handleDelete() {
        if (window.confirm('Are you sure you want to delete this employee?')) {
            deleteEmployee(id)
                .then(() => {
                    navigator('/employees');
                })
                .catch((error) => {
                    console.error("Error deleting employee:", error);
                });
        }
    }

    if (loading) {
        return <div className="container"><h3>Loading...</h3></div>;
    }

    if (!employee) {
        return (
            <div className="container">
                <h3>Employee Not Found</h3>
                <button className="btn btn-primary" onClick={() => navigator('/employees')}>
                    Back to Employee List
                </button>
            </div>
        );
    }

    return (
        <div className="container">
            <h2 className="text-center">Employee Details</h2>
            <div className="card col-md-6 offset-md-3">
                <div className="card-body">
                    <div className="row mb-3">
                        <label className="col-md-4"><strong>ID:</strong></label>
                        <div className="col-md-8">{employee.id}</div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-md-4"><strong>First Name:</strong></label>
                        <div className="col-md-8">{employee.firstName}</div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-md-4"><strong>Last Name:</strong></label>
                        <div className="col-md-8">{employee.lastName}</div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-md-4"><strong>Email:</strong></label>
                        <div className="col-md-8">{employee.email}</div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-md-4"><strong>Phone:</strong></label>
                        <div className="col-md-8">{employee.phone}</div>
                    </div>
                    <div className="mt-4">
                        <button className="btn btn-info me-2"
                            onClick={() => navigator(`/edit-employee/${employee.id}`)}>
                            Edit
                        </button>
                        <button className="btn btn-danger me-2"
                            onClick={handleDelete}>
                            Delete
                        </button>
                        <button className="btn btn-secondary"
                            onClick={() => navigator('/employees')}>
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetailsComponent;
