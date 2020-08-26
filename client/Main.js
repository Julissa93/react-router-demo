import React, { Component } from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom'
import Puppies from './Puppies'
import Kittens from './Kittens'
import Home from './Home'
import Puppy from './Puppy'
/* 3 MAIN INGREDIENTS: 
1. Router Component - HashRouter (uses the document fragment identifier (#)), BrowserRouter (uses the browser history API)
2. Route component
3. Link component 
*/

export default class Main extends Component {
    render() {
        return (
        <Router>
            <div className='main'>
                <h1>React Router Demo</h1>
                <nav>
                    <Link to='/puppies'>Puppies</Link>
                    <Link to='/kittens'>Kittens</Link>
                    
                </nav>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/puppies' component={Puppies} />
                    <Route path='/kittens' component={Kittens} />
                    {/* 
                        How to pass our own props to a component within <Route />
                        Import Note: We need to use the "render" atribute and pass it a function that will return the component we want to display
                        instead of using the "component" attribute when we want to pass our own props.
                        Also, the default props from <Route /> don't get passed into the components like it did before
                        when we used the component attribute. So, we have the pass those route props via a parameter and send it down as props.
                    */}
                    <Route path ='/puppies/:id' render={(routeProps) => <Puppy name='George' {...routeProps}  />} />
            </div>
        </Router>
        )
    }
}