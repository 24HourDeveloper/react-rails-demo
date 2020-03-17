import React from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

const App = () =>{
    return (
        <>
        <Router>
        <nav>
            <h1>NavBar</h1>
            <ul>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </nav>
        
            <Switch>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
        </Router>
        </>
    )
}

const About = () => <div>About</div>

const Contact = () => <div>Contact</div>

export default App;