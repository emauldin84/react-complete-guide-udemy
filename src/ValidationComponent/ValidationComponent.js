import React from 'react'

export default function ValidationComponent(props) {
    
    let iLength = props.inputLength
    let validation = null
    if (iLength < 5) {
        validation = (
            <p>Text too short</p>
        )
    } else {
        validation = (
            <p>Text long enough</p>
        )
    }

    return (
        <div>
            {validation}
        </div>
    )
}
