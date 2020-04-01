import React from 'react'

const Employee = (props) => {
    console.log(props.persons.length);
    // let employees = [];
    // for (let i = 0; i < props.persons.length; i++) {

    // }
    const employees = props.persons.map((employee) =>
        <div className="col-lg-3 col-md-4 col-sm-12 my-4 mx-4">
            <div key={employee.id} className="card" style={{ width: "18rem" }}>
                <img src={employee.img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{employee.firstName} {employee.lastName}</h5>
                    <p className="card-text">{employee.department}</p>
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