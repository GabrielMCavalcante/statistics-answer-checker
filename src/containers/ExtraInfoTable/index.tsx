import React from 'react'

// Containers
import ExtraInfoTableRows from 'containers/ExtraInfoTableRows'

// CSS styles
import './styles.css'

type Info = {
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

function ExtraInfoTable(props: { info: Info }) {
    return (
        <table className="ExtraInfoTable">
            <tbody>
                <ExtraInfoTableRows info={props.info}/>
            </tbody>
        </table>
    )
}

export default ExtraInfoTable