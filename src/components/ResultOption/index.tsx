import React from 'react'

import './styles.css'

function ResultOption(props: { label: number, selected: boolean, selectOpt: Function}) {
    
    const classes = ["ResultOption"]
    if(props.selected) classes.push("Selected")
    
    return (
        <div className={classes.join(' ')} onClick={() => props.selectOpt()}>
            <span>{ props.label }</span>
        </div>
    )
}

export default ResultOption