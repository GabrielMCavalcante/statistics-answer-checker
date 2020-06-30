import React from 'react'

// Components
import MainTableRow from 'components/MainTableRow'

type Info = {
    classes: number,
    interval: number[][],
    xi: number[],
    fi: number[],
    fr: number[],
    fac: number[],
    facr: number[]
}

type RowData = {
    class: number,
    interval: number[],
    xi: number,
    fi: number,
    fr: number,
    fac: number,
    facr: number
}

function MainTableRows(props: { info: Info }) {
    const totClasses: number[] = []

    for (let i = 1; i <= props.info.classes; i++)
        totClasses.push(i)

    const rows: RowData[] = []

    for (let row = 0; row < props.info.classes; row++) {
        rows.push({ 
            class: totClasses[row], 
            interval: props.info.interval[row], 
            xi: props.info.xi[row], 
            fi: props.info.fi[row], 
            fr: props.info.fr[row], 
            fac: props.info.fac[row], 
            facr: props.info.facr[row]
        })
    }

    return (
        <>
            {
                rows.map(row => (
                    <MainTableRow key={rows.indexOf(row)} {...row} />
                ))
            }
        </>
    )
}

export default MainTableRows