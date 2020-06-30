import React from 'react'

// Components
import FrequencyTableRow from 'components/FrequencyTableRow'

type RowData = {
    absolute_freq: number[],
    unique_values: number[]
}

function FrequencyTableRows(props: { info: RowData }) {
    const absolute_freq = props.info.absolute_freq
    const unique_values = props.info.unique_values

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