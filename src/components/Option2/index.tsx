import React from 'react'

// Components
import Button from 'components/UI/Button'

// Containers
import DataSetTable from 'containers/DataSetTable'

// CSS styles
import './styles.css'

function Option2() {
    return (
        <div className="Option2">
            <header>
                <h1>Data set</h1>
            </header>
            <div className="TableArea">
                <DataSetTable />
            </div>
            <Button>Return to menu</Button>
        </div>
    )
}

export default Option2