import React, { useEffect, useCallback } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// Components
import Option from 'components/Option'

// Containers
import ResultOptions from 'containers/ResultOptions'
import MainTable from 'containers/MainTable'
import DataSetTable from 'containers/DataSetTable'
import FrequencyTable from 'containers/FrequencyTable'
import ExtraInfoTable from 'containers/ExtraInfoTable'

// CSS styles
import './styles.css'

const options: JSX.Element[] = []

const optionsConfig = [
    { title: 'Generated Table', content: <MainTable /> },
    { title: 'Data Set', content: <DataSetTable /> },
    { title: 'Absolute Frequency', content: <FrequencyTable /> },
    { title: 'Extra Information', content: <ExtraInfoTable /> }
]

function Results(props: any) {

    const goBack = useCallback(() => {
        sessionStorage.removeItem('jsonTable')
        props.history.push('/')
    }, []) // eslint-disable-line

    // useEffect(() => {
    //     if (!sessionStorage.getItem('jsonTable')) goBack()
    // }, [goBack])

    optionsConfig.forEach(option => {
        options.push((
            <Option
                title={option.title}
                content={option.content}
                returnToMenu={goBack}
            />
        ))
    })

    return (
        <div className="Results">
            <ResultOptions history={props.history} />
            <div className="ResultScreen">
                <Switch>
                    <Route path="/results/1" render={() => options[0]} />
                    <Route path="/results/2" render={() => options[1]} />
                    <Route path="/results/3" render={() => options[2]} />
                    <Route path="/results/4" render={() => options[3]} />
                    <Redirect to="/results/1" />
                </Switch>
            </div>
        </div>
    )
}

export default Results