import React from 'react'

// Components
import Button from 'components/UI/Button'

// Containers
import ExtraInfoTable from 'containers/ExtraInfoTable'

// CSS styles
import './styles.css'

function Option4() {
    return (
        <div className="Option4">
            <header>
                <h1>Extra information</h1>
            </header>
            <div className="TableArea">
                <ExtraInfoTable />
            </div>
            <Button>Return to menu</Button>
        </div>
    )
}

export default Option4