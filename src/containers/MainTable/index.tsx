import React from 'react'

import MainTableRows from 'containers/MainTableRows'

// CSS styles
import './styles.css'

function MainTable() {
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
                <MainTableRows />
            </tbody>
        </table>
    )
}

export default MainTable