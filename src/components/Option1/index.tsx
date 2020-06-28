import React from 'react'

// Components
import Button from 'components/UI/Button'

// Containers
import MainTable from 'containers/MainTable'

// CSS styles
import './styles.css'

function Option1() {
    return (
        <div className="Option1">
            <header>
                <h1>Generated table</h1>
            </header>
            <div className="TableArea">
                <MainTable />
            </div>
            <Button>Return to menu</Button>
        </div>
    )
}

export default Option1