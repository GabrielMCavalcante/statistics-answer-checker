import React from 'react'

// Containers
import FrequencyTableRows from 'containers/FrequencyTableRows'

// CSS styles
import './styles.css'

type Info = {
    absolute_freq: number[],
    unique_values: number[]
}

function FrequencyTable(props: { info: Info}) {
    return (
        <table className="FrequencyTable">
            <tbody>
                <tr>
                    <th>Value</th>
                    <th>Frequency</th>
                </tr>
                <FrequencyTableRows info={props.info}/>
            </tbody>
        </table>
    )
}

export default FrequencyTable