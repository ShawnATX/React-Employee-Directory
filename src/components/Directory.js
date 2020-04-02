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
        const value = event.target.value;
        const newEmpList = this.state.employees.filter((employee) => (employee.location.state === value) )
        this.setState({
            filter: value,
            employees: newEmpList
        })
    }

    handleSortUpdate = (event) => {
        event.preventDefault();
        const value = event.target.value;
        const newEmpList = (this.state.employees.map((el) => el))
        switch (value) {
            //actually sorting on registered date to give an oldest to newest employee sorting
            case "id":
                newEmpList.sort((a, b) => (new Date(a.registered.date).getTime() - new Date(b.registered.date).getTime()));
                break;
            default:
                break;
        }
        this.setState({
            employees: newEmpList,
            sort: value
        })
    }

    resetFilter = () => {
        this.setState({
            filter: ""
        })
        this.searchEmployees();
    }

    //clear sort selection witout 
    resetSort = () => {
        this.setState({
            sort: ""
        })
    }

    render() {
        return (
            <main className="container">
                <div className="row">
                    <FilterForm filter={this.state.filter} resetFilter={this.resetFilter} handleFilterUpdate={this.handleFilterUpdate}/>
                    <SortForm sort={this.state.sort} resetSort={this.resetSort} handleSortUpdate={this.handleSortUpdate}/>
                </div>
            <Employee persons={this.state.employees} />
        </main>
        );
    }
}

export default Directory;