import React from 'react'

class Puppy extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        this.props.history.push('/')
    }

    render() {
        console.log('SinglePuppy Props: ', this.props)
        return (
            <div>
                <h2>Single Puppy</h2>
                <h3>Name: {this.props.name}</h3>
                <img src='https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg' height="300px" width="400px" />
                <button onClick={this.handleClick}>Go Back To Home Page!</button>
            </div>
        )
    }
   
}

export default Puppy;