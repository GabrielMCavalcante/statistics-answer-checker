import React from 'react'

// Components
import Button from 'components/UI/Button'

// CSS styles
import './styles.css'

function Option(props: { title: string, content: JSX.Element, returnToMenu: Function }) {
    return (
        <div className="Option">
            <header>
                <h1>{ props.title }</h1>
            </header>
            <div className="TableArea">
                { props.content }
            </div>
            <Button onclick={props.returnToMenu}>Return to menu</Button>
        </div>
    )
}

export default Option