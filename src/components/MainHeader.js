import React from 'react'
import '../styles/mainHeader.css'
import UnderLine from '../components/UnderLine'
function MainHeader(props) {
    return (
        <>
        <h4 className="head">
            {props.children}
        </h4>
        <UnderLine/>
        </>
    )
}

export default MainHeader;
