import React from 'react'

// Containers
import Data from 'components/Data'

// Components
import Button from 'components/UI/Button'

function Home() {

    function createTable() {
        const dataEl = document.getElementsByTagName('textarea')[0]
        const dataValues = dataEl.value.split(',') 
        console.log('createTable with data: ', dataValues)
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
                <p>The data has to be separated by commas</p>
                <p>For decimal values, use a dot (.)</p>
            </div>
            <Button onclick={createTable}>Create Table</Button>
        </div>
    )
}

export default Home