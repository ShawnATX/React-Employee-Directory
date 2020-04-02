import React from 'react'

const Employee = (props) => {
    console.log(props.persons.length);

    const employees = props.persons.map((employee) =>
        <div key={employee.id.value} className="col-lg-3 col-md-4 col-sm-12 my-4 mx-4">
            <div className="card" style={{ width: "18rem" }}>
                <img src={employee.picture.large} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{employee.name.first} {employee.name.last}</h5>
                    <p className="card-text">Office: {employee.location.city}, {employee.location.state}</p>
                    <p className="card-text">Username: {employee.login.username}</p>
                    <p className="card-text">Email: {employee.email}</p>
                    <p className="card-text">Phone: {employee.phone}</p>
                </div>
            </div>
        </div>
    );
    return (
        <div className="row">
            {employees}
        </div>
    );
}

export default Employee;