import React from 'react'
import { formatValue } from 'utils/ValueFormatter'

function ExtraInfoTableRow(props: { label: string, value: number | number[] }) {

    const arr = typeof props.value === 'object' ? [...props.value] : []
    const length = arr.length

    const parsedValue = typeof props.value === 'number'
        ? formatValue(parseFloat(props.value.toFixed(2)))
        : [...props.value].map((v, i) => { 
            return String(formatValue(parseFloat(v.toFixed(2)))) + (i !== length - 1 ? (arr[i + 2] ? ', ' : ' & ') : '')
        }).join('')

    return (
        <tr>
            <td>{props.label}</td>
            <td>{parsedValue}</td>
        </tr>
    )
}

export default ExtraInfoTableRow