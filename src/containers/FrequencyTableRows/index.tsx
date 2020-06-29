import React from 'react'

// Components
import FrequencyTableRow from 'components/FrequencyTableRow'

function FrequencyTableRows() {
    const absolute_freq = [6, 5, 5, 4, 2, 5, 4, 4, 5]
    const unique_values = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const rows: JSX.Element[] = []

    for (let i = 0; i < unique_values.length; i++)
        rows.push((
            <FrequencyTableRow
                key={i}
                value={unique_values[i]}
                freq={absolute_freq[i]}
            />
        ))

    return <>{rows}</>
}

export default FrequencyTableRows