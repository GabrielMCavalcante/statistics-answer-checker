import React from 'react'

// Components
import Button from 'components/UI/Button'

// Containers
import FrequencyTable from 'containers/FrequencyTable'

// CSS styles
import './styles.css'

function Option3() {
    return (
        <div className="Option3">
            <header>
                <h1>Absolute frequency table</h1>
            </header>
            <div className="TableArea">
                <FrequencyTable />
            </div>
            <Button>Return to menu</Button>
        </div>
    )
}

export default Option3