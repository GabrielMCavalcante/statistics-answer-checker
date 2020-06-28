import React from 'react'

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
        String(rowData.interval[0]).padStart(2, '0') +
        ' |- ' +
        String(rowData.interval[0]).padStart(2, '0')

    const parsedFi = String(rowData.fi).padStart(2, '0')
    const parsedFr = rowData.fr.toFixed(2) + '%'
    const parsedFacr = rowData.facr.toFixed(2) + '%'

    const rowLabels = [
        rowData.class,
        parsedInterval,
        rowData.xi,
        parsedFi,
        parsedFr,
        rowData.fac,
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