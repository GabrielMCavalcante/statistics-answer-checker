import React from 'react'

// Containers
import ExtraInfoTableRows from 'containers/ExtraInfoTableRows'

// CSS styles
import './styles.css' 

function ExtraInfoTable() {
    return (
        <table className="ExtraInfoTable">
            <ExtraInfoTableRows />
        </table>
    )
}

export default ExtraInfoTable