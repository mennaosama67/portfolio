import React from 'react'
import '../styles/button.css'
function Button(props) {
    return (
        <div className="btn">
            {props.children}
        </div>
    )
}

export default Button
