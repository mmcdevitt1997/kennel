import React, { Component } from 'react'

export default class OwnersList extends Component{
    render(){
        return (
            <section className="owner">
            {
             this.props.owners.map(owners =>
                <div key={owners.id}>
                <p>{owners.name}</p>
                <p>{owners.phoneNumber}</p>
                </div>
             )
            }
            </section>
        )
    }
}