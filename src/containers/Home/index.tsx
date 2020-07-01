import React from 'react'
import Papa from 'papaparse'

// Containers
import Data from 'components/Data'

// Components
import Button from 'components/UI/Button'

// Classes
import GeneratedData from './GeneratedData'

function Home(props: any) {

    function parseValues(values: string) {

        const results: string[] = Papa.parse(values).data as unknown[] as string[]
        let parsedRes: any = [[]]
        if(results.length > 1) {
            results.forEach(result => {
                parsedRes[0].push(result[0])
            })
        } else parsedRes = results

        let parsedTable = []
        for (let i = 0; i < parsedRes.length; i++) {
            if (parsedRes[i].length > 1) parsedTable.push(parsedRes[i])
        }

        let allValues = []
        for (let i = 0; i < parsedTable.length; i++) {
            allValues.push(...parsedTable[i])
        }

        while (allValues.indexOf("") !== -1) {
            allValues.splice(allValues.indexOf(""), 1)
        }

        allValues.forEach((value, index) => {
            allValues[index] = parseFloat(value)
        });

        return allValues
    }

    function createTable() {
        const dataEl = document.getElementsByTagName('textarea')[0]
        const dataValues = dataEl.value
        const formattedData = new GeneratedData(parseValues(dataValues))

        const generatedInfo = {
            table: formattedData.table,
            unique_values: Array.from(formattedData.unique_values),
            sturges_k: formattedData.sturges_k,
            class_interval: formattedData.class_interval,
            intervals: formattedData.intervals,
            medium_value: formattedData.medium_value,
            interval_freq: formattedData.interval_freq,
            accumulated_freq: formattedData.accumulated_freq,
            absolute_freq: formattedData.absolute_freq,
            relative_freq: formattedData.relative_freq,
            accumulated_relative_freq: formattedData.accumulated_relative_freq,
            total_amplitude: formattedData.total_amplitude,
            amostral_amplitude: formattedData.amostral_amplitude,
            lines: formattedData.lines,
            columns: formattedData.columns,
            total_values: formattedData.total_values,
            average: formattedData.average,
            median: formattedData.median,
            fashion: formattedData.fashion,
            variance: formattedData.variance,
            standard_deviation: formattedData.standard_deviation,
            variation_coefficient: formattedData.variation_coefficient
        }

        sessionStorage.setItem('generatedInfo', JSON.stringify(generatedInfo))
        props.history.push('/results/1')
    }

    return (
        <div className="Home">
            <header>
                <h1>Statistics Answer Checker</h1>
                <h3>
                    Study basic statistics without
                    losing time checking answers manually
                </h3>
            </header>

            <div className="UserData">
                <h3>Copy and paste your data on the field below</h3>
                <Data />
                <Button onclick={createTable}>Create Table</Button>
                <p>The data has to be separated by commas</p>
                <p>For decimal values, use a dot (.)</p>
            </div>
        </div>
    )
}

export default Home