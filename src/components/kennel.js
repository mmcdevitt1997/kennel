import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import "./kennel.css"
import AnimalList from './animal/AnimalList';

export default class Kennel extends Component {
    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]
    AnimalsFromAPI = [
        { id: 1, name: "dog" },
        { id: 2, name: "cat" },
        { id: 3, name: "fish" },
        { id: 4, name: "hello" }
    ]


    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.AnimalsFromAPI
    }

    render() {
        return (
            <article>
                 <h2>Locations</h2>
                <LocationList locations={this.state.locations} />
                 <h2>Employees</h2>
                <EmployeeList employees={this.state.employees} />
                <h2>Animal</h2>
                <AnimalList animals={this.state.animals}/>
            </article>
        );
    }
}