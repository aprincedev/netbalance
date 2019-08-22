import React from 'react'
import './errormsg.scss'

export default function ErrorMsg(props) {
    return (
        <div className="errorMsg">
            <p><b>{props.type}:</b> &nbsp; {props.message}</p>
        </div>
    )
}
