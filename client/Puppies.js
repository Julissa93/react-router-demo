import React from 'react';

class Puppies extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {    
        this.props.history.push('/')
        //this.props.history.goBack()
        //this.props.history.goForward()
    }

    render() {
        return (
            <div>
              <h3>This is the puppies component!</h3>
              <img
                src='https://media-cdn.tripadvisor.com/media/photo-s/17/9e/52/1d/a-couple-of-friendly.jpg'
                height='300px'
                width='400px'
              />
              <br />
              <button onClick={this.handleClick}> Go back to Home Page! </button>
            </div>
          );
    }
  
};

export default Puppies;
