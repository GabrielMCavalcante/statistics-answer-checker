import React from 'react'

function FrequencyTableRow(props: { freq: number, value: number }) {
    
    const parsedValue = String(props.value).padStart(2, '0')
    const parsedFreq = String(props.freq).padStart(2, '0')

    return (
        <tr>
            <td>{ parsedValue }</td>
            <td>{ parsedFreq }</td>
        </tr>
    )
}

export default FrequencyTableRow