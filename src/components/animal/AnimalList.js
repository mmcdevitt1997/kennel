import React, { Component } from 'react'

export default class AnimalList extends Component {
    render() {
        return (
            <section className="animal">
                {
                    this.props.animals.map(animal =>
                        <div key={animal.id}>
                            <p>{animal.name}</p>
                        </div>

                    )
                }
            </section>
        )

    }
}
