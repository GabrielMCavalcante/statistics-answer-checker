import React from 'react'

// Containers
import ExtraInfoTableRows from 'containers/ExtraInfoTableRows'

// CSS styles
import './styles.css'

function ExtraInfoTable() {
    return (
        <table className="ExtraInfoTable">
            <tbody>
                <ExtraInfoTableRows />
            </tbody>
        </table>
    )
}

export default ExtraInfoTable