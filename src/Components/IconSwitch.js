import React from "react"

export default function IconSwitch (props) {
    return <div className={"icon-switch-btn material-icons"} onClick={props.onSwitch}>{props.icon}
    </div>
} 