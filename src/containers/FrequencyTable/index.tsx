import React from 'react'

// Containers
import FrequencyTableRows from 'containers/FrequencyTableRows'

// CSS styles
import './styles.css'

function FrequencyTable() {
    return (
        <table className="FrequencyTable">
            <tr>
                <th>Value</th>
                <th>Frequency</th>
            </tr>
            <FrequencyTableRows />
        </table>
    )
}

export default FrequencyTable