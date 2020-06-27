import React from 'react'

// CSS styles
import './styles.css'

function Button(props: any) {
    return (
        <button className="Button" onClick={props.onclick}>{props.children}</button>
    )
}

export default Button