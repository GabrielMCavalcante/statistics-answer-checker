import React from 'react'

// Containers
import DataSetTableRows from 'containers/DataSetTableRows'

// CSS styles
import './styles.css'

type Info = {
    table: number[],
    lines: number,
    columns: number
}

function DataSetTable(props: { info: Info }) {
    return (
        <table className="DataSetTable">
            <tbody>
                <DataSetTableRows info={props.info}/>
            </tbody>
        </table>
    )
}

export default DataSetTable