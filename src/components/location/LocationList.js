import React, { Component } from 'react'

export default class locationList extends Component{
    render(){
        return (
            <section className="locations">
            {
             this.props.locations.map(location =>
                <div key={location.id}>

                <p>{location.name}</p>
                </div>
             )
            }
            </section>
        )
    }
}