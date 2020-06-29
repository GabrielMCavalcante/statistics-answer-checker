import React from 'react'

// Components
import DataSetTableRow from 'components/DataSetTableRow'

function DataSetTableRows() {
    const table = [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 9]
    const lines = 5
    const columns = 8
    const rows: JSX.Element[] = []

    for (let row = 0; row < lines; row++) {
        let td = []
        let v = row
        for (let d = 0; d < columns; d++) {
            td.push(<td>{table[v] ? String(table[v]).padStart(2, '0') : '-'}</td>)
            v += lines
        }
        rows.push((
            <DataSetTableRow data={td} />
        ))
    }

    return <>{rows}</>
}

export default DataSetTableRows