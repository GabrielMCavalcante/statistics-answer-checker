import React from 'react'

// Components
import ExtraInfoTableRow from 'components/ExtraInfoTableRow'

function ExtraInfoTableRows() {

    const rows: JSX.Element[] = []

    const info = [
        { label: 'Total data', value: '40' },
        { label: 'Total data', value: '40' },
        { label: 'Total data', value: '40' },
        { label: 'Total data', value: '40' },
        { label: 'Total data', value: '40' },
        { label: 'Total data', value: '40' },
        { label: 'Total data', value: '40' },
        { label: 'Total data', value: '40' },
        { label: 'Total data', value: '40' },
        { label: 'Total data', value: '40' },
        { label: 'Total data', value: '40' }
    ]

    info.forEach(i => {
        rows.push(<ExtraInfoTableRow label={i.label} value={i.value}/>)
    })

    return <>{ rows }</>
}

export default ExtraInfoTableRows