import React from 'react'

function ExtraInfoTableRow(props: { label: string, value: number | number[] }) {

    const parsedValue = typeof props.value === 'number'
        ? parseFloat(props.value.toFixed(2))
        : [...props.value].map((v, i) => { 
            return String(parseFloat(v.toFixed(2))) + ', '
        }).join('')

    return (
        <tr>
            <td>{props.label}</td>
            <td>{parsedValue}</td>
        </tr>
    )
}

export default ExtraInfoTableRow