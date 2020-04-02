import React from 'react';
import Employee from './Employee.js';
import API from '../utils/API';
import FilterForm from './FilterForm.js';
import SortForm from './SortForm.js';

class Directory extends React.Component {
    state= {
        employees: [],
        sort: "",
        filter: ""
    }
    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees = () => {
        API.getUsers()
            .then(res => {
                this.setState({ employees: res.data.results })
                })
            .catch(err => console.log(err));
    }

    handleFilterUpdate = (event) => {
        event.preventDefault();
        console.log(this.state);
        //const name = event.target.name;
        const value = event.target.value;
        const newEmpList = this.state.employees.filter((employee) => (employee.location.state === value) )
        this.setState({
            filter: value,
            employees: newEmpList
        })
    }

    resetFilter = () => {
        this.searchEmployees();
    }

    render() {

        return (
            <main className="container">
                <div className="row">
                    <FilterForm filter={this.state.filter} resetFilter={this.resetFilter} handleFilterUpdate={this.handleFilterUpdate}/>
                    <SortForm sort={this.state.sort} resetSort={this.resetsort} handleSortUpdate={this.handleSortUpdate}/>
                </div>
            <Employee persons={this.state.employees} />
        </main>
        );
    }
    
}

export default Directory;