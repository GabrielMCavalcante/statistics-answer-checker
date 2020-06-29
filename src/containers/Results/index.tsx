import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// Components
import Option1 from 'components/Option1'
import Option2 from 'components/Option2'

// Containers
import ResultOptions from 'containers/ResultOptions'

// CSS styles
import './styles.css'

function Results(props: any) {
    return (
        <div className="Results">
            <ResultOptions history={props.history}/>
            <div className="ResultScreen">
                <Switch>
                    <Route path="/results/1" component={Option1} />
                    <Route path="/results/2" component={Option2} />
                    {/* <Route path="/results/3" component={Option3} />
                    <Route path="/results/4" component={Option4} /> */}
                    {/* <Redirect to="/results/1" /> */}
                </Switch>
            </div>
        </div>
    )
}

export default Results