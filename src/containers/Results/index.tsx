import React, { useState, useEffect, useCallback } from 'react'
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

// Interfaces
import GeneratedData from 'containers/Home/GeneratedData/interface'

type OptionsConfig = { title: string, content: JSX.Element }[]

function Results(props: any) {

    const [info, setInfo] = useState<GeneratedData>()
    const [optionsConfig, setOptionsConfig] = useState<OptionsConfig>()
    const [options, setOptions] = useState<JSX.Element[]>()

    const goBack = useCallback(() => {
        sessionStorage.removeItem('generatedInfo')
        props.history.push('/')
    }, []) // eslint-disable-line

    useEffect(() => {
        if (!sessionStorage.getItem('generatedInfo')) goBack()
        else setInfo(JSON.parse(sessionStorage.getItem('generatedInfo')!))
    }, []) // eslint-disable-line

    useEffect(() => {
        if (info) {
            const mainTableInfo = {
                classes: info.sturges_k,
                interval: info.intervals,
                xi: info.medium_value,
                fi: info.interval_freq,
                fr: info.relative_freq,
                fac: info.accumulated_freq,
                facr: info.accumulated_relative_freq
            }

            setOptionsConfig([
                { title: 'Generated Table', content: <MainTable info={mainTableInfo} /> },
                { title: 'Data Set', content: <DataSetTable /> },
                { title: 'Absolute Frequency', content: <FrequencyTable /> },
                { title: 'Extra Information', content: <ExtraInfoTable /> }
            ])
        }
    }, [info])

    useEffect(() => {
        if (optionsConfig) {
            const initOptions: JSX.Element[] = []
            optionsConfig.forEach(option => {
                initOptions.push((
                    <Option
                        title={option.title}
                        content={option.content}
                        returnToMenu={goBack}
                    />
                ))
            })
            setOptions(initOptions)
        }
    }, [optionsConfig]) // eslint-disable-line

    return (
        <div className="Results">
            <ResultOptions history={props.history} />
            <div className="ResultScreen">
                <Switch>
                    <Route path="/results/1" render={() => options && options[0]} />
                    <Route path="/results/2" render={() => options && options[1]} />
                    <Route path="/results/3" render={() => options && options[2]} />
                    <Route path="/results/4" render={() => options && options[3]} />
                    <Redirect to="/results/1" />
                </Switch>
            </div>
        </div>
    )
}

export default Results