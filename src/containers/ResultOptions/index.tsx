import React, { useState, useEffect } from 'react'

// Components
import ResultOption from 'components/ResultOption'

// CSS styles
import './styles.css'

const BASE_PATH = '/results/'

function ResultOptions(props: any) {

    const [options, setOptions] = useState([
        { label: 1, selected: true,  path: BASE_PATH + '1' },
        { label: 2, selected: false, path: BASE_PATH + '2' },
        { label: 3, selected: false, path: BASE_PATH + '3' },
        { label: 4, selected: false, path: BASE_PATH + '4' },
    ])

    function selectOptHandler(label: number) {
        props.history.push(BASE_PATH + label)
    }

    useEffect(() => {
        const currentPath: string = props.history.location.pathname
        const label = +currentPath.charAt(currentPath.length - 1)
        const updatedOptions = options.map(option => {
            if (option.label !== label) return { ...option, selected: false }
            else return { ...option, selected: true }
        })

        setOptions(updatedOptions)
    }, [props.history.location.pathname]) // eslint-disable-line

    return (
        <div className="ResultOptions">
            {
                options.map(option => (
                    <ResultOption
                        label={option.label}
                        selected={option.selected}
                        selectOpt={() => selectOptHandler(option.label)}
                        key={option.label}
                    />
                ))
            }
        </div>
    )
}

export default ResultOptions