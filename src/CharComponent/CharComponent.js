import React from 'react'
import './CharComponent.css'

export default function CharComponent(props) {
    return (
        <div >
            <p className='charComponent' onClick={props.click} >{props.char}</p>
        </div>
    )
}
