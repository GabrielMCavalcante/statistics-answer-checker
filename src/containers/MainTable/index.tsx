import React from 'react'

import MainTableRows from 'containers/MainTableRows'

// CSS styles
import './styles.css'

type Info = {
    classes: number,
    interval: number[][],
    xi: number[],
    fi: number[],
    fr: number[],
    fac: number[],
    facr: number[]
}

function MainTable(props: { info: Info }) {
    return (
        <table className="MainTable">
            <tbody>
                <tr className="Header">
                    <th>Classes</th>
                    <th>Data</th>
                    <th>Xi</th>
                    <th>Fi</th>
                    <th>Fr</th>
                    <th>Fac</th>
                    <th>Facr</th>
                </tr>
                <MainTableRows info={props.info}/>
            </tbody>
        </table>
    )
}

export default MainTable