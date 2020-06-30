import React from 'react'

// Components
import DataSetTableRow from 'components/DataSetTableRow'

type RowData = {
    table: number[],
    lines: number,
    columns: number
}

function DataSetTableRows(props: {info: RowData}) {
    const table = props.info.table
    const lines = props.info.lines
    const columns = props.info.columns
    const rows: JSX.Element[] = []

    for (let row = 0; row < lines; row++) {
        let td = []
        let v = row
        for (let d = 0; d < columns; d++) {
            td.push(<td key={d}>{table[v] ? String(table[v]).padStart(2, '0') : '-'}</td>)
            v += lines
        }
        rows.push((
            <DataSetTableRow key={row} data={td} />
        ))
    }

    return <>{rows}</>
}

export default DataSetTableRows