import React from 'react'

import { formatValue } from 'utils/ValueFormatter'

interface RowData {
    class: number,
    interval: number[],
    xi: number,
    fi: number,
    fr: number,
    fac: number,
    facr: number
}

function MainTableRow(rowData: RowData) {

    const parsedInterval =
        formatValue(rowData.interval[0]) + ' |- ' + formatValue(rowData.interval[1])

    const parsedXi = formatValue(rowData.xi)
    const parsedFi = formatValue(rowData.fi)
    const parsedFr = formatValue(rowData.fr) + '%'
    const parsedFac = formatValue(rowData.fac)
    const parsedFacr = formatValue(rowData.facr) + '%'

    const rowLabels = [
        rowData.class,
        parsedInterval,
        parsedXi,
        parsedFi,
        parsedFr,
        parsedFac,
        parsedFacr
    ]

    return (
        <tr className="MainTableRow">
            {
                rowLabels.map(label => (
                    <td key={Math.random()}>{label}</td>
                ))
            }
        </tr>
    )
}

export default MainTableRow