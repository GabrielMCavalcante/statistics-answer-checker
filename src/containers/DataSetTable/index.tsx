import React from 'react'

// Containers
import DataSetTableRows from 'containers/DataSetTableRows'

// CSS styles
import './styles.css'

function DataSetTable() {
    return (
        <table className="DataSetTable">
            <DataSetTableRows />
        </table>
    )
}

export default DataSetTable