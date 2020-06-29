import React from 'react'

function ExtraInfoTableRow(props: { label: string, value: string }) {
    return (
        <tr>
            <td>{ props.label }</td>
            <td>{ props.value }</td>
        </tr>
    )
}

export default ExtraInfoTableRow