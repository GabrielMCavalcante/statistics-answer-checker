import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'

// Components
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home}/>
        {/* <Route path="/results" component={Results}/> */}
        <Redirect to="/"/>
      </Switch>
    </div>
  )
}

export default App