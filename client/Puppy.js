import React from 'react'

const Puppy = (props) => {
    console.log('props', props)

    return (
        <div>
            <h2>Single Puppy</h2>
            <h3>Name: {props.name}</h3>
            <img src='https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg' height="300px" width="400px" />
        </div>
    )
}

export default Puppy;