import React from 'react'

// Components
import ExtraInfoTableRow from 'components/ExtraInfoTableRow'

type RowData = {
    [key: string]: any,
    total_values: number,
    total_amplitude: number,
    amostral_amplitude: number,
    classes: number,
    class_interval: number,
    average: number,
    median: number,
    fashion: number[],
    variance: number,
    standard_deviation: number,
    variation_coefficient: number
}

function ExtraInfoTableRows(props: { info: RowData }) {

    const rows: JSX.Element[] = []

    function formatLabel(label: string) {
        const capitalizedLabel =
            label.charAt(0).toLocaleUpperCase() + label.slice(1, label.length)
        let parsedLabel: string[] = []
        capitalizedLabel.split('').forEach((char, index) => {
            if (char !== '_') {
                if (capitalizedLabel.charAt(index - 1) === '_')
                    parsedLabel.push(char.toLocaleUpperCase())
                else parsedLabel.push(char)
            }
            else parsedLabel.push(' ')
        })
        return parsedLabel.join('')
    }

    const info: { label: string, value: number | number[] }[] = []
    Object.keys(props.info).forEach(key => {
        info.push({ label: formatLabel(key), value: props.info[key] })
    })

    info.forEach(i => {
        rows.push((
            <ExtraInfoTableRow
                key={info.indexOf(i)}
                label={i.label}
                value={i.value}
            />
        ))
    })

    return <>{rows}</>
}

export default ExtraInfoTableRows